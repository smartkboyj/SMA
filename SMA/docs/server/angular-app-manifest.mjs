
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sma',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/sma/list",
    "route": "/sma"
  },
  {
    "renderMode": 1,
    "route": "/sma/list"
  },
  {
    "renderMode": 1,
    "route": "/sma/create"
  },
  {
    "renderMode": 1,
    "route": "/sma/edit/*"
  }
],
  assets: {
    'index.csr.html': {size: 23624, hash: '5694ff53ba3bf84a6d4675a2b85f9fc125f14ffeb50b7d19e9eb5f9c326fa1b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17198, hash: '3ea9e0ea2340eebb62f58ea99d606e954b3bff988a819ff38c20ba8af31867b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QHBCHQCB.css': {size: 7871, hash: 'ac/7xgLr6lM', text: () => import('./assets-chunks/styles-QHBCHQCB_css.mjs').then(m => m.default)}
  },
};
