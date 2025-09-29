const employees = [
  { name: "Ali", position: "Accountant", office: "Tokyo", age: 33, sDate: "2008-11-28" },
  { name: "Bogy", position: "full stack", office: "London", age: 41, sDate: "2012-10-13" },
  { name: "Nagy", position: "Engineer", office: "cairo", age: 38, sDate: "2011-05-03" },
  { name: "kareem", position: "it support", office: "New York", age: 21, sDate: "2011-12-12" },
  { name: "omar", position: "back-end", office: "cairo", age: 22, sDate: "2012-03-29" }
];

const table_body = document.getElementById("t_body");

function add_row(row) {
  table_body.innerHTML = "";
  row.forEach(employee => { const t_row = document.createElement("tr");


    t_row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.office}</td>
      <td>${employee.age}</td>
      <td>${employee.sDate}</td>
    `;


    table_body.appendChild(t_row);
  });
}

add_row(employees);

let sortState = {}; // keep track of sort direction

document.querySelectorAll("th").forEach(th => {
  th.addEventListener("click", () => {
    const key = th.getAttribute("data-key");
    const isAsc = sortState[key] === "asc";
    
    // sort
    const sorted = [...employees].sort((a, b) => {
      if (key === "age") {
        return isAsc ? b.age - a.age : a.age - b.age;
      } else if (key === "sDate") {
        return isAsc 
          ? new Date(b.sDate) - new Date(a.sDate)
          : new Date(a.sDate) - new Date(b.sDate);
      } else {
        return isAsc 
          ? b[key].localeCompare(a[key]) 
          : a[key].localeCompare(b[key]);
      }
    });

    document.querySelectorAll("th").forEach(h => h.classList.remove("asc", "desc"));
    th.classList.add(isAsc ? "desc" : "asc");

    sortState[key] = isAsc ? "desc" : "asc";

    add_row(sorted);
  });
});




    function Node(data) {
      this.data = data;
      this.next = null;
    }

    function LinkedList() {
      this.head = null;

      this.add = function(data) {
        var newNode = new Node(data);
        if (this.head === null) {
          this.head = newNode;
        } else {
          var current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
      };

      this.print = function() {
        var current = this.head;
        var result = [];
        while (current !== null) {
          result.push(current.data);
          current = current.next;
        }
        return result.join(" → ");
      };
    }

    var list = new LinkedList();
    list.add(10);
    list.add(20);
    list.add(30);
    list.add(40);

    document.getElementById("listOutput").innerText = list.print();
