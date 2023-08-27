/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

Part 1: Used transactions array of objects to create res object of categories and spendEstimates value.
function calculateTotalSpentByCategory(transactions) {
  let res = {};
  
  for(let i = 0; i < transactions.length; i++){
    let t = transactions[i];
    if(res[t.category]){
      res[t.category] += t.price;
    }else{
      res[t.category] = t.price;
    }
  }

  Part 2: Used res object to create array of objects using Objects.keys() method.
  let ans = [];
  let keys = Object.keys(res);
  for(let i = 0; i < keys.length; i++){
    let category = keys[i];
    var object = {
      category : category,
      spendEstimates: res[category]
    }
    ans.push(object);
  }
  console.log(ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
