<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
    data(){
        return{

        }
    }
});
</script>

<template>
    <nav>
        <div id="logo-wrapper">
            <img src="@/assets/logo.jpeg" alt="">
        </div>
        <div id="link-wrapper">
            <router-link to="/">Accueil</router-link>
            <router-link to="/nous">Sur Nous</router-link>
            <router-link to="/actions">Nos Actions</router-link>
            <router-link to="/media">Media</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/donation" id="dons">Faire Une Donation</router-link>
        </div>
    </nav>
</template>

<style scoped>
nav{
    padding: 2em;
    padding-inline: 5em;
    display: flex;
}
#logo-wrapper{
    
}
img{
    width: 25em;
}
#link-wrapper{
    margin-block: auto;
    display: flex;
    justify-content: end;
    width: 100%;
}
a{
    font-size: 1.3em;
    font-weight: bold;
    color: #0a4874;
    margin: 1em;
    text-decoration: none;
}
a:hover{
    transition: 0.1s;
    color: #73d9d9;
}
#dons{
    color: #f26938;
}
#dons:hover{
    color: #73d9d9;
}
</style>