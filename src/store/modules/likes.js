import * as api from '@/api'

export const likes = {
    namespaced: true,
    state: {
        likes: {
            owner: '',
            repo: '',
            data: [],
            error: '',
            loading: false
        }
    },
    getters: {
        isStateInit (state) {
            return state.likes.owner && state.likes.repo
        }
    },
    mutations: {
        SET_OWNER (state, payload) {
            state.likes.owner = payload
        },
        SET_REPO (state, payload) {
            state.likes.repo = payload
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
                const response = await api.likes.putLike(state.likes.owner, state.likes.repo)
                console.log(response.status)
                const dataCopy = state.likes.data.slice()
                let dataItem = dataCopy.find(item => item.owner === state.likes.owner)
                if (dataItem) {
                    console.log('dfdf')
                    dataItem.body = true
                } else {
                    dataItem = { owner: state.likes.owner, repo: state.likes.repo, body: true }
                    dataCopy.push(dataItem)
                }
                console.log(dataCopy)
                commit('SET_LIKE', dataCopy)
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
                const dataCopy = state.likes.data.slice()
                let dataItem = dataCopy.find(item => item.owner === state.likes.owner)
                if (dataItem) {
                    dataItem.body = false
                } else {
                    dataItem = { owner: state.likes.owner, repo: state.likes.repo, body: false }
                    dataCopy.push(dataItem)
                }
                commit('SET_LIKE', dataCopy)
            } catch (e) {
                commit('SET_LIKES_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_LIKES_LOADING', false)
            }
        }
    }
}
