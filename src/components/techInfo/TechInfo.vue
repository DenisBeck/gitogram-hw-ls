<template>
    <div class="tech-info">
        <div class="star-key"><icon name="Star" />Star</div>
        <div class="star-value">{{ stars }}</div>
        <div class="fork-key"><icon name="Fork" />Fork</div>
        <div class="fork-value">{{ forks }}</div>
    </div>
</template>

<script>
import { Icon } from '@/icons'

export default {
    name: 'tech-info',
    components: {
        Icon
    },
    props: {
        stars: String,
        forks: String
    }
}
</script>

<style lang="sass" src="./techInfo.sass" scoped>

</style>
