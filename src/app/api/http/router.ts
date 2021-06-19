import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateClientController from './controllers/client/create-client';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));
router.post('/clientes', adapt(container.resolve(CreateClientController)));

export default router;
