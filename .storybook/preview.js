/** @type { import('@storybook/vue3').Preview } */
import '../src/styles/reset.sass'
import '../src/styles/fonts.sass'
import './preview.sass'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
