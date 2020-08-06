import express from 'express';
import cors from 'cors';
import routes from './routes';

//GET: Buscar ou listar uma informação
//POST: Criar nova informação existente 
//PUT: Atualizar uma informação existente
//DELETE: deletar uma informação existente

////Parâmetros
// Corpo (Request Body):
// Route Params: Qual recurso quero deletar, ou editar 
// Query Params: Paginação, filtros, ordenação

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);