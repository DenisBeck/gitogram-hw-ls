<template>
    <img :src="diself" alt="diself">
</template>

<script>
import diself from '@/assets/img/diself.png'
export default {
    data () {
        return {
            diself
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
