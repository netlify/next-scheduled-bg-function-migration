import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // function that has access to Next.js APIs

  // in this example we are invalidating multiple paths passed from
  // Netlify background or scheduled function
  for (const pathToRevalidate of req.body.pathsToRevalidate) {
    res.revalidate(pathToRevalidate);
  }

  res.end();
};
