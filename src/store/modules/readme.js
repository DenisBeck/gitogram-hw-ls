import * as api from '@/api'

export const readme = {
    namespaced: true,
    state: {
        owner: '',
        repo: '',
        readme: {
            data: null,
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
        SET_README_DATA (state, payload) {
            state.readme.data = payload
        },
        SET_README_LOADING (state, payload) {
            state.readme.loading = payload
        },
        SET_README_ERROR (state, payload) {
            state.readme.error = payload
        }
    },
    actions: {
        async fetchReadme ({ commit, state }) {
            commit('SET_README_LOADING', true)
            try {
                const response = await api.readme.getRepoReadme(state.owner, state.repo)
                commit('SET_README_DATA', response.data)
            } catch (e) {
                commit('SET_README_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_README_LOADING', false)
            }
        }
    }
}
