<template>
    <div class="feed">
        <users-item  v-if="main" class="user-item" :id="feed.id" :name="feed.owner.login" :src="feed.owner.avatar_url" />
        <div class="feed-repo">
            <slot name="feed-repo"></slot>
            <repo-info
                :stars="feed.stargazers_count"
                :forks="feed.forks_count"
            />
        </div>
        <issues v-if="feed && main" :feed="feed" @requestIssues="requestIssues" :issues="issues" />
        <div v-if="main" class="feed-date">{{ formatDate }}</div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { RepoInfo } from '@/components/repoInfo'
import { UsersItem } from '@/components/usersItem'
import { Issues } from '@/components/issues'

export default {
    name: 'feeds-item',
    components: {
        UsersItem,
        RepoInfo,
        Issues
    },
    props: {
        feed: Object,
        main: Boolean
    },
    setup (props) {
        const store = useStore()
        const issues = computed(() => store.state.issues.issues.find(item => item.repo === props.feed.name))
        const fetchIssues = () => store.dispatch('issues/fetchIssues', props.feed)
        const formatDate = computed(() => {
            const date = new Date(props.feed.created_at)
            return `${date.getDate()} ${date.toLocaleString('en', { month: 'long' })}`
        })

        const requestIssues = async () => {
            store?.commit('issues/SET_REPO', props.feed.name)
            await fetchIssues()
        }

        return {
            formatDate,
            issues,
            fetchIssues,
            requestIssues
        }
    }
}
</script>

<style lang="sass" src="./feedsItem.sass" scoped>

</style>
