// src/routes/veterinario.routes.ts
import { Router } from "express";
import { deleteVeterinarioController } from "../controllers/delete-veterinario.controller";

const router = Router();
router.delete('/:id', deleteVeterinarioController); 

export default router;