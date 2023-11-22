<template>
    <img :src="slideImage" alt="slide image">
</template>

<script>
import slideImage from '@/assets/img/slide-image.png'
export default {
    data () {
        return {
            slideImage
        }
    }
}
</script>

<style lang="sass" src="./templates.sass" scoped>

</style>
