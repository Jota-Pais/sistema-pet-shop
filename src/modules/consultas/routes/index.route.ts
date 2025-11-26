import { Router } from 'express';
import postConsultaRouter from './post-consulta.router';
import getConsultaRouter from './get-consulta.router';
import putConsultaRouter from './put-consulta.router';
import deleteConsultaRouter from './delete-consulta.router';

const router = Router();

router.use('/', [
    postConsultaRouter,
    getConsultaRouter,
    putConsultaRouter,
    deleteConsultaRouter
]);

export default router;