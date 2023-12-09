<template>
    <ul class="top-menu">
        <li class="top-menu-item">
            <router-link to="/" class="top-menu-link">
                <icon name="Home" />
            </router-link>
        </li>
        <li class="top-menu-item">
            <router-link to="/" class="top-menu-link">
                <img v-if="avatar" :src="avatar" alt="name" />
                <icon v-else name="Andrew" />
            </router-link>
        </li>
        <li class="top-menu-item">
            <router-link @click="logout" to="/auth" class="top-menu-link">
                <icon name="Out" />
            </router-link>
        </li>
    </ul>
</template>

<script>
import { Icon } from '@/icons'
export default {
    name: 'top-links-list',
    components: {
        Icon
    },
    props: ['avatar'],
    methods: {
        logout () {
            localStorage.removeItem('token')
            window.location.reload()
        }
    }
}
</script>

<style lang="sass" src="./topLinksList.sass" scoped>

</style>
