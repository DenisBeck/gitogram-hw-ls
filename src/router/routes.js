import { Feeds } from '@/pages/feeds'
import { Stories } from '@/pages/stories'
import { NotFound } from '@/pages/notFound'
import { Auth } from '@/pages/auth'
import { Profile } from '@/pages/profile'
import { Followers } from '@/pages/followers'

export default [
    {
        path: '/',
        name: 'main',
        component: Feeds
    },
    {
        path: '/stories',
        name: 'stories',
        component: Stories,
        props: true
    },
    {
        path: '/stories/:routeId(\\d+)',
        component: Stories,
        props: true,
        name: 'story'
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFound
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/followers',
        name: 'followers',
        component: Followers
    }
]
