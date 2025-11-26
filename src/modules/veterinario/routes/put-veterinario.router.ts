// src/routes/veterinario.routes.ts
import { Router } from "express";
import { putVeterinarioController } from "../controllers/put-veterinario.controller";

const router = Router();
router.put('/:id', putVeterinarioController); 

export default router;