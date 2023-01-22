import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//This is the opposite of Omit
type example = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface findProductDto extends Readonly<Partial<Product>> {}
