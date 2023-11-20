import { defineStore } from 'pinia'
import type { Task } from '../components/TaskMaker.vue'

export const useTaskStore = defineStore('taskStore', () => {

    let taskCount = 0;
    const taskList = [] as Task[];

    function addTask(task:Task|null) {
        if(task) {
            taskList.push(task);
            taskCount++;
        }
    }

    function removeTask(id:number) {
        taskList.splice(id, 1);
        taskCount++;

        for(let i = id; i < taskList.length; i++) {
            taskList[i].id--;
        }
    }

    function getTaskCount():Number {
        return taskCount;
    }
    function getTasks() {
        return taskList;
    }

    return {taskCount, taskList, addTask, removeTask, getTaskCount, getTasks};
})