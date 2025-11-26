import { Router } from "express";
import { postConsultaController } from "../controllers/post-consulta.controller";

const router = Router();
router.post('/', postConsultaController); 

export default router;