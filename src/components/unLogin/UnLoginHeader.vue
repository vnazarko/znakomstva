<script setup>
</script>
<template>
    <header class="header">
        <img src="@/assets/logo.svg" alt="Znakomstva.com" class="header__logo">
        <RouterLink :to="{ name: 'sign-up' }" class="header__button">Регистрация</RouterLink>
    </header>
</template>
<style scoped lang="sass">
.header 
    width: 100%
    height: 60px   
    margin-top: 30px
    display: flex
    justify-content: space-between
    align-items: center
    &__button 
        color: #FFF
        text-align: center
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        border-radius: 500px
        border: 1px solid var(--btn-primary, #EE0979)
        text-decoration: none
        padding: 11px 36px
        transition: all .3s
        &:hover 
            box-shadow: 0px 20px 30px 0px rgba(179, 34, 31, .3)
            transition: all .3s

@media (max-width: 560px)
    .header 
        flex-direction: column
        height: auto
        &__button
            margin-top: 20px
</style>