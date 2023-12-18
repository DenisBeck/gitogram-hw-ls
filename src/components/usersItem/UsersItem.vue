<template>
    <div :class="[{[inStories]: isInStories}, 'user']">
        <div class="avatar">
            <img v-if="src" :src="src" :alt="name" />
            <icon v-else :name="avatar" />
        </div>
        <div class="info">
            <div class="name">{{ name }}</div>
            <div v-if="stats" class="stats">
                <div class="reposts">54 reposts</div>
                <div class="watchers">834 <router-link to="/followers">watchers</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@/icons'
export default {
    name: 'users-item',
    components: {
        Icon
    },
    props: {
        avatar: {
            type: String,
            default: 'Andrew'
        },
        name: {
            type: String,
            required: true
        },
        isInStories: {
            type: Boolean
        },
        src: {
            type: String
        },
        stats: {
            type: Boolean
        }
    },
    data () {
        return {
            inStories: 'in-stories'
        }
    }
}
</script>

<style lang="sass" src="./usersItem.sass" scoped>

</style>
