import { Router } from 'express';

const router = Router();

// Not Found
router.use((req, res) => {
  res
    .status(404)
    .json({ code: 404, success: false, message: 'Endpoint no encontrado. :(' });
});

export default router;
