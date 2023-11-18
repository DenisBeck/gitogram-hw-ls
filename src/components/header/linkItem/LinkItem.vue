<template>
    <div class="link">
        <a :href="href">
            <img v-if="icon" :src="icon" alt="link">
            <span v-else-if="text">{{ text }}</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        href: String,
        text: String,
        icon: String
        
    }
}
</script>

<style lang="scss" scoped>

</style>