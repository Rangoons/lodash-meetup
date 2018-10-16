import curry from 'lodash/curry';

/*
  Currying:
  A curryable function is a function that takes every argument by itself then just returns a new function that expects the next dependency
  of the function until all dependencies have been fulfilled and the final value is returned
*/

const dragon = (name, size, element) =>
  name + ' is a ' + size + ' dragon that breathes ' + element + '!';

dragon('Johnny', 'huge', 'fire'); /*?*/

const curryDragon = name => size => element =>
  name + ' is a ' + size + ' dragon that breathes ' + element + '!';

curryDragon('Johnny')('huge')('fire'); /*?*/

const fluffykinsDragon = curryDragon('Fluffykins');

fluffykinsDragon('tiny')('lightning'); /*?*/

const tinyDragon = fluffykinsDragon('tiny');

tinyDragon('lightning'); /*?*/

const curriedDragon = curry(dragon);
curriedDragon('Johnny')('huge')('fire'); /*?*/
