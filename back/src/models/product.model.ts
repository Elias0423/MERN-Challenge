import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
  description: String,
  brand: String,
  sku: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
});

export const ProductModal = model('Product', productSchema, 'productos');
