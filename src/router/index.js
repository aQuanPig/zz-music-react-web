import React from 'react'

import MJDiscover from '@/pages/discover'
import MJFriends from '@/pages/friends'
import MJMine from '@/pages/mine'
import MJRecommend from '../pages/discover/children-pages/recommend'
import MJRanking from '../pages/discover/children-pages/ranking'
import MJSongs from '../pages/discover/children-pages/songs'
import MJDjRadio from '../pages/discover/children-pages/djradio'
import MJSinger from '../pages/discover/children-pages/singer'
import MJAlbum from '../pages/discover/children-pages/album'

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
    component: MJDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: MJRecommend
      },
      {
        path: "/discover/ranking",
        component: MJRanking
      },
      {
        path: "/discover/songs",
        component: MJSongs
      },
      {
        path: "/discover/djradio",
        component: MJDjRadio
      },
      {
        path: "/discover/artist",
        component: MJSinger
      },
      {
        path: "/discover/album",
        component: MJAlbum
      }
    ]
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