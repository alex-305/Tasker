<template>

<div class="navbar">

    <div>
        <RouterLink to="/" active-class="active">Home</RouterLink>
    </div>
    <div>
        <RouterLink to="/about" active-class="active">About</RouterLink>
    </div>

</div>


</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
.navbar {
    background-color: #fd79a8;
    display: flex;
    justify-content: left;
    padding: 3px;

}
.navbar a {
    margin-right: 15px;
    text-decoration: none;
    color: #242424;
}

.active {
    background-color: #81ecec;
}

.inactive {
    background-color: #b2bec3;
}

</style>