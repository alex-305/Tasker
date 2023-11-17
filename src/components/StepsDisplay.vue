<template>
    <div v-for="step in props.stepList" :key="step.id">
        <button class="button" @click="stepFinishToggle(step.id)" :class="{finishedStep : stepDone[step.id]}">{{ step.name }}</button>
    </div>
</template>

<script setup lang="ts">
import type { StepArray } from './TaskMaker.vue';
import { ref, watch } from 'vue'

const props = defineProps<{
    stepList:StepArray
}>()

type boolArray = boolean[];
let stepDone = ref<boolArray>([]);

watch(props.stepList, (stepList) => {
    if(stepList.length !== stepDone.value.length) {
        stepDone.value = Array.from({ length: stepList.length })
    }
}, {deep: true})

let allDone = ref(false);


const stepFinishToggle = (id:number) => {
    let allFinished = true;
    stepDone.value[id] = !stepDone.value[id];
    for(let i = 0; i < props.stepList.length; i++) {
        if(!stepDone.value[i]) {
            allFinished = false;
        }
    }
    allDone.value = allFinished;
}

</script>


<style>
.finishedStep {
    text-decoration: line-through;
}

.button {
    width: 200px;
    height: 30px;
    font-size: 20px;
}

</style>