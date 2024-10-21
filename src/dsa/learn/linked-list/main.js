import LinkedList from "./linked-list.js";

const newLinkedList = new LinkedList(10);

newLinkedList.push(5);

// newLinkedList.pop();

// newLinkedList.unshift(1);

// newLinkedList.shift();

newLinkedList.push(11);

// newLinkedList.set(0, 22);

newLinkedList.insert(1, 33);
newLinkedList.insert(2, 12);
newLinkedList.insert(0, 3);

newLinkedList.remove(1);

console.log("🐔 =>  LinkedList:", newLinkedList);

console.log("Result list =>", newLinkedList.print());

newLinkedList.reverse();

console.log("Result list =>", newLinkedList.print());
