<template>
  <div>
    <TaskMaker/>
  </div>
  <div>
    <h1>Tasks To-Do</h1>
    <div v-for="task in taskList" :key="task.id" :task="task">
      <!-- <button @click="testprint()">testclick</button> -->
      <button class="headButton" @click="dropDownToggle" :style="{ textDecoration : allDone ? 'line-through' : 'none'}">{{ task.name }}</button>
      <SingleTaskDisplayVue task/>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/components/TaskMaker.vue';
import type { TaskArray } from '@/components/TaskMaker.vue'
import SingleTaskDisplayVue from '../components/StepsDisplay.vue'
import TaskMaker from '@/components/TaskMaker.vue';
import { ref } from 'vue'

const taskList = ref<TaskArray>([]);

const handleTaskList

const taskDropDown = ref(false);
let allDone = ref(false);


const dropDownToggle = () => {
    taskDropDown.value = !taskDropDown.value;
    console.log(stepList.value.length);
    for(let i = 0; i < 4; i++) {
        console.log(stepList.value[i].name);
    }
}

</script>

<style>


</style>