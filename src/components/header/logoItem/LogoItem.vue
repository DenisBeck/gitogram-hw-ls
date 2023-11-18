<template>
    <div class="logo">
        <a :href="href" v-if="src" class="logo-icon">
            <img :src="src" alt="logo">
        </a>
        <a :href="href" v-if="text" class="logo-text">{{ text }}</a>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        src: String,
        href: String
    }
}
</script>

<style lang="scss" scoped>

</style>