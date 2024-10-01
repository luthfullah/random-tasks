const items = [
  { id: 1, name: "apple", price: 200 },
  { id: 2, name: "mango", price: 20 },
  { id: 3, name: "tomatto", price: 500 },
  { id: 4, name: "onion", price: 700 },
];
const max = items.reduce((res, item) => {
  return res.price > item.price ? res : item;
}, items[0]);
console.log(max); //{ id: 4, name: 'onion', price: 700 }
