import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  brand: string;
  sku: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
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

const ProductModel = model('Product', productSchema, 'productos');

export { IProduct, ProductModel };
