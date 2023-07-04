// Conditional instructions:

const num1 = 4;
const num2 = 5;

if(num1 + num2 == 9) {
    console.log('TRUE');
} else {
    console.log('FALSE');
};
// TRUE


const name1 = 'Adam';
const name2 = 'Ewa';

if(name1 == 'Adam' && name2 == 'Ewa') {
    console.log('TRUE');
} else {
    console.log('FALSE');
};
// TRUE


const car1 = 'Audi';
const car2 = 'Opel';

if(car1 == 'Audi' || car2 == 'BMW') {
    console.log('TRUE');
} else {
    console.log('FALSE');
};
// TRUE


const day1 = 'Monday';
const day2 = 'Tuesday';
const day3 = 'Wednesday';

if(day3 == 'Monday') {
    console.log('First day')
} else if(day3 == 'Tuesday') {
    console.log('Second day')
} else if(day3 == 'Wednesday') {
    console.log('Third day')
} else {
    console.log('Weekend')
};
// Third day


day5 = 'Saturday';
day5 == 'Friday' ? console.log('Fifth day') : console.log('Weekend');
// Weekend