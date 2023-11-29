<template>
    <div :class="['slide', {'slide-active': active}]">
        <progress-bar v-if="active" progress="0%" class="slide-progress" @onFinish="onFinish" />
        <users-item class="slide-user" :name="story.owner.login" :src="story.owner.avatar_url" />
        <div :class="['slide-container', {'slide-skeleton': !active}]">
            <div v-if="readme.loading || !active" class="slide-no-text">
                <div class="slide-skeleton-image"></div>
                <div class="slide-skeleton-text">
                    <div /><div /><div />
                </div>
                <div class="slide-skeleton-text">
                    <div /><div /><div />
                </div>
            </div>
            <div v-else-if="readme.data" class="slide-content" ref="readmeContainer" />
            <div v-else-if="readme.error && active">{{ readme.error }}</div>
        </div>
        <app-button class="slide-button" label="Follow" />
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { ProgressBar } from '@/components/progressBar'
import { UsersItem } from '@/components/usersItem'
import { AppButton } from '@/components/appButton'
import { parseReadmeData } from '@/helpers/parseReadmeData'
export default {
    name: 'slides-item',
    components: {
        ProgressBar,
        UsersItem,
        AppButton
    },
    props: ['story', 'active'],
    emits: ['changeActive'],
    computed: {
        ...mapState({
            readme: state => state.readme.readme
        })
    },
    methods: {
        ...mapActions({
            fetchReadme: 'readme/fetchReadme'
        }),
        ...mapGetters({
            isStateInit: 'readme/isStateInit'
        }),
        onFinish () {
            this.$emit('changeActive')
        },
        getReadme () {
            if (this.story) {
                this.$store.commit('readme/SET_OWNER', this.story.owner.login)
                this.$store.commit('readme/SET_REPO', this.story.name)
                if (this.active && this.isStateInit) {
                    this.fetchReadme()
                }
            }
        },
        appendParsedData () {
            if (this.$refs.readmeContainer && this.readme.data) {
                this.$refs.readmeContainer.append(parseReadmeData(this.readme.data))
            }
        }
    },
    created () {
        this.getReadme()
    },
    updated () {
        this.appendParsedData()
    },
    watch: {
        active () {
            this.getReadme()
        }
    }

}
</script>

<style lang="sass" src="./slidesItem.sass" scoped>

</style>
