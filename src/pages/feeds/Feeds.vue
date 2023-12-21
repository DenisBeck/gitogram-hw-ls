<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list v-if="isAuth" :avatar="user.data.avatar_url" />
                <top-links-list v-else />
            </template>
            <template #bottom-header v-if="feed.data">
                <ul class="users-list">
                    <li class="users-item" v-for="feed in feed.data" :key="feed.owner.id">
                        <router-link :to="{ name: 'story', params: { routeId: feed.id || 0 } }">
                            <users-item isInStories  :name="feed.owner.login" :src="feed.owner.avatar_url" />
                        </router-link>
                    </li>
                </ul>
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <div v-if="starred.loading" class="loading"><icon name="Spinner" /></div>
                <div v-else-if="starred.data" class="feeds-list">
                    <feeds-item main v-for="starred in starred.data" :feed="starred" :key="starred.id" class="feed">
                        <template #feed-repo>
                            <h2 class="repo-title">{{ starred.name }}</h2>
                            <div class="repo-desc">{{ starred.description }}</div>
                        </template>
                    </feeds-item>
                </div>
                <div v-else-if="starred.error" class="feeds-empty">{{ starred.error }}</div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { AppHeader } from '@/components/appHeader'
import { TopLinksList } from '@/components/topLinksList'
import { UsersItem } from '@/components/usersItem'
import { AppLogo } from '@/components/appLogo'
import { FeedsItem } from '@/components/feedsItem'
import { Icon } from '@/icons'
export default {
    name: 'Feeds',
    components: {
        FeedsItem,
        AppHeader,
        AppLogo,
        TopLinksList,
        UsersItem,
        Icon
    },
    computed: {
        ...mapState({
            feed: state => state.feed.feed,
            starred: state => state.starred.starred,
            user: state => state.user.user,
            likes: state => state.likes.likes
        }),
        ...mapGetters({
            isAuth: 'user/isAuth'
        })
    },
    methods: {
        ...mapActions({
            fetchRepos: 'feed/fetchRepos',
            fetchStarred: 'starred/fetchStarred',
            fetchUser: 'user/fetchUser'
        })
    },
    async created () {
        await this.fetchUser()
        await this.fetchStarred()
        await this.fetchRepos()
    },
    watch: {
        'likes.data': 'fetchStarred'
    }
}
</script>

<style lang="sass" src="./feeds.sass" scoped>

</style>
