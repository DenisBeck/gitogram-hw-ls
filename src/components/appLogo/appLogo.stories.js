import AppLogo from './AppLogo.vue'

export default {
    title: 'Logo',
    component: AppLogo
}

export const Default = {
    render: (args) => ({
        components: { AppLogo },
        setup () {
            return { args }
        },
        template: '<app-logo v-bind="args" />'
    }),
    args: {

    }
}

export const Light = {
    render: (args) => ({
        components: { AppLogo },
        setup () {
            return { args }
        },
        template: '<app-logo v-bind="args" />'
    }),
    args: {
        isBackgroundDark: true
    },
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#000'
                }
            ]
        }
    }
}
