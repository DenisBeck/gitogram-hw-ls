import SlidesItem from './SlidesItem.vue'

export default {
    title: 'SlidesItem',
    component: SlidesItem,
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

export const Default = {
    render: (args) => ({
        components: { SlidesItem },
        setup () {
            return { args }
        },
        template: '<slides-item v-bind="args" />'
    }),
    args: {

    }
}

export const WithSkeleton = {
    render: (args) => ({
        components: { SlidesItem },
        setup () {
            return { args }
        },
        template: '<slides-item v-bind="args" />'
    }),
    args: {
        skeleton: true
    }
}

export const Active = {
    render: (args) => ({
        components: { SlidesItem },
        setup () {
            return { args }
        },
        template: '<slides-item v-bind="args" />'
    }),
    args: {
        active: true
    }
}

export const ActiveWithSkeleton = {
    render: (args) => ({
        components: { SlidesItem },
        setup () {
            return { args }
        },
        template: '<slides-item v-bind="args" />'
    }),
    args: {
        skeleton: true,
        active: true
    }
}
