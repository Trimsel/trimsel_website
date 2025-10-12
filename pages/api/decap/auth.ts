import type { NextApiRequest, NextApiResponse } from "next";

export default function decapAuth(_req: NextApiRequest, res: NextApiResponse) {
  res
    .status(501)
    .json({ error: "Decap OAuth provider is not configured for this environment." });
}
