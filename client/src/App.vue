<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
})
</script>


<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Barlow, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  text-align: center;
  color: #0a4874;
}

</style>
