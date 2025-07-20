
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https//Tejkiran123.github.io/portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https/Tejkiran123.github.io/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: '83dc0c75d2be1393e86bb015538bd84b2abfc4d3c460c7d134c695a3cd0ae502', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: 'df85da74f37810eceed9cfb9a2ee40a29243be29491940dc277501c5302b00d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https/Tejkiran123.github.io/portfolio/index.html': {size: 12489, hash: '675f5fd3126e56a16cb19c039b9f3aa00b4fe5174d771a36b3ea5f13ea24a711', text: () => import('./assets-chunks/https_Tejkiran123_github_io_portfolio_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
