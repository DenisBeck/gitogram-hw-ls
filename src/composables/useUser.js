import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
    const store = useStore()
    const user = computed(() => store.state.user.user)
    const isAuth = computed(() => store.getters['user/isAuth'])
    const fetchUser = () => store.dispatch('user/fetchUser')

    return {
        user: user.value,
        fetchUser,
        isAuth: isAuth.value
    }
}
