/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (!list.head) {
    return list;
  }
  let xNext = x.next;
  let xPrev = list.findWithPrevious((node) => node === x)[1];
  let yPrev = list.findWithPrevious((node) => node === y)[1];

  x.next = y.next;
  y.next = xNext;
  if (xPrev) {
    xPrev.next = y;
  } else {
    list.head = y;
  }
  if (yPrev) {
    yPrev.next = x;
  } else {
    list.head = x;
  }
  return list;
}

module.exports = swap;
