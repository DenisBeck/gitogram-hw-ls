import * as api from '@/api'

export const starred = {
    namespaced: true,
    state: {
        starred: {
            data: null,
            error: '',
            loading: false
        }
    },
    getters: {
        getStarredCount (state) {
            return state.starred.data?.length || 0
        }
    },
    mutations: {
        SET_STARRED_DATA (state, payload) {
            state.starred.data = payload
        },
        SET_STARRED_LOADING (state, payload) {
            state.starred.loading = payload
        },
        SET_STARRED_ERROR (state, payload) {
            state.starred.error = payload
        }
    },
    actions: {
        async fetchStarred ({ commit }) {
            commit('SET_STARRED_LOADING', true)
            try {
                const response = await api.starred.getStarred()
                commit('SET_STARRED_DATA', response.data)
            } catch (e) {
                commit('SET_STARRED_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_STARRED_LOADING', false)
            }
        }
    }
}
