const input = document.getElementById("grocery-input");
const submitBtn = document.getElementById("submit-btn");
const List = document.querySelector(".grocery-list");
const deleteBtn = document.querySelector(".delete-btn");
const editBtn = document.querySelector(".edit-btn");
const form = document.getElementById("form");
const clearBtn = document.querySelector(".clear-all");

let editElement;
let editFlag = false;
let editId = "";

const alert = document.querySelector(".alert");

form.addEventListener("submit", addToGroceryList);

clearBtn.addEventListener("click", clearItems);

function addToGroceryList(e) {
  e.preventDefault();

  const value = input.value.trim();
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
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

    List.appendChild(element);
    displayAlert("Item added successfully", "success");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("edit");
  } else {
    displayAlert("please enter a value", "failure");
  }
}

function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage() {
  console.log("dwadawd");
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
  }, 3000);
}
