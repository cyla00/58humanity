<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Contact',
    data(){
        return{
            Nom: '',
            Prenom: '',
            Email: '',
            Object: '',
            Message: '',
        }
    }
})
</script>

<template>
    <div id="wrapper">

        <div id="info">
            <h3><i class='bx bxs-envelope bx-sm'></i> Email@mail.com</h3>
            <h3><i class='bx bxs-phone bx-sm'></i> 0754567665</h3>
        </div>

        <div id="form">
            <h1>Nous Contacter</h1>
            <label for="Nom">Nom</label>
            <input type="text" v-model="this.Nom" name="Nom">

            <label for="Prenom">Prenom</label>
            <input type="text" v-model="this.Prenom" name="Prenom">

            <label for="Email">Email</label>
            <input type="text" v-model="this.Email" name="Email">

            <label for="Object">Object</label>
            <input type="text" v-model="this.Object" name="Object">

            <label for="Message">Message</label>
            <textarea name="Message" id="" cols="30" rows="10" v-model="this.Message"></textarea>

            <button>Envoyer</button>
        </div>
    </div>
</template>

<style scoped>
#wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: start;
}
#form{
    display: flex;
    flex-direction: column;
    width: 30em;
}
input{
   margin-block: 0.3em;
}
label{
    margin-block: 0.3em;
}
button{
    text-transform: uppercase;
    margin: auto;
    margin-block: 0.3em;
}
i{
    vertical-align: middle;
}
#info{
    margin: auto;
}
</style>