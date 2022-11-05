import  express  from "express";

import editoraController from "../controllers/editorasController.js";

const router = express.Router();

router
    .get('/editoras', editoraController.listarEditoras)
    .get('/editoras/:id', editoraController.listarEditoraPorId)
    .post('/editoras', editoraController.cadastrarEditoras)
    .put('/editoras/:id', editoraController.atualizarEditoras)
    .delete('/editoras/:id', editoraController.excluirEditora)

export default router;