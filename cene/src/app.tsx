import './localization/i18n'
import Router from './router/router'
import { ThemeProvider } from './theme/themeProvider'
import registerRootComponent from 'expo/build/launch/registerRootComponent'

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
)

registerRootComponent(App)
