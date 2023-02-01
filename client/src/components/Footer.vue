<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer',
    data(){
        return{

        }
    }
})
</script>

<template>
    <footer>
        <div class="wrapper">
            <h3>Nous Rejoindre</h3>
            <router-link to="/contact"><i class='bx bxs-face bx-sm'></i> Contact</router-link>
        </div>
        <div class="wrapper">
            <h3>Resaux</h3>
            <p><i class='bx bxl-instagram bx-sm'></i> @58_humanity</p>
            <p><i class='bx bxl-snapchat bx-sm'></i> @humanity-58</p>
            <p><i class='bx bxl-facebook-square bx-sm'></i> 58 Humanity</p>
        </div>

        <div class="wrapper">
            <h3>Contact</h3>
            <p><i class='bx bxs-envelope bx-sm'></i> 58humanity@gmail.com</p>
            <p><i class='bx bxs-phone bx-sm'></i> 06 60 70 64 11</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #0a4874;
    color: #ffffff;
    display: flex;
}
i{
    color: #F28B30;
    vertical-align: middle;
}
p{
    font-weight: 400;
}
.wrapper{
    font-size: 0.8rem;
    margin: 0.5em;
    margin-inline: 4em;
    text-align: start;
}
a{
    text-decoration: none;
    color: #ffffff;
}
a:hover{
    color: #73d9d9;
}


@media screen and (max-width: 1050px) {

    footer{
        position: relative;
        bottom: 0;
        display: grid;
        grid-auto-columns: 1fr;
    }
}
</style>