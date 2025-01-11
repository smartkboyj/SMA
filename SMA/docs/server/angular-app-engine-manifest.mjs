
export default {
  basePath: '/sma',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
