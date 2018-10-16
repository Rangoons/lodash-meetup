import map from 'lodash/map';
import without from 'lodash/without';
import filter from 'lodash/filter';
import parseInt from 'lodash/parseInt';
import reduce from 'lodash/reduce';

/*
*******************************************************************
 __      __ _              _             _            _      ___ 
 \ \    / /| |_  _  _     | |    ___  __| | __ _  ___| |_   |__ \
  \ \/\/ / | ' \| || |    | |__ / _ \/ _` |/ _` |(_-<| ' \    /_/
   \_/\_/  |_||_|\_, |    |____|\___/\__,_|\__,_|/__/|_||_|  (_) 
                 |__/                                                                                                                                                                                   
*******************************************************************
1. Safety
2. Performance
3. Extensibile
4. Indepth Documentation
5. Functional Programming
*/

/*
 * first, a quick recap of array transformation methods
 * 1. map: [animals] => [animal names]
 * 2. filter: [animals] => [dogs]
 * 3. reject: [animals] => [not dogs]
 * 4. find: [animals] => [Gilligan the dog]
*/
const itemsArray = [1, 2, 3, 4, 5];
const itemsString = '1,2,3,4,5';

/* SAFETY */
map(itemsArray, item => item); /*?*/
map(itemsString); /*?*/

//itemsArray.map() /*?*/
// itemsString.map(item => item) /*?*/

without(map(itemsString, parseInt), NaN); /*?*/

/* PERFORMANCE & EXTENSIBILITY */
const square = n => n * n;
const numbers = [4, 8];
const numbersObj = { a: 4, b: 8 };
const users = [{ name: 'Batman', hero: true }, { name: 'Joker', hero: false }];

map(numbers, square); /*?*/
map(numbersObj, square); /*?*/
map(users, 'name'); /*?*/

/* Long way & different shorthands */

/* Heros, the long way */
filter(users, u => u.hero); /*?*/
/* Heros, the short way */
filter(users, 'hero'); /*?*/
/* Villains by _.matchesProperty */
filter(users, ['hero', false]); /*?*/

/*
 * What about when map, filter, reject, or find can't do what you need it to?
 * Reduce!
 * Reduce can be used to express any list transformation
 * it can be used to implement any other list transformations as well, ie mapping or filtering within a reduce
*/

const orders = [
  { amount: 250 },
  { amount: 100 },
  { amount: 400 },
  { amount: 320 },
];

reduce(
  orders,
  (sum, order) => {
    sum; /*?*/
    order; /*?*/
    return sum + order.amount;
  },
  0
); /*?*/ //<== 0 is the initial value

const surveyResults = [
  [
    { answer: 'lorem', answerID: 2, questionID: 1 },
    { answer: 'ipsum', answerID: 1, questionID: 1 },
  ],
  [
    { answer: 'dolor', answerID: 1, questionID: 2 },
    { answer: 'sit', answerID: 3, questionID: 2 },
  ],
  [{ answer: 'amet', answerID: 1, questionID: 3 }],
];

reduce(
  surveyResults,
  (result, value, key) => {
    value;
    const answerIDs = map(value, val => val.answerID);
    const questionID = value[0] && value[0].questionID;
    result[key] = { questionID, answerIDs };
    return result;
  },
  []
); /*?*/
