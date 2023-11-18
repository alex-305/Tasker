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
    background-color: #b6c5de;
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
    background-color: #b6decb;
}

</style>