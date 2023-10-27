
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/bootv/Desktop/Codes/vnode/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "test"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
