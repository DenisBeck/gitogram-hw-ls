<template>
    <button :disabled="disabled" @click="handleClick" :class="['app-button', {'close': close}]">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'app-button',
    emits: ['close'],
    props: {
        label: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        close: {
            type: Boolean
        }
    },
    methods: {
        handleClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="sass" src="./appButton.sass" scoped>

</style>
