import { Router } from 'express';
import postClientesRouter from './post-clientes.router';
import getClientesRouter from './get-clientes.router';
import putClientesRouter from './put-clientes.router';
import deleteClientesRouter from './delete-clientes.router';

const router = Router();

router.use('/', [
    postClientesRouter,
    getClientesRouter,
    putClientesRouter,
    deleteClientesRouter
]);

export default router;