<template>
    <img :src="can" alt="can">
</template>

<script>
import can from '@/assets/img/can.png'
export default {
    data () {
        return {
            can
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
