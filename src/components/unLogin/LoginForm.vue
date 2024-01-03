<template>
  <form class="login-form" @input="toggleStyleButton">
    <input type="text" class="login-form__input" placeholder="Введите электронную почту" v-model="email" id="email" @blur="validateEmail">
    <div class="login-form__pass">
      <input type="password" class="login-form__input" id="password" placeholder="Введите пароль">
      <div @click="togglePassword" class="login-form__toggle-pass"></div>
    </div>
    <RouterLink class="login-form__button" @click="changeInfo" :to="{ name: 'list' }" inert>Войти</RouterLink>
  </form>
</template>

<script setup>
import { ref } from 'vue'

import { useUserStore } from '@/stores/user';

const user = useUserStore();

let email = ref('');
let password = ref('');

function validateEmail() {
  const emailInput = document.getElementById("email");
  const button = document.querySelector(".login-form__button")
  
  const emailExample = /(.*?)@(.*?)\.(.*?)/
  if (!emailExample.test(emailInput.value)) {
    button.classList.add('error-button')
    emailInput.classList.add('error-input')
    return true
  } else {
    button.classList.remove('error-button')
    emailInput.classList.remove('error-input')
  }
}

function togglePassword() {
  const passInput = document.getElementById("password")
  const button = document.querySelector(".login-form__toggle-pass")
  const icons = { hide: '@/assets/icons/hidePass.svg', show: '@/assets/icons/showPass.svg' }

  if (passInput.getAttribute("type") == "text") {
    passInput.setAttribute("type", "password")
    button.style.backgroundImage = icons.show
  } else {
    passInput.setAttribute("type", "text")
    button.style.backgroundImage = icons.hide
  }
}

function toggleStyleButton() {
  const input = document.getElementById("password")
  const button = document.querySelector(".login-form__button")
  
  if (input.value.length > 0) {
    button.classList.add('active-button')
    button.removeAttribute("inert")
  } else {
    button.classList.remove('active-button')
    button.setAttribute("inert", "true")
  }
}

function changeInfo() {
  localStorage.setItem("email", email.value)
  localStorage.setItem("password", password.value)

  let localEmail = localStorage.getItem("email")
  let localPassword = localStorage.getItem("password")

  user.changeInfo(localEmail, localPassword) 
} 

</script>

<style scoped lang="sass">
.login-form
  margin: 50px auto 0 auto
  width: 380px
  &__input
    border-radius: 500px
    width: 100%
    height: 70px
    border: none
    background: #42204E
    outline: none
    margin-bottom: 10px
    background-image: url('@/assets/icons/email.svg')
    background-repeat: no-repeat
    background-position: 20px center
    color: #FFF
    font-family: Rubik
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 150%
    padding-left: 73px
    &::placeholder
      color: #8B5D9A
      font-family: Rubik
      font-size: 16px
      font-style: normal
      font-weight: 400
      line-height: 150%
  &__pass
    position: relative 
    .login-form__input 
      background-image: url('@/assets/icons/pass.svg')
  &__toggle-pass
    background-image: url('@/assets/icons/showPass.svg')
    background-size: cover
    width: 30px
    height: 30px
    position: absolute
    top: 20px
    left: 85%
    cursor: pointer
    &:focus 
      background-image: url('@/assets/icons/hidePass.svg') !important
  &__button 
    border-radius: 500px
    background: linear-gradient(90deg, #EE0979 0%, #FF6A00 100%)
    box-shadow: 0px 20px 30px 0px rgba(179, 34, 31, 0.20)
    border: none
    color: #FFF
    text-align: center
    font-family: Rubik
    font-size: 16px
    font-style: normal
    font-weight: 500
    line-height: 150%
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 70px
    cursor: pointer
    transition: .3s
    position: relative
    top: 25px
    text-decoration: none
    &:hover
      box-shadow: 0px 20px 30px 0px rgba(179, 34, 31, 0.30)
      
.active-button 
  border-radius: 500px
  background: linear-gradient(90deg, #FFC700 0%, #FF005C 100%)
  box-shadow: 0px 20px 30px 0px rgba(179, 34, 31, 0.20)
  transition: all .3s
.error-button
  border-radius: 500px
  background: #F43048
  box-shadow: 0px 20px 30px 0px rgba(179, 34, 31, 0.20)
.error-input
  border-radius: 500px
  background-color: #42204E 
  box-shadow: 0px -2px 0px 0px #A01414 inset
  background-image: url('@/assets/icons/errorEmail.svg') 

@media (max-width: 560px) 
  .login-form
    width: 100% !important
</style>
