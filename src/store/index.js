import { createStore, useStore as genericUseStore } from 'vuex'
import { feed } from './modules/feed'
import { readme } from './modules/readme'
import { user } from './modules/user'
import { starred } from './modules/starred'
import { issues } from './modules/issues'
import { likes } from './modules/likes'
import { myRepos } from './modules/myRepos'
import { users } from './modules/users'

export const key = Symbol('key')

export function useStore () {
    return genericUseStore(key)
}

export default createStore({
    modules: {
        feed,
        readme,
        user,
        starred,
        issues,
        likes,
        myRepos,
        users
    }
})
