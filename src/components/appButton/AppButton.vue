<template>
    <button :disabled="disabled" @click="handleClick" :class="['app-button', {'close': close}]">
        {{ label }}
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'app-button',
    emits: ['click'],
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
            this.$emit('click')
        }
    }
}
</script>

<style lang="sass" src="./appButton.sass" scoped>

</style>
