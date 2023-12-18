<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list v-if="isAuth" :avatar="user.data.avatar_url" />
                <top-links-list v-else />
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <aside class="profile-info">
                    <h2 class="profile-title">My profile</h2>
                    <users-item stats v-if="isAuth" :name="user.data.login" :src="user.data.avatar_url" />
                </aside>
                <div class="profile-repos">
                    <div class="profile-repos-header">
                        <h2 class="profile-repos-title">Repositories</h2>
                        <div class="profile-repos-count">{{ myReposCount }}</div>
                    </div>
                    <div v-if="myRepos.loading" class="profile-loading"><icon name="Spinner" /></div>
                    <div v-else-if="myRepos.data" class="feeds-list">
                        <feeds-item v-for="myRepo in myRepos.data" :feed="myRepo" :key="myRepo.id" class="feed">
                            <template #feed-repo>
                                <h2 class="repo-title">{{ myRepo.name }}</h2>
                                <div class="repo-desc">{{ myRepo.description }}</div>
                            </template>
                        </feeds-item>
                    </div>
                    <div v-else-if="myRepos.error" class="profile-empty">{{ myRepos.error }}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { AppHeader } from '@/components/appHeader'
import { TopLinksList } from '@/components/topLinksList'
import { UsersItem } from '@/components/usersItem'
import { AppLogo } from '@/components/appLogo'
import { FeedsItem } from '@/components/feedsItem'
import { Icon } from '@/icons'

import useMyRepos from '@/components/composables/useMyRepos'
import useUser from '@/components/composables/useUser'

export default {
    name: 'Profile',
    components: {
        UsersItem,
        AppHeader,
        TopLinksList,
        AppLogo,
        FeedsItem,
        Icon
    },
    async setup () {
        const {
            myRepos,
            myReposCount,
            fetchMyRepos,
            setUser
        } = useMyRepos()

        const {
            user,
            fetchUser,
            isAuth
        } = useUser()

        await fetchUser()
        if (user.data) {
            setUser(user.data.login)
            await fetchMyRepos()
        }

        return {
            myRepos,
            myReposCount,
            fetchMyRepos,
            setUser,

            user,
            isAuth,
            fetchUser
        }
    }
}
</script>

<style lang="sass" src="./profile.sass" scoped>

</style>
