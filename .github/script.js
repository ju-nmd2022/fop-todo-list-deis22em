function clickHandler() {
  const inputElement = document.getElementById("taskInput");
  console.log(inputElement.value);
  const value = inputElement.value;

  if (inputElement.value === "") {
    alert("You must write something");
    console.log("write something");
    inputElement.value = "";
  } else {
    inputElement.value = "";
  }
}

function loadHandler() {
  const button = document.getElementById("addTask");
  button.addEventListener("click", clickHandler);
}

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskInput").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  document.getElementById("myUL").appendChild(li);
}

window.addEventListener("load", loadHandler);
