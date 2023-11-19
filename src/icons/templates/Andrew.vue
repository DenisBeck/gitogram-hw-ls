<template>
    <img :src="andrew" alt="andrew">
</template>

<script>
import andrew from '@/assets/img/andrew.png'
export default {
    data () {
        return {
            andrew
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
