<script setup>
import { ref, onMounted } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { useListStore } from '@/stores/list';

const store = useListStore();

// let prom = new Promise(() => {
//     setTimeout(() => {
//         alert('Сайт создан для примера, поэтому рекомендации не работают :)')
//     }, 2000)
// })

let slidesPerView = ref(4.25)

onMounted(() => {
    let windowWidth = window.innerWidth

    if (windowWidth <= 560) {
        slidesPerView.value = 1.52
    } else if (windowWidth <= 768) {
        slidesPerView.value = 2.17
    } else if (windowWidth <= 1024) {
        slidesPerView.value = 3
    }
})

let like = []

function addLike() {
    let localLikes = localStorage.getItem('likes') || '[]';

    try {
        localLikes = JSON.parse(localLikes);
    } catch (error) {
        console.error('Ошибка при парсинге JSON:', error);
        localLikes = [];
    }

    localLikes.unshift(this.id);

    localStorage.setItem('likes', JSON.stringify(localLikes));

    console.log(localStorage.getItem('likes'));
    console.log(this.id);
}


</script>
<template>
    <section class="list-of-users">
        <div class="list-of-users_line line" v-for="(line, index) in store.users" :key="index">
            <h1 class="line__title">{{ line.title }}</h1>
            <div class="line_cards">
                <div class="line_slider_slide slide" v-for="(slide, j) in line.cards" :key="j" :style="{ 'background-image': 'url(' + slide.photo.default + ')' }">
                    <router-link :to="'/user/' + slide.id" class="slide-link">
                        <div class="slide__content">
                            <h1 class="slide__name">{{ slide.name }}</h1>
                            <h2 class="slide__country"><img src="@/assets/icons/russia.svg"> {{ slide.country }}</h2>
                        </div>
                    </router-link>
                    <div class="button">
                        <HelloButton :id="slide.id" :likeMethod="addLike" :name="slide.name.split(' ')[0]" />
                    </div>
                </div>
            </div>
            <swiper
                class="line_slider"
                :spaceBetween="20"
                :slides-per-view="slidesPerView"
                :autoplay="true"
                 >
                <swiper-slide class="line_slider_slide slide" v-for="(slide, j) in line.cards" :key="j" :style="{ 'background-image': 'url(' + slide.photo.default + ')' }">
                    <router-link :to="'/user/' + slide.id" class="slide-link">
                        <div class="slide__content">
                            <h1 class="slide__name">{{ slide.name }}</h1>
                            <h2 class="slide__country"><img src="@/assets/icons/russia.svg"> {{ slide.country }}</h2>
                        </div>
                    </router-link>
                    <div class="button">
                        <HelloButton :id="slide.id" :likeMethod="addLike" :name="slide.name.split(' ')[0]" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<style scoped lang="sass">
.list-of-users
    width: 100%

.line 
    width: 100%
    &__title
        color: #FFF
        font-family: Rubik
        font-size: 28px
        font-style: normal
        font-weight: 500
        line-height: 150%
        margin-top: 50px
        margin-bottom: 20px

.line_cards
    display: flex
    justify-content: space-between
    width: 100%

.line_slider 
    height: 350px
    display: none
.slide 
    width: 220px
    height: 350px
    position: relative
    &-link
        width: 100%
        height: 300px
        position: absolute
        top: 0
        text-decoration: none
    &__content
        margin-top: 237px
    &__name
        color: #FFF
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 500
        line-height: 150%
        margin-left: 20px
    &__country
        color: #FFF
        font-family: Rubik
        font-size: 12px
        font-style: normal
        font-weight: 400
        line-height: 150%
        display: flex
        align-items: center
        gap: 5px
        margin-left: 20px
        margin-top: 2px

.button 
    position: relative
    top: 300px

@media (max-width: 1200px)
    .line_cards
        display: none
    .line_slider
        display: block
</style>