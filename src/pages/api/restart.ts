import { Request, Response } from "express"
import { restartLoad } from '../../backend'

export default async (req: Request, res: Response) => {
    const response = await restartLoad();
    console.log(response);
    return res
        .status(200)
        .send(response);
}