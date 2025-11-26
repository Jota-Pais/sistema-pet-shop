// src/routes/Veterinario.routes.ts
import { Router } from "express";
import { postVeterinarioController } from "../controllers/post-veterinario.controller";

const router = Router();
router.post('/', postVeterinarioController); 

export default router;