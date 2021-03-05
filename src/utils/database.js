class Database {
  constructor() {
    this.key = "TodosItem";
  }

  getAllTasks = () => JSON.parse(localStorage.getItem(this.key));

  setNewTask = (task) => {
    const tasks = this.getAllTasks() || [];
    tasks.push(task);
    localStorage.setItem(this.key, JSON.stringify(tasks));
  };

  updateTaskById = (task) => {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((t) => t.id === task.id);
    tasks[index] = task;
    localStorage.setItem(this.key, JSON.stringify(tasks));
  };

  removeById = (id) => {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((t) => t.id === id);
    tasks.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(tasks));
  };

  getTaskById = (id) => this.getAllTasks().find((t) => t.id === id);
}

module.exports = new Database();
