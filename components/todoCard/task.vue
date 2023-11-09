<template>
  <v-list-item
    :class="{ done: task.status.done }"
    class="task-item"
  >
    <template #prepend>
      <v-icon
        size="x-large"
        color="warning"
        @click="todo.markAsDone(task.id)"
      > mdi-check-circle</v-icon>
    </template>
    <template #title>
      <p v-if="!task.status.done">
        {{ task.name }}
      </p>
      <del v-else>
        {{ task.name }}
      </del>
    </template>
    <template #append>
      <v-icon
        size="x-large"
        color="error"
        @click="deleteTask()"
      > mdi-delete</v-icon>
    </template>
  </v-list-item>
</template>
<script lang="ts" setup>
const todo = useTodo();

const props = defineProps({
  task: <taskProps>({})
});

async function deleteTask () {
  let taskIndex = await todo.tasks.findIndex((item) => {
    return item.id == props.task.id;
  });

  todo.tasks.splice(taskIndex, 1);
}
</script>