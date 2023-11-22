import IssuesToggler from './IssuesToggler.vue'

export default {
    title: 'IssuesToggler',
    component: IssuesToggler
}

export const Default = {
    render: (args) => ({
        components: { IssuesToggler },
        setup () {
            return { args }
        },
        template: '<issues-toggler v-bind="args" />'
    }),
    args: {
        isShow: true,
        toggle: () => !this.show
    }
}

export const Toggled = {
    render: (args) => ({
        components: { IssuesToggler },
        setup () {
            return { args }
        },
        template: '<issues-toggler v-bind="args" />'
    }),
    args: {
        isShow: false,
        toggle: () => !this.show
    }
}
