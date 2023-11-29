import * as api from '@/api'

export const feed = {
    namespaced: true,
    state: {
        feed: {
            data: null,
            loading: false,
            error: ''
        }
    },
    getters: {
        getFeedsCount (state) {
            return state.feed.data?.length || 0
        }
    },
    mutations: {
        SET_REPOS_DATA (state, payload) {
            state.feed.data = payload
        },
        SET_REPOS_LOADING (state, payload) {
            state.feed.loading = payload
        },
        SET_REPOS_ERROR (state, payload) {
            state.feed.error = payload
        }
    },
    actions: {
        async fetchRepos ({ commit }) {
            commit('SET_REPOS_LOADING', true)
            try {
                const response = await api.repos.getRepos()
                const data = response.data
                commit('SET_REPOS_DATA', data.items)
            } catch (e) {
                commit('SET_REPOS_ERROR', 'не удалось получить репозитарии')
            } finally {
                commit('SET_REPOS_LOADING', false)
            }
        }
    }
}
