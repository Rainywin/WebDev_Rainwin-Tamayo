var fruits = [];

var fruits1 = parseInt(prompt('How many fruits do you want to enter? (Min = 3 & Max = 10)'));

if (fruits1 < 3 || fruits1 > 10) {
    prompt('Please enter a number between 3 and 10.');
  } else {
    for (let i = 0; i < fruits1; i++) {
      var fruits2 = prompt('Enter the name of fruit #'+ (i + 1));
      fruits.push(fruits2);} }
    
    console.log(fruits);
    console.log('First fruit in the list:', fruits[0]);
    console.log('Last fruit in the list:', fruits[fruits1 - 1]);
    console.log('During sort', fruits.sort());
    console.log('After sort', fruits);
    fruits.sort(function(a,b) {return b-a});
    console.log('Second fruit in the sorted list:', fruits[1]);
    fruits.splice(0, 1); 
    fruits.splice(2, 1);
    console.log(fruits);
    
var vegetables = [];

var vegetables1 = parseInt(prompt('How many vegetable do you want to enter? (Min = 3 & Max = 10)'));

if (vegetables1 < 3 || vegetables1 > 10) {
    prompt('Please enter a number between 3 and 10.');
  } else {
    for (let i = 0; i < vegetables1; i++) {
      var vegetables2 = prompt('Enter the name of vegetable #'+ (i + 1));
        vegetables.push(vegetables2);
    } }

    console.log(vegetables);
    console.log('First vegetable in the list:', vegetables[0]);
    console.log('Last vegetable in the list:', vegetables[vegetables1 - 1]);
    console.log('During sort', vegetables.sort());
    console.log('After sort', vegetables);
    vegetables.sort(function(a,b) {return b-a});
    console.log('Second vegetable in the sorted list:', vegetables[1]);
    vegetables.splice(0, 1); 
    vegetables.splice(2, 1);
    console.log(vegetables);
    
    var foods = fruits.concat(vegetables);
    console.log('Fruits and Vegetables:', foods);
    
    for (let i = 0; i < foods.length; i++) {
        var food1 = foods[i];
        var food2 = food1.length;
        var secondLetter = food1[i+1];
        var reversed = food1.split('').reverse().join('');

    console.log('Index', i, 'is even and the food inside it is called', food1, 'The word', food1, 'has', food2, 'letters and the second letter is', secondLetter, 'If you reverse it, it becomes', reversed );
    }

    var foodsearch = prompt('Enter a food');
    var directory = foods.indexOf(foodsearch);
    foodsearch = foodsearch.toLowerCase();
    
    if (directory !== -1) {
        alert('Food is found at index ' + directory);
    } else {
        alert('Food not found in the directory');
    }

    foods[0] = 'START';
    foods[foods.length - 1] = 'END';

    for (let i = 0; i < foods.length; i++) {
    foods[i] = foods[i].toUpperCase();
}
    console.log(foods)