import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    this.size++;
    let nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      return;
    }

    let latestNode = this.head;
    while (latestNode.next !== null) {
      latestNode = latestNode.next;
    }
    latestNode.next = nextNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    let latestNode = this.head;
    while (latestNode.next.next !== null) {
      latestNode = latestNode.next;
    }

    const value = latestNode.next.value;
    latestNode.next = null;
    this.size--;
    return value;
  }

  print() {
    let valuesToPrint = "";
    let latestNode = this.head;
    while (latestNode !== null) {
      const comma = latestNode.next ? ", " : "";
      valuesToPrint += `${latestNode.value}${comma}`;
      latestNode = latestNode.next;
    }
    console.log(valuesToPrint);
  }

  // 1) Retorna o valor de um node pelo índice
  getAt(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current.value;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // 2) Retorna o tamanho da lista encadeada
  getSize() {
    return this.size;
  }

  // 3) Remove um elemento pelo índice e retorna seu valor
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return current.value;
    }

    let prev = null;
    let count = 0;
    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;
    this.size--;
    return current.value;
  }

  // 4) Retorna o primeiro índice encontrado de um valor
  search(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  // 5) Retorna o último índice encontrado de um valor
  searchLast(value) {
    let current = this.head;
    let index = 0;
    let lastIndex = -1;

    while (current !== null) {
      if (current.value === value) lastIndex = index;
      current = current.next;
      index++;
    }

    return lastIndex;
  }

  // 6) Retorna a lista encadeada como vetor
  toArray() {
    let arr = [];
    let current = this.head;

    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}
