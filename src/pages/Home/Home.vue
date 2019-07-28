<template>
    <div>
        <Logo color="red">Mareads</Logo>
        Welcome to {{ Text }}
        <ul>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>
<script src="./Home.js"></script>

<style scoped>
@import "./Home.css"; 
</style>