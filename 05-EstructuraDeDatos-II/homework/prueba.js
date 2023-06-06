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

// - remove: elimina el último nodo de la lista y retorna su valor ( tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

LinkedList.prototype.remo = function () {
  if (this.head === null) {
    return "La lista esta vacia";
  } else {
    let curr = this.head;
    console.log(this.size);
    for (let i = 0; i < 1; i++) {
      curr = curr.next;
    }
    curr.next = null;
  }
  this.size--;
};
list;

LinkedList.prototype.remove = function () {
  // si la lista esta vacia
  let curr = this.head;
  if (this.head === null) {
    return "La lista esta vacia";
  } else if (this.head !== null || curr.next.next === null) {
    // si la lista tiene un solo nodo
    this.head = null;
  } else {
    // si la lista tiene mas de un nodo
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  this.size--;
};
list;
list.remove();
list;
list.remove();
list;
