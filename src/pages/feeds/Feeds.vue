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
                        <template #feed-tech>
                            <div class="feed-tech">
                                <h2 class="tech-title">{{ feed.name }}</h2>
                                <div class="tech-desc">{{ feed.description }}</div>
                                <tech-info
                                    :stars="feed.stargazers_count"
                                    :forks="feed.forks_count"
                                />
                            </div>
                        </template>
                    </feeds-item>
                </div>
                <div v-else class="feeds-empty">Список материалов пуст</div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'

import { AppHeader } from '@/components/appHeader'
import { TopLinksList } from '@/components/topLinksList'
import { UsersItem } from '@/components/usersItem'
import { AppLogo } from '@/components/appLogo'

import { FeedsItem } from '@/components/feedsItem'
import { TechInfo } from '@/components/techInfo'
export default {
    name: 'Feeds',
    components: {
        FeedsItem,
        TechInfo,
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
    methods: {
        async fetchRepos () {
            const getTwoDigitValue = (value) => {
                return value < 10 ? '0' + value : value
            }
            const date = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
            const formatDate = `${date.getFullYear()}-${getTwoDigitValue(date.getMonth() + 1)}-${getTwoDigitValue(date.getDate())}`
            const paramsString = new URLSearchParams()
            paramsString.set('order', 'desc')
            paramsString.set('sort', 'start')
            paramsString.set('q', `language:javascript created:>${formatDate}`)
            paramsString.set('per_page', '10')
            try {
                const response = await axios.get('https://api.github.com/search/repositories?' + paramsString.toString())
                this.feeds = response.data.items
            } catch (e) {
                alert('Ошибка', e)
            }
        }
    },
    mounted () {
        this.fetchRepos()
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
