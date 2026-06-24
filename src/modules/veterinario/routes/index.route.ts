import { Router } from 'express';
import postVeterinarioRouter from './post-veterinario.router';
import getVeterinarioRouter from './get-veterinario.router';
import putVeterinarioRouter from './put-veterinario.router';
import deleteVeterinarioRouter from './delete-veterinario.router';

const router = Router();

router.use('/', [
    postVeterinarioRouter,
    getVeterinarioRouter,
    putVeterinarioRouter,
    deleteVeterinarioRouter
]);

export default router;