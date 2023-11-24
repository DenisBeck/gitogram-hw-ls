<template>
    <div class="repo-info">
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
        stars: Number,
        forks: Number
    }
}
</script>

<style lang="sass" src="./repoInfo.sass" scoped>

</style>
