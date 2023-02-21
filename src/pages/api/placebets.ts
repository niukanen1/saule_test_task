import type { NextApiRequest, NextApiResponse } from "next";



export type Response = {message: string, success: boolean, error: boolean}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        const status = randomStatus(); 
        console.log(req.body);
        if (status == 200) { 
            return res.status(status).json({message: "Successfully placed bets", success: true, error: false})
        }
        if (status == 403) { 
            return res.status(status).json({message: "Something went really wrong, please try again", success: false, error: true})
        }
    }
}

function randomStatus() { 
    const statuses = [200, 403];
    return statuses[Math.floor(Math.random()*statuses.length)]
} 