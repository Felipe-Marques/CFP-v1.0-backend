import express from 'express';
//Components
import controller from '../controllers/transactionController.js';

const {
  create,
  findAll,
  update,
  remove,
  // removeAll,
} = controller;

const app = express();

//POST para criar o novo.
app.post('', create);

//GET por periodo yyyy-mm ou description.
app.get('', findAll);

//PATCH atualizando lançamento por id.
app.patch('/:_id', update);

//DELETE por id do lançamento.
app.delete('/:_id', remove);

/* //DELETE todos os lançamentos do banco.
app.delete('', removeAll); */

export { app as transactionRouter };
