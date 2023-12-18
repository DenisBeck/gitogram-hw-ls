<template>
    <div class="wrapper">
        <app-header>
            <template #top-header>
                <app-logo isBackgroundDark />
                <app-button close @click="goToHome" />
            </template>
        </app-header>
        <main class="main">
            <div class="container">
                <div v-if="feed.loading" class="feeds-loading"><icon name="Spinner" /></div>
                <div v-else-if="feed.data" class="slider-container">
                    <div :class="['slides-list', {'slides-margin': isStoriesCountEven}]" :style="styleSlideShift">
                        <slides-item
                            v-for="(slide, key) in feedsWithStarredProperty"
                            :active="key + minValue === slideShift"
                            :key="slide.id"
                            :story="slide"
                            @onChangeActive="changeActive"
                            @onFollow="follow"
                            :followingProp="slide.isStarred"
                        />
                    </div>
                </div>
                <div v-if="feed.data" class="slider-controls">
                    <div
                        @click="moveLeft"
                        class="slider-control-item left"
                        :class="{'hide': slideShift <= minValue}"
                    >
                        <icon name="Control" />
                    </div>
                    <div
                        @click="moveRight"
                        class="slider-control-item right"
                        :class="{'hide': slideShift >= maxValue}"
                    >
                        <icon name="Control" />
                    </div>
                </div>
                <div v-else-if="feed.error">{{ feed.error }}</div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { reactive } from 'vue'

import { AppHeader } from '@/components/appHeader'
import { AppButton } from '@/components/appButton'
import { AppLogo } from '@/components/appLogo'
import { SlidesItem } from '@/components/slidesItem'
import { Icon } from '@/icons'
export default {
    name: 'Stories',
    components: {
        SlidesItem, AppHeader, AppLogo, Icon, AppButton
    },
    data () {
        return {
            slideShift: 0,
            feedsWithStarredProperty: []
        }
    },
    props: ['routeId'],
    computed: {
        ...mapState({
            feed: state => state.feed.feed,
            starred: state => state.starred.starred,
            likes: state => state.likes.likes
        }),
        ...mapGetters({
            storiesCount: 'feed/getFeedsCount',
            isLikesStateInit: 'likes/isStateInit'
        }),
        styleSlideShift () {
            return reactive({
                transform: `translateX(${-this.slideShift * 326}px)`
            })
        },
        isStoriesCountEven () {
            return !(this.storiesCount % 2)
        },
        minValue () {
            return -Math.floor(this.storiesCount / 2)
        },
        maxValue () {
            return Math.floor(this.storiesCount / 2) + this.storiesCount % 2 - 1
        }
    },
    methods: {
        ...mapActions({
            fetchRepos: 'feed/fetchRepos',
            fetchStarred: 'starred/fetchStarred',
            putLike: 'likes/putLike',
            deleteLike: 'likes/deleteLike',
            initLikes: 'likes/initLikes'
        }),
        initActiveSlide () {
            if (this.feed.data && this.routeId) {
                this.feed.data.forEach((item, index) => {
                    if (String(item.id) === String(this.routeId)) {
                        this.slideShift = index + this.minValue
                    }
                })
            }
        },
        init () {
            this.initActiveSlide()
            if (this.feed.data && this.starred.data) {
                this.feed.data.forEach(item => this.feedsWithStarredProperty.push({
                    ...item,
                    isStarred: this.starred.data.some(starredItem => starredItem.id === item.id)
                }))
                this.initLikes(this.feedsWithStarredProperty)
            }
        },
        moveLeft () {
            this.slideShift--
        },
        moveRight () {
            this.slideShift++
        },
        goToHome () {
            this.$router.push({ name: 'main', params: {} })
        },
        changeActive () {
            if (this.slideShift === this.maxValue) {
                this.slideShift = this.minValue
            } else {
                this.slideShift++
            }
        },
        follow (owner, repo) {
            const currentLikesRepo = this.likes.data.find(item => item.owner === owner)
            if (!currentLikesRepo || !currentLikesRepo.body) {
                this.putLike({ owner, repo })
            } else {
                this.deleteLike({ owner, repo })
            }
        }
    },
    created () {
        if (!this.feed.data) {
            this.fetchRepos()
        }
        this.fetchStarred()
        this.init()
    },
    watch: {
        'feed.data': 'init'
    }
}
</script>

<style src="./stories.sass" lang="sass" scoped>

</style>
