<template>
  <div class="taskManager">
    <div>
      <TaskMaker @newTask="handleTaskList"/>
    </div>

    <div>
      <h1>Tasks To-Do</h1>
      <div v-for="task in taskList" :key="task.id" :task="task">
        <button class="headButton" @click="dropDownToggle(task.id)" :style="{ textDecoration : allDone ? 'line-t``hrough' : 'none'}">{{ task.name }}</button>
        <div v-if="taskDropDown[task.id]">
          <StepsDisplay :stepList="taskList[task.id].steps"/>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { TaskArray } from '@/components/TaskMaker.vue'
import StepsDisplay from '../components/StepsDisplay.vue'
import TaskMaker from '@/components/TaskMaker.vue';
import { ref, watch } from 'vue'

const taskList = ref<TaskArray>([]);

const handleTaskList = (updatedTasks: TaskArray) => {
  taskList.value = updatedTasks;
}

type boolArray = boolean[];

const taskDropDown = ref<boolArray>([]);

watch(taskList, (taskList) => {
    if(taskList.length !== taskDropDown.value.length) {
      taskDropDown.value = Array.from({ length: taskList.length })
    }
}, {deep: true});

let allDone = ref(false);


const dropDownToggle = (taskID:number) => {
    taskDropDown.value[taskID] = !taskDropDown.value[taskID];
    console.log(taskDropDown.value[taskID]);
    for(let i = 0; i < 4; i++) {
        console.log(taskList.value[0].steps[i].name);
    }
}

</script>

<style>

.taskManager {
    display:flex;
}

.headButton {
  padding: 5px 20px;
  width: 200px;
  height: 50px;
  font-size: 20px;
}

</style>