<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

import { useUserStore } from '@/stores/user';

const store = useUserStore();

const route = router.currentRoute.value.name;




onMounted(() => {
    const name = localStorage.getItem('name');

    let firstLink = document.getElementById('first-link');
    let firstLinkBurger = document.getElementById('first-link-burger');
    let secondLink = document.getElementById('second-link');
    let secondLinkBurger = document.getElementById('second-link-burger');

    store.changeName(name);

    if (route == 'list') {
        firstLink.classList.add('active')
        firstLinkBurger.classList.add('active')
    } else if (route == 'chat') {
        secondLink.classList.add('active')
        secondLinkBurger.classList.add('active')
    }
})

function toggleBurger() {
    const burgerContent = document.querySelector('.burger-menu_content');
    const burgerButton = document.querySelector('.burger-menu__button');

    burgerContent.classList.toggle('opened');
    burgerButton.classList.toggle('active-button');
}
</script>
<template>
    <header class="header">
        <img src="@/assets/logo.svg" alt="" class="logo">
        <nav class="header_nav">
            <router-link :to="{ name: 'list' }" class="header_nav__link" id="first-link">Анкеты</router-link>
            <router-link :to="{ name: 'chat' }" class="header_nav__link" id="second-link">Сообщения</router-link>
            <router-link to="/" class="header_nav__link" id="third__link">Подписка</router-link>
        </nav>
        <div class="side">
            <router-link to="/" class="user">
                <img :src="store.info.logo" alt="" class="user__logo">
                <div class="user__name">
                    {{ store.info.name }}
                </div>
            </router-link>
            <!-- Burger Menu -->
            <div class="burger-menu">
                <div class="burger-menu__button" @click="toggleBurger"><span class="button__item"></span></div>
                <div class="burger-menu_content">
                    <router-link :to="{ name: 'list' }" class="burger-menu_content__link" id="first-link-burger">Анкеты</router-link>
                    <router-link :to="{ name: 'chat' }" class="burger-menu_content__link" id="second-link-burger">Сообщения</router-link>
                    <router-link to="/" class="burger-menu_content__link" id="third-link-burger">Подписка</router-link>
                </div>
            </div>
            <!-- ----------- -->
        </div>
    </header>
</template>
<style lang="sass" scoped>
.header
    display: flex
    flex-direction: row
    justify-content: space-between
    z-index: 10

.logo
    margin-top: 30px
    margin-bottom: 30px

.header_nav
    height: 120px
    display: flex
    align-items: center
    justify-content: center
    gap: 50px
    &__link
        color: #FFF
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-decoration: none
        transition: .3s
        &:hover 
            color: #fe6703
            transition: all .3s
    .active 
        color: #fe6703
        position: relative
        &::before 
            position: absolute 
            top: 68px !important
            content: '' !important
            width: 100% !important
            height: 4px !important
            background: var(--btn-primary, linear-gradient(90deg, #EE0979 0%, #FF6A00 100%))
    
.user 
    height: 120px
    display: flex
    align-items: center
    justify-content: center
    gap: 15px
    &__name
        color: #FFF
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%

.burger-menu
    display: none

@media (max-width: 1024px)
    .logo
        width: 180px
    .header_nav
        gap: 35px
@media (max-width: 768px)   
    .logo
        content: url('@/assets/img/logo768.svg')
        width: 40px
        height: 40px
        margin-top: 15px 
        margin-bottom: 15px 
    .header_nav
        height: 40px
        margin-top: 15px 
    .user 
        height: 70px
    .user__name
        display: none
@media (max-width: 560px)
    .header_nav
        display: none
    .side
        display: flex
        justify-content: center
        gap: 49px
        flex-direction: row
    .burger-menu
        display: block
        margin-top: 22px
        z-index: 10
        &__button
            width: 25px
            height: 25px
            cursor: pointer
            z-index: 2
            position: relative
            .button__item 
                width: 100%
                height: 3px
                background: linear-gradient(90deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 100%)
                position: relative
                top: 0
                display: block
                border-radius: 3px
                animation: hideBurger1 .3s
                &::before
                    content: ''
                    width: 100%
                    height: 3px
                    background: linear-gradient(90deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 100%)
                    position: absolute
                    top: 10.4px
                    border-radius: 3px
                    display: block
                &::after
                    content: ''
                    width: 100%
                    height: 3px
                    background: linear-gradient(90deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 100%)
                    position: absolute
                    top: 20.5px
                    display: block
                    border-radius: 3px
                    animation: hideBurger2 .3s
        .active-button
            background: none
            margin-top: 10px
            width: 30px
            .button__item
                transform: rotate(45deg)
                transform: all .3s
                animation: showBurger1 .3s
                &::before
                    opacity: 0
                &::after
                    transform: rotate(90deg)
                    top: 0px
                    animation: showBurger2 .3s

        &_content
            opacity: 0
            position: absolute
            top: 0
            right: 0
            z-index: 1
            transition: .3s
            padding: 100px 40px
            display: flex
            flex-direction: column
            gap: 40px
            &__link
                color: #FFF
                font-family: Rubik
                font-size: 32px
                font-style: normal
                font-weight: 400
                line-height: 150%
                text-decoration: none
                &:hover 
                    color: #fe6703
                    transition: all .3s
            .active
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
        .opened
            transform: translate(-50%)
            left: 50%
            right: 50%
            opacity: 1
            width: 100vw
            height: 100vh
            background: #2D1436
            transition: all .3s
            
@media (max-width: 768px) 
    .header_nav
        .active::before
            top: 42px !important

@keyframes showBurger1
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(45deg)
@keyframes showBurger2
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(90deg)
@keyframes hideBurger1
    0%
        transform: rotate(45deg)
    100%
        transform: rotate(0deg)
@keyframes hideBurger2
    0%
        transform: rotate(90deg)
    100%
        transform: rotate(0deg)
</style>