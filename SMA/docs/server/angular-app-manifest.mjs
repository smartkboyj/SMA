
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SMA/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/SMA/list",
    "route": "/SMA"
  },
  {
    "renderMode": 1,
    "route": "/SMA/list"
  },
  {
    "renderMode": 1,
    "route": "/SMA/create"
  },
  {
    "renderMode": 1,
    "route": "/SMA/edit/*"
  }
],
  assets: {
    'index.csr.html': {size: 23625, hash: '031203c4d67e93cfdc3137705a5689961e050aa071a741d0b9bcfadecf2c2fdc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17199, hash: 'c50b946ac1c0e563e2ffb478954c62969ace7cd77d195529108926b625fac97e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QHBCHQCB.css': {size: 7871, hash: 'ac/7xgLr6lM', text: () => import('./assets-chunks/styles-QHBCHQCB_css.mjs').then(m => m.default)}
  },
};
