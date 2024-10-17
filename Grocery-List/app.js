const input = document.getElementById("grocery-input");
const submitBtn = document.getElementById("submit-btn");
const List = document.querySelector(".grocery-list");
const form = document.getElementById("form");
const clearBtn = document.querySelector(".clear-all");

let editElement;
let editFlag = false;
let editId = "";

const alert = document.querySelector(".alert");

form.addEventListener("submit", addToGroceryList);

clearBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setupItems);

function addToGroceryList(e) {
  e.preventDefault();

  const value = input.value.trim();
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id, value);
    displayAlert("Item added successfully", "success");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value change", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert("please enter a value", "failure");
  }
}

function clearItems() {
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach((item) => List.removeChild(item));
    localStorage.removeItem("list");
    displayAlert("empty list", "failure");
    setBackToDefault();
  }
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  List.removeChild(element);
  displayAlert("Item deleted", "failure");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;

  input.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  console.log(items);
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
  }, 3000);
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => item.id !== id);

  localStorage.setItem("list", JSON.stringify(items));
  console.log(items);
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items)); // Save the updated list
  console.log(items);
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  const element = document.createElement("li");
  element.classList.add("item");
  element.setAttribute("data-id", id);

  element.innerHTML = `
    <p>${value}</p>
    <div>
      <button class="edit-btn">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>`;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  List.appendChild(element);
}
