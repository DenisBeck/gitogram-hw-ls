import AppHeader from './AppHeader.vue'
import { AppLogo } from '../appLogo'
import { TopLinksList } from '../topLinksList'

export default {
    title: 'Header',
    component: AppHeader
}

export const Default = {
    render: (args) => ({
        components: { AppHeader, AppLogo, TopLinksList },
        setup () {
            return { args }
        },
        template: `
            <app-header v-bind="args">
                <template #top-header>
                    <app-logo />
                    <top-links-list />
                </template>
                <template #bottom-header>
            </app-header>
        `
    }),
    args: {

    }
}
