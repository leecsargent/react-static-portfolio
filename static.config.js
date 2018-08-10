import axios from 'axios';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {

    const { data: projects } = await axios.get('http://localhost:4040/api/projects')
    const { data: playlists } = await axios.get('http://localhost:4040/api/playlists')

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/work',
        component: 'src/containers/Work',
        getData: () => ({
          projects,
        }),
        children: projects.map(project => ({
          path: `/${project.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            project,
          }),
        })),
      },
      {
        path: '/fun',
        component: 'src/containers/Music',
        getData: () => ({
          playlists,
        }),
        children: playlists.map(playlist => ({
          path: `/${playlist.slug}`,
          component: 'src/containers/Playlist',
          getData: () => ({
            playlist,
          }),
        }))
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.json$/,
            use: [{ loader: 'json-loader' }],
          },
          defaultLoaders.jsLoader,
          // defaultLoaders.cssLoader,
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
          },
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
