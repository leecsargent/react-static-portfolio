import admin from 'firebase-admin';
var serviceAccount = require('./serviceAccountKey.json');

let database;
let projectsReference;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

database = admin.firestore();
projectsReference = database.collection('projects');

let getProjectsFromReference = (reference) => {
  let projects = [];
  return projectsReference.get().then((snapshot) => {
    snapshot.forEach(document => {
      projects.push(document.data());
    });
    console.log(projects);
    return projects;
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
          path: `/project/${project.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            project,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules = [
  //     {
  //       oneOf: [
  //         {
  //           test: /\.json$/,
  //           use: [{ loader: 'json-loader' }],
  //         },
  //         defaultLoaders.jsLoader,
  //         defaultLoaders.cssLoader,
  //         defaultLoaders.fileLoader,
  //       ],
  //     },
  //   ]
  //   return config
  // },
}
