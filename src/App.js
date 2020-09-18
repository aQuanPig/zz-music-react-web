import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";
import { HashRouter } from 'react-router-dom'

import routes from './router';

import MJAppHeader from 'components/app-header'
import MJAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <MJAppHeader />
      {renderRoutes(routes)}
      <MJAppFooter />
    </HashRouter>
  )
})
