<template>
    <img :src="gartor" alt="gartor">
</template>

<script>
import gartor from '@/assets/img/gartor.png'
export default {
    data () {
        return {
            gartor
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
