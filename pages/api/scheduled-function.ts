import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Executing scheduled function`);
  // your code here

  res.end();
};

export const config = {
  type: "experimental-scheduled",
  schedule: "*/5 * * * *",
};
