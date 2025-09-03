
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular19-CI-CD/browser/index.html',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular19-CI-CD/browser/index.html"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: 'ab3f1639b65134a791ab9499d20eb68e5420631011294908f28ee43ac2e810be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '37a1686406e6abc474db9b7f7efee722b2c656f9181adeaefff4e377054e74b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
