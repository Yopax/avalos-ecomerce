import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: string;
  sizes: number[];
  colors: string[];
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre del producto es requerido'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'La marca es requerida'],
      trim: true,
      enum: ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Converse', 'Vans'],
    },
    price: {
      type: Number,
      required: [true, 'El precio es requerido'],
      min: [0, 'El precio no puede ser negativo'],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    description: {
      type: String,
      required: [true, 'La descripción es requerida'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'La imagen es requerida'],
    },
    category: {
      type: String,
      required: true,
      default: 'Sneakers',
    },
    sizes: {
      type: [Number],
      default: [38, 39, 40, 41, 42, 43, 44],
    },
    colors: {
      type: [String],
      default: ['Negro', 'Blanco'],
    },
    stock: {
      type: Number,
      default: 10,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para búsquedas eficientes
ProductSchema.index({ brand: 1 });
ProductSchema.index({ name: 'text', description: 'text' });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
