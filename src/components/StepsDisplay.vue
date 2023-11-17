<template>
    <div v-for="step in props.stepList" :key="step.id">
        <button @click="stepFinishToggle(step.id)">{{ step.name }}</button>
    </div>
</template>

<script setup lang="ts">
import type { StepArray } from './TaskMaker.vue';
import { ref } from 'vue'

const props = defineProps<{
    stepList:StepArray
}>()

let allDone = ref(false);


const stepFinishToggle = (id:number) => {
    let allFinished = true;
    //props.stepList[id].finished = !props.stepList[id].finished;
    for(let i = 0; i < props.stepList.length; i++) {
        if(!props.stepList[i].finished) {
            allFinished = false;
        }
    }
    allDone.value = allFinished;
}

</script>


<style>


</style>