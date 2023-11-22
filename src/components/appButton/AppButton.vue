<template>
    <button :disabled="disabled" class="app-button">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'app-button',
    props: {
        label: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" src="./appButton.sass" scoped>

</style>
