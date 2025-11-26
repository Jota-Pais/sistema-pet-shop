import { Router } from "express";
import { deleteClientesController } from "../controllers/delete-clientes.controller";

const router = Router();
router.delete('/:id', deleteClientesController); 

export default router;