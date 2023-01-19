<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Accueil',
    data(){
        return{
            titreAction: 'titre action semaine',
            actionDate: '19/12/2022'
        }
    },
})
</script>

<template>
    <div id="wrapper">
        
        <div id="inner">
            
            <h1>Action <br>  De La Semaine</h1>
            <h3><i class='bx bx-check'></i> {{this.titreAction}}</h3>
            <h3 id="date">ce {{this.actionDate}}</h3>
            <router-link to="/contact"><button>Participer à l'action</button></router-link>
        </div>
        
        <img src="@/assets/ico.png" alt="">
    </div>
</template>

<style scoped>
#wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: start;
}
#inner{
    margin: auto;
}
img{
    width: 35em;
    z-index: 1;
    margin: auto;
}
h1{
    font-size: 5em;
    font-weight: bold;
    margin-block: 0.2em;
}
h3{
    font-size: 1.5rem;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 25em;
    text-transform: capitalize;
}
#date{
    color: #73d9d9;
    font-size: 1rem;
}
button{
    font-family: Barlow;
    font-weight: bold;
    margin-block: 4em;
    padding-inline: 4em;
    padding-block: 1em;
    font-size: 1em;
    background: #f26938;
    border: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 100px;
}
button:hover{
    transition: 0.1s;
    background: #73d9d9;
    color: #f26938;
}
</style>