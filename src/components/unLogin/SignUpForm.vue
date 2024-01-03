<script setup>
import { ref, onMounted } from 'vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init()
})

import { useUserStore } from '@/stores/user';

const user = useUserStore();

let email = ref('');
let password = ref('');

function validateEmail() {
  const emailInput = document.getElementById("email");
  const button = document.querySelector(".signup-form__button")
  
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
  const button = document.querySelector(".signup-form__toggle-pass")
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
  const button = document.querySelector(".signup-form__button")
  
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
<template>
    <h1 class="signup-form__title" data-aos="fade-up" data-aos-duration="1000">Создай новый аккаунт</h1>
    <h2 class="signup-form__subtitle" data-aos="fade-up" data-aos-duration="1500">Присоединяйся к сообществу из 518 млн человек!</h2>
    <form class="signup-form" @input="toggleStyleButton">
        <input type="text" class="signup-form__input" id="user" placeholder="Ваше имя" data-aos="fade-left" data-aos-duration="1000">
        <label for="#date" style="margin-bottom: 100px">Дата рождения</label>
        <div class="signup-form__date" id="date" style="display: flex; justify-content: center; gap: 5px">
            <input type="text" class="signup-form__input" style="width: 100px; background-image: none; padding-left: 31px" placeholder="День" maxlength="2" data-aos="fade-up-left" data-aos-duration="1600">
            <select type="text" class="signup-form__input" style="background-image: url('/src/assets/icons/arrowSelect.svg'); background-position: 132px center; padding-left: 31px; appearance: none;" data-aos="fade-up" data-aos-duration="1800">
                <option value="" style="color: #8B5D9A">Месяц</option>
                <option value="Январь">Январь</option>
                <option value="Февраль">Февраль</option>
                <option value="Март">Март</option>
                <option value="Апрель">Апрель</option>
                <option value="Май">Май</option>
                <option value="Июнь">Июнь</option>
                <option value="Июль">Июль</option>
                <option value="Август">Август</option>
                <option value="Сентябрь">Сентябрь</option>
                <option value="Октябрь">Октябрь</option>
                <option value="Ноябрь">Ноябрь</option>
                <option value="Декабрь">Декабрь</option>
            </select>
            <input type="text" class="signup-form__input" style="width: 100px; background-image: none; padding-left: 31px" placeholder="Год" maxlength="4" data-aos="fade-up-right" data-aos-duration="2000">
        </div>
        <div class="signup-form__gender">
            <div class="gender  man" data-aos="fade-right" data-aos-duration="2200">
                <input type="radio" name="gender" class="signup-form__radio" id="man">
                <label for="man" class="signup-form_label label1">
                    <img src="@/assets/icons/man.svg" alt="Мужчина" class="signup-form_label__icon">
                </label>
            </div>
            <div class="gender  woman" data-aos="fade-left" data-aos-duration="2200">
                <input type="radio" name="gender" class="signup-form__radio" id="woman">
                <label for="woman" class="signup-form_label label2">
                    <img src="@/assets/icons/woman.svg" alt="Мужчина" class="signup-form_label__icon">
                </label>
            </div>
        </div>
        <input data-aos="fade-left" data-aos-duration="1500" type="text" class="signup-form__input" placeholder="Введите электронную почту" v-model="email" id="email" @blur="validateEmail">
        <div data-aos="fade-right" data-aos-duration="1500" class="signup-form__pass">
          <input type="password" class="signup-form__input" id="password" placeholder="Введите пароль">
          <div @click="togglePassword" class="signup-form__toggle-pass"></div>
        </div>
        <RouterLink data-aos="fade-up" data-aos-duration="1500" class="signup-form__button" @click="changeInfo" :to="{ name: 'list' }" inert>Создать аккаунт</RouterLink>
    </form>
</template>
<style sciped lang="sass">
.signup-form
  margin: 50px auto 0 auto
  width: 380px
  &__title
    color: var(--typography, #FFF)
    text-align: center
    font-family: Rubik
    font-size: 36px
    font-style: normal
    font-weight: 500
    line-height: 150%
    margin-top: 80px
  &__subtitle
    color: var(--typography, #6E447B)
    text-align: center
    font-family: Rubik
    font-size: 16px
    font-style: normal
    font-weight: 400
    line-height: 150%
  label 
    color: #6E447B
    font-family: Rubik
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 150% 
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
  &__gender
    width: 100%
    height: 70px
    margin-bottom: 20px
    margin-top: 10px
    display: flex
    justify-content: space-between
    flex-direction: row
    position: relative
    input
        display: none
    .label1 
        display: inline-block
        cursor: pointer
        margin-right: 0
        line-height: 18px
        user-select: none
        padding: 17px 74px
        border: 1px solid #0575E6
        border-radius: 500px
        transition: .3s
        &:hover
            opacity: .6
            transition: all .3s
    .label2
        display: inline-block
        cursor: pointer
        margin-right: 0
        line-height: 18px
        user-select: none
        padding: 17px 74px
        border: 1px solid #EC008C
        border-radius: 500px
        transition: .3s
        &:hover
            opacity: .6
            transition: all .3s
  #user
    background-image: url('@/assets/icons/user.svg')  
  &__pass
    position: relative 
    #password
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
    
        
.man 
    input:checked + label
        background: linear-gradient(90deg, #0575E6 0%, #021B79 100%)
        transition: all .3s
.woman 
    input:checked + label
        background: linear-gradient(270deg, #7D004A 0%, #FF047F 100%)
        transition: all .3s
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
    .signup-form
        width: 100% !important
    .signup-form__title
        margin-top: 10px
    .signup-form__subtitle
        margin-bottom: -50px !important
    .signup-form__button
        margin-top: -20px
    .label1, .label2
        width: 168px
        padding: 17px 66px !important
</style>