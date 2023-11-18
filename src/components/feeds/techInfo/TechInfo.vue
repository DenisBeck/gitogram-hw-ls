<template>
    <div class="tech-info">
        <div class="star-key"><img :src="star" alt="star">Star</div>
        <div class="star-value">{{ stars }}</div>
        <div class="fork-key"><img :src="fork" alt="fork">Fork</div>
        <div class="fork-value">{{ forks }}</div>
    </div>
</template>

<script>
import star from '@/assets/img/star.png';
import fork from '@/assets/img/fork.png'

export default {
    props: {
        stars: String,
        forks: String
    },
    data() {
        return {
            star,
            fork
        }
    }
}
</script>

<style lang="scss" scoped>
@import './techInfo'

</style>