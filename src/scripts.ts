console.log('Ready for coding');

console.log('----- Typecript uzdevumi -----');

console.log('');
console.log('### | Task 1 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (a and b) as argument
Subtract b from a
Return the result
*/

const subtract = (a: number, b: number): number => {
    return a - b;
}

console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

console.log('');
console.log('### | Task 2 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result
*/

const sum = (c: number, d: number): number => {
    return c + d;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 10)); // 11
console.log(sum(99, 1)); // 100

console.log('');
console.log('### | Task 3 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a value as argument
Return the type of the value
*/

const typeOfValue = (value: any): any => {
    return typeof(value);
}

console.log(typeOfValue(1)); // 'number'
console.log(typeOfValue(false)); // 'boolean'
console.log(typeOfValue({})); // 'object'
console.log(typeOfValue(null)); // 'object'
console.log(typeOfValue('string')); //  'string'
console.log(typeOfValue(['array'])); // 'object'

console.log('');
console.log('### | Task 4 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type
*/

const equal = (e: (number | string), f: (number | string)): boolean => {
    return e === f;
}

console.log(equal(2, 3)); // false
console.log(equal(3, 3)); // true
console.log(equal(1, '1')); // false
console.log(equal('10', '10')); // true

console.log('');
console.log('### | Task 5 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'
*/

const neededCharacter = (g: string, h: number): string => {
    return g.charAt(h - 1);
}

console.log(neededCharacter('abcd', 1)); // 'a'
console.log(neededCharacter('zyxbwpl', 5)); // 'w'
console.log(neededCharacter('gfedcba', 3)); // 'e'

console.log('');
console.log('### | Task 6 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result
*/

const removeFirst3Characters = (word: string): string => {
    return word.substring(3);
}

console.log(removeFirst3Characters('abcdefg')); // 'defg'
console.log(removeFirst3Characters('1234')); // '4'
console.log(removeFirst3Characters('fgedcba')); // 'dcba'

console.log('');
console.log('### | Task 7 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result
*/

const getLast3Characters = (anything: string): string => {
    return anything.substring(anything.length - 3);
}

console.log(getLast3Characters('abcdefg')); // 'efg'
console.log(getLast3Characters('1234')); // '234'
console.log(getLast3Characters('fgedcba')); // 'cba'

console.log('');
console.log('### | Task 8 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result
*/

const getFirst3Characters = (anything: string): string => {
    return anything.substring(0, 3);
}

console.log(getFirst3Characters('abcdefg')); // 'abc'
console.log(getFirst3Characters('1234')); // '123'
console.log(getFirst3Characters('fgedcba')); // 'fge'

console.log('');
console.log('### | Task 9 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/

const getFirstHalfCharacters = (something: string): string => {
    return something.substring(0, something.length / 2);
}

console.log(getFirstHalfCharacters('abcdefgh')); // 'abcd'
console.log(getFirstHalfCharacters('1234')); // '12'
console.log(getFirstHalfCharacters('gedcba')); // 'ged'

console.log('');
console.log('### | Task 10 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result
*/

const removeLast3Characters = (something: string): string => {
    return something.substring(0, something.length - 3);
}

console.log(removeLast3Characters('abcdefg')); // 'abcd'
console.log(removeLast3Characters('1234')); // '1'
console.log(removeLast3Characters('fgedcba')); // 'fged'

console.log('');
console.log('### | Task 11 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (a and b) as argument
Return b percent of a
*/

const getPercent = (total: number, percent: number): number => {
    return (percent / 100) * total;
}

console.log(getPercent(100, 50)); // 50
console.log(getPercent(10, 1)); // 0.1
console.log(getPercent(500, 25)); // 125

console.log('');
console.log('### | Task 12 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order
*/

const calculate = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return Math.pow(((a + b - c) * d / e), f);
}

console.log(calculate(6,5,4,3,2,1)); // 10.5
console.log(calculate(6,2,1,4,2,3)); // 2744
console.log(calculate(2,3,6,4,2,3)); // -8

console.log('');
console.log('### | Task 13 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false
*/

const even = (someNumber: number): boolean => {
    return someNumber % 2 == 0;
}

console.log(even(10)); // true
console.log(even(-4)); // true
console.log(even(5)); // false
console.log(even(-11)); // false

console.log('');
console.log('### | Task 14 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b
*/

const repeats = (letter: string, sentence: string): number => {
    return sentence.split('').filter(character => (character === letter)).length;
}

console.log(repeats('m', 'how many times does the character occur in this sentence?')); // 2
console.log(repeats('h', 'how many times does the character occur in this sentence?')); // 4
console.log(repeats('?', 'how many times does the character occur in this sentence?')); // 1
console.log(repeats('z', 'how many times does the character occur in this sentence?')); // 0

console.log('');
console.log('### | Task 15 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false
*/

const wholeNumber = (a: number): boolean => {
    return a % 1 === 0;
}

console.log(wholeNumber(4)); // true
console.log(wholeNumber(1.123)); // false
console.log(wholeNumber(1048)); // true
console.log(wholeNumber(10.48)); // false

console.log('');
console.log('### | Task 16 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value
*/

const smallerOrBigger = (a: number, b: number): number => {
    if(a < b) {
        return a / b;
    }
    return a * b;
}

console.log(smallerOrBigger(10, 100)); // 0.1
console.log(smallerOrBigger(90, 45)); // 4050
console.log(smallerOrBigger(8, 20)); // 0.4
console.log(smallerOrBigger(2, 0.5)); // 1

console.log('');
console.log('### | Task 17 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value
*/

const containsOrNot = (a: string, b: string): string => {
    if(a.includes(b)) {
        return `${b}${a}`;
    }
    return `${a}${b}`;
}

console.log(containsOrNot('cheese', 'cake')); // 'cheesecake'
console.log(containsOrNot('lips', 's')); // 'slips'
console.log(containsOrNot('Java', 'script')); // 'Javascript'
console.log(containsOrNot(' think, therefore I am', 'I')); // 'I think, therefore I am'

console.log('');
console.log('### | Task 18 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/

const roundANumber = (a: number): number => {
    return Math.round(a * 100) / 100;
}

console.log(roundANumber(2.12397)); // 2.12
console.log(roundANumber(3.136)); // 3.14
console.log(roundANumber(1.12397)); // 1.12
console.log(roundANumber(26.1379)); // 26.14

console.log('');
console.log('### | Task 19 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting
*/

const splitNumber = (a: number): number[] => {
    return a.toString().split('').map(i => Number(i));
}

console.log(splitNumber(10)); // [1,0]
console.log(splitNumber(931)); // [9,3,1]
console.log(splitNumber(193278)); // [1,9,3,2,7,8]

console.log('');
console.log('### | Task 20 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following
words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

const joinWords = (a: string, b: string): string => {
    const repairA = a.charAt(0).toUpperCase() + a.replace('%', '').slice(1);
    const repairB = b.replace('%', '').split('').reverse().join('');
    return `${repairA}${repairB}`
}

console.log(joinWords('java', 'tpi%rcs')); // 'Javascript'
console.log(joinWords('c%ountry', 'edis')); // 'Countryside'
console.log(joinWords('down', 'nw%ot')); // 'Downtown'

console.log('');
console.log('### | Task 21 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/

const primeNumber = (num: number): number => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return primeNumber(num + 1)
        }
    }
    return num;
}

console.log(primeNumber(38)); // 41
console.log(primeNumber(7)); // 7
console.log(primeNumber(115)); // 127 
console.log(primeNumber(2000)); // 2003

console.log('');
console.log('### | Task 22 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y
*/

const testDivisiblity = (a: number, b: number): number => {
    for (let i = a; i <= i++; i++)
    if (a % b !== 0) {
        a++
    } else {
        return a
    }
}

console.log(testDivisiblity(1, 23)); // 23
console.log(testDivisiblity(23, 23)); // 23
console.log(testDivisiblity(7, 3)); // 9
console.log(testDivisiblity(-5, 7)); // 0

console.log('');
console.log('### | Task 23 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string
*/

const insertCharacter = (a: string, b: string) => {
    const newArray = a.split('').reverse();
    let lastArray = [];
    for (let i = 0; i <= a.length; i++) {
        if(i !== 0 && i % 3 === 0) {
            lastArray.push(newArray[i] + b)
        } else {
            lastArray.push(newArray[i])
        }
    }
    return lastArray.reverse().join('')
}

console.log(insertCharacter('1234567', '.')); // '1.234.567'
console.log(insertCharacter('abcde','$')); // 'ab$cde'
console.log(insertCharacter('zxyzxyzxyzxyzxyz','w')); // 'zwxyzwxyzwxyzwxyzwxyz'

console.log('');
console.log('### | Task 24 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

const changedWord = (a: string) => {
    let newWord = ''
    for (let i = 0; i < a.length; i++) {
        newWord += String.fromCharCode(a.charCodeAt(i) + 1);
    }
    return newWord;
}

console.log(changedWord('bnchmf')); // 'coding'
console.log(changedWord('bgddrd')); // 'cheese'
console.log(changedWord('sdrshmf')); // 'testing'

console.log('');
console.log('### | Task 25 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'
*/

const returnNumber = (a: number[], n: number): number => {
    return a.at(n - 1);
}

console.log(returnNumber([1, 2, 3, 4, 5],3)); // 3
console.log(returnNumber([10, 9, 8, 7, 6],5)); // 6
console.log(returnNumber([7, 2, 1, 6, 3],1)); // 7

console.log('');
console.log('### | Task 26 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result
*/

const withoutFirst3 = (list: number[]): number[] => {
    return list.splice(3);
}

console.log(withoutFirst3([1,2,3,4])); // [4]
console.log(withoutFirst3([5,4,3,2,1,0])); // [2,1,0]
console.log(withoutFirst3([99,1,1])); // []

console.log('');
console.log('### | Task 27 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array
*/

const last3Elements = (list: number[]): number[] => {
    return list.splice(list.length -3);
}

console.log(last3Elements([1,2,3,4])); // [2,3,4]
console.log(last3Elements([5,4,3,2,1,0])); // [2,1,0]
console.log(last3Elements([99,1,1])); // [99,1,1]

console.log('');
console.log('### | Task 28 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array
*/

const first3Elements = (list: number[]): number[] => {
    return list.splice(0, 3);
}

console.log(first3Elements([1,2,3,4])); // [1,2,3]
console.log(first3Elements([5,4,3,2,1,0])); // [5,4,3]
console.log(first3Elements([99,1,1])); // [99,1,1]

console.log('');
console.log('### | Task 29 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a
*/

const withoutLastXElements = (list: number[], element: number): number[] => {
    return list.splice(list.length - element);
}

console.log(withoutLastXElements([1, 2, 3, 4, 5], 2)); // [4,5]
console.log(withoutLastXElements([1, 2, 3], 6)); // [1,2,3]
console.log(withoutLastXElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [6,7,8]

console.log('');
console.log('### | Task 30 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array
*/

const filteredArray = (list: any[], element: string | number | boolean): number[] => {
    return list.filter(item => item !== element);
}

console.log(filteredArray([1,2,3], 2)); // [1,3]
console.log(filteredArray([1,2,'2'], '2')); // [1,2]
console.log(filteredArray([false,'2',1], false)); // ['2',1]
console.log(filteredArray([1,2,'2',1], 1)); // [2,'2']

console.log('');
console.log('### | Task 31 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Return the number of elements in a
*/

const numberOfElements = (list: number[]): number => {
    return list.length;
}

console.log(numberOfElements([1,2,2,4])); // 4
console.log(numberOfElements([9,9,9])); // 3
console.log(numberOfElements([4,3,2,1,0])); // 5

console.log('');
console.log('### | Task 32 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of numbers as argument
Return the number of negative values in the array
*/

const negativeNumbers = (list: number[]): number => {
    return list.filter(element => (element < 0)).length;
}

console.log(negativeNumbers([1,-2,2,-4])); // 2
console.log(negativeNumbers([0,9,1])); // 0
console.log(negativeNumbers([4,-3,2,1,0])); // 1

console.log('');
console.log('### | Task 33 | ###');
console.log('&&& | DONE | &&&');
console.log('');

// /*
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
// */

const numArray = (list: number[]) => {
    return list.sort((a, b) => b - a);
}

console.log(numArray([1,3,2])); // [3,2,1]
console.log(numArray([4,2,3,1])); // [4,3,2,1]

console.log('');
console.log('### | Task 34 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result
*/

const alphabetically = (list: string[]): string[] => {
    return list.sort((a, b) => a.localeCompare(b))
};

console.log(alphabetically(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(alphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

console.log('');
console.log('### | Task 35 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of numbers as argument
It should return the average of the numbers
*/

const averageNumber = (array: number[]): number => {
    return array.reduce((a, b) => a + b, 0 ) / array.length;
}

console.log(averageNumber([10,100,40])); // 50
console.log(averageNumber([10,100,1000])); // 370
console.log(averageNumber([-50,0,50,200])); // 50

console.log('');
console.log('### | Task 36 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of strings as argument
Return the longest string
*/

const longestWord = (array: string[]) => {
    return array.sort(function(a, b) {
        return b.length - a.length
    })
    [0]
};

console.log(longestWord(['help', 'me'])); // 'help'
console.log(longestWord(['I', 'need', 'candy'])); // 'candy'

console.log('');
console.log('### | Task 37 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

const equalItems = (array: any[]): boolean => {
    return array.every(a => a === array[0]);
};

console.log(equalItems([true, true, true, true])); // true
console.log(equalItems(['test', 'test', 'test'])); // true
console.log(equalItems([1,1,1,2])); // false
console.log(equalItems(['10',10,10,10])); // false

console.log('');
console.log('### | Task 38 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays
*/

const allArrays = (...a: any[]): any[] => {
    return a.reduce((previous, current) => previous.concat(current), [])
}

console.log(allArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(allArrays(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(allArrays([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

console.log('');
console.log('### | Task 39 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/

interface InterfaceType {
    a: number,
    b: number
}

const sortedArray = (newArray: InterfaceType[]): InterfaceType[] => {
    return newArray.sort((c, d) => c.b - d.b)
}

console.log(sortedArray([{a: 1, b: 2}, {a: 5, b: 4}])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortedArray([{a: 2, b: 10}, {a: 5, b: 4}])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortedArray([{a: 1, b: 7}, {a: 2, b: 1}])); // [{a:2,b:1},{a:1,b:7}]

console.log('');
console.log('### | Task 40 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

const mergeArrays = (a: number[], b: number[]): number[] => {
    return a.concat(b.filter(x => a.every(y => y !== x))).sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41, 42, 333]

console.log('');
console.log('### | Task 41 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum
*/

const sumBigNumbers = (array: number[], num: number) => {
    const bigNumbers = array.filter(element => element > num);
    return bigNumbers.reduce((a, b) => a + b, 0);
};

console.log(sumBigNumbers([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumBigNumbers([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumBigNumbers([78, 99, 100, 101, 401], 99)); // 602

console.log('');
console.log('### | Task 42 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max
*/

const arrayWithNumbers = (a: number, b: number): number[] => {
    let list = [];
    for (let i = a; i <= b; i++) {
        list.push(i);
    }
    return list
}

console.log(arrayWithNumbers(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayWithNumbers(1, 3)); // [1, 2, 3]
console.log(arrayWithNumbers(-5, 5)); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(arrayWithNumbers(2, 7)); // [2, 3, 4, 5, 6, 7]

console.log('');
console.log('### | Task 43 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}
*/

const arrayWithNames = (array: any[]): { [key: string]: string[] } => {
    return array.reduce((acc, curr) => {
        const firstLetter = curr[0].toLowerCase();
        if (!acc[firstLetter]) {
        acc[firstLetter] = [];
        }
        acc[firstLetter].push(curr);
        return acc;
    }, {})
  }

console.log(arrayWithNames(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(arrayWithNames(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(arrayWithNames(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague']}

console.log('');
console.log('### | Task 44 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array with arbitrary elements and a number as
arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array
*/

const newModifiedArray = (array: any[], num: number): any[] => {
    let newArray = [];
    if (num >= 6) {
        newArray.push(num);
    } else {
        newArray.push(0);
    }
    return newArray.concat(array);
}

console.log(newModifiedArray([1,2,3], 6)); // [6,1,2,3]
console.log(newModifiedArray(['a','b'], 2)); // [0,'a','b']
console.log(newModifiedArray([null,false], 11)); // [11,null,false]

console.log('');
console.log('### | Task 45 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array
*/

const arrayWithNth = (array: number[], num: number): number[] => {
    return array.filter((e, i) => i % num === num - 1)  
}

console.log(arrayWithNth([1,2,3,4,5,6,7,8,9,10],3)); // [3,6,9]
console.log(arrayWithNth([10,9,8,7,6,5,4,3,2,1],5)); // [6,1]
console.log(arrayWithNth([7,2,1,6,3,4,5,8,9,10],2)); // [2,6,4,8,10]


console.log('');
console.log('### | Task 46 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object with two properties as argument
It should return the value of the property with key country
myFunction({ continent: 'Asia', country: 'Japan'})
*/

interface ObjectType {
    continent: string,
    country: string
  };

const countryName = (givenObject: ObjectType): string => {
    return givenObject.country;
}

console.log(countryName({ continent: 'Asia', country: 'Japan'})); // 'Japan'
console.log(countryName({ country: 'Sweden', continent: 'Europe'})); // 'Sweden'

console.log('');
console.log('### | Task 47 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor
*/

interface PropertyType {
    one?: number,
    ['prop-2']: any,
    prop?: string
}

const property = (givvenObject: PropertyType): string | number => {
    return givvenObject['prop-2'];
}

console.log(property({ one: 1, 'prop-2': 2})); // 2
console.log(property({ 'prop-2': 'two', prop: 'test'})); // 'two'

console.log('');
console.log('### | Task 48 | ###');
console.log('&&& | DONE | &&&');
console.log('');

// /*
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// */

const getKeyElement = (info: any, key: string): string => {
    return info[key];
}

console.log(getKeyElement({ continent: 'Asia', country: 'Japan'}, 'continent')); // 'Asia'
console.log(getKeyElement({ country: 'Sweden', continent: 'Europe'}, 'country')); // 'Sweden'

console.log('');
console.log('### | Task 49 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise
*/

const areThereType = (obj: object, letter: string): boolean => {
    const objectKeys = Object.keys(obj);
    return objectKeys.includes(letter);
}

console.log(areThereType({a:1,b:2,c:3},'b')); // true
console.log(areThereType({x:'a',y:'b',z:'c'},'a')); // false
console.log(areThereType({x:'a',y:'b',z:'c'},'z')); // true

console.log('');
console.log('### | Task 50 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object
*/

const objectWithArgument = (letter: string) =>{
    interface ObjectOfLetter {
        key: string
    }

    const obj: ObjectOfLetter = {key: letter}
    return obj
}

console.log(objectWithArgument('a')); // {key:'a'}
console.log(objectWithArgument('z')); // {key:'z'}
console.log(objectWithArgument('b')); // {key:'b'}

console.log('');
console.log('### | Task 51 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/

const objectWithKey = (a: string, b: string): { [key: string]: string} => {
    return { [a]: b }
}

console.log(objectWithKey('a','b')); // {a:'b'}
console.log(objectWithKey('z','x')); // {z:'x'}
console.log(objectWithKey('b','w')); // {b:'w'}

console.log('');
console.log('### | Task 52 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object
*/

const createdObject = (a: any[], b: any[]): { [key: string | number]: string | number } => {
    return a.reduce((acc, curr, i) => {
        acc[curr] = b[i]
        return acc
    }, {})
}
  
console.log(createdObject(["a", "b", "c"], [1, 2, 3])); // {a:1,b:2,c:3}
console.log(createdObject(["w", "x", "y", "z"], [10, 9, 5, 2])); // {w:10,x:9,y:5,z:2}
console.log(createdObject([1, "b"], ["a", 2])); // {1:'a',b:2}

console.log('');
console.log('### | Task 53 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object (a) as argument
Return an array with all object keys
*/

const arrayObjectKeys = (a: object): string[] => {
    return Object.keys(a);
}

console.log(arrayObjectKeys({a:1,b:2,c:3})); // ['a','b','c']
console.log(arrayObjectKeys({j:9,i:2,x:3,z:4})); // ['j','i','x','z']
console.log(arrayObjectKeys({w:15,x:22,y:13})); // ['w','x','y']

console.log('');
console.log('### | Task 54 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object (a) as argument
Return the sum of all object values
*/

const sumObject = (objectForSum: any) => {
    return Object.keys(objectForSum).map(key => objectForSum[key]).reduce((a, b) => a + b, 0);
}

console.log(sumObject({a:1,b:2,c:3})); // 6
console.log(sumObject({j:9,i:2,x:3,z:4})); // 18
console.log(sumObject({w:15,x:22,y:13})); // 50

console.log('');
console.log('### | Task 55 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'
*/

const objectWithoutB = (object: { [key: string]: string | number }): { [key: string]: string | number } => {
    return Object.fromEntries(Object.entries(object).filter(([key]) => key !== "b"))
  }

console.log(objectWithoutB({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(objectWithoutB({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(objectWithoutB({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 }


console.log('');
console.log('### | Task 56 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/


const mergeObjects = (obj1: { [key: string]: string | number }, obj2: { [key: string]: string | number }): { [key: string]: string | number } => {
    obj2.d = obj2.b;
    delete obj2.b;
    return Object.assign({}, obj1, obj2);
}
  
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // { a: 5, b: 4, c: 3, e: 2, d: 1}

console.log('');
console.log('### | Task 57 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object
*/

const multipliedObject = (obj: { [key: string]: number }, num: number): { [key: string]: number } => {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value * num]))
}

console.log(multipliedObject({a:1,b:2,c:3},3)); // {a:3,b:6,c:9}
console.log(multipliedObject({j:9,i:2,x:3,z:4},10)); // {j:90,i:20,x:30,z:40}
console.log(multipliedObject({w:15,x:22,y:13},6)); // {w:90,x:132,y:78}

console.log('');
console.log('### | Task 58 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object
*/

const chancgeKeysAndValues = (obj: { [key: string]: string | number }): { [key: string]: string | number } => {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
}
  
console.log(chancgeKeysAndValues({ z: "a", y: "b", x: "c", w: "d" })); // {a:'z',b:'y',c:'x',d:'w'}
console.log(chancgeKeysAndValues({ 2: "a", 4: "b", 6: "c", 8: "d" })); // {a:'2',b:'4',c:'6',d:'8'}
console.log(chancgeKeysAndValues({ a: 1, z: 24 })); // {1:'a',24:'z'}

console.log('');
console.log('### | Task 59 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object
*/

const removeEmptyValues = (obj: { [key: string]: any }): { [key: string]: string | number } => {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        if (value.trim() === "") {
            return [key, null];
        } else {
            return [key, value];
        }
    }))
};
  
console.log(removeEmptyValues({ a: "a", b: "b", c: "" })) // { a: 'a', b: 'b', c: null }
console.log(removeEmptyValues({ a: "", b: "b", c: " ", d: "d" })) // { a: null, b: 'b', c: null, d: 'd' }
console.log(removeEmptyValues({ a: "a", b: "b ", c: " ", d: "" })) // { a: 'a', b: 'b ', c: null, d: null }

console.log('');
console.log('### | Task 60 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object as argument containing properties with personal
information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in
*/

const printInformation = (obj: { [key: string]: any }): { [key: string]: string } => {
    let newObject = Object.fromEntries(Object.entries(obj).filter(([key]) => key === "fn" || key === "ln" || key === "size" || key === "weight"))
    if (newObject.size) {
        newObject.size = newObject.size.toString()
        newObject.size = newObject.size + "cm"
    }
    if (newObject.weight) {
        newObject.weight = newObject.weight.toString()
        newObject.weight = newObject.weight + "kg"
    }
    return newObject
}

console.log(printInformation({fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67})); // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(printInformation({fn: "Martin", ln: "Harper", age: 26, email: "martin.harper@test.de", weight: 102})); // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(printInformation({fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71})); // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(printInformation({fn: "Matthew", ln: "Müller", age: 19, email: "matthew@mueller.de"})); // {fn: 'Matthew', ln: 'Müller'}

console.log('');
console.log('### | Task 61 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array
*/

const addContinent = (obj: Object[], str: string): Object[] => {
    return obj.map((obj) => {
        return { ...obj, continent: str }
    })
}
  
console.log(addContinent([{ city: "Tokyo", country: "Japan" }, { city: "Bangkok", country: "Thailand" }], "Asia")) // [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinent([{ city: "Stockholm", country: "Sweden" }, { city: "Paris", country: "France" }], "Europe")) // [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

console.log('');
console.log('### | Task 62 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within
the array
*/

const arrayToObject = (array: any[]): { [key: number]: number } => {
    return array.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {})
}

console.log(arrayToObject([1, 2, 2, 3])); // {1:1,2:2,3:1}
console.log(arrayToObject([9, 9, 9, 99])); // {9:3,99:1}
console.log(arrayToObject([4, 3, 2, 1])); // {1:1,2:1,3:1,4:1}

console.log('');
console.log('### | Task 63 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise
*/

const areDatesEqual = (date1: Date, date2: Date): boolean => {
    return date1.getTime() === date2.getTime();
}
  
console.log(areDatesEqual(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))); // false
console.log(areDatesEqual(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))); // true
console.log(areDatesEqual(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))); // false

console.log('');
console.log('### | Task 64 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates
myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
*/

const days = (date1: Date, date2: Date): number => {
    return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
}

console.log(days(new Date("2020-06-11"), new Date("2020-06-01"))); // 10
console.log(days(new Date("2000-01-01"), new Date("2020-06-01"))); // 7457

console.log('');
console.log('### | Task 65 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise
*/

const sameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDay() === date2.getDay();
}
  
console.log(sameDay(new Date("2000/01/01"), new Date("2000/01/01"))); // true
console.log(sameDay(new Date("2000/01/01"), new Date("2000/01/02"))); // false
console.log(sameDay(new Date("2001/01/01"), new Date("2000/01/01"))); // false
console.log(sameDay(new Date("2000/11/01"), new Date("2000/01/01"))); // false

console.log('');
console.log('----- Spred Operators -----');

console.log('');
console.log('### | Task 1 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two number arrays as parameters
and return an array which contains elements from both
arrays
*/

const firstArray = [1, 2];
const secondArray = [3, 4];

const newArray = [...firstArray, ...secondArray];

console.log(newArray); // [1, 2, 3, 4]

const thirdArray = [1, 2];
const fourthArray = [3, 4, 5, 6];

const newestArray = [...thirdArray, ...fourthArray];

console.log(newestArray); // [1, 2, 3, 4, 5, 6]

console.log('');
console.log('### | Task 2 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array and a string as parameters
and return an array which contains all elements from the given array
and the given string as the last element
*/

const fruits = ['Apple', 'Orange', 'Banana'];
const fruit = 'Kiwi';

fruits.push(fruit)

console.log(fruits); // ['Apple', 'Orange', 'Banana', 'Kiwi']

console.log('');
console.log('### | Task 3 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array and a string as parameters
and return an array which contains all elements from the given array
and the given string as the first element
*/

const fruitsMore = ['Apple', 'Orange', 'Banana'];
const fruitMore = 'Kiwi';

const newFruitsMore = [fruitMore, ...fruitsMore]

console.log(newFruitsMore); // ['Kiwi', 'Apple', 'Orange', 'Banana']

console.log('');
console.log('### | Task 4 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes two objects as parameters
and return an object which contains properties from both
objects
myFunction({ a:1, b:2 }, { c:3, d:4 })
Expected
{ a:1, b:2, c:3, d:4 }
myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })
Expected
{ a:1, b:2, c:3, d:4, e:5, f:6 }
*/

const objects1 = { a:1, b:2 };
const objects2 = { c:3, d:4 };

const newObject1 = {...objects1, ...objects2};

console.log(newObject1); // { a:1, b:2, c:3, d:4 }

const objects3 = { a:1, b:2 };
const objects4 = { c:3, d:4, e:5, f:6 };

const newObject2 = {...objects3, ...objects4};

console.log(newObject2); // { a:1, b:2, c:3, d:4, e:5, f:6 }

console.log('');
console.log('### | Task 5 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an object and a string as parameters
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string
*/

const paramerters1 = { eyeColor: 'green', age: 10 };
const movie1 = 'Garfield';

const newInfo1 = { ...paramerters1, favoriteMovie: movie1};

console.log(newInfo1); // { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }

const paramerters2 = { eyeColor: 'blue', age: 15 };
const movie2 = 'Twilight';

const newInfo2 = { ...paramerters2, favoriteMovie: movie2};

console.log(newInfo2); // { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }
