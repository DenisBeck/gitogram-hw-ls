<template>
    <div :class="[{[inStories]: isInStories}, {'stats': stats}, 'user']">
        <div class="avatar">
            <img v-if="src" :src="src" :alt="name" />
            <img v-else-if="user" :src="user.avatar_url" :alt="user.login" />
            <icon v-else :name="avatar" />
        </div>
        <div class="info">
            <div v-if="user" class="name">{{ user.login }}</div>
            <div v-else class="name">{{ name }}</div>
            <div v-if="user" class="type">{{ user.type }}</div>
            <div v-if="stats" class="stats">
                <span class="reports"><span class="count">{{ stats.followers }}</span> watchers</span>
                <span class="watchers"><span class="count">{{ stats.following }}</span> <router-link to="/followers">watchings</router-link></span>
            </div>
        </div>
        <app-button v-if="user" @click="toggleHandler" :class="['follow-button', {'following': user.followed}]" :label="label">
            <span v-if="loading" class="button-loader"><icon class="button-loader" name="Loader"></icon></span>
        </app-button>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

import { Icon } from '@/icons'
import { AppButton } from '../appButton'
export default {
    name: 'users-item',
    components: {
        Icon,
        AppButton
    },
    emits: ['followUser'],
    props: {
        avatar: {
            type: String,
            default: 'Andrew'
        },
        name: {
            type: String,
            default: 'Andrew'
        },
        isInStories: {
            type: Boolean
        },
        src: {
            type: String
        },
        stats: {
            type: Object
        },
        user: {
            type: Object
        },
        loading: {
            type: Boolean
        }
    },
    setup (props, { emit }) {
        const inStories = ref('in-stories')

        const toggleHandler = () => {
            emit('followUser', props.user)
        }
        const label = computed(() => {
            if (props.loading) {
                return ''
            }
            if (props.user.followed) {
                return 'unfollow'
            } else {
                return 'follow'
            }
        })

        // console.log(props.user)

        return {
            inStories,
            toggleHandler,
            label
        }
    }

}
</script>

<style lang="sass" src="./usersItem.sass" scoped>

</style>
