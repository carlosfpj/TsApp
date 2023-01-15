import { Product } from "./product.model";

export interface CreateProductoDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//This is the opposite of Omit
type example = Pick<Product, 'color' | 'description'>
