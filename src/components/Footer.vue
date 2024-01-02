<template>
    <footer class="footer">
        <nav class="footer_nav">
            <a href="#" class="footer_nav__link" v-for="(link, index) in footer.links" :key="index">{{ link.name }}</a>
        </nav>
    </footer>
</template>
<script setup>
import { useFooterStore } from '@/stores/footer';

const footer = useFooterStore();
</script>
<style scoped lang="sass">
.footer 
    position: absolute
    bottom: 0
    padding-bottom: 30px
    width: 100%
.footer_nav 
    min-width: 100%
    display: flex
    justify-content: center
    gap: 30px
    flex-wrap: wrap
    &__link
        color: #EEE
        font-family: Rubik
        font-size: 14px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-decoration: none
</style>