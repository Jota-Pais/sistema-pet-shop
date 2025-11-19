import { Router } from "express";
import { getClientesController } from "../controllers/get-clientes.controller";

export default (router: Router) => {
 router.get('/clientes', getClientesController)   
}