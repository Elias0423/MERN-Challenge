import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.post('/signin', UserController.signIn);

export default router;
