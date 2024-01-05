<script setup>
import Header from '@/components/Loggedin/Header.vue'
import Footer from '@/components/Footer.vue'

</script>
<template>
    <div class="wrapper">
        <div class="bgHeader"></div>
        <div class="container">
            <Header />
            <Footer />
        </div>
    </div>
</template>
<style lang="sass">
.bgHeader
    position: absolute
    left: 0
    top: 0
    background: #2D1436
    height: 120px
    width: 100vw
.container
    height: 1657px

.header_nav
    &__link:first-child 
        color: #FE6703
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        position: relative
        &::before 
            position: absolute
            top: 68px
            content: ''
            width: 100% !important
            height: 4px !important
            background: var(--btn-primary, linear-gradient(90deg, #EE0979 0%, #FF6A00 100%))

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
    .bgHeader
        height: 70px
    .header_nav__link:first-child::before
        top: 42px
</style>