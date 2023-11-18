<template>
    <div :class="[{[inPost]: isInPost}, 'user']">
        <div class="avatar"><img :src="avatar" alt=""></div>
        <div class="name">{{ name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        avatar: String,
        name: String,
        isInPost: Boolean
    },
    data() {
        return {
            inPost: 'in-post'
        }
    }
}
</script>

<style lang="scss" scoped>
@import './userItem';

</style>