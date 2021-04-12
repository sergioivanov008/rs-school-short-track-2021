const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  get size() {
    let length = 0;
    let firstNode = this.head;
    while (firstNode) {
      length += 1;
      firstNode = firstNode.next;
    }
    return length;
  }

  enqueue(element) {
    const addNode = new ListNode(element);
    if (!this.head) {
      this.head = addNode;
      this.next = addNode;
    } else {
      this.next.next = addNode;
      this.next = addNode;
    }
    return element;
  }

  dequeue() {
    const delNode = this.head;
    this.head = this.head.next;
    return delNode.value;
  }
}

module.exports = Queue;
