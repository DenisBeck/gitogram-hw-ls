<template>
    <div class="feed">
        <users-item class="user-item" :id="feed.id" :name="feed.owner.login" :src="feed.owner.avatar_url" />
        <div class="feed-repo">
            <slot name="feed-repo"></slot>
            <repo-info
                :stars="feed.stargazers_count"
                :forks="feed.forks_count"
            />
        </div>
        <issues-toggler @toggle="toggleHandler" :isShow="showComments" />
        <div v-show="showComments" class="feed-comment">
            <div v-if="issues.loading" class="skeleton">
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
            </div>
            <div v-else-if="issues.data && currentIssues" class="issues-content">
                <div v-for="issue in currentIssues" :key="issue.id" class="issues-item">
                    <p><span>{{ issue.user.login }}</span> {{ issue.title }}</p>
                </div>
            </div>
            <div v-else-if="issues.error">{{ issues.error }}</div>
        </div>
        <div class="feed-date">{{ formatDate }}</div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

import { RepoInfo } from '@/components/repoInfo'
import { UsersItem } from '@/components/usersItem'
import { IssuesToggler } from '@/components/issuesToggler'
export default {
    name: 'feeds-item',
    components: {
        UsersItem,
        IssuesToggler,
        RepoInfo
    },
    props: {
        feed: Object
    },
    data () {
        return {
            showComments: false,
            currentIssues: null
        }
    },
    computed: {
        ...mapState({
            issues: state => state.issues.issues
        }),
        ...mapGetters({
            isStateInit: 'issues/isStateInit'
        }),
        formatDate () {
            const date = new Date(this.feed.created_at)
            return `${date.getDate()} ${date.toLocaleString('en', { month: 'long' })}`
        }
    },
    methods: {
        ...mapActions({
            fetchIssues: 'issues/fetchIssues'
        }),
        toggleHandler () {
            this.showComments = !this.showComments
        },
        async setCurrentIssues () {
            if (!this.feed || !this.showComments) return

            const current = this.issues.data.find(item => this.feed.owner.login === item.owner)
            if (current) {
                this.currentIssues = current.body
            } else {
                this.$store.commit('issues/SET_OWNER', this.feed.owner.login)
                this.$store.commit('issues/SET_REPO', this.feed.name)
                await this.fetchIssues()
                this.currentIssues = this.issues.data.find(item => item.owner === this.feed.owner.login).body
            }
        }
    },
    created () {
        this.setCurrentIssues()
    },
    watch: {
        showComments () {
            this.setCurrentIssues()
        },
        'issues.loading': 'setCurrentIssues'
    }
}
</script>

<style lang="sass" src="./feedsItem.sass" scoped>

</style>
