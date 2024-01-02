<script setup>
import UnLoginHeader from '@/components/unLogin/UnLoginHeader.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
    <div class="wrapper">
        <div class="container">
            <UnLoginHeader />
            <div class="error">
                <h1 class="error__title">404</h1>
                <h2 class="error__subtitle">Вы заблудились. Но не беспокойтесь вот правильный путь</h2>
                <RouterLink class="error__button" :to="{ name: 'login' }">Вернуться назад</RouterLink>
            </div>
            <Footer />
        </div>
    </div>
</template>
<style scoped lang="sass">
.container 
    min-height: 100vh
.wrapper::before
    content: ''
    position: absolute
    top: -50px
    left: 0px
    background-image: url('@/assets/img/error/bg.svg')
    background-position: center
    background-size: cover
    background-attachment: fixed
    z-index: -1
    width: 100vw
    height: 105vh

.error 
    display: flex
    flex-direction: column
    &__title
        color: #FFF
        font-family: Rubik
        font-size: clamp(150px, 30vw, 300px)
        font-style: normal
        font-weight: 500
        line-height: 150%
        text-align: center
        margin-top: 150px
    &__subtitle
        color: #FFF
        font-variant-numeric: lining-nums proportional-nums
        font-family: Rubik
        font-size: 20px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-align: center
        margin-top: -50px
    &__button
        color: #FFF
        font-variant-numeric: lining-nums proportional-nums
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-decoration: none
        background-image: url('@/assets/icons/arrow.svg')
        background-repeat: no-repeat
        background-position: 35px center
        padding: 18px 36px 18px 63px
        border-radius: 500px
        border: 1px solid #FFF
        width: 232px
        transition: .3s
        margin: 50px auto
        &:hover
            background-position: 15px center
            transition: all .3s
</style>