import { Schema, model } from 'mongoose';

const specialPriceSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
});

export const SpecialPriceModal = model('SpecialPrice', specialPriceSchema, 'preciosEspecialesAvilez23');
