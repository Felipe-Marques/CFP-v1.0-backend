import express from 'express';
import cors from 'cors';

import { db } from './models/index.js';
import { transactionRouter } from './routes/Router.js';

//Conexão com o MongoDB Atlas.
(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado com sucesso ao bando de dados');
  } catch (err) {
    console.log(`Erro ao conectar no banco de dados! ${err}`);
    process.exit;
  }
})();

const app = express();
app.use(express.json());

//Cors conectando com o frontend.
app.use(cors({ origin: 'https://cfp-app.vercel.app' }));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações',
  });
});
/**
 * Rotas principais do app
 */
app.use('/api/transaction', transactionRouter);

app.listen(db.port, () => {
  console.log(`Server working on ${db.port}`);
});
