import ProgressBar from './ProgressBar.vue'

export default {
    title: 'ProgressBar',
    component: ProgressBar
}

export const Default = {
    render: (args) => ({
        components: { ProgressBar },
        setup () {
            return { args }
        },
        template: '<progress-bar v-bind="args" />'
    }),
    args: {

    }
}

export const ProgressComplete = {
    render: (args) => ({
        components: { ProgressBar },
        setup () {
            return { args }
        },
        template: '<progress-bar v-bind="args" />'
    }),
    args: {
        progress: '100%'
    }
}

export const NoProgress = {
    render: (args) => ({
        components: { ProgressBar },
        setup () {
            return { args }
        },
        template: '<progress-bar v-bind="args" />'
    }),
    args: {
        progress: '0'
    }
}
