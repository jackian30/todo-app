import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
  state: () => {
    return {
      tasks: <Array<task>>([]),
    };
  },
  actions: {
    addNewTask (task: string) {
      this.tasks.push({
        id: this.tasks.length == 0 ? 1 : (this.tasks[this.tasks.length - 1].id + 1),
        name: task,
        status: {
          done: false
        }
      })
    },
    markAsDone (id: number) {
      let task = this.tasks.find((item) => {
        return item.id == id;
      });

      if (task) {
        task.status.done = true;
      }
    },
    deleteDoneTasks () {
      let unDoneTasks = this.tasks.filter(item => {
        return !item.status.done;
      });

      this.tasks = unDoneTasks;
    },
    deleteTasks () {
      this.tasks = [];
    }
  },
  persist: {
    storage: localStorage,
  },
});
