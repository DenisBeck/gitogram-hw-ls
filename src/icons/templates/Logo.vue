<template>
    <img :src="logo" alt="logo">
</template>

<script>
import logo from '@/assets/img/logo.png'
export default {
    data () {
        return {
            logo
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
