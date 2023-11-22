import AppButton from './AppButton.vue'

export default {
    title: 'Button',
    component: { AppButton }
}

export const Default = {

    render: (args) => ({
        components: { AppButton },
        setup () {
            return { args }
        },
        template: '<app-button v-bind="args" />'
    }),
    args: {
        label: 'Follow'
    }
}

export const Disabled = {

    render: (args) => ({
        components: { AppButton },
        setup () {
            return { args }
        },
        template: '<app-button v-bind="args" />'
    }),
    args: {
        label: 'Follow',
        disabled: true
    }
}
