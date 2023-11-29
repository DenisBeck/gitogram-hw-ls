<template>
    <div :class="['scale', {'active': active}]">
        <div ref="indicator" class="scale-value" :style="progressStyle"></div>
    </div>
</template>

<script>
import { noActiveAction } from '@/helpers/noActiveAction'
export default {
    name: 'progress-bar',
    data () {
        return {
            active: false,
            progressStyle: {}
        }
    },
    emits: ['onFinish'],
    methods: {
        emitOnFinish () {
            this.$emit('onFinish')
        },
        cancelActive (e) {
            const x = e.clientX
            const y = e.clientY
            this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
            this.active = false
            this.progressStyle = {

            }
            noActiveAction(x, y, this.continueActive)
        },
        continueActive () {
            this.progressStyle = {
                transition: 'all 30s'
            }
            this.active = true
            if (this.$refs.indicator) {
                this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.continueActive()
            console.log(this.$refs.indicator.clientWidth) // рандомный код, чтобы браузер не сразу рендерил измененный this.active
        })

        this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
        document.addEventListener('mousemove', this.cancelActive)
    },
    beforeUnmount () {
        this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
        document.removeEventListener('mousemove', this.cancelActive)
    }
}
</script>

<style lang="sass" src="./progressBar.sass" scoped>

</style>
