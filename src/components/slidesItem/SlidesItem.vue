<template>
    <div :class="['slide', {'slide-active': active}]">
        <progress-bar v-if="active" progress="0%" class="slide-progress" @onFinish="onFinish" />
        <users-item class="slide-user" :name="story.owner.login" :src="story.owner.avatar_url" />
        <div :class="['slide-container', {'skeleton': !active}]">
            <div v-if="readme.loading || !active" class="slide-no-text">
                <div class="skeleton-image"></div>
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
                <div class="skeleton-text">
                    <div /><div /><div />
                </div>
            </div>
            <div v-else-if="readme.data" class="slide-content" ref="readmeContainer" />
            <div v-else-if="readme.error && active">{{ readme.error }}</div>
        </div>
        <app-button @click="toggleFollow" :class="['slide-button', {'following': active && likes.data || likes.loading}]" :label="label">
            <span v-if="likes.loading && active" class="button-loader"><icon class="button-loader" name="Loader"></icon></span>
        </app-button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { ProgressBar } from '@/components/progressBar'
import { UsersItem } from '@/components/usersItem'
import { AppButton } from '@/components/appButton'
import { parseReadmeData } from '@/helpers/parseReadmeData'
import { Icon } from '@/icons'
export default {
    name: 'slides-item',
    components: {
        ProgressBar,
        UsersItem,
        AppButton,
        Icon
    },
    props: ['story', 'active'],
    emits: ['changeActive'],
    computed: {
        ...mapState({
            readme: state => state.readme.readme,
            likes: state => state.likes.likes
        }),
        ...mapGetters({
            isStateInit: 'readme/isStateInit'
        }),
        label () {
            if (this.active && this.likes.loading) {
                return ''
            } else if (this.active && this.likes.data) {
                return 'unfollow'
            } else {
                return 'follow'
            }
        }
    },
    methods: {
        ...mapActions({
            fetchReadme: 'readme/fetchReadme',
            putLike: 'likes/putLike',
            deleteLike: 'likes/deleteLike'
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
        },
        toggleFollow () {
            if (!this.story) return

            this.$store.commit('likes/SET_OWNER', this.story.owner.login)
            this.$store.commit('likes/SET_REPO', this.story.name)
            if (this.isStateInit) {
                if (this.likes.data) {
                    this.deleteLike()
                } else {
                    this.putLike()
                }
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
