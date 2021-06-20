import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateClientController from './controllers/client/create-client';
import GetAllClientsController from './controllers/client/getAll-client';
import GetByIdClientController from './controllers/client/getById-client';
import UpdateByIdClientController from './controllers/client/update-client';
import DeleteByIdClientController from './controllers/client/delete-client';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.post('/clientes', adapt(container.resolve(CreateClientController)));
router.get('/clientes', adapt(container.resolve(GetAllClientsController)));
router.put('/clientes/:id', adapt(container.resolve(UpdateByIdClientController)));
router.delete('/clientes/:id', adapt(container.resolve(DeleteByIdClientController)));
router.get('/clientes/:id', adapt(container.resolve(GetByIdClientController)));

export default router;
