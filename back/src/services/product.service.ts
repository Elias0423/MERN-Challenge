import { DEFAULT_RESPONSE } from '../config/utils';
import { ProductModel } from '../models/product.model';
import { SpecialPriceModel } from '../models/specialPrice.model';

class ProductService {
  async getAllProducts() {
    const products = await ProductModel.find();
    return DEFAULT_RESPONSE(200, true, 'Productos encontrados', products);
  }
  /**
   * Se obtienen los productos y se les asigna el precio especial si es que existe
   * creando un mapa de precios especiales para optimizar la busqueda de precios especiales
   * y luego se actualizan los productos con los precios especiales
   * @param userId String
   * @returns
   */
  async getProducts(userId: string) {
    const products = await ProductModel.find();
    const specialPrices = await SpecialPriceModel.find({ userId });

    const specialPriceMap = Object.fromEntries(specialPrices.map((sp) => [sp.productId, sp.price]));

    const updatedProducts = products.map((product) => {
      if (specialPriceMap[product.id] != undefined) {
        product.price = specialPriceMap[product.id];
      }
      return product;
    });
    return DEFAULT_RESPONSE(200, true, 'Productos encontrados', updatedProducts);
  }
}

export default new ProductService();
