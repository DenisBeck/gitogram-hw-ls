import { createStore } from 'vuex'
import { feed } from './modules/feed'
import { readme } from './modules/readme'

export default createStore({
    modules: {
        feed,
        readme
    }
})
