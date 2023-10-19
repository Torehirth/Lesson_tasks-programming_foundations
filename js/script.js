const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    inStock: true,
    color: "red",
  },
  {
    id: 2,
    name: "Product 2",
    price: 5.99,
    inStock: false,
    color: "blue",
  },
  {
    id: 3,
    name: "Product 3",
    price: 15.99,
    inStock: true,
    color: "green",
  },
  {
    id: 4,
    name: "Product 4",
    price: 7.99,
    inStock: true,
    color: "green",
  },
  {
    id: 5,
    name: "Product 5",
    price: 1.99,
    inStock: true,
    color: "green",
  },
];

console.log(products);

// ----------------------------------------------------------

for (i = 0; i < products.length; i++) {
  const heading = document.createElement("h1");
  const price = document.createElement("p");

  heading.innerText = products[i].name;
  price.innerText = products[i].price;

  container.append(heading);
  container.append(price);
}
