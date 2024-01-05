import { defineStore } from 'pinia'

import * as RussiaIcon from '../assets/icons/russia.svg'

import * as first1 from '@/assets/img/list/first/1.png'
import * as second1 from '@/assets/img/list/first/2.png'
import * as third1 from '@/assets/img/list/first/3.png'
import * as fourth1 from '@/assets/img/list/first/4.png'
import * as fifth1 from '@/assets/img/list/first/5.png'

import * as first2 from '@/assets/img/list/second/1.png'
import * as second2 from '@/assets/img/list/second/2.png'
import * as third2 from '@/assets/img/list/second/3.png'
import * as fourth2 from '@/assets/img/list/second/4.png'
import * as fifth2 from '@/assets/img/list/second/5.png'

import * as first3 from '@/assets/img/list/third/1.png'
import * as second3 from '@/assets/img/list/third/2.png'
import * as third3 from '@/assets/img/list/third/3.png'
import * as fourth3 from '@/assets/img/list/third/4.png'
import * as fifth3 from '@/assets/img/list/third/5.png'

export const useListStore = defineStore('list', {
  state: () => {
    return {
      users: [
        {
            title: 'Топ для знакомств',
            cards: [
                {   
                    id: '1',
                    name: 'Виктор 22',
                    country: 'Россия',
                    photo: first1,
                },
                {   
                    id: '2',
                    name: 'Марина 19',
                    country: 'Россия',
                    photo: second1,
                },
                {
                    id: '3',
                    name: 'Алексей 34',
                    country: 'Россия',
                    photo: third1,
                },
                {
                    id: '4',
                    name: 'Виктория 18',
                    country: 'Россия',
                    photo: fourth1,
                },
                {
                    id: '5',
                    name: 'Максим 24',
                    country: 'Россия',
                    photo: fifth1,
                },
            ]
        },
        {
            title: 'Ищю парня',
            cards: [
                {
                    id: '6',
                    name: 'Алина 25',
                    country: 'Россия',
                    photo: first2,
                },
                {
                    id: '7',
                    name: 'Алёна 20',
                    country: 'Россия',
                    photo: second2,
                },
                {
                    id: '8',
                    name: 'Марина 19',
                    country: 'Россия',
                    photo: third2,
                },
                {
                    id: '9',
                    name: 'Виктория 18',
                    country: 'Россия',
                    photo: fourth2,
                },
                {
                    id: '10',
                    name: 'Маргарита 26',
                    country: 'Россия',
                    photo: fifth2,
                },
            ]
        },
        {
            title: 'Мужчины',
            cards: [
                {
                    id: '11',
                    name: 'Виктор 30',
                    country: 'Россия',
                    photo: first3,
                },
                {
                    id: '12',
                    name: 'Андрей 22',
                    country: 'Россия',
                    photo: second3,
                },
                {
                    id: '13',
                    name: 'Саша 38',
                    country: 'Россия',
                    photo: third3,
                },
                {
                    id: '14',
                    name: 'Максим 19',
                    country: 'Россия',
                    photo: fourth3,
                },
                {
                    id: '15',
                    name: 'Игорь 24',
                    country: 'Россия',
                    photo: fifth3,
                },
            ]
        },
      ]
    }
  }
})
// npm i pinia @pinia/nuxt