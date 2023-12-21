import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default () => {
    const store = useStore()
    const myRepos = computed(() => store.state.myRepos.myRepos)
    const myReposCount = computed(() => store.getters['myRepos/getMyReposCount'])
    const setUser = (user) => store.commit('myRepos/SET_MY_REPOS_USER', user)
    const fetchMyRepos = () => store.dispatch('myRepos/fetchMyRepos')

    watchEffect(myReposCount, fetchMyRepos)

    return {
        myRepos: myRepos.value,
        myReposCount: myReposCount.value,
        fetchMyRepos,
        setUser
    }
}
