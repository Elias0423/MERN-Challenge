import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

router.get('/all', ProductController.getAllProducts);
router.get('/', ProductController.getProducts);

export default router;
