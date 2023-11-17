import { defineStore } from 'pinia'
import type { Task } from '../components/TaskMaker.vue'
import type { Step } from '../components/TaskMaker.vue'

export const useTaskStore = defineStore('taskStore', () => {

    const taskCount = 0,
    const taskList = [] as Task[],

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

    return (taskCount, taskList, addTask, getTaskCount, getTasks)
})