import { Router } from "express";
import { postAnimaisController } from "../controllers/post-animais.controller";

const router = Router();
router.post('/', postAnimaisController); 

export default router;