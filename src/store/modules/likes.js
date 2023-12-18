import * as api from '@/api'

export const likes = {
    namespaced: true,
    state: {
        likes: {
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
        SET_LIKES (state, payload) {
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
        initLikes ({ commit }, feeds) {
            const likes = []
            feeds.forEach(item => {
                const likesItem = { owner: item.owner.login, repo: item.name, body: item.isStarred }
                if (!likes.includes(likesItem)) {
                    likes.push(likesItem)
                }
            })
            commit('SET_LIKES', likes)
        },
        async putLike ({ commit, state }, { owner, repo }) {
            commit('SET_LIKES_LOADING', true)
            try {
                const response = await api.likes.putLike(owner, repo)
                if (response.status === 204) {
                    const dataCopy = state.likes.data.slice()
                    const dataItemIndex = dataCopy.findIndex(item => item.owner === owner)
                    dataCopy.splice(dataItemIndex, 1, { owner, repo, body: true })
                    commit('SET_LIKES', dataCopy)
                }
            } catch (e) {
                commit('SET_LIKES_ERROR', 'не удалось обновить данные')
            } finally {
                commit('SET_LIKES_LOADING', false)
            }
        },
        async deleteLike ({ commit, state }, { owner, repo }) {
            commit('SET_LIKES_LOADING', true)
            try {
                const response = await api.likes.deleteLike(owner, repo)
                if (response.status === 204) {
                    const dataCopy = state.likes.data.slice()
                    const dataItemIndex = dataCopy.findIndex(item => item.owner === owner)
                    dataCopy.splice(dataItemIndex, 1, { owner, repo, body: false })
                    commit('SET_LIKES', dataCopy)
                }
            } catch (e) {
                commit('SET_LIKES_ERROR', 'не удалось обновить данные')
            } finally {
                commit('SET_LIKES_LOADING', false)
            }
        }
    }
}
