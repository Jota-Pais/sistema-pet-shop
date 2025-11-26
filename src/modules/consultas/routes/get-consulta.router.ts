import { Router } from "express";
import { getConsultaController } from "../controllers/get-consulta.controller";

const router = Router();
router.get('/', getConsultaController); 

export default router;