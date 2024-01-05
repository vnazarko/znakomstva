<script setup>
import Header from '@/components/Loggedin/Header.vue'
import UserInfo from '@/components/Loggedin/UserInfo.vue'
import Footer from '@/components/Footer.vue'

import { useRouter } from 'vue-router';
const router = useRouter();

import { useUsersStore } from '@/stores/users';
const store = useUsersStore();

const id = router.currentRoute.value.params.id;

const user = store.users[id - 1]

</script>
<template>
    <div class="wrapper">
        <div class="bgHeader"></div>
        <div class="container">
            <Header />
            <UserInfo :img="user.photo"
                      :title="user.name"  
                      :charachteristic="user.charachteristic"  
                      :description="user.description"
            />
            <Footer />
        </div>
    </div>
</template>
<style lang="sass" scoped>
.container 
    max-height: 100vh
    overflow: hidden
.bgHeader
    position: absolute
    left: 0
    top: 0
    background: #2D1436
    height: 120px
    width: 100vw

@media (max-width: 768px)
    .bgHeader
        height: 70px
    .header_nav__link:first-child::before
        top: 42px
</style>