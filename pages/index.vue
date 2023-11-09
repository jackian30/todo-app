<template>
  <v-container
    fluid
    class="fill-height tw-flex-col tw-justify-center"
  >

    <h1 class="tw-text-[#fff] tw-text-6xl tw-mb-5 ">Vue ToDo List</h1>
    <TodoCard />

  </v-container>
</template>
<script lang="ts" setup>
definePageMeta({ layout: 'default' });
</script>