import registerRootComponent from "expo/build/launch/registerRootComponent";
import Router from "./router/router";
import { ThemeProvider } from "./theme/themeProvider";

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

registerRootComponent(App);
