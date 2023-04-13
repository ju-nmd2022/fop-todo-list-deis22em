function clickHandler() {
  const inputElement = document.getElementById("taskInput");
  console.log(inputElement.value);
  const value = inputElement.value;

  //deletes sentence in input field and make sure you write something
  if (inputElement.value === "") {
    alert("You must write something");
    console.log("write something");
    inputElement.value = "";
  } else {
    inputElement.value = "";
    localStorage.setItem("taskList", document.getElementById("myUL").innerHTML);
  }
}

//some of the following lines of code was adapted from https://www.w3schools.com/howto/howto_js_todolist.asp, as well as ChatGPT

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskInput").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  document.getElementById("myUL").appendChild(li);
  localStorage.setItem("taskList", document.getElementById("myUL").innerHTML);

  //crosses a line in the text when pressed and deletes text when double clicked
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.color = "#5a4a8a";
    localStorage.setItem("taskList", document.getElementById("myUL").innerHTML);
  });

  li.addEventListener("dblclick", function () {
    localStorage.removeItem(this.innerHTML);
    myUL.removeChild(li);
    localStorage.setItem("taskList", document.getElementById("myUL").innerHTML);
  });
}

function loadHandler() {
  const button = document.getElementById("addTask");
  button.addEventListener("click", clickHandler, newElement);
  const savedList = localStorage.getItem("taskList");
  if (savedList) {
    document.getElementById("myUL").innerHTML = savedList;
    const listItems = document.querySelectorAll("#myUL li");
    listItems.forEach(function (item) {
      item.addEventListener("click", function () {
        item.style.textDecoration = "line-through";
        item.style.color = "#5a4a8a";
        localStorage.setItem(
          "taskList",
          document.getElementById("myUL").innerHTML
        );
      });
      item.addEventListener("dblclick", function () {
        localStorage.removeItem(item.innerHTML);
        myUL.removeChild(item);
        localStorage.setItem(
          "taskList",
          document.getElementById("myUL").innerHTML
        );
      });
    });
  }
}

window.addEventListener("load", loadHandler);
