import { DEFAULT_RESPONSE } from '../config/utils';
import { Response, Request } from 'express';
import SpecialPriceService from '../services/specialPrice.service';

class SpecialPriceController {
  async saveSpecialPrice(req: Request, res: Response) {
    let response;
    try {
      const data = req.body;
      response = await SpecialPriceService.saveSpecialPrice(data);
    } catch (error) {
      response = DEFAULT_RESPONSE(500, true, 'Error interno', error);
    }
    res.status(response.code).json(response);
  }
}

export default new SpecialPriceController();
