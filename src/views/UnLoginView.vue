<script setup>
import UnLoginHeader from '@/components/unLogin/UnLoginHeader.vue'
import UnLoginTitle from '@/components/unLogin/UnLoginTitle.vue'
import LoginForm from '@/components/unLogin/LoginForm.vue'
import Footer from '@/components/Footer.vue'

</script>
<template>  
    <div class="container">
        <UnLoginHeader />
        <UnLoginTitle />
        <LoginForm />
        <Footer />
    </div>
</template>
<style scoped lang="sass">
.container 
    min-height: 100vh
</style>