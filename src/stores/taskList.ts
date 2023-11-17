import { defineStore } from 'pinia'
import type { Task } from '../components/TaskMaker.vue'
import type { StepArray } from '../components/TaskMaker.vue'

export const useTaskStore = defineStore('taskStore', () => {

    const taskCount = 0;
    const taskList = [] as Task[];
    const stepList = [] as StepArray[];

    function addTask(task:Task|null) {
        if(task) {
            this.taskList.push(task);
            this.taskCount++;
        }
    }

    computed getTaskCount():Number {
        return this.taskCount;
    }
    computed getTasks():TaskList {
        return taskList;
    }

    return (taskCount, taskList, stepList, addTask, getTaskCount, getTasks);
})