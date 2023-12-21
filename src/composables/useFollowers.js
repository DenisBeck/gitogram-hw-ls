import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default () => {
    const store = useStore()

    const users = computed(() => store.state.users.users)
    const followers = computed(() => store.state.users.followers)
    const followersCount = computed(() => store.getters['users/getFollowersCount'])
    const setFollowersUser = (user) => store.commit('users/SET_FOLLOWERS_USER', user)
    const fetchUsers = () => store.dispatch('users/fetchUsers')
    const fetchFollowers = () => store.dispatch('users/fetchFollowers')
    const putFollowing = (user) => store.dispatch('users/putFollowing', user)
    const deleteFollowing = (user) => store.dispatch('users/deleteFollowing', user)

    watchEffect(() => {
        fetchUsers()
        fetchFollowers()
    })

    return {
        users: users.value,
        followers: followers.value,
        followersCount: followersCount.value,
        setFollowersUser,
        fetchUsers,
        fetchFollowers,
        putFollowing,
        deleteFollowing
    }
}
