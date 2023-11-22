import Feeds from './Feeds.vue'

export default {
    title: 'pages/Feeds',
    component: Feeds
}

export const Default = {
    render: (args) => ({
        components: { Feeds },
        setup () {
            return { args }
        },
        template: '<feeds v-bind="args" />'
    }),
    args: {

    }
}
