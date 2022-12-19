<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Accueil',
    data(){
        return{
            titreAction: 'placeholder title',
            actionDate: 'date placeholder'
        }
    }
})
</script>

<template>
    <div id="wrapper">
        <div id="inner">
            <h1>Actions <br>  De La Semaine</h1>
            <h3><i class='bx bx-check'></i> {{this.titreAction}}</h3>
            <h3 id="date">{{this.actionDate}}</h3>
            <button>Participer</button>
        </div>
        <img src="@/assets/mainimg.png" alt="">
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
    width: 45em;
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
}
h1{
    font-size: 5em;
    font-weight: bold;
    margin-block: 0.2em;
}
h3{
    font-size: 2.2em;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 15em;
    text-transform: capitalize;
}
#date{
    color: #73d9d9;
    font-size: 2em;
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
    box-shadow: black 10px 10px;
}
button:hover{
    transition: 0.1s;
    background: #73d9d9;
    color: #f26938;
}
</style>