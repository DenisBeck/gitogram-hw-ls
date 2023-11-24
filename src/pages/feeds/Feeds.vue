<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo />
                <top-links-list />
            </template>
            <template #bottom-header>
                <ul class="users-list">
                    <li class="users-item" v-for="user in feedOwners" :key="user.id">
                        <users-item isInStories :name="user.login" :src="user.avatar_url" />
                    </li>
                </ul>
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <div v-if="feeds" class="feeds-list">
                    <feeds-item v-for="feed in feeds" :feed="feed" :key="feed.id" class="feed">
                        <template #feed-repo>
                            <h2 class="repo-title">{{ feed.name }}</h2>
                            <div class="repo-desc">{{ feed.description }}</div>
                        </template>
                    </feeds-item>
                </div>
                <div v-else class="feeds-empty">Список материалов пуст</div>
            </div>
        </main>
    </div>
</template>

<script>
import * as api from '@/api'

import { AppHeader } from '@/components/appHeader'
import { TopLinksList } from '@/components/topLinksList'
import { UsersItem } from '@/components/usersItem'
import { AppLogo } from '@/components/appLogo'

import { FeedsItem } from '@/components/feedsItem'
export default {
    name: 'Feeds',
    components: {
        FeedsItem,
        AppHeader,
        AppLogo,
        TopLinksList,
        UsersItem
    },
    data () {
        return {
            feeds: []
        }
    },
    async created () {
        try {
            const response = await api.repos.getRepos()
            this.feeds = response.data.items
        } catch (e) {
            alert('Ошибка', e)
        }
    },
    computed: {
        feedOwners () {
            return this.feeds.map(feed => feed.owner)
        }
    }
}
</script>

<style lang="sass" src="./feeds.sass" scoped>

</style>
