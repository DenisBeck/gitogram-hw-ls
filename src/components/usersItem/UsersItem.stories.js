import UsersItem from './UsersItem.vue'

export default {
    title: 'UsersItem',
    component: UsersItem
}

export const Default = {
    render: (args) => ({
        components: { UsersItem },
        setup () {
            return { args }
        },
        template: '<users-item v-bind="args" />'
    }),
    args: {
        name: 'Andrew',
        isInStories: false
    }
}

export const InStories = {
    render: (args) => ({
        components: { UsersItem },
        setup () {
            return { args }
        },
        template: '<users-item v-bind="args" />'
    }),
    args: {
        name: 'Andrew',
        isInStories: true
    }
}
