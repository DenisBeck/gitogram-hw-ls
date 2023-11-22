<template>
    <div class="logo">
        <a href="#" :class="['logo-icon', {'light': isBackgroundDark}]">
            <icon name="Logo" />
        </a>
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
