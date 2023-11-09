<template>
  <v-container
    fluid
    class="fill-height tw-flex-col tw-justify-center"
  >

    <h1 class="tw-text-[#fff] tw-text-6xl tw-mb-5 ">Vue ToDo List</h1>
    <TodoCard />

    <v-chip
      closable
      size="large"
      color="#002455"
      variant="flat"
      class="tw-absolute tw-right-10 tw-bottom-10"
    >
      This application uses the browser's Local Storage to store data
    </v-chip>
  </v-container>
</template>
<script lang="ts" setup>
definePageMeta({ layout: 'default' });
</script>