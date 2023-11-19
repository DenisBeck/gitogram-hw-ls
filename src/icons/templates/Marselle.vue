<template>
    <img :src="marselle" alt="marselle">
</template>

<script>
import marselle from '@/assets/img/marselle.png'
export default {
    data () {
        return {
            marselle
        }
    }
}
</script>

<style lang="sass" scoped>
img
    max-width: 100%
    height: 100%
</style>
