<template>
    <div class="feed">
        <div class="container">
            <users-item class="user-item" :avatar="feed.user.avatar" :name="feed.user.name" />
            <slot name="feed-tech"></slot>
            <issues-toggler @toggleChanged="toggleHandler" :show="showComments" />
            <div v-if="showComments" class="feed-comment">
                <p><span>joshua_l</span> Enable performance measuring in production, at the user's request</p>
                <p><span>Camille</span> It's Impossible to Rename an Inherited Slot</p>
                <p><span>Marselle</span> transition-group with flex parent causes removed items to fly</p>
            </div>
            <div class="feed-date">{{ formatDate }}</div>
        </div>
    </div>
</template>

<script>
import { UsersItem } from '@/components/usersItem'
import { IssuesToggler } from '@/components/issuesToggler'
export default {
    name: 'feeds-item',
    components: {
        UsersItem,
        IssuesToggler
    },
    props: {
        feed: Object
    },
    data () {
        return {
            showComments: true
        }
    },
    methods: {
        toggleHandler () {
            this.showComments = !this.showComments
        }
    },
    computed: {
        formatDate () {
            return `${this.feed.date.getDate()} ${this.feed.date.toLocaleString('en', { month: 'long' })}`
        }
    }
}
</script>

<style lang="sass" src="./feedsItem.sass" scoped>

</style>
