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
  }
}

//the following lines of code was adapted from https://www.w3schools.com/howto/howto_js_todolist.asp
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskInput").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  document.getElementById("myUL").appendChild(li);

  localStorage.setItem("li", JSON.stringify(text));

  //crosses a line in the text when pressed and deletes text when double clicked
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.color = "#5a4a8a";
  });

  li.addEventListener("dblclick", function () {
    myUL.removeChild(li);
  });
}

function loadHandler() {
  const button = document.getElementById("addTask");
  button.addEventListener("click", clickHandler);
}

window.addEventListener("load", loadHandler);
