function LinkedList() {
  this.head = null;
  this.size = 0;
}
function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    return value;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

const list = new LinkedList();
list;
list.add(10);
list;
list.add(20);
list;
