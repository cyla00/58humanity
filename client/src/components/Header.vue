<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
    data(){
        return{
            mobile: false,
            mobileNav: false,
            windowWidth: 0,
        }
    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        },
        checkScreen(){
            this.windowWidth = window.innerWidth
            if(this.windowWidth <= 1050){
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
    },
    created(){
        this.checkScreen()
        window.addEventListener('resize', this.checkScreen)
    }
});
</script>

<template>
    <nav>
        <div id="logo-wrapper">
            <img src="@/assets/logo.jpeg" alt="" :class="{'nav-img': mobile}">
        </div>
        <div id="link-wrapper" v-show="!mobile">
            <router-link to="/">Accueil</router-link>
            <router-link to="/nous">L'Asso</router-link>
            <router-link to="/media">Media</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/donation" id="dons">Faire Une Donation</router-link>
        </div>

        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class='bx bx-menu bx-md' :class="{'icon-active': mobileNav}"></i>
        </div>

        <Transition name="mobile-nav">
            <div class="mobile-link-wrapper" v-show="mobileNav">
                <router-link to="/">Accueil</router-link>
                <router-link to="/nous">L'Asso</router-link>
                <router-link to="/media">Media</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/donation" id="dons">Faire Une Donation</router-link>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
nav{
    padding: 2em;
    padding-inline: 5em;
    display: flex;
    position: relative;
}
#logo-wrapper{
    
}
img{
    width: 300px;
}
#link-wrapper{
    margin-block: auto;
    display: flex;
    justify-content: end;
    width: 100%;
}
a{
    font-size: 18px;
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
i{
    transition: 0.3s ease all;
    display: flex;
	position: absolute;
	top: 0;
	align-items: center;
	right: 24px;
	height: 100%;
	color: #0a4874;
}
.icon-active{
    transition: 0.3s ease all;
	transform: rotate(180deg);
}

.mobile-link-wrapper{
	display: flex;
	flex-direction: column;
	position: fixed;
	width: 100%;
	max-width: 250px;
	height: 100%;
    background: #ffffff;
	border-right: 2px solid #73d9d9;
	top: 0;
	left: 0;
	margin: 0;
}
.mobile-nav-enter-active, .mobile-nav-leave-active {
	transition: 1s ease all;
}
.mobile-nav-enter-from, .mobile-nav-leave-to {
	transform: translateX(-300px);
}
.mobile-nav-enter-to {
	transform: translateX(0);
}


@media screen and (max-width: 1050px) {

    nav{
        padding: 2em;
    }
    img{
        width: 200px;
    }
}
</style>