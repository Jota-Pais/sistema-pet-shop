import { Router } from "express";
import { putAnimaisController } from "../controllers/put-animais.controller";

const router = Router();
router.put('/:id', putAnimaisController); 

export default router;