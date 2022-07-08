import { Router } from ' express';
import * as MessageController from './controllers/message';

const routes = Router();

routes.get('/', (request, response) => {
    console.log('API Tech Academy');
});

routes.post('/message', MessageController.message);

export default routes;