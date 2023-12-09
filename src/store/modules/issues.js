import * as api from '@/api'

export const issues = {
    namespaced: true,
    state: {
        issues: {
            owner: '',
            repo: '',
            data: [],
            error: '',
            loading: false
        }
    },
    getters: {
        isStateInit (state) {
            return !!(state.issues.owner && state.issues.repo)
        }
    },
    mutations: {
        SET_OWNER (state, payload) {
            state.issues.owner = payload
        },
        SET_REPO (state, payload) {
            state.issues.repo = payload
        },
        SET_ISSUES_DATA (state, payload) {
            state.issues.data = [...state.issues.data, payload]
        },
        SET_ISSUES_LOADING (state, payload) {
            state.issues.loading = payload
        },
        SET_ISSUES_ERROR (state, payload) {
            state.issues.error = payload
        }
    },
    actions: {
        async fetchIssues ({ commit, state }) {
            commit('SET_ISSUES_LOADING', true)
            try {
                const response = await api.issues.getIssues(state.issues.owner, state.issues.repo)
                const responseData = { owner: state.issues.owner, repo: state.issues.repo, body: response.data }
                commit('SET_ISSUES_DATA', responseData)
            } catch (e) {
                console.log(e)
                commit('SET_ISSUES_ERROR', 'не удалось получить данные')
            } finally {
                commit('SET_ISSUES_LOADING', false)
            }
        }
    }
}
