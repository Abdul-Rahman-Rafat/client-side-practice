class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.render();
  }

  removeLast() {
    if (!this.head) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.render();
  }

  render() {
    const container = document.getElementById("listContainer");
    container.innerHTML = "";

    let current = this.head;
    let index = 0;

    while (current) {
      const nodeEl = document.createElement("div");
      nodeEl.className = "node";
      nodeEl.textContent = current.value;
      nodeEl.style.animationDelay = `${index * 0.2}s`; 
      container.appendChild(nodeEl);

      if (current.next) {
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.textContent = "→";
        arrow.style.animationDelay = `${index * 0.2 + 0.1}s`;
        container.appendChild(arrow);
      }

      current = current.next;
      index++;
    }
  }
}

const list = new LinkedList();

function addNode() {
  const value = document.getElementById("nodeValue").value;
  if (value.trim() !== "") {
    list.add(value);
    document.getElementById("nodeValue").value = "";
  }
}

function removeNode() {
  list.removeLast();
}
