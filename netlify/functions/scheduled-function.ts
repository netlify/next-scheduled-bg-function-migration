import type { Config } from "@netlify/functions";

export default async (request: Request) => {
  console.log(`Executing scheduled function`);
  // your code here

  // if you require access to Next.js APIs, you can invoke Next.js API Route
  // optionally passing parameters through query parameters or body
  // you might need to add `basePath` in front of `/api` if you use
  // basePath feature in Next.js
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
  schedule: "*/5 * * * *",
};
