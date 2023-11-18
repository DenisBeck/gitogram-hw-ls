<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="feeds" class="feeds-list">
        <feeds-item v-for="feed in feeds" :feed="feed" :key="feed.date" class="feed">
            <div class="feed-tech">
                <h2 class="tech-title">{{ getTechByName(feed.tech).name }}</h2>
                <div class="tech-desc" v-html="getTechByName(feed.tech).descriptionWithStrongText" />
                <tech-info 
                    :stars="getTechByName(feed.tech).stars" 
                    :forks="getTechByName(feed.tech).forks"
                />
            </div>
        </feeds-item>
    </div>
    <div v-else class="feeds-empty">Список материалов пуст</div>
</template>

<script>
import {FeedsItem} from '@/components/feeds/feedsItem';
import {TechInfo} from '@/components/feeds/techInfo';

import andrew from '@/assets/img/andrew.png';
import camille from '@/assets/img/camille.png';
export default {
    components: {
        FeedsItem,
        TechInfo
    },
    data() {
        return {
            tech: {
                vue: {
                    name: 'Vue.js',
                    description: 'JavaScript framework for building interactive web applications ⚡',
                    stars: '156k',
                    forks: '4'
                },
                react: {
                    name: 'React.js',
                    description: 'Open source JavaScript library used for designing user interfaces',
                    stars: '156k',
                    forks: '4'
                }
            },
            feeds: [
                {
                    user: {
                        name: 'joshua_l',
                        avatar: andrew
                    },
                    tech: 'vue',
                    date: new Date('2023-05-15')
                },
                {
                    user: {
                        name: 'Camille',
                        avatar: camille
                    },
                    tech: 'react',
                    date: new Date('2023-05-16')
                }
            ]
        }
    },
    methods: {
        getTechByName(techName) {
            Object.values(this.tech).map(item => {
                const descrptionWords = item.description.split(' ');
                let strongText = descrptionWords[0].length > 5 ? descrptionWords[0] : descrptionWords.slice(0, 2).join(' ');
                let regularText = descrptionWords[0].length > 5 ? descrptionWords.slice(1).join(' ') : descrptionWords.slice(2).join(' ');
                item.descriptionWithStrongText = `<strong>${strongText}</strong> <span>${regularText}</span>`
            })
            const key = Object.keys(this.tech).find(tech => tech === techName);
            return this.tech[key]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './feeds';

</style>