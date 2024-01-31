const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
};

const addTask = function () {
  const tasks = document.querySelector("#tasks");
  const inputField = document.querySelector("#newTask input");
  const newTask = `
      <div class="task">
        <span class="task-name">${inputField.value}</span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;
  tasks.insertAdjacentHTML("beforeend", newTask);
  inputField.value = "";
  attachComplete();
  attachDelete();
};

const attachComplete = function () {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  });
};

const attachDelete = function () {
  const allDeleteButtons = document.querySelectorAll(".delete");
  allDeleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
};

window.onload = function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
