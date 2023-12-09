import { createStore } from 'vuex'
import { feed } from './modules/feed'
import { readme } from './modules/readme'
import { user } from './modules/user'
import { starred } from './modules/starred'
import { issues } from './modules/issues'
import { likes } from './modules/likes'

export default createStore({
    modules: {
        feed,
        readme,
        user,
        starred,
        issues,
        likes
    }
})
