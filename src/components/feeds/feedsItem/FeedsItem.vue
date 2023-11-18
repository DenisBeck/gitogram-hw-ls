<template>
    <div class="feed">
        <div class="container">
            <user-item class="user-item" :isInPost="true" :avatar="feed.user.avatar" :name="feed.user.name" />
            <slot></slot>
            <issues-toggler @toggleChanged="toggleHandler" :show="show" />
            <div v-if="show" class="feed-content">
                <p><strong>joshua_l</strong> Enable performance measuring in production, at the user's request</p>
                <p><strong>Camille</strong> It's Impossible to Rename an Inherited Slot</p>
                <p><strong>Marselle</strong> transition-group with flex parent causes removed items to fly</p>
            </div>
            <div class="feed-date">{{ formatDate }}</div>
        </div>
    </div>
</template>

<script>
import {UserItem} from '@/components/users/userItem';
import {IssuesToggler} from '@/components/feeds/issuesToggler';
export default {
    components: {
        UserItem,
        IssuesToggler
    },
    props: {
        feed: Object
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggleHandler() {
            this.show = !this.show;
        }
    },
    computed: {
        formatDate() {
            return `${this.feed.date.getDate()} ${this.feed.date.toLocaleString('en', { month: 'long' })}`
        }
    }
}
</script>

<style lang="scss" scoped>
@import './feedsItem'
</style>