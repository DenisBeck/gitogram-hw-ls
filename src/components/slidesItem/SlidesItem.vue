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
        <app-button @click="toggleFollow" :disabled="!active" :class="['slide-button', {'following': following || (likes.loading && active)}]" :label="label">
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
    props: ['story', 'active', 'followingProp'],
    emits: ['onChangeActive', 'onFollow'],
    computed: {
        ...mapState({
            readme: state => state.readme.readme,
            likes: state => state.likes.likes
        }),
        ...mapGetters({
            isReadmeStateInit: 'readme/isStateInit'
        }),
        label () {
            if (this.likes.loading && this.active) {
                return ''
            } else if (this.following) {
                return 'unfollow'
            } else {
                return 'follow'
            }
        },
        following () {
            if (this.story) {
                return this.likes.data.find(item => item.owner === this.story.owner.login)?.body
            }
            return this.followingProp
        }
    },
    methods: {
        ...mapActions({
            fetchReadme: 'readme/fetchReadme'
        }),
        onFinish () {
            this.$emit('onChangeActive')
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
            this.$emit('onFollow', this.story.owner.login, this.story.name)
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
