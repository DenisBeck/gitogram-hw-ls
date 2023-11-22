import TechInfo from './TechInfo.vue'

export default {
    title: 'TechInfo',
    component: TechInfo
}

export const Default = {
    render: (args) => ({
        components: { TechInfo },
        setup () {
            return { args }
        },
        template: '<tech-info v-bind="args" />'
    }),
    args: {
        stars: '156k',
        forks: '4'
    }
}
