import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "海星来来の文档站",
  description: "海星来来の文档站 Powered by VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'APIs', link: '/start' }
    ],

    sidebar: [
      {
        text: '从这里开始',
        items: [
          { text: '建站说明', link: '/start' },
        ]
      },
      {
        text: '随机二次元图片',
        items: [
          { text: '关于 API 的说明', link: '/random-anime-imgs/' },
          { text: '请求方法和参数', link: '/random-anime-imgs/params' },
          { text: '返回结果', link: '/random-anime-imgs/results' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/umaru2001' }
    ]
  }
})
