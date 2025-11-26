// src/routes/veterinario.routes.ts
import { Router } from "express";
import { getVeterinarioController } from "../controllers/get-veterinario.controller";

const router = Router();
router.get('/', getVeterinarioController); 

export default router;