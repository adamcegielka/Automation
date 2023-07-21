// for

for (let i = 0; i < 5; i++) {
    console.log('Cypress ' + i);
}
/*
Cypress 0
Cypress 1
Cypress 2
Cypress 3
Cypress 4
*/

// --
for (let i = -3; i < 3; i++) {
    console.log('Cypress ' + i);
}
/*
Cypress -3
Cypress -2
Cypress -1
Cypress 0
Cypress 1
Cypress 2
*/

// --
const names = ['Adam', 'Ewa', 'Ola', 'Jhon'];

let text = '';
for (let i = 0; i < names.length; i++) {
    text += names[i] + ' ';
}

console.log(text); // Adam Ewa Ola Jhon

// -------------------------------------------
// while

let num1 = 0;

while (num1 < 5) {
    console.log('Cypress');
    num1++;
}

// -------------------------------------------
// do while

let num2 = 0;

do {
    console.log('Cypress');
    num2++;
    } while (num2 < 5)