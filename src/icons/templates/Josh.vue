<template>
    <img :src="josh" alt="josh">
</template>

<script>
import josh from '@/assets/img/josh.png'
export default {
    data () {
        return {
            josh
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
