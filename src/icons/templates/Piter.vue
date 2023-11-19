<template>
    <img :src="piter" alt="piter">
</template>

<script>
import piter from '@/assets/img/piter.png'
export default {
    data () {
        return {
            piter
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
