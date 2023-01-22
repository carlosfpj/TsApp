import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts } from "./products/product.service";
//se debe traer desde la interface la "category" ?
// read more about DTO (Data transfer objects)

for (let index = 0; index < 5; index++) {
  addProduct({
    //id is created at "database".
    // id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // }
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,

});


findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as','das','as']
})
