import axios from 'axios';
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import config from './config';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {

    const { data: projects } = await axios.get(`${config.endpoint}/projects`)
    const { data: playlists } = await axios.get(`${config.endpoint}/playlists`)

    return [
      {
        path: '/',
        component: 'src/containers/pages/Home/',
        getData: () => ({
          projects,
        })
      },
      {
        path: '/about',
        component: 'src/containers/pages/About',
      },
      {
        path: '/work',
        component: 'src/containers/pages/Work',
        getData: () => ({
          projects,
        }),
        children: projects.map(project => ({
          path: `/${project.slug}`,
          component: 'src/containers/pages/Post',
          getData: () => ({
            project,
          }),
        })),
      },
      {
        path: '/fun',
        component: 'src/containers/pages/Music',
        getData: () => ({
          playlists,
        }),
        children: playlists.map(playlist => ({
          path: `/${playlist.slug}`,
          component: 'src/containers/pages/Playlist',
          getData: () => ({
            playlist,
          }),
        }))
      },
      {
        is404: true,
        component: 'src/containers/pages/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
