<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list />
            </template>
            <template #bottom-header v-if="feed.data">
                <ul class="users-list">
                    <li class="users-item" v-for="feed in feed.data" :key="feed.owner.id">
                        <users-item isInStories :id="feed.id" :name="feed.owner.login" :src="feed.owner.avatar_url" />
                    </li>
                </ul>
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <div v-if="feed.loading" class="feeds-loading"><icon name="Spinner" /></div>
                <div v-else-if="feed.data" class="feeds-list">
                    <feeds-item v-for="feed in feed.data" :feed="feed" :key="feed.id" class="feed">
                        <template #feed-repo>
                            <h2 class="repo-title">{{ feed.name }}</h2>
                            <div class="repo-desc">{{ feed.description }}</div>
                        </template>
                    </feeds-item>
                </div>
                <div v-else-if="feed.error" class="feeds-empty">{{ feed.error }}</div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
            feed: state => state.feed.feed
        })
    },
    methods: {
        ...mapActions({
            fetchRepos: 'feed/fetchRepos'
        })
    },
    created () {
        this.fetchRepos()
    }
}
</script>

<style lang="sass" src="./feeds.sass" scoped>

</style>
