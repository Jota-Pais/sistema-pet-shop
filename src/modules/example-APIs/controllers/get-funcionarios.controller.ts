import { Request, Response } from "express";


export const getFuncionariosController = (req: Request, res: Response) => {
    return res.status(200).json({ message: "teste" });
}