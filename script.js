function manage(todo) {
  var bt = document.getElementById('myBtn');
  if (todo.value != '') {
      bt.disabled = false;
  }
  else {
      bt.disabled = true;
  }
}

function myFunction() {
  var x = document.createElement("LI");
  var y = document.createElement("button");
  var t = document.createTextNode(todo.value);
  x.appendChild(t);
  document.getElementById("todoList").appendChild(x);
}

function myFunction1() {
  document.getElementById("todoList").innerHTML =" ";
}

const ul = document.querySelector('#todoList');
ul.addEventListener('click', function(e) {
  this.removeChild(e.target);
})