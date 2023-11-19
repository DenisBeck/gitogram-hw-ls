<template>
    <img :src="camilr" alt="camilr">
</template>

<script>
import camilr from '@/assets/img/camilr.png'
export default {
    data () {
        return {
            camilr
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
