import 'dotenv/config';
import express, { Request, Response } from 'express';

import clientesRoutes from './modules/clientes/routes/index.route';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('API do PetShop no ar! 🚀');
});

app.use('/clientes', clientesRoutes);

app.listen(PORT, () => {
   console.log('\n\n\n 🚀️ Servidor rodando na porta: ' + PORT + ' 🚀️ \n\n\n')
});