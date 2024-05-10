let tasks = [];

let addTask = () => {
  if (input.value) {
    input.value = "";
    tasks.push(input.value);
    console.log(tasks);
  }
};

const input = document.querySelector("input");
const add_task_button = document.getElementById("add_task");

input.addEventListener("input", () => {
  console.log(input.value);
  add_task_button.removeAttribute("disabled");
});
add_task_button.addEventListener("click", addTask);
