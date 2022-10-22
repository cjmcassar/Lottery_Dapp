// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// listen for POST request
	if (req.method === "POST") {
		// process POST request and send response
		res.status(200).json({ name: "John Doe" });
	}
	res.status(200).json({ name: "John Doe" });
}
