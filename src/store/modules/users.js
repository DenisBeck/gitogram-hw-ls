import * as api from '@/api'

export const users = {
    namespaced: true,
    state: {
        users: {
            data: [],
            error: '',
            loading: false
        },
        followers: {
            user: null,
            data: [],
            error: '',
            loading: false
        }
    },
    mutations: {
        SET_USERS_DATA (state, payload) {
            state.users.data = payload
        },
        SET_USERS_LOADING (state, payload) {
            state.users.loading = payload
        },
        SET_USERS_ERROR (state, payload) {
            state.users.error = payload
        },
        SET_FOLLOWERS_USER (state, payload) {
            state.followers.user = payload
        },
        SET_FOLLOWERS_DATA (state, payload) {
            state.followers.data = payload
        },
        SET_FOLLOWERS_LOADING (state, payload) {
            state.followers.loading = payload
        },
        SET_FOLLOWERS_ERROR (state, payload) {
            state.followers.error = payload
        }
    },
    actions: {
        async fetchUsers ({ commit }) {
            commit('SET_USERS_LOADING', true)
            try {
                const response = await api.users.getUsers()
                commit('SET_USERS_DATA', response.data)
            } catch (e) {
                commit('SET_USERS_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_USERS_LOADING', false)
            }
        },
        async fetchFollowers ({ commit, state }) {
            commit('SET_FOLLOWERS_LOADING', true)
            try {
                const response = await api.followers.getFollowers(state.followers.user)
                commit('SET_FOLLOWERS_DATA', response.data)
            } catch (e) {
                commit('SET_FOLLOWERS_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_FOLLOWERS_LOADING', false)
            }
        },
        async putFollowing ({ commit }, { login }) {
            commit('SET_FOLLOWERS_LOADING', true)
            try {
                const response = await api.followers.putFollowing(login)
                if (response.status === 204) {
                    console.log('following success')
                }
            } catch (e) {
                commit('SET_FOLLOWERS_ERROR', 'не удалось обновить данные')
            } finally {
                commit('SET_FOLLOWERS_LOADING', false)
            }
        },
        async deleteFollowing ({ commit }, { login }) {
            commit('SET_FOLLOWERS_LOADING', true)
            try {
                const response = await api.followers.deleteFollowing(login)
                if (response.status === 204) {
                    console.log('unfollow success')
                }
            } catch (e) {
                commit('SET_FOLLOWERS_ERROR', 'не удалось обновить данные')
            } finally {
                commit('SET_FOLLOWERS_LOADING', false)
            }
        }
    }
}
