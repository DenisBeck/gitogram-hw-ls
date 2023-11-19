<template>
    <img :src="fork" alt="fork">
</template>

<script>
import fork from '@/assets/img/fork.png'
export default {
    data () {
        return {
            fork
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
