
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jsonrohit.github.io/angular19-CI-CD/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https:/jsonrohit.github.io/angular19-CI-CD"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 539, hash: 'ae9243bf7cb2d8aa837e92259542de1d4f663f97745ebd2fd875e45b193b5991', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '1d0d466e76d36af234b2e6aee45174f75985f80593edcbe7c5e6ea519975428d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/jsonrohit.github.io/angular19-CI-CD/index.html': {size: 15042, hash: '82a0c2a2b9b74b45e748d255826db1353a59f4b1e48035b698b4eede627a015f', text: () => import('./assets-chunks/https:_jsonrohit_github_io_angular19-CI-CD_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
