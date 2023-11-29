import { Feeds } from '@/pages/feeds'
import { Stories } from '@/pages/stories'
import { NotFound } from '@/pages/notFound'

export default [
    {
        path: '/',
        component: Feeds
    },
    {
        path: '/stories/',
        component: Stories,
        props: true
    },
    {
        path: '/stories/:routeId(\\d+)',
        component: Stories,
        props: true,
        name: 'stories'
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFound
    }
]
