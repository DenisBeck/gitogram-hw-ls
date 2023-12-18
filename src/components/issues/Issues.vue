<template>
    <div class="issues">
        <div class="toggler-wrapper">
            <issues-toggler @toggle="toggleHandler" :isShow="showComments" />
        </div>
        <div class="feed-comment" v-show="showComments">
            <div v-if="issues?.loading" class="skeleton">
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
            </div>
            <div v-else-if="issues?.data" class="issues-content" data-testid="issues-content">
                <div v-for="issue in issues.data" :key="issue.id" class="issues-item" data-testid="issues-item">
                    <p class="issues-title"><span class="issues-user">{{ issue.user?.login }}</span> {{ issue.title }}</p>
                </div>
            </div>
            <div v-else-if="issues?.error">{{ issues.error }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { IssuesToggler } from '@/components/issuesToggler'
export default {
    components: { IssuesToggler },
    name: 'issues',
    emits: ['requestIssues'],
    props: ['issues', 'feed'],
    setup (props, { emit }) {
        const showComments = ref(false)
        const toggleHandler = () => {
            showComments.value = !showComments.value
            if (!showComments.value) return

            if (!props.issues?.data.length || props.issues?.repo !== props.feed?.name) {
                emit('requestIssues')
            }
        }

        return {
            showComments,
            toggleHandler
        }
    }
}
</script>

<style lang="sass" src="./issues.sass" scoped>

</style>
