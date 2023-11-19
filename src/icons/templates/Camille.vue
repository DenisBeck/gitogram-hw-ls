<template>
    <img :src="camille" alt="camille">
</template>

<script>
import camille from '@/assets/img/camille.png'
export default {
    data () {
        return {
            camille
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
