import Node from "./node.js";

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Adds a new node to the end of the linked list.
   *
   * @param {*} value - The value to be added to the linked list.
   * @returns {LinkedList} The linked list instance.
   */
  push(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      // if there are n nodes in the list
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Removes the last node from the linked list.
   *
   * @returns {Object|undefined} The removed node,
   * or undefined if the list is empty.
   */
  pop() {
    // if there are no nodes in the list
    if (!this.head) return undefined;

    // if there are n nodes in the list
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // if there is only one node in the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return temp because it is the node that was removed
    return temp;
  }

  /**
   * Adds a new node to the beginning of the linked list.
   *
   * @param {*} value - The value to be added to the linked list.
   * @returns {LinkedList}
   * The linked list instance with the new node added.
   */
  unshift(value) {
    const newNode = new Node(value);

    // if there are no nodes in the list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // if there are n nodes in the list
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Removes the first node from the linked list and returns it.
   *
   * @returns {Object|undefined}
   * The removed node, or undefined if the list is empty.
   */
  shift() {
    // if there are no nodes in the list
    if (!this.head) return undefined;

    // if there are n nodes in the list
    const temp = this.head;

    this.head = this.head.next;
    temp.next = null;
    this.length--;

    // if there is only one node in the list
    // just need to set the tail,
    // because if there is only one node in the list,
    // it will be to handle the case when the list is n nodes
    if (this.length === 0) this.tail = null;

    return temp;
  }

  /**
   * Retrieves the node at the specified index in the linked list.
   *
   * @param {number} index - The zero-based index of the node to retrieve.
   * @returns {(Object|undefined)}
   * The node at the specified index, or undefined if the index is out of bounds.
   */
  get(index) {
    // if the index is out of bounds (-1 or greater than the length of the list)
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  /**
   * Sets the value of the node at the specified index.
   *
   * @param {number} index - The index of the node to update.
   * @param {*} value - The new value to set for the node.
   * @returns {boolean} - Returns true if the node was found and updated, otherwise false.
   */
  set(index, value) {
    const temp = this.get(index);

    if (temp) {
      temp.value = value;

      return true;
    }

    return false;
  }

  /**
   * Inserts a new node with the given value at the specified index in the linked list.
   *
   * @param {number} index - The position at which to insert the new node. Must be between 0 and the length of the list.
   * @param {*} value - The value to be stored in the new node.
   * @returns {boolean} - Returns true if the insertion was successful, otherwise false.
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    // if insert in middle nodes in the list
    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }

  /**
   * Removes a node from the linked list at the specified index.
   *
   * @param {number} index - The index of the node to remove.
   * @returns {Object|undefined} - The removed node, or undefined if the index is out of bounds.
   */
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    // if remove in middle nodes in the list
    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  /**
   * Reverses the linked list in place.
   *
   * This method swaps the head and tail of the linked list and then iterates
   * through the list, reversing the direction of each node's `next` pointer.
   *
   * @returns {LinkedList} The reversed linked list.
   */
  reverse() {
    let temp = this.head;

    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  /**
   * Resets the linked list to an empty state.
   * Sets the head and tail to null and length to 0.
   */
  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    const arr = [];
    let temp = this.head;

    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }

    return arr;
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

export default LinkedList;
