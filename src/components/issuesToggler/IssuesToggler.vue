<template>
    <div :class="[{[isShow]: !show}, 'toggler']" @click="toggleClick">
        <span v-if="show">Hide issues</span>
        <span v-else class="hidden">View issues</span>
    </div>
</template>

<script>
export default {
    name: 'issues-toggler',
    props: ['show'],
    emits: ['toggleChanged'],
    data () {
        return {
            isShow: 'show'
        }
    },
    methods: {
        toggleClick () {
            this.$emit('toggleChanged')
        }
    }
}
</script>

<style lang="sass" src="./issuesToggler.sass" scoped>

</style>
