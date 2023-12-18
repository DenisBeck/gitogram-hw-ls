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
                    <users-item v-if="isAuth" :name="user.data.login" :src="user.data.avatar_url" />
                </aside>
                <div class="profile-repos">
                    <div class="profile-repos-header">
                        <h2 class="profile-repos-title">Following</h2>
                        <div class="profile-repos-count">{{ followersCount }}</div>
                    </div>
                    <div v-if="users.loading" class="profile-loading"><icon name="Spinner" /></div>
                    <div v-else-if="users.data" class="feeds-list">
                        <div v-for="user in users.data" :key="user.id" class="user">
                            <users-item :name="user.login" :src="user.avatar_url" />
                            <app-button @click="toggleFollow" :class="['slide-button', {'following': following || followers.loading}]" :label="label">
                                <span v-if="followers.loading" class="button-loader"><icon class="button-loader" name="Loader"></icon></span>
                            </app-button>
                        </div>
                    </div>
                    <div v-else-if="users.error" class="profile-empty">{{ users.error }}</div>
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
import { AppButton } from '@/components/appButton'
import { Icon } from '@/icons'

import useFollowers from '@/components/composables/useFollowers'
import useUser from '@/components/composables/useUser'

export default {
    name: 'Followers',
    components: {
        UsersItem,
        AppHeader,
        TopLinksList,
        AppLogo,
        AppButton,
        Icon
    },
    async setup () {
        const {
            users,
            followers,
            followersCount,
            setFollowersUser,
            fetchUsers,
            fetchFollowers,
            putFollowing,
            deleteFollowing
        } = useFollowers()

        const {
            user,
            fetchUser,
            isAuth
        } = useUser()

        await fetchUser()
        if (user.data) {
            setFollowersUser(user.data.login)
            await fetchFollowers()
        }

        return {
            users,
            followers,
            followersCount,
            setFollowersUser,
            fetchUsers,
            fetchFollowers,
            putFollowing,
            deleteFollowing,

            user,
            isAuth,
            fetchUser
        }
    }
}
</script>

<style lang="sass" src="./followers.sass" scoped>

</style>
