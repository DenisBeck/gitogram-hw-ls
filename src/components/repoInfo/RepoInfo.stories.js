import RepoInfo from './RepoInfo.vue'

export default {
    title: 'RepoInfo',
    component: RepoInfo
}

export const Default = {
    render: (args) => ({
        components: { RepoInfo },
        setup () {
            return { args }
        },
        template: '<repo-info v-bind="args" />'
    }),
    args: {
        stars: '156k',
        forks: '4'
    }
}
