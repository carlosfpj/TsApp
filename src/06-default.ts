export const createProduct = (
  // why not the default in here?
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    // stock: stock || true,
    //but here?
    stock: stock ?? true,
    // isNew: isNew || 10
    isNEw: isNew ?? 10,
  }
}

const p1 = createProduct(1, true, 12)
console.log(p1);

const p2 = createProduct(1, true);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

const p4 = createProduct(1,true,100);
console.log(p4);



