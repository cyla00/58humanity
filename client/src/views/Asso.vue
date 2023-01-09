<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Asso',
    data(){
        return{
            showReglement: false,
        }
    }
})
</script>

<template>
    <div id="wrapper">
        <button @click="this.showReglement = !this.showReglement">Lire Le Reglement Interiore</button>
        <div id="asso-wrapper">
            <h1>Presentation De L'Association</h1>
            <p class="descr">contenu presentation description association ici</p>
            <h2>Organigramme</h2>
            <div id="organi-wrapper">
                <div class="organi-card">
                    <img src="https://via.placeholder.com/100" alt="">
                    <p class="role">role</p>
                    <p class="noms">nom prenom</p>
                </div>
                <div class="organi-card">
                    <img src="https://via.placeholder.com/100" alt="">
                    <p class="role">role</p>
                    <p class="noms">nom prenom</p>
                </div>
                <div class="organi-card">
                    <img src="https://via.placeholder.com/100" alt="">
                    <p class="role">role</p>
                    <p class="noms">nom prenom</p>
                </div>
                <div class="organi-card">
                    <img src="https://via.placeholder.com/100" alt="">
                    <p class="role">role</p>
                    <p class="noms">nom prenom</p>
                </div>
            </div>
        </div>
        <div id="actions-wrapper">
            <h1>Nos actions</h1>
            <p>liste actions ici</p>
        </div>
        <Teleport to="body">
            <div id="regl-big-wrapper" v-if="showReglement">
                <div id="reglement-wrapper"></div>
                <div id="inner-reglement">
                    <button @click="this.showReglement = !this.showReglement" id="exit-btn"><i class='bx bx-x'></i></button>
                    <h1>Reglement Interiore</h1>
                    <p>contenu ici</p>
                </div> 
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
#wrapper{
    
}
i{
    vertical-align: middle;
    color: #f26938;
    font-size: 1.3rem;
}
.descr{
    font-size: 1.2rem;
}
img{
    border-radius: 100px;
}
#organi-wrapper{
    display: flex;
    padding-inline: 20em;
}
.organi-card{
    margin: auto;
}
.role{
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
}
.noms{
    font-size: 1rem;
    margin-block: 0.5em;
}
#regl-big-wrapper{
    position: inherit;
}
#reglement-wrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(10px);
}
#inner-reglement{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 90%;
    width: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    padding: 1em;
    font-family: Barlow;
    text-align: center;
    overflow: hidden;
}
button{
    font-family: Barlow;
    font-weight: bold;
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
#exit-btn{
    display: flex;
    font-family: Barlow;
    font-weight: bold;
    background: none;
    padding: 2px;
    color: red;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 100px;
}
#exit-btn:hover{
    transition: 0.1s;
    background: red;
    color: #f26938;
}
</style>