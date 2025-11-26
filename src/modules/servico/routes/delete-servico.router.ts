import { Router } from "express";
import { deleteServicoController } from "../controllers/delete-servico.controller";

const router = Router();
router.delete('/:id', deleteServicoController); 

export default router;