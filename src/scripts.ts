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

console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

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

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

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

console.log(typeOfValue(1));
console.log(typeOfValue(false));
console.log(typeOfValue({}));
console.log(typeOfValue(null));
console.log(typeOfValue('string'));
console.log(typeOfValue(['array']));

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

console.log(equal(2, 3));
console.log(equal(3, 3));
console.log(equal(1, '1'));
console.log(equal('10', '10'));

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

console.log(neededCharacter('abcd', 1));
console.log(neededCharacter('zyxbwpl', 5));
console.log(neededCharacter('gfedcba', 3));

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

console.log(removeFirst3Characters('abcdefg'));
console.log(removeFirst3Characters('1234'));
console.log(removeFirst3Characters('fgedcba'));

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

console.log(getLast3Characters('abcdefg'));
console.log(getLast3Characters('1234'));
console.log(getLast3Characters('fgedcba'));

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

console.log(getFirst3Characters('abcdefg'));
console.log(getFirst3Characters('1234'));
console.log(getFirst3Characters('fgedcba'));

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

console.log(getFirstHalfCharacters('abcdefg'));
console.log(getFirstHalfCharacters('1234'));
console.log(getFirstHalfCharacters('fgedcba'));

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

console.log(removeLast3Characters('abcdefg'));
console.log(removeLast3Characters('1234'));
console.log(removeLast3Characters('fgedcba'));

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

console.log(getPercent(100, 50));
console.log(getPercent(10, 1));
console.log(getPercent(500, 25));

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
    return Math.pow(((a + b - c) * d / e), f)
}

console.log(calculate(6,5,4,3,2,1));
console.log(calculate(6,2,1,4,2,3));
console.log(calculate(2,3,6,4,2,3));

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

console.log(even(10));
console.log(even(-4));
console.log(even(5));
console.log(even(-11));

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

console.log(repeats('m', 'how many times does the character occur in this sentence?'));
console.log(repeats('h', 'how many times does the character occur in this sentence?'));
console.log(repeats('?', 'how many times does the character occur in this sentence?'));
console.log(repeats('z', 'how many times does the character occur in this sentence?'));

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

console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

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

console.log(smallerOrBigger(10, 100));
console.log(smallerOrBigger(90, 45));
console.log(smallerOrBigger(8, 20));
console.log(smallerOrBigger(2, 0.5));

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

console.log(containsOrNot('cheese', 'cake'));
console.log(containsOrNot('lips', 's'));
console.log(containsOrNot('Java', 'script'));
console.log(containsOrNot(' think, therefore I am', 'I'));

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

console.log(roundANumber(2.12397));
console.log(roundANumber(3.136));
console.log(roundANumber(1.12397));
console.log(roundANumber(26.1379));

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

console.log(splitNumber(10));
console.log(splitNumber(931));
console.log(splitNumber(193278));

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

console.log(joinWords('java', 'tpi%rcs'));
console.log(joinWords('c%ountry', 'edis'));
console.log(joinWords('down', 'nw%ot'));

console.log('');
console.log('### | Task 21 | ###');

/*
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/

function primeNumber(num: number): number {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            num += 1;
        }
    }
    return num;
}

console.log(primeNumber(38));
console.log(primeNumber(7));
console.log(primeNumber(115));
console.log(primeNumber(2000));

console.log('');
console.log('### | Task 22 | ###');

/*
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y
*/

const naturalNumbers = []

const testDivisiblity = (a: number, b: number): number => {
    if (a % b === 0) {
        return a
    } else {
        return 0
    }
}

console.log(testDivisiblity(1, 23));
console.log(testDivisiblity(23, 23));
console.log(testDivisiblity(17, 3));
console.log(testDivisiblity(-5, 7));


/*
myFunction(1, 23)
Expected
23
myFunction(23, 23)
Expected
23
myFunction(7, 3)
Expected
9
myFunction(-5, 7)
Expected
0
*/


console.log('');
console.log('### | Task 23 | ###');

/*
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string
*/

/*
const insertCharacter = (a: string, b: string) => {

}

console.log(insertCharacter('1234567', '.'));
console.log(insertCharacter('abcde','$'));
console.log(insertCharacter('zxyzxyzxyzxyzxyz','w'));

 */

console.log('');
console.log('### | Task 24 | ###');

/*
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

/*
console.log(changedWord('bnchmf'));
console.log(changedWord('bgddrd'));
console.log(changedWord('sdrshmf'));
 */

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

console.log(returnNumber([1, 2, 3, 4, 5],3));
console.log(returnNumber([10, 9, 8, 7, 6],5));
console.log(returnNumber([7, 2, 1, 6, 3],1));

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

console.log(withoutFirst3([1,2,3,4]));
console.log(withoutFirst3([5,4,3,2,1,0]));
console.log(withoutFirst3([99,1,1]));

