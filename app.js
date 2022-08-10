//creating a delete button
const createNodeList = document.getElementsByTagName("li");

for (let i = 0; i <= createNodeList.length - 1; i++) {
  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  createNodeList[i].appendChild(span);
}

// create logic for deleting old tasks

let close = document.querySelectorAll(".close");
close.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let currentElement = e.target;
    currentElement.parentNode.remove();
  });
});

// make the task complete

let performdTask = document.querySelector("ul");
performdTask.addEventListener("click", (e) => {
  let currentElement = e.target;
  currentElement.classList.toggle("oneTask");
});

// add a new task to the list

function myFunction() {
  let currentUl = document.getElementById("ul");
  let newData = document.getElementById("currInput").value;

  if (newData.length <= 4) {
    alert("Minimum 5 words!");
    return (document.getElementById("currInput").value = "");
  }

  let newPost = document.createElement("li");
  newPost.innerText = newData;
  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  newPost.appendChild(span);
  currentUl.insertAdjacentElement("beforeend", newPost);
  document.getElementById("currInput").value = "";

  // delete all tasks along with newly created ones

  let close__2 = document.querySelectorAll(".close");
  close__2.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let currentElement = e.target;
      currentElement.parentNode.remove();
    });
  });
}

// create the ability to add tasks via the enter key

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter" && event.target.nodeName == 'INPUT') {
    myFunction();
  }
});