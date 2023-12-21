import { mount } from '@vue/test-utils'
import { IssuesToggler } from '@/components/issuesToggler'

describe('IssuesToggler', () => {
    it('При клике изменяется надпись', async () => {
        const wrapper = mount(IssuesToggler)
        expect(wrapper.find('.toggler-text')).not.toBe('View issues')

        await wrapper.trigger('click')

        expect(wrapper.find('.toggler-text')).not.toBe('Hide Issues')
    })
})
