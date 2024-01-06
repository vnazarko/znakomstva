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
<style lang="sass">
.container 
    max-height: 100vh
.bgHeader
    position: absolute
    left: 0
    top: 0
    background: #2D1436
    height: 120px
    width: 100vw

.burger-menu_content
    width: 100vw
    position: absolute

.burger-menu_content__link:first-child
    color: #FE6703
    font-family: Rubik
    font-style: normal
    line-height: 150%
    position: relative
    &::before 
        position: absolute
        left: 100%
        content: ''
        height: 100% !important
        width: 4px !important
        background: var(--btn-primary, linear-gradient(90deg, #EE0979 0%, #FF6A00 100%))

@media (max-width: 768px)
    .container
        max-height: 170vh   
    .bgHeader
        height: 70px
    .header_nav__link:first-child::before
        top: 42px
</style>