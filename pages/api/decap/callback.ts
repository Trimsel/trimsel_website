import type { NextApiRequest, NextApiResponse } from "next";

export default function decapCallback(_req: NextApiRequest, res: NextApiResponse) {
  res
    .status(501)
    .json({ error: "Decap OAuth callback is not configured for this environment." });
}
