<template>
  <section class="unlogin-title">
    <span>Знакомства без преград</span>
    Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.
  </section>
</template>

<script setup>

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