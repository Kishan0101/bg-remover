import express from 'express';
import { clerkWebhooks } from '../Controllers/UserController.js'; 

const router = express.Router();

router.post('/webhooks', clerkWebhooks);

export default router;
