console.log('Ready for coding');

console.log('');
console.log('### | Task 1 | ###');

const subtract = (a: number, b: number): number => {
    return a - b;
}

console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

console.log('');
console.log('### | Task 2 | ###');

const sum = (c: number, d: number): number => {
    return c + d;
}

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

console.log('');
console.log('### | Task 3 | ###');

const typeOfValue = (value: any): any => {
    return typeof(value);
}

console.log(typeOfValue(1));
console.log(typeOfValue(false));
console.log(typeOfValue({}));
console.log(typeOfValue(null));
console.log(typeOfValue('string'));
console.log(typeOfValue(['array']));

console.log('');
console.log('### | Task 4 | ###');

const equal = (e: (number | string), f: (number | string)): boolean => {
    return e === f;
}

console.log(equal(2, 3));
console.log(equal(3, 3));
console.log(equal(1, '1'));
console.log(equal('10', '10'));

console.log('');
console.log('### | Task 5 | ###');

const neededCharacter = (g: string, h: number): string => {
    return g.charAt(h - 1);
}

console.log(neededCharacter('abcd', 1));
console.log(neededCharacter('zyxbwpl', 5));
console.log(neededCharacter('gfedcba', 3));

console.log('');
console.log('### | Task 6 | ###');

const removeFirst3Characters = (word: string): string => {
    return word.substring(3);
}

console.log(removeFirst3Characters('abcdefg'));
console.log(removeFirst3Characters('1234'));
console.log(removeFirst3Characters('fgedcba'));

console.log('');
console.log('### | Task 7 | ###');

const getLast3Characters = (anything: string): string => {
    return anything.substring(anything.length - 3);
}

console.log(getLast3Characters('abcdefg'));
console.log(getLast3Characters('1234'));
console.log(getLast3Characters('fgedcba'));

console.log('');
console.log('### | Task 8 | ###');

const getFirst3Characters = (anything: string): string => {
    return anything.substring(0, 3);
}

console.log(getFirst3Characters('abcdefg'));
console.log(getFirst3Characters('1234'));
console.log(getFirst3Characters('fgedcba'));

console.log('');
console.log('### | Task 9 | ###');

const getFirstHalfCharacters = (something: string): string => {
    return something.substring(0, something.length / 2);
}

console.log(getFirstHalfCharacters('abcdefg'));
console.log(getFirstHalfCharacters('1234'));
console.log(getFirstHalfCharacters('fgedcba'));

console.log('');
console.log('### | Task 10 | ###');

const removeLast3Characters = (something: string): string => {
    return something.substring(0, something.length - 3);
}

console.log(removeLast3Characters('abcdefg'));
console.log(removeLast3Characters('1234'));
console.log(removeLast3Characters('fgedcba'));

console.log('');
console.log('### | Task 11 | ###');

const getPercent = (total: number, percent: number): number => {
    return (percent / 100) * total;
}

console.log(getPercent(100, 50));
console.log(getPercent(10, 1));
console.log(getPercent(500, 25));

console.log('');
console.log('### | Task 12 | ###');

const calculate = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return Math.pow(((a + b - c) * d / e), f)
}

console.log(calculate(6,5,4,3,2,1));
console.log(calculate(6,2,1,4,2,3));
console.log(calculate(2,3,6,4,2,3));

console.log('');
console.log('### | Task 13 | ###');

const even = (someNumber: number): boolean => {
    return someNumber % 2 == 0;
}

console.log(even(10));
console.log(even(-4));
console.log(even(5));
console.log(even(-11));

console.log('');
console.log('### | Task 14 | ###');

const repeats = (letter: string, sentence: string):number => {
    return sentence.split('').filter(character => (character === letter)).length;
}

console.log(repeats('m', 'how many times does the character occur in this sentence?'));
console.log(repeats('h', 'how many times does the character occur in this sentence?'));
console.log(repeats('?', 'how many times does the character occur in this sentence?'));
console.log(repeats('z', 'how many times does the character occur in this sentence?'));

console.log('');
console.log('### | Task 15 | ###');

const wholeNumber = (a: number): boolean => {
    return a % 1 === 0;
}

console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

console.log('');
console.log('### | Task 16 | ###');

const smallerOrBigger = (a: number, b: number): number => {
    if(a < b) {
        return a / b;
    }
    return a * b;
}

console.log(smallerOrBigger(10, 100));
console.log(smallerOrBigger(90, 45));
console.log(smallerOrBigger(8, 20));
console.log(smallerOrBigger(2, 0.5));

console.log('');
console.log('### | Task 17 | ###');

const containsOrNot = (a: string, b: string): string => {
    if(a.includes(b)) {
        return `${b}${a}`;
    }
    return `${a}${b}`;
}

console.log(containsOrNot('cheese', 'cake'));
console.log(containsOrNot('lips', 's'));
console.log(containsOrNot('Java', 'script'));
console.log(containsOrNot(' think, therefore I am', 'I'));

console.log('');
console.log('### | Task 18 | ###');

const roundANumber = (a: number): number => {
    return Math.round(a * 100) / 100;
}

console.log(roundANumber(2.12397));
console.log(roundANumber(3.136));
console.log(roundANumber(1.12397));
console.log(roundANumber(26.1379));

console.log('');
console.log('### | Task 19 | ###');

const splitNumber = (a: number): number[] => {
    return a.toString().split('').map(i => Number(i));
}

console.log(splitNumber(10));
console.log(splitNumber(931));
console.log(splitNumber(193278));

console.log('');
console.log('### | Task 20 | ###');

const joinWords = (a: string, b: string): string => {
    const repairA = a.charAt(0).toUpperCase() + a.replace('%', '').slice(1);
    const repairB = b.replace('%', '').split('').reverse().join('');
    return `${repairA}${repairB}`
}

console.log(joinWords('java', 'tpi%rcs'));
console.log(joinWords('c%ountry', 'edis'));
console.log(joinWords('down', 'nw%ot'));

console.log('');
console.log('### | Task 21 | ###');

function isPrime(num: number) {
    for (let i = 2; i < Math.sqrt(num) + 1; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function primeNumber(num: number) {
    for (var count = num; ; ++count) {
        if (isPrime(count)) {
            break;
        }
    }
    return count;
}

console.log(primeNumber(38));
console.log(primeNumber(7));
console.log(primeNumber(115));
console.log(primeNumber(2000));

console.log('');
console.log('### | Task 22 | ###');

/*
const insertCharacter = (a: string, b: string) => {
    }

console.log(insertCharacter('1234567', '.'));
console.log(insertCharacter('abcde','$'));
console.log(insertCharacter('zxyzxyzxyzxyzxyz','w'));

 */

console.log('');
console.log('### | Task 23 | ###');

/*
console.log(changedWord('bnchmf'));
console.log(changedWord('bgddrd'));
console.log(changedWord('sdrshmf'));
 */

console.log('');
console.log('### | Task 24 | ###');

const returnNumber = (a: number[], n: number): number => {
    return a.at(n - 1);
}

console.log(returnNumber([1, 2, 3, 4, 5],3));
console.log(returnNumber([10, 9, 8, 7, 6],5));
console.log(returnNumber([7, 2, 1, 6, 3],1));

console.log('');
console.log('### | Task 25 | ###');

