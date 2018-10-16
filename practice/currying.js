import curry from 'lodash/curry';
import filter from 'lodash/filter';

/*
1. Modify the hasElement function to be curryable and then reduce the amount of code needed to product the lightning dragons result!
*/
const dragons = [
  { name: 'fluffy', element: 'lightning' },
  { name: 'doomer', element: 'timewarp' },
  { name: 'bowie', element: 'fire' },
  { name: 'vorkath', element: 'lightning' },
];

const hasElement = (element, obj) => obj.element === element;

const lightningDragons = filter(dragons, dragon =>
  hasElement('lightning', dragon)
); /*?*/

/* Note: with lodash, filter has a shorthand callback for the _.matchesProperty function
    which would make writing this hasElement function redundant, but it works as a good example of the usefulness of currying
  */
