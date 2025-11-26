import { Router } from "express";
import { getClientesController } from "../controllers/get-clientes.controller";

const router = Router();
router.get('/', getClientesController); 

export default router;