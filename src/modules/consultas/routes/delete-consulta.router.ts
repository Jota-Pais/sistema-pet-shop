import { Router } from "express";
import { deleteConsultaController } from "../controllers/delete-consulta.controller";

const router = Router();
router.delete('/:id', deleteConsultaController); 

export default router;