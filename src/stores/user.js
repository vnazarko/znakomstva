import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    info: {
      email: '',
      password: '12345678',
      logo: '/src/assets/img/user/logo.png',
      name: 'Ваня Факов',
      date: '11.11.1111',
      gender: 'Мужчина'
    }
  }),
  actions:  {
    changeName(name) {
      this.info.name = name
    },
    changeEmail(email) {
      this.info.email = email
    },
    changeGender(gender) {
      this.info.gender = gender
    }
  },
})
// npm i pinia @pinia/nuxt