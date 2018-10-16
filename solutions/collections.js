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

uniq(map(dragons, d => d.type)); /*?*/

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

filter(peopleWithAHobby, ['hobby', 'cooking']); /*?*/

/*
 3. A bit harder, use reduce to take the `tab` delineated file 'data.txt'
*/

const output = map(
  fs
    .readFileSync('practice/data.txt', 'utf8')
    .trim()
    .split('\n'),
  line => line.split('\t')
); /*?*/

reduce(
  output,
  (customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3],
    });
    return customers;
  },
  {}
); /*?*/
