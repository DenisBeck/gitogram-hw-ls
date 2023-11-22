import FeedsItem from './FeedsItem.vue'

export default {
    title: 'FeedsItem',
    component: FeedsItem
}

export const Default = {
    render: (args) => ({
        components: { FeedsItem },
        setup () {
            return { args }
        },
        template: '<feeds-item v-bind="args" />'
    }),
    args: {
        feed: {
            id: '1',
            owner: {
                login: 'joshua_l',
                avatar: 'Andrew'
            },
            name: 'Vue.js',
            description: 'framework for building interactive web applications ⚡',
            stars: '156k',
            forks: '4',
            created_at: new Date('2023-05-15')
        }
    }
}
