import type { Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  // if you have a dynamic route, you can access the slug with context.params (https://docs.netlify.com/functions/get-started/?fn-language=ts#route-requests)
  const slug = context.params.slug;
  // if your request has a body, you can access it with request.json() (https://developer.mozilla.org/en-US/docs/Web/API/Request/json)
  const body = await request.json();

  console.log(`Processing ${JSON.stringify(body)} for ${slug}`);

  console.time("Processing time");

  // simulating some long work
  await new Promise((resolve) => setTimeout(resolve, 30_000));

  console.timeEnd("Processing time");
};

export const config = {
  path: "/api/:slug/background-function",
};
