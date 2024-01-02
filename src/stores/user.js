import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    info: {
      email: '',
      password: '',
    }
  }),
  actions:  {
    changeInfo(email, password) {
      this.info.email = email
      this.info.password = password
    }
  }
})
// npm i pinia @pinia/nuxt