import { DEFAULT_RESPONSE } from '../config/utils';
import { Response, Request } from 'express';
import productService from '../services/product.service';

class ProductController {
  async getAllProducts(req: Request, res: Response) {
    let response;
    try {
      response = await productService.getAllProducts();
    } catch (error) {
      response = DEFAULT_RESPONSE(500, true, 'Error interno', error);
    }
    res.status(response.code).json(response);
  }
  async getProducts(req: Request, res: Response) {
    let response;
    try {
      const userId = <string>req.headers['user-id'];

      if (!userId) response = DEFAULT_RESPONSE(400, true, 'No se envió el id del usuario');
      else response = await productService.getProducts(userId);
    } catch (error) {
      response = DEFAULT_RESPONSE(500, true, 'Error interno', error);
    }
    res.status(response.code).json(response);
  }
}

export default new ProductController();
