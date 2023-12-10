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
        <app-button @click="toggleFollow" :disabled="!active" :class="['slide-button', {'following': following || likes.loading}]" :label="label">
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
    data () {
        return {
            following: this.starred.data.some(item => item === this.story)
        }
    },
    props: ['story', 'active', 'starred'],
    emits: ['changeActive'],
    computed: {
        ...mapState({
            readme: state => state.readme.readme,
            likes: state => state.likes.likes
        }),
        ...mapGetters({
            isReadmeStateInit: 'readme/isStateInit',
            isLikesStateInit: 'likes/isStateInit'
        }),
        label () {
            if (this.likes.loading && this.active) {
                return ''
            } else if (this.following) {
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
                if (this.active && this.isReadmeStateInit) {
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
            this.following = !this.following
        },
        setCurrentFollowStatus () {
            if (!this.story) return

            if (!this.likes.data.find(item => item.owner === this.story.owner.login)) {
                this.$store.commit('likes/SET_OWNER', this.story.owner.login)
                this.$store.commit('likes/SET_REPO', this.story.name)
            }
            if (this.isLikesStateInit) {
                if (this.following) {
                    this.putLike()
                } else {
                    this.deleteLike()
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
        },
        following () {
            this.setCurrentFollowStatus()
        }
    }

}
</script>

<style lang="sass" src="./slidesItem.sass" scoped>

</style>
