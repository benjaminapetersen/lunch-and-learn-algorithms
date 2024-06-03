// this is a heaps discussion from the following YouTube video:
// https://www.youtube.com/watch?v=t0Cq6tVNRBA
// Data Structures: Heaps
//
// 
//
class MinIntHeap {
  constructor() {
    // not sure there are needed in JS
    this.capacity = 10;
    this.size = 0;
    // this is strange in JavaScript, and can be confusing 
    // as it may do strange things
    // this.items = new Array(Number(this.capacity));
    this.items = [];
  }
  // get the index of item
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRigthChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return (childIndex -1) / 2;
  }
  // ask if item exists
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRigthChildIndex(index) > this.size;
  } 
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  // get the actual item
  leftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.getRigthChildIndex(index)];
  }
  parent(index) {
    return this.items[this.getParentIndex(index)];
  }
  swap(indexOne, indexTwo) {
    tmp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }
  // JS does this for us dynamically, but the instrucion was given from 
  // the perspective of a Java developer
  // ensureExtraCapacity() {
  //   if(this.size == this.capacity) {
  //     this.items = Array.copyOf(this.items, capacity * 2);
  //     // double it again for next time.
  //     this.capacity *= 2;
  //   }
  // }
}