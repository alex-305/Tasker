<template>
    <div>
        <div>
            <h2>Enter a Task</h2>
            <input type="text" @keyup.enter="setTaskSubmitted()" v-model="taskName" placeholder="Enter the task at hand">
            <button @click="setTaskSubmitted()">Enter</button>
            <div v-if="taskSubmitted && taskName !== ''">
                <h2> {{ taskName }} </h2>
                <h3>Steps</h3>
                <div v-if="stepList.length > 0">
                    <div v-for="step in stepList" :key="step.id">
                        <input type="text" v-model="step.name">
                        <button @click="addStep(step.id)">+</button>
                        <button @click="removeStep(step.id)">X</button>
                    </div>
                </div>
                <input type="text" @keyup.enter="addStep(stepList.length-1)" v-model="newStep.name" placeholder="Enter steps to finish task">
                <button @click="addStep(stepList.length-1)">Add</button>
                <div>
                    <button @click="createTask()">Create Task</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

    const taskList = ref<TaskArray>([]);
    let newTask:Task;

    let taskName = ref<string>('');
    let taskSubmitted = ref(false);

    watch(taskName, (taskName: string) => {
        if(taskName === '') {
            taskSubmitted.value = false;
        }
    });

    const props = defineProps<{
        listLength:number;
    }>()

    const setTaskSubmitted = () => {
        taskSubmitted.value = true;
    }

    let stepID = 0;

    const stepList = ref<StepArray>([]);
    const newStep = ref<Step>({name: '',finished: false, id: stepID});

    const addStep = (id:number) => {
        stepList.value.splice(id+1,0,newStep.value);
        stepList.value[id+1].id = id+1;
        for(let i = id+2; i < stepList.value.length; i++) {
            stepList.value[i].id++;
        }
        newStep.value = {name: '', finished: false, id: ++stepID}
    };

    const removeStep = (id:number) => {
        stepList.value.splice(id,1);
        for(let i = id; i < stepList.value.length; i++) {
            stepList.value[i].id--;
        }
        stepID--;
    }
    
    const resetAll = () => {
        stepList.value.length = 0;
        stepID = 0;
        taskName.value = '';
        taskSubmitted.value = false;
    }

    const emit = defineEmits(['newTask']);

    const createTask = () => {
        newTask = {
            name: taskName.value,
            steps: stepList.value,
            id: props.listLength
        }

        taskList.value.push(JSON.parse(JSON.stringify(newTask)));

        emit('newTask', taskList.value);

        resetAll();
    }


</script>

<style>
</style>
<script lang="ts">

    interface Step {
        name: string;
        finished: boolean;
        id: number;
    }

    export type StepArray = Step[];

    export interface Task {
        name: string;
        steps: StepArray;
        id: number;
    }

    export type TaskArray = Task[];

</script>
