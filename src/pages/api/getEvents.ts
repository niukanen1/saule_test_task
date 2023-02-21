// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export type Outcome = {
    id: string;
	title: string;
	coefficient: string;
};
export type Event = {
    id: string
	title: string;
	outcome: Outcome[] | Outcome;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const jsonDirectory = path.join(process.cwd(), "json");
    const fileContent = await fs.readFile(jsonDirectory + "/events.json", 'utf8'); 
	res.status(200).json(JSON.parse(fileContent));
}


function randomStatus() { 
    const arr = [200, 403, 204];
    return 200
} 