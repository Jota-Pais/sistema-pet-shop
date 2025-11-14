import 'dotenv/config';
import express, { Request, Response } from 'express';


const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API do PetShop no ar! 🚀');
});


app.listen(PORT, () => {
   console.log('\n\n\n 🚀️ Servidor rodando na porta: ' + PORT + ' 🚀️ \n\n\n')
});