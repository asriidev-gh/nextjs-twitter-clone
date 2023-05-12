This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# STEPS
1.) remove unncessary files
2.) npm install -D tailwindcss postcss autoprefixer
3.) if not available yet run:
 	npx tailwindcss init -p
	this will genereate tailwind.config.js and postcss.config.js
	then add 
		*./app/**/*.{js, ts, jsx, tsx}
		*./pages/**/*.{js, ts, jsx, tsx}
		*./component/**/*.{js, ts, jsx, tsx}

	in content area of tailwind.config.js
4.) npm install react-icons
5.) npm install zustand (global state management library)
6.) npm install -D prisma
	npx prisma init
	npx prisma push (after creating model in prisma schema)
7.) npm install @prisma/client
8.) create new folder "libs" in the root folder
	create new file "prismadb.ts" under libs
	
9.) create new file [...nextauth].ts under pages/api/auth
	npm install bcrypt
	npm install -D @types/bcrypt
	npm install next-auth
	npm install @next-auth/prisma-adapter
10.) npm install swr
	 npm install axios
	 npm install react-hot-toast