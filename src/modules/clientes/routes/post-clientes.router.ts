import { Router } from "express";
import { postClientesController } from "../controllers/post-clientes.controller";

const router = Router();
router.post('/', postClientesController); 

export default router;