<template>
  <v-card
    width="550"
    class="todo-card"
    :rounded="0"
    :elevation="0"
  >
    <v-card-title>
      <v-spacer />
      <v-chip
        color="primary"
        variant="flat"
      >
        Task{{ todo.tasks.length > 1 ? 's' : '' }}
        <template v-slot:append>
          <v-avatar
            color="#fff"
            class="tw-mr-[-8px] tw-ml-[5px]"
          >
            {{ todo.tasks.length }}
          </v-avatar>
        </template>
      </v-chip>

      <v-chip
        color="primary"
        variant="flat"
      >
        Task{{ taskDone > 1 ? 's' : '' }} Done
        <template v-slot:append>
          <v-avatar
            color="#fff"
            class="tw-mr-[-8px] tw-ml-[5px]"
          >
            {{ taskDone }}
          </v-avatar>
        </template>
      </v-chip>

      <v-chip
        v-if="taskDone"
        prepend-icon="mdi-delete"
        color="error"
        variant="flat"
        :rounded="0"
        @click="todo.deleteDoneTasks()"
      >Task Done</v-chip>

      <v-chip
        v-if="todo.tasks.length > 0"
        prepend-icon="mdi-delete"
        color="error"
        variant="flat"
        :rounded="0"
        @click="todo.deleteTasks()"
      >Task</v-chip>
    </v-card-title>
    <v-card-text>
      <v-list
        class="task-list"
        v-if="todo.tasks.length"
      >
        <TransitionGroup name="list">
          <TodoCardTask
            v-for="task in todo.tasks"
            :task="task"
            :key="task"
          />
        </TransitionGroup>
      </v-list>
      <div
        class="tw-p-[15px] tw-text-center"
        v-else
      >
        Please add a New Task
      </div>
    </v-card-text>

    <v-card-actions>
      <v-text-field
        v-model="newTask"
        variant="outlined"
        placeholder="New task"
        hide-details
      >
        <template #append-inner>
          <v-icon
            color="primary"
            @click="addNewTask()"
            size="x-large"
          >
            mdi-plus-circle
          </v-icon>
        </template>
      </v-text-field>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
const todo = useTodo();

const newTask = ref('');

const taskDone = computed(() => {
  return todo.tasks.filter(item => item.status.done).length;
})

function addNewTask () {
  if (newTask.value) {
    todo.addNewTask(newTask.value);
  }
  newTask.value = '';
}
</script>