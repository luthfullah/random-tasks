const group = (items, key) => {
  return items.reduce((result, item) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }
    result[item[key]].push(item);
    return result;
  }, {});
};
const items = [
  { id: 1, name: "apple", category: "fruits" },
  { id: 2, name: "mango", category: "fruits" },
  { id: 3, name: "tomatto", category: "vegetables" },
  { id: 4, name: "onion", category: "vegetables" },
];
const gro = group(items, "category");
console.log(gro);

// output

// {
//     "fruits": [
//         {
//             "id": 1,
//             "name": "apple",
//             "category": "fruits"
//         },
//         {
//             "id": 2,
//             "name": "mango",
//             "category": "fruits"
//         }
//     ],
//     "vegetables": [
//         {
//             "id": 3,
//             "name": "tomatto",
//             "category": "vegetables"
//         },
//         {
//             "id": 4,
//             "name": "onion",
//             "category": "vegetables"
//         }
//     ]
// }
