import { DEFAULT_RESPONSE } from '../config/utils';
import { ISpecialPrice, SpecialPriceModel } from '../models/specialPrice.model';

class SpecialPriceService {
  async saveSpecialPrice(data: ISpecialPrice) {
    const oldSpecialPrice = await SpecialPriceModel.findOne({ userId: data.userId, productId: data.productId });
    if (oldSpecialPrice) {
      oldSpecialPrice.price = data.price;
      await oldSpecialPrice.save();
      return DEFAULT_RESPONSE(200, true, 'Se ha actualizado el precio especial', oldSpecialPrice);
    } else {
      const newSpecialPrice = new SpecialPriceModel(data);
      await newSpecialPrice.save();
      return DEFAULT_RESPONSE(200, true, 'Precio especial guardado', newSpecialPrice);
    }
  }
}

export default new SpecialPriceService();
