import TopLinksList from './TopLinksList.vue'

export default {
    title: 'TopLinksList',
    component: TopLinksList
}

export const Default = {
    render: (args) => ({
        components: { TopLinksList },
        setup () {
            return { args }
        },
        template: '<top-links-list v-bind="args" />'
    }),
    args: {

    }
}
