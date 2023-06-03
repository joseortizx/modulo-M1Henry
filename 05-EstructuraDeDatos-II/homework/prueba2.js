// crear nodo
function Node(value) {
  this.value = value;
  this.next = null;
}

// crear linked list
function LinkedList() {
  this.head = null;
  this.size = 0;
}

// crear metodo add
LinkedList.prototype.add = function (value) {
  // crear un nuevo nodo que utilizara para agregar
  const newNode = new Node(value);
  //tener en cuenta cuando la lista este vacia
  if (this.head === null) {
    this.head = newNode;
    //tener en cuenta cuando la lista tenga un item
  } else {
    // crear variable current para simbolizar en que nodo estoy parado
    let curr = this.head;
    while (curr.next !== null) {
      //ir actualizando current para que no sea siempre el mismo
      curr = curr.next;
    }
    // cuando salga del while necesito que me asigne a curr el nodo
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
