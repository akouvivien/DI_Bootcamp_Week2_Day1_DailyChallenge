// ************Exercise 1:****************
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
fruits.splice(0,1);// supprime l'element situé a l'index 0
// Sort the array in alphabetical order.
fruits.sort();// trie dans l'ordre alphabetique
// Add “Kiwi” to the end of the array.
fruits.push("kiwi");// ajoute kiwi a la fin du tableau
// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.shift();//supprime le premier element du tableau
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();// affiche le contenu du tableau dans l'ordre inverse
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
console.log(fruits);// affiche le contenu du tableau

// ************Exercise 2:****************
// Exercise 2:

// Using this array :
// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.
console.log(moreFruits[1][1]);// retourne l' element se trouvant a l'interieur de l'index 1  du tableau moreFruits et celui se trouvant a l'index 1 du tableau selectionner