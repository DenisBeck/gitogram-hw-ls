<template>
    <img :src="loading" alt="loading">
</template>

<script>
import loading from '@/assets/img/loading.gif'
export default {
    data () {
        return {
            loading
        }
    }
}
</script>

<style lang="sass" src="./templates.sass" scoped>

</style>
