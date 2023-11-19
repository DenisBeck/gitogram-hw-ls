<template>
    <ul class="top-menu">
        <li class="top-menu-item" v-for="link in links" :key="link.id">
            <a class="top-menu-link" :href="link.href">
                <icon :name="link.src" />
            </a>
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
    data () {
        return {
            links: [
                {
                    id: '1',
                    href: '/sdfdgfhvdf',
                    src: 'Home'
                },
                {
                    id: '2',
                    href: '/about',
                    src: 'Camille'
                },
                {
                    id: '3',
                    href: '/dfdsf',
                    src: 'Out'
                }
            ]
        }
    }
}
</script>

<style lang="sass" src="./topLinksList.sass" scoped>

</style>
