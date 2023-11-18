<template>
    <div :class="[{[toShow]: !show}, 'toggler']" @click="toggleClick">
        <span v-if="show" >Hide issues</span>
        <span v-else class="hidden">View issues</span>
    </div>
</template>

<script>
export default {
    props: ['show'],
    data() {
        return {
            toShow: 'to-show'
        }
    },
    methods: {
        toggleClick() {
            this.$emit('toggleChanged')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './issuesToggler'
</style>