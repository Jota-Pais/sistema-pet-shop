import { Router } from 'express';
import postAnimaisRouter from './post-animais.router';
import getAnimaisRouter from './get-animais.router';
import putAnimaisRouter from './put-animais.router';
import deleteAnimaisRouter from './delete-animais.router';

const router = Router();

router.use('/', [
    postAnimaisRouter,
    getAnimaisRouter,
    putAnimaisRouter,
    deleteAnimaisRouter
]);

export default router;