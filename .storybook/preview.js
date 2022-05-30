import '../src/styles/globals.css'

export const decorators = [
  (Story) => {
    return (
        <Story />
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
