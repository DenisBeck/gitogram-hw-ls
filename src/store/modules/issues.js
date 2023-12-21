import * as api from '@/api'

export const issues = {
    namespaced: true,
    state: {
        issues: []
    },
    getters: {
        isStateInit (state) {
            return !!(state.issues.owner && state.issues.repo)
        }
    },
    mutations: {
        SET_REPO (state, payload) {
            if (!state.issues.some(item => item.repo === payload)) {
                state.issues.push({ repo: payload })
            }
        },
        SET_ISSUES_DATA (state, payload) {
            const item = state.issues.find(item => item.repo === payload.repo)
            if (item) {
                item.data = payload.data
            }
        },
        SET_ISSUES_LOADING (state, payload) {
            const item = state.issues.find(item => item.repo === payload.repo)
            if (item) {
                item.loading = payload.loading
            }
        },
        SET_ISSUES_ERROR (state, payload) {
            const item = state.issues.find(item => item.repo === payload.repo)
            if (item) {
                item.error = payload.error
            }
        }
    },
    actions: {
        async fetchIssues ({ commit }, feed) {
            const repo = feed.name
            const owner = feed.owner.login
            commit('SET_ISSUES_LOADING', { repo, loading: true })
            try {
                const response = await api.issues.getIssues(owner, repo)
                commit('SET_ISSUES_DATA', { repo, data: response.data })
            } catch (e) {
                console.log(e)
                commit('SET_ISSUES_ERROR', { repo, error: 'не удалось получить данные' })
            } finally {
                commit('SET_ISSUES_LOADING', { repo, loading: false })
            }
        }
    }
}
