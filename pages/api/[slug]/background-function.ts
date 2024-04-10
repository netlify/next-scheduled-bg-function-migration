import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if you have a dynamic route, you can access the slug with req.query (https://nextjs.org/docs/pages/building-your-application/routing/api-routes#dynamic-api-routes)
  const slug = req.query.slug;
  // if your request has a body, you can access it with req.body (https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers)
  const body = req.body;

  console.log(`Processing ${JSON.stringify(body)} for ${slug}`);

  console.time("Processing time");

  // simulating some long work
  await new Promise((resolve) => setTimeout(resolve, 30_000));

  console.timeEnd("Processing time");

  res.end();
};

export const config = {
  type: "experimental-background",
};
