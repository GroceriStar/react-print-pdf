// import {
//   groceristar,
//   chickenKyiv
// } from "@groceristar/groceristar-fetch";
import groceristar from '@groceristar/fetch-grocery-list'
// import
  // groceristar

 // from "@groceristar/groceristar-fetch/groceristar";

// import

  // chickenKyiv
 // from "@groceristar/groceristar-fetch/chickenKyiv";

// import eee from "@groceristar/groceristar-fetch";
// console.log(eee);
// console.log(groceristar);

function getGroceryById( id ) {
  return groceristar.getGroceryById(id);
  // return ""
}

function getFullGrocery( name ) {
  return groceristar.getGroceryByNameWithDepAndIngKey(name);
  // return groceristar.getGroceryByNameWithDepAndIng(name);
  // return ""
}

function getGroceryCollection(){
  return groceristar.getGroceryShowcase();
  // return ""
}

function getAllGrocery(){
  return groceristar.getAllGrocery();
  // return ""
}

// @TODO move out to fetch plugin?
function getGroceryDataFromId(id){

  // console.log(getGroceryById(id));
  let grocery     = getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = getFullGrocery(groceryName);

  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
  // return ""
}


//----------
//
// function getRandomRecipe(){
//   return chickenKyiv.getRandomRecipe()
//   // return ""
// }
//
// function getFirstFiveRecipes(){
//   return chickenKyiv.getFirstFiveRecipes();
//   // return ""
// }
//
//
// function getShowcaseFiveRecipes(){
//   return chickenKyiv.getShowcaseFiveRecipes();
//   // return ""
// }
//
//
// function getFiveRandomIngredients(){
//   return chickenKyiv.getFiveRandomIngredients();
//   // return ""
// }
//
// //@TODO i don't like this name too
// function getRecipeChickenKyivById(id) {
//   return chickenKyiv.getRecipe()[id];
//   // return ""
// }
//
// function getRecipes() {
//   return chickenKyiv.getRecipe();
//   // return ""
// }

export {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceryCollection,
  getAllGrocery,


  // getRandomRecipe,
  // getFirstFiveRecipes,
  // getFiveRandomIngredients,
  // getRecipeChickenKyivById,
  // getShowcaseFiveRecipes,
  // getRecipes,


}
