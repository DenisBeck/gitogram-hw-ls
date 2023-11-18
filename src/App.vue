<template>
    <div class="wrapper">
        <header class="header">
            <app-header>
                <logo-item href="/main" :src="logo" />
                <nav class="links">
                    <link-item 
                        v-for="link in links"
                        :key="link.href"
                        :href="link.href"
                        :icon="link.icon"
                    />
                </nav>
            </app-header>
        </header>
        <main class="main">
            <users-list>
                <user-item
                    v-for="user in users"
                    :key="user.name"
                    :name="user.name"
                    :avatar="user.avatar"
                />
            </users-list>
            <feeds />
        </main>
    </div>
</template>

<script>
import { Feeds} from './pages/feeds';
import { AppHeader } from '@/components/header/appHeader';
import { LogoItem } from './components/header/logoItem';
import { LinkItem } from './components/header/linkItem';
import { UsersList } from './components/users/usersList';
import { UserItem } from './components/users/userItem';

import logo from '@/assets/img/logo.png';
import home from '@/assets/icons/home.svg';
import out from '@/assets/icons/out.svg';
import profile from '@/assets/img/profile.png'

import andrew from '@/assets/img/andrew.png';
import josh from '@/assets/img/josh.png';
import camille from '@/assets/img/camille.png';
import marselle from '@/assets/img/marselle.png';
import piter from '@/assets/img/piter.png';
import can from '@/assets/img/can.png';
import iloveanime from '@/assets/img/iloveanime.png'
import diself from '@/assets/img/diself.png';
import gartor from '@/assets/img/gartor.png';
import camilr from '@/assets/img/camilr.png'
export default {
    name: 'App',
    components: {
        AppHeader, 
        LogoItem, 
        LinkItem, 
        UsersList, 
        UserItem,
        Feeds
    },
    data() {
      return {
          logo,
          links: [
              {
                  href: '/sdfdgfhvdf',
                  icon: home
              },
              {
                  href: '/about',
                  icon: profile
              },
              {
                  href: '/dfdsf',
                  icon: out
              },
          ],
          users: [
            {
              name: 'Josh',
              avatar: josh
            },
            {
              name: 'Andrew',
              avatar: andrew
            },
            {
              name: 'Camille',
              avatar: camille
            },
            {
              name: 'Marselle',
              avatar: marselle
            },
            {
              name: 'Piter',
              avatar: piter
            },
            {
              name: 'Can',
              avatar: can
            },
            {
              name: 'Iloveanime',
              avatar: iloveanime
            },
            {
              name: 'Diself',
              avatar: diself
            },
            {
              name: 'Gartor',
              avatar: gartor
            },
            {
              name: 'Camilr',
              avatar: camilr
            },
          ]
      }
    }
}
</script>

<style lang="sass">
@import './styles/reset'
@import './styles/fonts'
@import './styles/main'

</style>
