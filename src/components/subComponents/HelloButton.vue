<template>
    <div class="button" @click="buttonFunction">Поприветствовать <img src="@/assets/icons/hand.svg"></div>
    <div class="hello-message-container">
        <div class="hello-message" v-for="(mes, index) in openedMessage" :key="index">
            <div class="hello-message_content">
                Вы поприветствовали пользователя {{ name }}
            </div>
            <div class="hello-message__progressbar"></div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'

export default {
    props: {
        id: String,
        name: String,
        likeMethod: Function,
    },
    setup(props) {
        let openedMessage = ref(0)
        function openMessage() {
            ++openedMessage.value
        
            setTimeout(() => {
                --openedMessage.value
            }, 7000)
        }


        function addLike() {
            props.likeMethod()
        }

        function buttonFunction() {
            openMessage()
            addLike()
        }

        return {
            openedMessage,
            buttonFunction,
        }
    }
}
</script>
<style scoped lang="sass">
.button
    color: #FFF
    font-family: Rubik
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: 150%
    text-decoration: none
    padding: 15px 30px
    border-radius: 40px
    background: var(--btn-primary, linear-gradient(90deg, #EE0979 0%, #FF6A00 100%))
    display: flex
    gap: 10px
    cursor: pointer

.hello-message-container
    position: fixed !important
    right: 100px !important
    bottom: 10px !important
    display: flex
    gap: 10px
    flex-direction: column
    z-index: 100
    flex-wrap: wrap
    width: 300px

.hello-message
    animation: message 7s 
    height: 60px
    width: 400px
    display: flex
    justify-content: center
    align-items: center
    background: #2D1436
    border-radius: 10px
    flex-direction: column
    transition: all .3s
    .hello-message__progressbar
        height: 4px
        background: var(--btn-primary, linear-gradient(90deg, #EE0979 0%, #FF6A00 100%))
        border-radius: 6px
        position: relative
        top: 14px
        animation: progressBar 6.4s
    .hello-message_content
        opacity: 1
        color: #FFF
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%

@keyframes message
    0%
        opacity: 0
    10%
        opacity: 1
    90%
        opacity: 1
    100%
        opacity: 0
@keyframes progressBar
    0%
        width: 100%
    100%
        width: 0
</style>