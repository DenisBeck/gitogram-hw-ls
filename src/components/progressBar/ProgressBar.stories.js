import ProgressBar from './ProgressBar.vue'

export default {
    title: 'ProgressBar',
    component: ProgressBar
}

export const Default = {
    render: (args) => ({
        components: { ProgressBar },
        data () {
            return { args }
        },
        template: '<progress-bar @onFinish="args.onFinish" />'
    }),
    argTypes: {
        onFinish: {
            action: 'onFinish'
        }
    }
}
