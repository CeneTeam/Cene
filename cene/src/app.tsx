import registerRootComponent from 'expo/build/launch/registerRootComponent';

import Router from "./router/router";

const App = () => <Router />;

registerRootComponent(App);
