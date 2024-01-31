const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
};

const addTask = function () {
  const inputField = document.querySelector("#newTask input");
  const taskName = inputField.value.trim();

  if (taskName !== "") {
    const newTask = createTaskElement(taskName);
    const tasks = document.querySelector("#tasks");
    tasks.appendChild(newTask);
    inputField.value = "";
  }
};

const createTaskElement = function (taskName) {
  const task = document.createElement("div");
  task.classList.add("task");

  const taskNameSpan = document.createElement("span");
  taskNameSpan.textContent = taskName;
  task.appendChild(taskNameSpan);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteButton.addEventListener("click", function () {
    task.remove();
  });
  task.appendChild(deleteButton);

  task.addEventListener("click", function () {
    task.classList.toggle("completed");
  });

  return task;
};

window.onload = function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
