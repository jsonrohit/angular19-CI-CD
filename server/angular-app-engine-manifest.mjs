
export default {
  basePath: 'https://jsonrohit.github.io/angular19-CI-CD',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
