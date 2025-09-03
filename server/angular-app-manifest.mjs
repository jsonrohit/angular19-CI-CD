
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular19-CI-CD/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular19-CI-CD"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: 'ff64ae81ae26cc8e84f7482e7bd2e78eb3237907d9e98b8718447413d976a31d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'b5d6220be9c1e08e7cfa3e0124de1efdb58cb0338a765d2f4c23856b03643f57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12842, hash: '0634f6b1fefbc6a947a30dda1a501387a909a758cacc5da9166f406d54bd409e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
