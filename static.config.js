import admin from 'firebase-admin';
var serviceAccount = require('./serviceAccountKey.json');

const soundCloudConfig = {
  clientId: '77ed62a445e34fcc90617a4335460d6c',
  track1: 'https://soundcloud.com/leesargent/noa-eini-2',
  track2: 'https://soundcloud.com/leesargent/dust-to-dust-3',
  track3: 'https://soundcloud.com/leesargent/guy-in-a-room',
  track4: 'https://soundcloud.com/leesargent/fallen-branches-and-stones',
  track5: 'https://soundcloud.com/leesargent/ascent-1',
  track6: 'https://soundcloud.com/leesargent/in-case-of-fire-1',
  track7: 'https://soundcloud.com/leesargent/procession',
};

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
        path: '/fun',
        component: 'src/containers/Music',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  soundCloudConfig: soundCloudConfig,
}
