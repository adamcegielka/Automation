// Klasy, Dziedziczenie

class Success {
    finalText() {
        return console.log('Thanks')
    }
}

class Calculations extends Success {
    get text() {
        return 'Result:'
    }

    get message() {
        return 'Result less than 10'
    }

    adding() {
        return 3 + 4
    }

    multiplication() {
        return 2 * 8
    }

    solution(result) {
        console.log(this.text + ' ' + result);
        if(result < 10) {
            console.log(this.message);
        }
    }
}

const makeCalculation = new Calculations();
console.log(makeCalculation.adding()); // 7
console.log(makeCalculation.multiplication()); // 16
console.log(makeCalculation.solution(makeCalculation.adding())); // Result: 7, Result less than 10
console.log(makeCalculation.solution(makeCalculation.multiplication())); // Result:  16

const viewActivity = new Calculations();
console.log(viewActivity.finalText()); // Thanks

// -----------------------------------

class ShowName {
    constructor(firstName, secondName) {
        this.selectFirstName = firstName;
        this.selectSecondName = secondName;
    }

    inscription() {
        return console.log('Names: ' + this.selectFirstName + ' and ' + this.selectSecondName)
    }
}

const viewName = new ShowName('Adam', 'Ewa');
console.log(viewName.inscription()); // Names: Adam and Ewa