import { Schema, model } from 'mongoose';

interface ISpecialPrice {
  userId: string;
  productId: string;
  price: number;
}

const specialPriceSchema = new Schema<ISpecialPrice>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
});

const SpecialPriceModel = model('SpecialPrice', specialPriceSchema, 'preciosEspecialesAvilez23');

export { ISpecialPrice, SpecialPriceModel };
