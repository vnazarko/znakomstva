<script setup>
import Header from '@/components/Loggedin/Header.vue'

import { useUsersStore } from '@/stores/users';

const store = useUsersStore();



</script>
<template>
    <div class="container">
        <Header />
    </div>
</template>
<style lang="sass" scoped>
.container 
    height: 100vh !important

</style>