<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list  :avatar="user.data.avatar_url" />
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <aside class="profile-info">
                    <h2 class="profile-title title">My profile</h2>
                    <users-item :stats="{followers: user.data.followers, following: followers.data.length}" :name="user.data.login" :src="user.data.avatar_url" />
                </aside>
                <div class="profile-repos">
                    <div class="profile-repos-header">
                        <h2 class="profile-repos-title title">Following</h2>
                        <div class="profile-repos-count">{{ followers.data.length || 0 }}</div>
                    </div>
                    <div v-if="users.loading && followers.loading" class="loading"><icon name="Spinner" /></div>
                    <div v-else-if="users.data && allUsers && followers.data" class="feeds-list">
                        <div v-for="user in allUsers" :key="user.id" class="follow-user">
                            <users-item
                                :user="user"
                                @followUser="followUser"
                                :loading="followers.loading && user === currentUser"
                            />
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
import { Icon } from '@/icons'

import useFollowers from '@/composables/useFollowers'
import useUser from '@/composables/useUser'
import { ref } from 'vue'

export default {
    name: 'Followers',
    components: {
        UsersItem,
        AppHeader,
        TopLinksList,
        AppLogo,
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

        const currentUser = ref(null)
        const followUser = async (user) => {
            currentUser.value = user
            await fetchFollowers()
            if (user.followed) {
                await deleteFollowing({ login: user.login })
            } else {
                await putFollowing({ login: user.login })
            }
            setAllUsers()
        }
        const allUsers = ref([])

        const setAllUsers = async () => {
            await fetchFollowers()
            allUsers.value = followers.data.slice(0)
            const followersLogins = followers.data.map(item => item.login)
            users.data.filter(item => !followersLogins.includes(item.login)).forEach(item => {
                allUsers.value.push(item)
            })
            allUsers.value = allUsers.value.map(item => ({ ...item, followed: followers.data.includes(item) }))
        }

        await fetchUser()
        if (user.data) {
            setFollowersUser(user.data.login)
            setAllUsers()
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
            fetchUser,

            allUsers,
            followUser,
            currentUser
        }
    }
}
</script>

<style lang="sass" src="./followers.sass" scoped>

</style>
@/composables/useFollowers@/composables/useUser