console.log('');
console.log('### | Task 27 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array
myFunction([1,2,3,4])
Expected
[2,3,4]
myFunction([5,4,3,2,1,0])
Expected
[2,1,0]
myFunction([99,1,1])
Expected
[99,1,1]
*/

const last3Elements = (list: number[]): number[] => {
    return list.splice(list.length -3);
}

console.log(last3Elements([1,2,3,4]));
console.log(last3Elements([5,4,3,2,1,0]));
console.log(last3Elements([99,1,1]));

console.log('');
console.log('### | Task 28 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array

myFunction([1,2,3,4])
Expected
[1,2,3]
myFunction([5,4,3,2,1,0])
Expected
[5,4,3]
myFunction([99,1,1])
Expected
[99,1,1]
*/

const first3Elements = (list: number[]): number[] => {
    return list.splice(0, 3);
}

console.log(first3Elements([1,2,3,4]));
console.log(first3Elements([5,4,3,2,1,0]));
console.log(first3Elements([99,1,1]));

console.log('');
console.log('### | Task 29 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a
myFunction([1, 2, 3, 4, 5], 2)
*/

const withoutLastXElements = (list: number[], element: number): number[] => {
    return list.splice(list.length - element);
}

console.log(withoutLastXElements([1, 2, 3, 4, 5], 2));
console.log(withoutLastXElements([1, 2, 3], 6));
console.log(withoutLastXElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log('');
console.log('### | Task 30 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array
myFunction([1,2,3], 2)
Expected
[1, 3]
myFunction([1,2,'2'], '2')
Expected
[1, 2]
myFunction([false,'2',1], false)
Expected
['2', 1]
myFunction([1,2,'2',1], 1)
Expected
[2, '2']
*/

const filteredArray = (list: any[], element: string | number | boolean): number[] => {
    return list.filter(item => item !== element);
}

console.log(filteredArray([1,2,3], 2));
console.log(filteredArray([1,2,'2'], '2'));
console.log(filteredArray([false,'2',1], false));
console.log(filteredArray([1,2,'2',1], 1));

console.log('');
console.log('### | Task 31 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array (a) as argument
Return the number of elements in a
myFunction([1,2,2,4])
Expected
4
myFunction([9,9,9])
Expected
3
myFunction([4,3,2,1,0])
Expected
5
*/

const numberOfElements = (list: number[]): number => {
    return list.length;
}

console.log(numberOfElements([1,2,2,4]));
console.log(numberOfElements([9,9,9]));
console.log(numberOfElements([4,3,2,1,0]));

console.log('');
console.log('### | Task 32 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of numbers as argument
Return the number of negative values in the array
myFunction([1,-2,2,-4])
*/

const negativeNumbers = (list: number[]): number => {
    return list.filter(element => (element < 0)).length;
}

console.log(negativeNumbers([1,-2,2,-4]));
console.log(negativeNumbers([0,9,1]));
console.log(negativeNumbers([4,-3,2,1,0]));

console.log('');
console.log('### | Task 33 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order
myFunction([1,3,2])
Expected
[3,2,1]
myFunction([4,2,3,1])
Expected
[4,3,2,1]
*/

const numArray = (list: number[]) => {
    return list.sort((a, b) => a - b);
}

console.log(numArray([1,3,2]));
console.log(numArray([4,2,3,1]));

console.log('');
console.log('### | Task 34 | ###');

/*
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result
myFunction(['b', 'c', 'd', 'a'])
Expected
['a', 'b', 'c', 'd']
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
Expected
['a', 'a', 'c', 'd', 'w', 'y', 'z']
*/

console.log('');
console.log('----- Spred Operators -----');

console.log('');
console.log('### | Task 1 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
myFunction([1, 2], [3, 4])
Expected
[1, 2, 3, 4]
*/

const firstArray = [1, 2];
const secondArray = [3, 4];

const newArray = [...firstArray, ...secondArray];

console.log(newArray);

const thirdArray = [1, 2];
const fourthArray = [3, 4, 5, 6];

const newestArray = [...thirdArray, ...fourthArray];

console.log(newestArray);

console.log('');
console.log('### | Task 2 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi');
Expected
['Apple', 'Orange', 'Banana', 'Kiwi']
*/

const fruits = ['Apple', 'Orange', 'Banana'];
const fruit = 'Kiwi';

fruits.push(fruit)

console.log(fruits);

console.log('');
console.log('### | Task 3 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi');
Expected
['Kiwi', 'Apple', 'Orange', 'Banana']
*/

const fruitsMore = ['Apple', 'Orange', 'Banana'];
const fruitMore = 'Kiwi';

const newFruitsMore = [fruitMore, ...fruitsMore]

console.log(newFruitsMore);

console.log('');
console.log('### | Task 4 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
myFunction({ a:1, b:2 }, { c:3, d:4 })
Expected
{ a:1, b:2, c:3, d:4 }
myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })
Expected
{ a:1, b:2, c:3, d:4, e:5, f:6 }
*/

const objects1 = { a:1, b:2 };
const objects2 = { c:3, d:4 };

const newObject3 = {...objects1, ...objects2};

console.log(newObject3);

const objects3 = { a:1, b:2 };
const objects4 = { c:3, d:4, e:5, f:6 };

const newObject5 = {...objects3, ...objects4};

console.log(newObject5);

console.log('');
console.log('### | Task 5 | ###');
console.log('&&& | DONE | &&&');
console.log('');

/*
myFunction({ eyeColor: 'green', age: 10 }, 'Garfield')
Expected
{ eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }
myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight')
Expected
{ eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }
*/

const paramerters1 = { eyeColor: 'green', age: 10 };
const movie1 = 'Garfield';

const newInfo1 = { ...paramerters1, favoriteMovie: movie1};

console.log(newInfo1);

const paramerters2 = { eyeColor: 'blue', age: 15 };
const movie2 = 'Twilight';

const newInfo2 = { ...paramerters2, favoriteMovie: movie2};

console.log(newInfo2);