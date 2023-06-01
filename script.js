const form = document.getElementById("todo-form");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;

  if (title.trim() === "" || description.trim() === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<strong>${title}</strong>: ${description}`;
  taskList.appendChild(taskItem);

  titleInput.value = "";
  descriptionInput.value = "";
});
