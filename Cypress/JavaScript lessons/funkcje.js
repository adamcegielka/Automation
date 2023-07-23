// Functions:

// First way

function nameFunction() {
    const sum = 3 + 4;
    return console.log('First function! ' + sum);
}

nameFunction();

// -------------------------------------------
// Second way

const secondFunction = (value1, value2) => {
    const result = value1 + value2;
    return console.log('Second function! ' + result);
}

secondFunction(8, 5);

// -------------------------------------------

const myName = 'Adam';

if(myName == 'Adam') {
    nameFunction();
} else {
    secondFunction();
}
