<template>
  <div class="taskManager">
    <div>
      <TaskMaker :listLength="taskList.length" @newTask="handleTaskList"/>
    </div>

    <div v-if="taskList.length > 0">
      <h1>Tasks To-Do</h1>
      <div v-for="task in taskList" :key="task.id" :task="task" class="taskDisplay">
        <button class="headButton" 
        @click="dropDownToggle(task.id)" 
        :style="{ textDecoration : taskDone[task.id] ? 'line-through' : 'none'}"
        :class="{'finishedTaskButton':taskDone[task.id], 'activeTaskButton':!taskDone[task.id]}">
        {{ task.name }}
        </button>
        <div v-if="taskDropDown[task.id]">
          <StepsDisplay @allDone="handleAllDone" :stepList="taskList[task.id].steps" :taskNumber="task.id"/>
        </div>
        <button class="xButton" v-if="taskDone[task.id]" @click="removeTask(task.id)">X</button>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import StepsDisplay from '../components/StepsDisplay.vue'
import TaskMaker from '@/components/TaskMaker.vue';
import { ref, watch } from 'vue'

const taskList = ref<TaskArray>([]);

const handleTaskList = (updatedTasks: TaskArray) => {
  taskList.value = updatedTasks;
}

const handleAllDone = (allFinished: doneType) => {
  taskDone.value[allFinished.taskNumber] = allFinished.done;
}

const taskDropDown = ref<boolArray>([false]);

const taskDone = ref<boolArray>([false]);

watch(taskList, (taskList) => {
  if(taskList.length !== taskDropDown.value.length) {
    taskDone.value.length = taskList.length;
  }
  if(taskList.length !== taskDone.value.length) {
    taskDone.value.length = taskList.length;
  }
}, {deep: true});

const dropDownToggle = (taskID:number) => {
  taskDropDown.value[taskID] = !taskDropDown.value[taskID];
}

const removeTask = (taskID:number) => {
  taskList.value.splice(taskID,1);
  taskDone.value.splice(taskID,1);
  taskDropDown.value.splice(taskID,1);

  for(let i = taskID; i < taskList.value.length; i++) {
    taskList.value[i].id--;
  }
}

</script>

<script lang="ts">

import type { TaskArray } from '@/components/TaskMaker.vue'
import type { doneType } from '@/components/StepsDisplay.vue'
type boolArray = boolean[];

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

.taskDisplay {
  display: flex;
}

</style>