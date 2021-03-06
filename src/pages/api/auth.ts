import { Request, Response } from "express";
import { login } from '@/backend/auth/user-login';

export default async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const response = await login({ email, password });
        return res
            .status(200)
            .send({ status: true, ...response });
    } catch (error) {
        return res
            .status(500)
            .send({ status: false });
    }
}