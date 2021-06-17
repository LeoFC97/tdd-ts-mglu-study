import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));

export default router;
