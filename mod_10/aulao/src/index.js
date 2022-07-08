import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3000; // pode ser qualquer porta

app.use(express.json()); // tem que indicar qu vamos receber dados em json
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
