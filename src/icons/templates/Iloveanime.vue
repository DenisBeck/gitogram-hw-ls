<template>
    <img :src="iloveanime" alt="iloveanime">
</template>

<script>
import iloveanime from '@/assets/img/iloveanime.png'
export default {
    data () {
        return {
            iloveanime
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
