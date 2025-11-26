import { Router } from 'express';
import postServicoRouter from './post-servico.router';
import getServicoRouter from './get-servico.router';
import putServicoRouter from './put-servico.router';
import deleteServicoRouter from './delete-servico.router';

const router = Router();

router.use('/', [
    postServicoRouter,
    getServicoRouter,
    putServicoRouter,
    deleteServicoRouter
]);

export default router;