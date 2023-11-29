<template>
    <div class="logo">
        <router-link to="/" :class="['logo-icon', {'light': isBackgroundDark}]">
            <icon name="Logo" />
        </router-link>
    </div>
</template>

<script>
import { Icon } from '@/icons'
export default {
    name: 'app-logo',
    components: {
        Icon
    },
    props: {
        isBackgroundDark: {
            type: Boolean
        }
    }
}
</script>

<style lang="sass" scoped src="./appLogo.sass">

</style>
