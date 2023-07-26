// Tablice metody

const names = ['Adam', 'Ewa', 'Tom', 'Anna'];

// length - sprawdzenie długości
console.log(names.length); // 4
console.log(names.length > 8); // false

// określony element tablicy
console.log(names);    // (4)['Adam', 'Ewa', 'Tom', 'Anna']
console.log(names[3]); // Anna

// push() - dodanie elementu na końcu
console.log(names.push('Ola')); // 5
console.log(names);             // (5)['Adam', 'Ewa', 'Tom', 'Anna', 'Ola']

// nadpisanie
console.log(names[4] = 'Jan');  // Jan
console.log(names);             // (5)['Adam', 'Ewa', 'Tom', 'Anna', 'Jan']

// pop() - usuwanie ostatniego elementu
console.log(names.pop());       // Jan
console.log(names);             // (4)['Adam', 'Ewa', 'Tom', 'Anna']

// shift() - usuwanie pirwszego elementu
console.log(names.shift());     // Adam
console.log(names);             // (3)['Ewa', 'Tom', 'Anna']

// unshift() - dodawanie elementu na początku
console.log(names.unshift('Dawid')); // 4
console.log(names);                  // (4)['Dawid', 'Ewa', 'Tom', 'Anna']

// splice() - usunięcie od wybranego elementu pozostałych elementów
console.log(names.indexOf('Tom'));     // 2
console.log(names.splice(2));          // (2)['Tom', 'Anna']
console.log(names);                    // (2)['Dawid', 'Ewa']

console.log(names.indexOf('Monika'));  // -1
console.log(names);

// splice() - usunięcie wybranego elementu
console.log(names.push('Darek', 'Grzegorz')); // 4
console.log(names);                           // (4)['Dawid', 'Ewa', 'Darek', 'Grzegorz']
console.log(names.splice(2, 1));              // ['Darek']
console.log(names);                           // (3)['Dawid', 'Ewa', 'Grzegorz']

// join() - łączenie do stringa
console.log(names.join(' '));         // 'Dawid Ewa Grzegorz'
console.log(typeof(names.join(' '))); // string
console.log(names.join(' | '));       // 'Dawid | Ewa | Grzegorz'

// reverse() - odwucenie elementów
console.log(names.reverse()); // (3)['Grzegorz', 'Ewa', 'Dawid']

// sort() - sortowanie
console.log(names.push('Adam', 'Franc'));   // 5
console.log(names);                         // (5)['Dawid', 'Ewa', 'Grzegorz', 'Adam', 'Franc']
console.log(names.sort());                  // (5)['Adam', 'Dawid', 'Ewa', 'Franc', 'Grzegorz']
console.log(names.sort().reverse());        // (5)['Grzegorz', 'Franc', 'Ewa', 'Dawid', 'Adam']

// map() - mapowanie elementów
names.map(item => {
    console.log(item)
});

/*
Grzegorz
Franc
Ewa
Dawid
Adam
*/

// ---
names.map(item => {
    console.log(item.length + ' - ' + item)
});

/*
8 - Grzegorz
5 - Franc
3 - Ewa
5 - Dawid
4 - Adam
*/

// ---
names.map(item => {
    if(item.length >= 5) {
        console.log('Long name: ' + item)
    } else {
        console.log('Short name: ' + item)
    }
});

/*
Long name: Grzegorz
Long name: Franc
Short name: Ewa
Long name: Dawid
Short name: Adam
*/

// doklejenie tablicy

const cars = ['Audi', 'BMW', 'Opel'];
const numbers = [3, 5 ,6];

const list = cars.concat(numbers);
console.log(list);  // (6)['Audi', 'BMW', 'Opel', 3, 5, 6]