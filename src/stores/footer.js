import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', {
  state: () => {
    return {
      links: [
        {
            name: 'О нас',
        },
        {
            name: 'Поддержка',
        },
        {
            name: 'Советы',
        },
        {
            name: 'Контакты',
        },
        {
            name: 'Правила оплаты',
        },
      ]
    }
  },
})
// npm i pinia @pinia/nuxt