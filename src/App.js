import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router';
import store from './store'

import MJAppHeader from 'components/app-header'
import MJAppFooter from 'components/app-footer'
import MJPlayBar from './pages/player/app-play-bar'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MJAppHeader />
        {renderRoutes(routes)}
        <MJAppFooter />
        <MJPlayBar/>
      </HashRouter>
    </Provider>

  )
})
