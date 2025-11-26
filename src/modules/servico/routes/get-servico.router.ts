import { Router } from "express";
import { getServicoController } from "../controllers/get-servico.controller";

const router = Router();
router.get('/', getServicoController); 

export default router;