<template>
    <div class="repo-info">
        <div class="star-key"><icon name="Star" />Star</div>
        <div class="star-value">{{ formattedStars }}</div>
        <div class="fork-key"><icon name="Fork" />Fork</div>
        <div class="fork-value">{{ forks }}</div>
    </div>
</template>

<script>
import { Icon } from '@/icons'
import { kFormatter } from '@/helpers/kFormatter'

export default {
    name: 'tech-info',
    components: {
        Icon
    },
    props: {
        stars: Number,
        forks: Number
    },
    computed: {
        formattedStars () {
            return kFormatter(this.stars)
        }
    }
}
</script>

<style lang="sass" src="./repoInfo.sass" scoped>

</style>
