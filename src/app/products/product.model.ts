import { Category } from "../categories/category.model";
import {BaseModel} from "./../base.model"

export type Sizes = 'S' | 'M' | 'L' | 'XL';


// What happens if i extend the Base model but i don't remove
// the baseModel fields (id, createdAt, updatedAt) in here?
export interface Product extends BaseModel {
  // id: string | number;
  // createdAt: Date;
  // updatedAt: Date;
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category
  isNew: boolean;
  tags: string[];
}
