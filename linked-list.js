/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }
    this.tail.next = newNode;
    this.tail = newNode

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      // Empty list, nothing to pop
      return null;
    }

    if (!this.head.next) {
      const poppedData = this.head.data;
      this.head = null;
      return poppedData
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next
    }
    previous.next = null;
    return current.data;


  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    }
    const poppedHead = this.head.data;
    this.head = this.head.next;
    return poppedHead;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (index < 0) {
      return null; // Invalid index
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return null; // Index out of bounds


  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (index < 0) {
      return false; // Invalid index
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        current.data = value;
        return true; // Value set successfully
      }

      count++;
      current = current.next;
    }

    return false; // Index out of bounds
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (index < 0) {
      return false; // Invalid index
    }

    const newNode = new Node(value);

    if (index === 0) {
      // Insert at the beginning
      newNode.next = this.head;
      this.head = newNode;
      return true;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index - 1) {
        // Insert the new node after the current node
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }

      count++;
      current = current.next;
    }

    return false; // Index out of bounds
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (index < 0 || !this.head) {
      return false; // Invalid index or empty list
    }

    if (index === 0) {
      // Remove the node at the beginning
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    let count = 0;

    while (current.next) {
      if (count === index - 1) {
        // Remove the next node
        current.next = current.next.next;
        return true;
      }

      count++;
      current = current.next;
    }

    return false; // Index out of bounds
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0; // Return 0 if the list is empty
    }

    let current = this.head;
    let sum = 0;
    let count = 0;

    while (current) {
      sum += current.data;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}

module.exports = LinkedList;
