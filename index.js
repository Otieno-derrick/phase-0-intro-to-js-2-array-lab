//Write your solution here!
// beforeEach(function () {
//   cats.length = 0;

  
// });

let cats = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
 }


function destructivelyPrependCat(name) {
   cats.unshift(name);
   return cats;
 }

 function destructivelyRemoveLastCat() {
  cats.pop("Garfield");
  return cats;
 }

 function destructivelyRemoveFirstCat() {
   cats.shift("cat")
   return cats;
 }

 function appendCat(name) {
   cats.push(...name);

 }

 function appendCat(name) {
  let newCat = cats.slice();
  newCat.push(name);
  return newCat;
 }

 function prependCat(name) {
   let newCat = [...cats]
   newCat.unshift(name);
  return newCat;
 }

 function removeLastCat() {
   let newCat = [...cats]
   newCat.pop();
   return newCat;
 }


 function removeFirstCat() {
   let newCat = [...cats]
  return (newCat.slice(1));
 }
