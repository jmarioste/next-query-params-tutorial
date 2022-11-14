import type { NextApiRequest, NextApiResponse } from "next";
import { PostPageQuery } from "pages/posts";

interface MyRequest extends NextApiRequest {
  query: PostPageQuery;
}

export default function handler(req: MyRequest, res: NextApiResponse) {
  const query = req.query;

  res.status(200).json({ name: "John Doe" });
}
