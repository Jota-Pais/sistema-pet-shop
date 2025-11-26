import { Router } from "express";
import { deleteAnimaisController } from "../controllers/delete-animais.controller";

const router = Router();
router.delete('/:id', deleteAnimaisController); 

export default router;