<template>
    <img :src="star" alt="star">
</template>

<script>
import star from '@/assets/img/star.png'
export default {
    data () {
        return {
            star
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
