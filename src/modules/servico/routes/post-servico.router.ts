import { Router } from "express";
import { postServicoController } from "../controllers/post-servico.controller";

const router = Router();
router.post('/', postServicoController); 

export default router;