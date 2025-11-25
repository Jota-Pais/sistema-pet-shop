// src/routes/clientes.routes.ts
import { Router } from "express";
import { putClientesController } from "../controllers/put-clientes.controller";

const router = Router();
router.put('/:id', putClientesController); 

export default router;