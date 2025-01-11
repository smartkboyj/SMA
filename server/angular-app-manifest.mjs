
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://smartkboyj.github.io/SMA/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/https://smartkboyj.github.io/SMA/list",
    "route": "/https://smartkboyj.github.io/SMA"
  },
  {
    "renderMode": 1,
    "route": "/https://smartkboyj.github.io/SMA/list"
  },
  {
    "renderMode": 1,
    "route": "/https://smartkboyj.github.io/SMA/create"
  },
  {
    "renderMode": 1,
    "route": "/https://smartkboyj.github.io/SMA/edit/*"
  }
],
  assets: {
    'index.csr.html': {size: 23653, hash: '19e74a4be2c03430a4a63184d9eeed6e5a68c550c8b41c06738051c4097cff84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17227, hash: '23838e2baa79363f4c5a198925f8085d24ba4812f5b5e390eb62ed81fcd7546e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QHBCHQCB.css': {size: 7871, hash: 'ac/7xgLr6lM', text: () => import('./assets-chunks/styles-QHBCHQCB_css.mjs').then(m => m.default)}
  },
};
