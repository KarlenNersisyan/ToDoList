const addBtn = document.querySelector(".addBtn");
const input = document.querySelector("#input");
const removeList = document.querySelector("#removeList");

const toDoListContainer = document.querySelector("#toDoList-Container");

//Message
let messageClose = document.querySelector(".close");
let messageUser = document.querySelector(".messageUser-background");

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    const listWrapper = document.createElement("li");
    listWrapper.classList.add("list-wrapper");

    const toDoListItem = document.createElement("div");
    toDoListItem.classList.add("toDoList-Item");
    const toDoListElement = document.createElement("span");
    toDoListElement.classList.add("toDoList-text");
    toDoListElement.innerText = input.value;
    input.value = "";
    toDoListItem.append(toDoListElement);
    listWrapper.append(toDoListItem);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // button icons
    const indicateButton = document.createElement("button");
    indicateButton.classList.add("indicate-button");
    indicateButton.innerHTML = '<i class="fas fa-check"></i>';

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    buttonContainer.append(editButton, indicateButton, removeButton);
    listWrapper.append(buttonContainer);
    toDoListContainer.append(listWrapper);

    // Edit Function
    editButton.addEventListener("click", function () {
      const inpElement = this.parentNode.previousElementSibling.childNodes[0];
      let input;
      if (inpElement.tagName === "SPAN") {
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.classList.add("input-main");
        input.value = inpElement.innerText;
        inpElement.parentNode.replaceChild(input, inpElement);
      } else {
        input = document.createElement("span");
        input.classList.add("todo-text");
        input.innerText = inpElement.value;
        inpElement.parentNode.replaceChild(input, inpElement);
      }
    });

    //  Indicate Function
    indicateButton.addEventListener("click", function () {
      const inputSpan = this.parentNode.previousElementSibling.childNodes[0];
      if (inputSpan.classList.contains("line-through")) {
        inputSpan.classList.remove("line-through");
      } else {
        inputSpan.classList.add("line-through");
      }
    });
    //  Remove Function
    removeButton.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  } else {
    messageUser.style.display = "block";
    toDoListContainer.style.display = "none";
  }
});

// Remove All Function
removeList.addEventListener("click", function () {
  toDoListContainer.innerHTML = "";
});

messageClose.addEventListener("click", () => {
  messageUser.style.display = "none";
  toDoListContainer.style.display = "block";
});
