import { Product } from "./product.model";
import { CreateProductoDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export let products: Product[] = [];


export const addProduct = (data: CreateProductoDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: Product) => {
  //code
}

export const deleteProduct = (id: string) => {
  //code
}

export const ReplaceProduct = (id: string, newProduct: Product) => {
  //code
}
