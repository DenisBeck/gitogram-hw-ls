import { mount } from '@vue/test-utils'
import { Issues } from '@/components/issues'

describe('Issues', () => {
    const issues = [
        {
            user: {
                login: 'user1'
            },
            title: 'title1'
        },
        {
            user: {
                login: 'user2'
            },
            title: 'title2'
        },
        {
            user: {
                login: 'user3'
            },
            title: 'title3'
        },
        {
            user: {
                login: 'user4'
            },
            title: 'title4'
        }
    ]

    it('При клике выполняется запрос к серверу', async () => {
        const wrapper = mount(Issues)

        await wrapper.find('.toggler-wrapper button').trigger('click')

        expect(wrapper.emitted().requestIssues.length).toBe(1)
    })

    it('Количество элементов совпадает', async () => {
        const wrapper = mount(Issues, {
            propsData: {
                issues: {
                    data: issues
                }
            }
        })

        await wrapper.find('.toggler-wrapper button').trigger('click')

        expect(wrapper.find('.issues-content').exists()).toBe(true)

        expect(wrapper.findAll('.issues-item').length).toBe(4)
    })

    it('Повторные запросы не происходят', async () => {
        const wrapper = mount(Issues, {
            propsData: {
                issues: {
                    data: issues
                }
            }
        })

        await wrapper.find('.toggler-wrapper button').trigger('click')

        expect(wrapper.emitted().requestIssues).toBeUndefined()
    })
})
