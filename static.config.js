import admin from 'firebase-admin';
var serviceAccount = require('./serviceAccountKey.json');

let database;
let projectsReference;
let playlistsReference;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

database = admin.firestore();
projectsReference = database.collection('projects').orderBy('order');
playlistsReference = database.collection('playlists').where('published', '==', true);

let getProjectsFromReference = (reference) => {
  let projects = [];
  return projectsReference.get().then((snapshot) => {
    snapshot.forEach(document => {
      projects.push(document.data());
    });
    return projects;
  }).catch(error => {
    console.log('error', error)
  })
}

let getPlaylistsFromReference = (reference) => {
  let playlists = [];
  return playlistsReference.get().then((snapshot) => {
    snapshot.forEach(document => {
      playlists.push(document.data());
    });
    return playlists;
  }).catch(error => {
    console.log('error', error)
  })
}

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {

    const projects = await getProjectsFromReference(projectsReference)
    const playlists = await getPlaylistsFromReference(playlistsReference)

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
