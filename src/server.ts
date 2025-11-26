import 'dotenv/config';
import express, { Request, Response } from 'express';

import clientesRoutes from './modules/clientes/routes/get-clientes.router';
import veterinarioRoutes from './modules/veterinario/routes/get-veterinario.router';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API do PetShop no ar! 🚀');
});

app.use('/clientes', clientesRoutes);
app.use('/veterinarios', veterinarioRoutes)

app.listen(PORT, () => {
   console.log('\n\n\n 🚀️ Servidor rodando na porta: ' + PORT + ' 🚀️ \n\n\n')
});