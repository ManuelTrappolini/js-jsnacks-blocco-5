const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

let incrementalNumber = []

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number += +1
    incrementalNumber.push(number)   
}
console.log(incrementalNumber);
