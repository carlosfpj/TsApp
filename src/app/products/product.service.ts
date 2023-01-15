import { Product } from "./product.model";

export let products: Product[] = [];


export const addProduct = (data: Product) => {
  // data.id = 'fakeid';
  // data.createdAt = new Date(1998,1,1)
  products.push(data);
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
