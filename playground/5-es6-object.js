const name = "Andrew";
const userAge = 27;
const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

//Object Destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label, price } = product;

// console.log(label, price);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
