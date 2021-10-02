import { Comparator } from '../../../utils';

/**
 * Linear search implementation.
 *
 * In computer science, linear search or sequential search is a method for
 * finding a target value within a list. It sequentially checks each element
 * of the list for the target value until a match is found or until all the
 * elements have been searched. Linear search runs in at worst linear time and
 * makes at most `n` comparisons, where `n` is the length of the list.
 *
 * Time Complexity: `O(n)` - since in the worst case we are checking each
 * element exactly once.
 */
export default function linearSearch(
  array: Array<number | string>,
  seekElement: number | string,
  callback: (a: number | string, b: number | string) => number
): Array<number> {
  const comparator = new Comparator(callback);
  const foundIndeces = [];

  array.forEach((element, index) => {
    if (comparator.equal(element, seekElement)) {
      foundIndeces.push(index);
    }
  });

  return foundIndeces;
}
