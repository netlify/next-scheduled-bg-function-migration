// It's important for Netlify background function to work correctly, the file or directory needs to end with `-background` suffix.
// https://docs.netlify.com/functions/background-functions/#create-background-functions

import type { Context, Config } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  // if you have a dynamic route, you can access the slug with context.params (https://docs.netlify.com/functions/get-started/?fn-language=ts#route-requests)
  const slug = context.params.slug;
  // if your request has a body:
  //  - JSON: you can access it with request.json()(https://developer.mozilla.org/en-US/docs/Web/API/Request/json)
  //  - plain text: you can access it with request.text()(https://developer.mozilla.org/en-US/docs/Web/API/Request/text)
  //  - FormData: : you can access it with request.formData()(https://developer.mozilla.org/en-US/docs/Web/API/Request/formData)
  //  - ArrayBuffer: you can access it with request.arrayBuffer()(https://developer.mozilla.org/en-US/docs/Web/API/Request/arrayBuffer)
  const body = await request.json();

  console.log(`Processing ${JSON.stringify(body)} for ${slug}`);

  console.time("Processing time");

  // simulating some long work
  await new Promise((resolve) => setTimeout(resolve, 30_000));

  console.timeEnd("Processing time");

  // if you require access to Next.js APIs, you can invoke Next.js API Route
  // optionally passing parameters through query parameters or body
  // you might need to add `basePath` in front of `/api` if you use
  // basePath feature in Next.js
  // note that Next API functions will not have extended execution time like background would have
  // so you might need to shard the work and trigger multiple separate smaller requests so that
  // Next.js can handle them in time
  await fetch(new URL("/api/next-api-route", request.url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pathsToRevalidate: ["/foo", "/bar"],
    }),
  });
};

export const config: Config = {
  // Moving to Netlify functions loses routing setup from Next.js API Route and we need to define it
  // If you are using Next Runtime V5 you can define it via function's config.path.
  // If you are using Next Runtime V4 you would need to add rewrite in netlify.toml or invoke
  // the function with `/.netlify/functions/<name-of-background-function>` url.
  path: "/api/:slug/background-function",
};
