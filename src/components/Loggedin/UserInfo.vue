<script>
export default {
    props: {
        img: Object,
        title: String,
        charachteristic: Array,
        description: String,
    },
    setup() {
        function openDescription() {
            let content = document.querySelector('.user_info_description_info')
            content.classList.toggle('opened')
        }

        return {
            openDescription
        }
    }
}
</script>
<template>
    <section class="user">
        <img :src="img.default" class="user__img">
        <div class="user_info">
            <h1 class="user_info__title">{{ title }}</h1>
            <HelloButton />
            <div class="user_info_charachteristic">
                <div class="user_info_charachteristic_item" v-for="(item, index) in charachteristic" :key="index">
                    <div class="user_info_charachteristic_item__value">{{ item.name }}</div>
                    <div class="user_info_charachteristic_item__value">{{ item.value }}</div>
                </div>
            </div>
            <div class="user_info_description">
                <h1 class="user_info_description__title" @click="openDescription">О себе</h1>
                <div class="user_info_description_info">
                    <p class="user_info_description_info__text" v-html="description"></p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="sass">
.user
    margin-top: 30px
    display: flex
    justify-content: center
    gap: 50px
    &__img
        width: 380px
        height: 498px
        object-fit: cover
        border-radius: 50px

.user_info
    width: 550px
    display: flex
    flex-direction: column
    align-items: flex-start
    &__title
        color: #FFF
        font-family: Rubik
        font-size: 32px
        font-style: normal
        font-weight: 500
        line-height: 150%
        margin-bottom: 10px

.user_info_charachteristic
    display: flex
    flex-direction: column
    width: 100%
    gap: 10px
    margin-top: 45px
    &_item
        width: 100%
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        justify-content: space-between
        color: #FFFDFD
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        background: url('@/assets/icons/line.svg')
        background-position: center
        background-repeat: no-repeat
        background-size: 100% 1px

.user_info_description
    width: 100%
    margin-top: 30px
    position: relative
    &__title
        color: #FFFDFD
        font-variant-numeric: lining-nums proportional-nums
        font-family: Rubik
        font-size: 18px
        font-style: normal
        font-weight: 500
        line-height: 150%
        width: 100%
        text-align: center
        background: #2D1436
        cursor: pointer
        border-radius: 50px
        padding: 5px
        z-index: 2
        position: relative
    &_info
        position: absolute
        top: 23px
        height: 0
        background: #2D1436
        transition: height .3s
        border-bottom-left-radius: 20px
        border-bottom-right-radius: 20px
        &__text
            padding: 15px
            opacity: 0
            transition: opacity .3s
            color: #FFFDFD
            font-family: Rubik
            font-size: 16px
            font-style: normal
            font-weight: 400
            line-height: 150%
    .opened
        height: 221px
        transition: all .3s
        overflow: hidden
        p
            opacity: 1
            transition: all .3s

</style>