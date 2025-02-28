import { Schema, model } from 'mongoose';

interface ISpecialPrice {
  userId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  price: number;
}

const specialPriceSchema = new Schema<ISpecialPrice>({
  userId: { type: Schema.Types.ObjectId, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
});

const SpecialPriceModel = model('SpecialPrice', specialPriceSchema, 'preciosEspecialesAvilez23');

export { ISpecialPrice, SpecialPriceModel };
