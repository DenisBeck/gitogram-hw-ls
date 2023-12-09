import * as api from '@/api'

export const likes = {
    namespaced: true,
    state: {
        owner: '',
        repo: '',
        likes: {
            data: false,
            error: '',
            loading: false
        }
    },
    getters: {
        isStateInit (state) {
            return state.owner && state.repo
        }
    },
    mutations: {
        SET_OWNER (state, payload) {
            state.owner = payload
        },
        SET_REPO (state, payload) {
            state.repo = payload
        },
        SET_LIKE (state, payload) {
            state.likes.data = payload
        },
        SET_LIKES_LOADING (state, payload) {
            state.likes.loading = payload
        },
        SET_LIKES_ERROR (state, payload) {
            state.likes.error = payload
        }
    },
    actions: {
        async putLike ({ commit, state }) {
            commit('SET_LIKES_LOADING', true)
            try {
                const response = await api.likes.putLike(state.owner, state.repo)
                console.log(response.status)
                commit('SET_LIKE', true)
            } catch (e) {
                commit('SET_LIKES_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_LIKES_LOADING', false)
            }
        },
        async deleteLike ({ commit, state }) {
            commit('SET_LIKES_LOADING', true)
            try {
                const response = await api.likes.deleteLike(state.owner, state.repo)
                console.log(response.status)
                commit('SET_LIKE', false)
            } catch (e) {
                commit('SET_LIKES_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_LIKES_LOADING', false)
            }
        }
    }
}
