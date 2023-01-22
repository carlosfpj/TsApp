import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export let products: Product[] = [];


export const addProduct = (data: CreateProductDto): Product => {
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

// i can get the type of the parameter by accessing the product interface baseModel id type
export const updateProduct = (id: Product['id'] , changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const deleteProduct = (id: string) => {
  //code
}

export const ReplaceProduct = (id: string, newProduct: Product) => {
  //code
}

export const findProducts = (dto: FindProductDto): Product[] => {
  //here it is supposed to connect to the database
  //dto.color = 'blue'; dto is read-only
  // dto.tags? = [];
  //dto.tags?.push();
  //dto.tags?.pop();

  return products
}
