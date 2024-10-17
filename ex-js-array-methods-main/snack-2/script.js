const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
console.log(people[0]['name'],',',people[1]['name'],',',people[2]['name']);

people.forEach(person => console.log(person.name))

