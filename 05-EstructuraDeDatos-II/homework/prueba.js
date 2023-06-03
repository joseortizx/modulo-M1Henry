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
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      // ?para que itero hasta el ultimo?
      // para llegar al ultimo .next y asignarle el valor de newNode
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

const list = new LinkedList();
list.add(20);
list;
list.add(30);
list;
