<template>
    <app-layout withStories>
        <template #main>
            <div v-if="feeds" class="feeds-list">
                <feeds-item v-for="feed in feeds" :feed="feed" :key="feed.id" class="feed">
                    <template #feed-tech>
                        <div class="feed-tech">
                            <h2 class="tech-title">{{ feed.tech.name }}</h2>
                            <div class="tech-desc">
                                <span>{{ feed.tech.description.bold }}</span>
                                {{ feed.tech.description.regular }}
                            </div>
                            <tech-info
                                :stars="feed.tech.stars"
                                :forks="feed.tech.forks"
                            />
                        </div>
                    </template>
                </feeds-item>
            </div>
            <div v-else class="feeds-empty">Список материалов пуст</div>
        </template>
    </app-layout>

</template>

<script>
import { AppLayout } from '@/components/appLayout'
import { FeedsItem } from '@/components/feedsItem'
import { TechInfo } from '@/components/techInfo'
export default {
    name: 'Feeds',
    components: {
        AppLayout,
        FeedsItem,
        TechInfo
    },
    data () {
        return {
            feeds: [
                {
                    id: '1',
                    user: {
                        name: 'joshua_l',
                        avatar: 'Andrew'
                    },
                    tech: {
                        name: 'Vue.js',
                        description: {
                            bold: 'JavaScript',
                            regular: 'framework for building interactive web applications ⚡'
                        },
                        stars: '156k',
                        forks: '4'
                    },
                    date: new Date('2023-05-15')
                },
                {
                    id: '2',
                    user: {
                        name: 'Camille',
                        avatar: 'Camille'
                    },
                    tech: {
                        name: 'React.js',
                        description: {
                            bold: 'Open source',
                            regular: 'JavaScript library used for designing user interfaces'
                        },
                        stars: '156k',
                        forks: '4'
                    },
                    date: new Date('2023-05-16')
                }
            ]
        }
    }
}
</script>

<style lang="sass" src="./feeds.sass" scoped>

</style>
