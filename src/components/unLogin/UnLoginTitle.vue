<template>
  <section class="unlogin-title" data-aos="fade-top" data-aos-duration="1500">
    <span data-aos="fade-top" data-aos-duration="1000">{{ title }}</span>
    {{ subtitle }}
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  props: {
    title: String,
    subtitle: String,
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style scoped lang="sass">
.unlogin-title
  color: #FFF
  text-align: center
  font-family: Rubik
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 150%
  display: flex
  flex-direction: column
  max-width: 846px
  margin: 20vh auto 0 auto
  span 
    color: #FFF
    text-align: center
    font-family: Rubik
    font-size: 60px
    font-style: normal
    font-weight: 500
    line-height: 100%
    margin-bottom: 10px

@media (max-width: 560px)
  .unlogin-title 
    max-width: 100%
    margin-top: 10vh
    font-size: 14px
    span 
      font-size: 36px
</style>