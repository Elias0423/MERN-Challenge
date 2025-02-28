import { Router } from 'express';
import SpecialPriceController from '../controllers/specialPrice.controller';

const router = Router();

router.post('/', SpecialPriceController.saveSpecialPrice);

export default router;
