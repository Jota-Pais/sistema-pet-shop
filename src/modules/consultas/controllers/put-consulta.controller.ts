import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const putConsultaController = async (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const data = req.body;
    
  try {
    const response = await prisma.consulta.update({
      where: {
        id: id,
      },
      data: data
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
