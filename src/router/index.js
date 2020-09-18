import MJDiscover from '@/pages/discover'
import React from 'react'
import MJFriends from '@/pages/friends'
import MJMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'
const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: MJDiscover
  },
  {
    path: "/mine",
    component: MJMine
  },
  {
    path: "/friend",
    component: MJFriends
  }
]
export default routes