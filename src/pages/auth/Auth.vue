<template>
    <div class="auth">
        <app-logo class="auth-logo"></app-logo>
        <div class="auth-text">
            More than just one repository. This is our digital world.
        </div>
        <app-button @click="getCode" class="auth-link" label="Authorize with github">
            <icon name="Git" />
        </app-button>
    </div>
</template>

<script>
import env from '../../../env'

import { AppLogo } from '@/components/appLogo'
import { AppButton } from '@/components/appButton'
import { Icon } from '@/icons'

const clientId = env.clientId
const clientSecret = env.clientSecret

export default {
    components: { AppLogo, Icon, AppButton },
    methods: {
        getCode () {
            const githubAuthApi = 'https://github.com/login/oauth/authorize'

            const params = new URLSearchParams()

            params.append('client_id', clientId)
            params.append('scope', 'repo:status read:user')

            window.location.href = `${githubAuthApi}?${params}`
        }
    },
    async created () {
        const code = new URLSearchParams(window.location.search).get('code')

        if (code) {
            try {
                const response = await fetch('https://webdev-api.loftschool.com/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        clientId, code, clientSecret
                    })
                })

                const { token } = await response.json()
                localStorage.setItem('token', token)
                this.$router.push('/')
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style lang="sass" src="./auth.sass" scoped>

</style>
