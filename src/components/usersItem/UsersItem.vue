<template>
    <a href="#" :class="[{[inStories]: isInStories}, 'user']">
        <div class="avatar"><icon :name="avatar" /></div>
        <div class="name">{{ name }}</div>
    </a>
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
            required: true
        },
        name: {
            type: String,
            required: true
        },
        isInStories: {
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
