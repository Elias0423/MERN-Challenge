import { Router } from 'express';
import user from './user';

const router = Router();

// User
router.use('/users/', user);

// Not Found
router.use((req, res) => {
  res.status(404).json({ code: 404, success: false, message: 'Endpoint no encontrado. :(' });
});

export default router;
