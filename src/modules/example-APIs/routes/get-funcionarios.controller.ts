import { Router } from "express";
import { getFuncionariosController } from "../controllers/get-funcionarios.controller";

export default (router: Router) => {
 router.get('/funcionarios', getFuncionariosController)   
}