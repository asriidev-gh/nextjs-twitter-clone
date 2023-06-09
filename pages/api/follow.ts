import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
	console.log('req.body2: ',req.body);
	console.log('req.headers: ',req.query);
	
    const { userId } = req.method === 'POST' ? req.body : req.query;

    const { currentUser } = await serverAuth(req, res);
	console.log('userId userId: ',userId);

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID');
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId || currentUser.id
      }
    });

    if (!user) {
      throw new Error('Invalid ID');
    }

    let updatedFollowingIds = [...(user.followingIds || [])];

    if (req.method === 'POST') {
      updatedFollowingIds.push(userId);

      // NOTIFICATION PART START
      try {
        await prisma.notification.create({
          data: {
            body: 'Someone followed you!',
            userId,
          },
        });

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            hasNotification: true,
          }
        });
      } catch (error) {
        console.log(error);
      }
      // NOTIFICATION PART END
      
    }

    if (req.method === 'DELETE') {
      updatedFollowingIds = updatedFollowingIds.filter((followingId) => followingId !== userId);
    }

	console.log('updatedFollowingIds: ',updatedFollowingIds)

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        followingIds: updatedFollowingIds
      }
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}