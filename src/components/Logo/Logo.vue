
<template>
    <div class="logo" v-bind:style="'color:'+color+';'">
        <slot></slot>
    </div>
</template>
<script src="./Logo.js"></script>

<style scoped>
@import "./Logo.css"; 
</style>