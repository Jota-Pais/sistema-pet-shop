import { Router } from "express";
import { putServicoController } from "../controllers/put-servico.controller";

const router = Router();
router.put('/:id', putServicoController); 

export default router;