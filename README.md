## Intro

So this was my very first NEXT.JS project, a wedding invitatio website (which we did not end up using due to covid), but it was good practice
The site is very dynamic,most config is done in the database. Each user (invite) receives a unique ID, this ID gets passed through a query string, which makes each URL unique for each invite.
If the URL ID does not match to one in the database, then the user will be redirected to a 404 page.

Each invite can be customised with a personal message ect. 
Theres also a family member section that shows info for only family members about the wedding. 
The RSVP page is also dynamic, with built in cut off times ect.


Database used: postgres (hosted on a free elephantSQL package)
Next.JS hosted at Vercel
Images hosted on cloudinary




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
