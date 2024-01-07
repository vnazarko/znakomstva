<script setup>
import Header from '@/components/Loggedin/Header.vue'
import ListOfUsers from '@/components/Loggedin/ListOfUsers.vue';
import Footer from '@/components/Footer.vue'

</script>
<template>
    <div class="wrapper">
        <div class="bgHeader"></div>
        <div class="container">
            <Header />
            <ListOfUsers />
            <Footer />
        </div>
    </div>
</template>
<style lang="sass" scoped>
.bgHeader
    position: absolute
    left: 0
    top: 0
    background: #2D1436
    height: 120px
    width: 100vw
.container
    height: 1657px !important

@media (max-width: 768px)
    .bgHeader
        height: 70px
</style>