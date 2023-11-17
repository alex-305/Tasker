<template>
    <div>
    </div>
    <div v-if="taskDropDown">
        <div v-for="step in stepList" :key="step.id">
            <button @click="stepFinishToggle(step.id)">{{ step.name }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Task } from './TaskMaker.vue';
import { ref, computed } from 'vue'

const props = defineProps<{
    task:Task
}>()

const stepList = computed(() => props.task.steps);

const taskDropDown = ref(false);
let allDone = ref(false);


const stepFinishToggle = (id:number) => {
    let allFinished = true;
    stepList.value[id].finished = !stepList.value[id].finished;
    for(let i = 0; i < stepList.value.length; i++) {
        if(!stepList.value[i].finished) {
            allFinished = false;
        }
    }
    allDone.value = allFinished;
}

</script>


<style>

.headButton {
    font-size: 30px;
    padding: 12px 24px;
}


</style>