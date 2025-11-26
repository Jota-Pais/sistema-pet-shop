import { Router } from "express";
import { getAnimaisController } from "../controllers/get-animais.controller";

const router = Router();
router.get('/', getAnimaisController); 

export default router;