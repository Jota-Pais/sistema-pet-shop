import { Router } from "express";
import { putConsultaController } from "../controllers/put-consulta.controller";

const router = Router();
router.put('/:id', putConsultaController); 

export default router;