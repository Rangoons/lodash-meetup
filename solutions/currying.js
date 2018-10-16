import curry from 'lodash/curry';
import filter from 'lodash/filter';

const dragons = [
  { name: 'fluffy', element: 'lightning' },
  { name: 'doomer', element: 'timewarp' },
  { name: 'bowie', element: 'fire' },
  { name: 'vorkath', element: 'lightning' },
];

const hasElement = curry((element, obj) => obj.element === element);

const lightningDragons = filter(dragons, hasElement('lightning')); /*?*/

/*
Explanation:
  both vanilla JS filter and lodash filter, pass the current iteration of the collection it is iterating over
  to the second argument of the filter function.

  It technically looks like this: 
  filter(dragons, hasElement(element)(obj));
*/
