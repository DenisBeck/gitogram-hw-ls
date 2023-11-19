<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list />
            </template>
            <template v-if="withStories" #bottom-header>
                <ul class="users-list">
                    <li class="users-item" v-for="user in users" :key="user.id">
                        <users-item isInStories :avatar="user.name" :name="user.name" />
                    </li>
                </ul>
            </template>
        </app-header>
        <main class="main">
            <slot name="main"></slot>
        </main>
    </div>
</template>

<script>
import { AppHeader } from '../appHeader'
import { TopLinksList } from '../topLinksList'
import { UsersItem } from '../usersItem'
import { AppLogo } from '../appLogo'

export default {
    name: 'app-layout',
    components: {
        AppHeader, AppLogo, TopLinksList, UsersItem
    },
    data () {
        return {
            users: [
                {
                    id: '1',
                    name: 'Josh'
                    // avatar: josh
                },
                {
                    id: '2',
                    name: 'Andrew'
                    // avatar: andrew
                },
                {
                    id: '3',
                    name: 'Camille'
                    // avatar: camille
                },
                {
                    id: '4',
                    name: 'Marselle'
                    // avatar: marselle
                },
                {
                    id: '5',
                    name: 'Piter'
                    // avatar: piter
                },
                {
                    id: '6',
                    name: 'Can'
                    // avatar: can
                },
                {
                    id: '7',
                    name: 'Iloveanime'
                    // avatar: iloveanime
                },
                {
                    id: '8',
                    name: 'Diself'
                    // avatar: diself
                },
                {
                    id: '9',
                    name: 'Gartor'
                    // avatar: gartor
                },
                {
                    id: '10',
                    name: 'Camilr'
                    // avatar: camilr
                }
            ]
        }
    },
    props: {
        withStories: {
            type: Boolean
        }
    }
}
</script>

<style lang="sass" src="./appLayout.sass" scoped>

</style>
