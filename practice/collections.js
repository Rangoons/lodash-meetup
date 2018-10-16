import map from 'lodash/map';
import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';

import fs from 'fs';

/*
1. Write a function that returns an array of only dragon types, with no duplicates
*/
const dragons = [
  { name: 'Spark', type: 'lightning' },
  { name: 'Fluffy', type: 'ice' },
  { name: 'Longo', type: 'fire' },
  { name: 'Gilligan', type: 'lightning' },
];

/*
2. Write a function that returns an array of people who like to cook
*/

const peopleWithAHobby = [
  { name: 'Jon', hobby: 'cooking' },
  { name: 'Jake', hobby: 'cooking' },
  { name: 'Matt', hobby: 'eating' },
  { name: 'Rose', hobby: 'camping' },
  { name: 'Kiersten', hobby: 'cooking' },
  { name: 'Katie', hobby: 'biking' },
];

/*
 4. A bit harder, use reduce to take the `tab` delineated file 'data.txt' and turn it into a json object shaped like this:

 {
   'mark johansson': [
     {name: 'waffle iron', price: '80', quantity: '2'},
     {...rest of items}
   ],
   'Nikita Smith': [
     {name: 'waffle iron', price: '80', quantity: '1'},
     {...rest of items}
   ]
 }
*/

//the functions applied to the file sync make it a little easier to work with the lines of text
const output = map(
  fs
    .readFileSync('practice/data.txt', 'utf8')
    .trim()
    .split('\n'),
  line => line.split('\t')
);
