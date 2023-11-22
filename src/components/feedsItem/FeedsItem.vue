<template>
    <div class="feed">
        <users-item class="user-item" :name="feed.owner.login" :src="feed.owner.avatar_url" />
        <slot name="feed-tech"></slot>
        <issues-toggler @toggle="toggleHandler" :isShow="showComments" />
        <div v-if="showComments" class="feed-comment">
            <p><span>joshua_l</span> Enable performance measuring in production, at the user's request</p>
            <p><span>Camille</span> It's Impossible to Rename an Inherited Slot</p>
            <p><span>Marselle</span> transition-group with flex parent causes removed items to fly</p>
        </div>
        <div class="feed-date">{{ formatDate }}</div>
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
            const date = new Date(this.feed.created_at)
            return `${date.getDate()} ${date.toLocaleString('en', { month: 'long' })}`
        }
    }
}
</script>

<style lang="sass" src="./feedsItem.sass" scoped>

</style>
