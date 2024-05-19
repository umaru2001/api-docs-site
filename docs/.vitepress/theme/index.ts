// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MNavLinks from './components/MNavLinks.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    // 获取 frontmatter
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(DefaultTheme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MNavLinks', MNavLinks)
  }
} satisfies Theme
