<template>
    <div :class="['scale', {'active': active}]">
        <div ref="indicator" class="scale-value"></div>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    data () {
        return {
            active: false
        }
    },
    emits: ['onFinish'],
    methods: {
        emitOnFinish () {
            this.$emit('onFinish')
        }
    },
    mounted () {
        this.$nextTick(() => {
            console.log(this.$refs.indicator.clientWidth) // рандомный код, чтобы браузер не сразу рендерил измененный this.active
            this.active = true
        })

        this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    },
    beforeUnmount () {
        this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
    }
}
</script>

<style lang="sass" src="./progressBar.sass" scoped>

</style>
