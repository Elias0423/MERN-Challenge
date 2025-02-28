import { Router } from 'express';
import user from './user.routes';
import product from './product.routes';
import specialPrice from './specialPrice.routes';

const router = Router();

// User
router.use('/users/', user);
router.use('/products/', product);
router.use('/special_prices/', specialPrice);

// Not Found
router.use((req, res) => {
  res.status(404).json({ code: 404, success: false, message: 'Endpoint no encontrado. :(' });
});

export default router;
