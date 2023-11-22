<template>
    <div class="scale">
        <div class="scale-value" :style="{width: progress}"></div>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    props: {
        progress: {
            type: String,
            required: true,
            default: '80%'
        }
    }
}
</script>

<style lang="sass" src="./progressBar.sass" scoped>

</style>
