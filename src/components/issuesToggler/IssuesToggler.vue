<template>
    <div :class="[{['show']: !isShow}, 'toggler']" @click="toggleClick">
        <span class="toggler-text" v-if="isShow">Hide issues<span class="toggler-icon"><icon name="Arrow" /></span></span>
        <span class="toggler-text" v-else>View issues<span class="toggler-icon"><icon name="Arrow" /></span></span>
    </div>
</template>

<script>
import { Icon } from '@/icons'
export default {
    name: 'issues-toggler',
    components: {
        Icon
    },
    props: ['isShow'],
    emits: ['toggle'],
    methods: {
        toggleClick () {
            this.$emit('toggle')
        }
    }
}
</script>

<style lang="sass" src="./issuesToggler.sass" scoped>

</style>
