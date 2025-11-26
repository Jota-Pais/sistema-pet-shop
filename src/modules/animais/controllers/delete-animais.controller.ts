import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteAnimaisController = async (req: Request, res: Response) => {
  try {
    const response = await prisma.animal.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
