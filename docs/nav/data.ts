import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: "海星来来的站点",
    items: [
      {
        title: "海祇岛的珊瑚森林",
        desc: "海星来来的博客",
        link: "https://blog.pengdonglai.com",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "个人搭建图床",
        desc: "设置了CF权限，暂时只能博主本人上传",
        link: "https://starfishdl.site/uploadpage",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "CloudFlare",
        desc: "真正的赛博菩萨1号",
        link: "https://dash.cloudflare.com/",
        icon: "https://dash.cloudflare.com/favicon.ico",
      },
      {
        title: "Vercel",
        desc: "真正的赛博菩萨2号",
        link: "https://vercel.com/",
        icon: "https://vercel.com/favicon.ico",
      },
      {
        title: "图床数据库插入 SQL 生成",
        desc: "可以生成访问图床的链接，并且将它转化为 SQL",
        link: "https://blog.pengdonglai.com/2024/05/04/generate-img-insert-sql/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "JSON 转 Interface",
        desc: "JSON 转 Interface",
        link: "https://blog.pengdonglai.com/2024/05/04/convert-json2interface/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "海星来来的文档站",
        desc: "海星来来的文档站",
        link: "https://docs.starfishdl.site/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
    ],
  },
  {
    title: '前端',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/items/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org',
      },
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com',
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: '',
      },
    ],
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com',
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com',
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com',
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net',
      },
    ],
  },
  {
    title: "动漫资源",
    items: [
      {
        "title": "girigiri爱动漫",
        "link": "https://anime.girigirilove.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZS5naXJpZ2lyaWxvdmUuY29t",
        "desc": "大陆区域IP会显示403"
      },
      {
        "title": "茶杯狐",
        "link": "https://www.cupfox.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY3VwZm94LmFwcA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "咕咕番",
        "link": "http://www.gugufan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5ndWd1ZmFuLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "NyaFun",
        "link": "https://www.nyafun.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubnlhZnVuLm5ldA==",
        "desc": "网站处于维护状态中。"
      },
      {
        "title": "次元城动漫",
        "link": "http://www.cycity.pro/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5jeWNpdHkucHJv",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "アニメ新番組",
        "link": "https://bangumi.online/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLm9ubGluZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Avbebe",
        "link": "https://avbebe.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hdmJlYmUuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AnFuns动漫",
        "link": "https://www.anfuns.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYW5mdW5zLmNj",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "H次元",
        "link": "https://h-ciyuan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oLWNpeXVhbi5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG.RW",
        "link": "https://www.acgrw.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNncncubmV0",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "樱花动漫",
        "link": "https://www.dm539.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5kbTk5Lm1l",
        "desc": "只能说叫樱花动漫的网站太多了。"
      },
      {
        "title": "OmoFun",
        "link": "https://www.omofun.in/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cub21vZnVuLmlu",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ANi Open",
        "link": "https://aniopen.an-i.workers.dev/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmlvcGVuLmFuLWkud29ya2Vycy5kZXY=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "橘子动漫",
        "link": "https://www.mgnacg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubWduYWNnLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "俺の3Dエロ動画",
        "link": "https://oreno3d.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9vcmVubzNkLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-ACG",
        "link": "https://eacg.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lYWNnLm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hanime1",
        "link": "https://hanime1.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oYW5pbWUxLm1l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Iwara",
        "link": "https://ecchi.iwara.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lY2NoaS5pd2FyYS50dg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "八重樱动漫",
        "link": "https://iafuns.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pYWZ1bnMuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "EDD动漫",
        "link": "http://www.edddh.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5lZGRkaC5jYw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ZzzFun",
        "link": "http://www.zzzfun.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy56enpmdW4uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "hanime",
        "link": "https://hanime.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oYW5pbWUudHY=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AGE动漫",
        "link": "http://www.age.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hZ2UudHY=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "niconico",
        "link": "https://www.nicovideo.jp/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubmljb3ZpZGVvLmpw",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Anime1",
        "link": "https://anime1.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZTEuY2M=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ANMAXJP",
        "link": "http://cn.anmaxjp.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2NuLmFubWF4anAuY29t",
        "desc": "里番合集度盘下载"
      },
      {
        "title": "异世界动漫",
        "link": "https://www.sbdm.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2JkbS5uZXQ=",
        "desc": "还算可以"
      },
      {
        "title": "AcFuns",
        "link": "https://acgfuns.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2dmdW5zLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "宫下动漫",
        "link": "https://arlnigdm.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcmxuaWdkbS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Animoe",
        "link": "https://animoe.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltb2Uub3Jn",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "番剧",
        "link": "https://www.fanju.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZmFuanUubWU=",
        "desc": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "次元美图",
    items: [
      {
        "title": "萌图社",
        "link": "https://moetu.club/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tb2V0dS5jbHVi",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ubizzard Translation",
        "link": "https://ubizzard-translation.blogspot.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly91Yml6emFyZC10cmFuc2xhdGlvbi5ibG9nc3BvdC5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "BoBoPic",
        "link": "https://bobopic.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ib2JvcGljLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "厳選2次元画像館",
        "link": "https://gennji.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nZW5uamkuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "無邪気漢化組官方博客",
        "link": "http://mujaki.blog.jp/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL211amFraS5ibG9nLmpw",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "淫漫画",
        "link": "https://www.yinmh.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cueWlubWguY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "/ | Lolibooru",
        "link": "https://lolibooru.moe/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9sb2xpYm9vcnUubW9l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixivel",
        "link": "https://pixivel.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdmVsLm1vZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Danbooru2.0",
        "link": "https://sonohara.donmai.us/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb25vaGFyYS5kb25tYWkudXM=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Cosplay",
        "link": "https://hentai-cosplays.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oZW50YWktY29zcGxheXMuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "TBIB",
        "link": "https://tbib.org/index.php?page=post&s=list&pid=0",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90YmliLm9yZw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AsmHentai",
        "link": "https://asmhentai.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc21oZW50YWkuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiviz",
        "link": "https://pixiviz.pwp.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdml6LnB3cC5hcHA=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "紳士漫畫",
        "link": "https://www.wnacg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cud25hY2cuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "禁漫網址發布頁",
        "link": "https://jm365.work/xPD8Un",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qbTM2NS53b3Jr",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "极简壁纸",
        "link": "https://bz.zzzmh.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iei56enptaC5jbg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Wallhaven",
        "link": "https://wallhaven.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93YWxsaGF2ZW4uY2M=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hitomi.la",
        "link": "https://hitomi.la/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oaXRvbWkubGE=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "禁漫天堂",
        "link": "https://18comic.vip/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xOGNvbWljLnZpcA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Kemono Beta",
        "link": "https://beta.kemono.party/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iZXRhLmtlbW9uby5wYXJ0eQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Kemono",
        "link": "https://kemono.party/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rZW1vbm8ucGFydHk=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "同人漫画",
        "link": "http://twhentai.com/index.html",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3R3aGVudGFpLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "nhentai",
        "link": "https://nhentai.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uaGVudGFpLm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv圖片代理",
        "link": "https://pixiv.cat/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5jYXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "pixivギャラリー",
        "link": "https://pixiv.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5tb2U=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sankaku Channe",
        "link": "https://chan.sankakucomplex.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jaGFuLnNhbmtha3Vjb21wbGV4LmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Voiux 图库",
        "link": "https://gal.voiux.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nYWwudm9pdXguY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "动漫图片和壁纸",
        "link": "https://anime-pictures.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZS1waWN0dXJlcy5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixivic",
        "link": "https://pixivic.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdmljLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Exhentai",
        "link": "https://exhentai.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9leGhlbnRhaS5vcmc=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-hentai",
        "link": "https://e-hentai.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lLWhlbnRhaS5vcmc=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "二次萌エロ画像ブログ",
        "link": "http://moeimg.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL21vZWltZy5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Gelbooru",
        "link": "https://gelbooru.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nZWxib29ydS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Danbooru",
        "link": "https://danbooru.donmai.us/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYW5ib29ydS5kb25tYWkudXM=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "KURO",
        "link": "https://pixiv.kurocore.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5rdXJvY29yZS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Konachan中文站",
        "link": "https://konachan.wjcodes.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rb25hY2hhbi53amNvZGVzLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "konachan",
        "link": "https://konachan.com/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rb25hY2hhbi5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "/ | yande.re",
        "link": "https://yande.re/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly95YW5kZS5yZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "[pixiv]",
        "link": "https://www.pixiv.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cucGl4aXYubmV0",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "嗶咔漫畫",
        "link": "https://manhuabika.com/pdownload/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tYW5odWFiaWthLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Image",
        "link": "https://hentai-img.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oZW50YWktaW1nLmNvbQ==",
        "desc": "如题"
      },
      {
        "title": "AB站",
        "link": "https://acgbeo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2diZW8uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACEACG",
        "link": "http://acedizhi.com",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2FjZWRpemhpLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nice Cat",
        "link": "https://web.nicecat.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93ZWIubmljZWNhdC5jYw==",
        "desc": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "次元音乐",
    items: [
      {
        "title": "Biu~",
        "link": "https://biu.moe/#/Index/home",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaXUubW9l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "HVDB - All Works",
        "link": "https://hvdb.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9odmRiLm1l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hikarinoakariost",
        "link": "https://hikarinoakari.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oaWthcmlub2FrYXJpLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ASMR Online",
        "link": "https://asmr.one/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc21yLm9uZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "VIVA HENTAI",
        "link": "https://www.vivahentai4u.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudml2YWhlbnRhaTR1Lm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Japanese ASMR",
        "link": "https://japaneseasmr.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qYXBhbmVzZWFzbXIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "JASMR.NET",
        "link": "https://www.jasmr.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuamFzbXIubmV0",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Listen 1 音乐播放器",
        "link": "https://listen1.github.io/listen1/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9saXN0ZW4xLmdpdGh1Yi5pbw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Audiomack",
        "link": "https://audiomack.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hdWRpb21hY2suY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "MYFREEMP3",
        "link": "https://tool.liumingye.cn/music/#/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29sLmxpdW1pbmd5ZS5jbg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG漫音社",
        "link": "http://www.acgjc.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hY2dqYy5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "Galgame合集",
    items: [
      {
        "title": "GalZY紫缘社",
        "link": "https://www.galzy.eu.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsenkuZXUub3Jn",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "失落的galgame资源站",
        "link": "https://shinnku.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zaGlubmt1LmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "量子ACG",
        "link": "https://lzacg.one/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9semFjZy5vbmU=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG嘤嘤怪-",
        "link": "https://acgyyg.ru/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2d5eWcucnU=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "绅士天堂",
        "link": "https://www.gogalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ29nYWxnYW1lLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "GAL图书馆",
        "link": "https://www.galgame.pw/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsZ2FtZS5wdw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "萌次元",
        "link": "https://18moe.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xOG1vZS5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "终点论坛",
        "link": "https://bbs.zdfx.net/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYnMuemRmeC5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "忧郁的loli",
        "link": "https://acggal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2dnYWwuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "初音的青葱网发布页",
        "link": "https://xygalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94eWdhbGdhbWUuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Gal領域",
        "link": "https://www.galcg.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsY2cub3Jn",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "GalWorld",
        "link": "https://acgngames.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2duZ2FtZXMubmV0",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "2DFan",
        "link": "https://www.2dfan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuMmRmYW4uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "忧郁的弟弟",
        "link": "https://www.kkgal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cua2tnYWwuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "初音的青葱",
        "link": "https://www.yngal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cueW5nYWwuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "CnGal",
        "link": "https://www.cngal.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY25nYWwub3Jn",
        "desc": "国产/中文galgame资料站"
      },
      {
        "title": "SteamGalgame",
        "link": "https://steamgalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdGVhbWdhbGdhbWUuY29t",
        "desc": "Steam上的中文Galgame"
      },
      {
        "title": "莉莉絲の遊戲原盤倉庫",
        "link": "https://sakakirio.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zYWtha2lyaW8uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "木偶",
        "link": "https://abnormalize.icu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hYm5vcm1hbGl6ZS5pY3U=",
        "desc": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "安卓安装包",
    items: [
      {
        "title": "F-Droid",
        "link": "https://f-droid.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mLWRyb2lkLm9yZw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKCombo",
        "link": "https://apkcombo.com/zh-cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGtjb21iby5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Uptodown",
        "link": "https://www.uptodown.com/android",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudXB0b2Rvd24uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKTurbo",
        "link": "https://www.apkturbo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYXBrdHVyYm8uY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKPure",
        "link": "https://apkpure.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGtwdXJlLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKTool",
        "link": "https://apk.tools/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGsudG9vbHM=",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "图片工具",
    items: [
      {
        "title": "Home | wsrv.nl",
        "link": "https://wsrv.nl/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93c3J2Lm5s",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "EhViewer-NekoInverter",
        "link": "https://github.com/EhViewer-NekoInverter/EhViewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "TachiyomiJ2K",
        "link": "https://github.com/Jays2Kings/tachiyomiJ2K",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Cimoc",
        "link": "https://github.com/Haleydu/Cimoc",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "K Anime Wallpaper",
        "link": "https://github.com/EternalSoySauce/Konachan",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv UWP",
        "link": "https://github.com/tobiichiamane/pixivfs-uwp",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "PxView",
        "link": "https://github.com/alphasp/pxview",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "PivisionM",
        "link": "https://github.com/mouyase/PivisionM",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixeval",
        "link": "https://github.com/Rinacm/Pixeval",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Flexbooru",
        "link": "https://github.com/flexbooru/flexbooru",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "FEhViewer",
        "link": "https://github.com/honjow/FEhViewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ehviewer-Overhauled",
        "link": "https://github.com/Ehviewer-Overhauled/Ehviewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-Viewer",
        "link": "https://github.com/OpportunityLiu/E-Viewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ehviewer",
        "link": "https://github.com/xiaojieonly/Ehviewer_CN_SXJ",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv-Shaft",
        "link": "https://github.com/CeuiLiSA/Pixiv-Shaft",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "pixez-flutter",
        "link": "https://github.com/Notsfsssf/pixez-flutter",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv-Slinky",
        "link": "https://github.com/CeuiLiSA/Pixiv-Slinky",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "GitHub 电脑软件",
    items: [
      {
        "title": " 64Gram",
        "link": "https://github.com/TDesktop-x64/tdesktop",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "style2paints",
        "link": "https://github.com/lllyasviel/style2paints",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "线稿智能上色"
      },
      {
        "title": "阿里云盘小白羊版",
        "link": "https://github.com/liupan1890/aliyunpan",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AI-Lossless-Zoomer",
        "link": "https://github.com/X-Lucifer/AI-Lossless-Zoomer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Steam++",
        "link": "https://github.com/BeyondDimension/SteamTools",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Mem Reduct",
        "link": "https://github.com/henrypp/memreduct",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "qttabbar",
        "link": "https://github.com/indiff/qttabbar/tree/1.5.5.2-beta",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "YTM Desktop",
        "link": "https://github.com/ytmdesktop/ytmdesktop",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "TrafficMonitor",
        "link": "https://github.com/zhongyang219/TrafficMonitor",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ScreenToGif",
        "link": "https://www.screentogif.com/?l=zh_cn",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2NyZWVudG9naWYuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "OBS Studio",
        "link": "https://github.com/obsproject/obs-studio",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Waifu2x-GUI",
        "link": "https://github.com/AaronFeng753/Waifu2x-Extension-GUI",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "TranslucentTB",
        "link": "https://github.com/TranslucentTB/TranslucentTB",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "GARbro",
        "link": "https://github.com/morkt/GARbro",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网络代理",
    items: [
      {
        "title": "ClashMetaForAndroid",
        "link": "https://github.com/MetaCubeX/ClashMetaForAndroid",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayNX",
        "link": "https://github.com/yoursoftder/v2rayNX",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Stair-Speedtest-Portable",
        "link": "https://xun-x.github.io/Stair-Speedtest-Portable/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94dW4teC5naXRodWIuaW8=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "SSRRAY",
        "link": "https://github.com/xxf098/shadowsocksr-v2ray-trojan-android",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "stairspeedtest",
        "link": "https://github.com/tindy2013/stairspeedtest-reborn",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "SagerNet",
        "link": "https://github.com/SagerNet/SagerNet",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Clash For Android",
        "link": "https://github.com/Kr328/ClashForAndroid",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "NetchX",
        "link": "https://github.com/NetchX/Netch",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Clash_Chinese_Patch",
        "link": "https://github.com/BoyceLig/Clash_Chinese_Patch/releases",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "GUI Clash",
        "link": "https://github.com/Fndroid/clash_for_windows_pkg",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayNG",
        "link": "https://github.com/2dust/v2rayNG",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayN",
        "link": "https://github.com/2dust/v2rayN",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "机场",
    items: [
      {
        "title": "丛雨 VPN",
        "link": "https://congyu.moe/",
        "icon": "发布站点：https://cn.congyu.org/favicon.svg",
        "desc": "moe 被墙。发布站点：https://cn.congyu.org/，防止失联。机场主好像是柚子厨。"
      },
      {
        "title": "tutucloud",
        "link": "https://qiang.tutucloud.shop/",
        "desc": "速度很快，比较便宜并且支持不限时流量。"
      },
      {
        "title": "起飞机场",
        "link": "https://www.qifeijiasuapp.com/zh-hans",
        "icon": "https://www.qifeijiasuapp.com/items/vpn1_qifei/files/inline-images/logo-cn-vpnweb.png",
        "desc": "免费，效果还可以。"
      },
      {
        "title": "RabbitPro",
        "link": "https://rabbitpro.net/",
        "icon": "https://rabbitpro.net/favicon.ico",
        "desc": "一直在用，感觉不太会跑路，有点贵。"
      },
      {
        "title": "品云机场导航",
        "link": "https://52.mk/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly81Mi5taw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sub Converter",
        "link": "https://sub-web.netlify.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdWItd2ViLm5ldGxpZnkuYXBw",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "PAC",
        "link": "https://raw.githubusercontent.com/petronny/gfwlist2pac/master/gfwlist.pac",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "订阅转换",
        "link": "https://bianyuan.xyz/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaWFueXVhbi54eXo=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "V2Ray",
        "link": "https://itlanyan.com/v2ray-clients-download/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pdGxhbnlhbi5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "SSR",
        "link": "https://ssr.tools/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zc3IudG9vbHM=",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "磁力搜索",
    items: [
      {
        "title": "动漫花园镜像站",
        "link": "https://dongmanhuayuan.myheartsite.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kb25nbWFuaHVheXVhbi5teWhlYXJ0c2l0ZS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG23",
        "link": "https://www.acg23.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNnMjMuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "JavDB",
        "link": "https://javdb.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qYXZkYi5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Tokyo Toshokan",
        "link": "https://www.tokyotosho.info/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudG9reW90b3Noby5pbmZv",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "蜜柑计划",
        "link": "https://mikanani.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9taWthbmFuaS5tZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "萌番组",
        "link": "https://bangumi.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLm1vZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ø磁铁",
        "link": "https://17mag.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xN21hZy5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "BitCQ",
        "link": "https://bitcq.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaXRjcS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "MioBT",
        "link": "http://www.miobt.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5taW9idC5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "爱恋动漫BT",
        "link": "http://kisssub.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2tpc3NzdWIub3Jn",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "動漫花園",
        "link": "http://dmhy.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2RtaHkub3Jn",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "漫猫动漫BT",
        "link": "http://www.comicat.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5jb21pY2F0Lm9yZw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nyaa Pantsu",
        "link": "https://nyaa.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ueWFhLm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sukebei",
        "link": "https://sukebei.nyaa.si/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdWtlYmVpLm55YWEuc2k=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nyaa",
        "link": "https://nyaa.si/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ueWFhLnNp",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "搜图bot酱",
        "link": "https://soutubot.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb3V0dWJvdC5tb2U=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Anime Search",
        "link": "https://trace.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90cmFjZS5tb2U=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IQDB",
        "link": "http://www.iqdb.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5pcWRiLm9yZw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Google Images",
        "link": "https://images.google.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pbWFnZXMuZ29vZ2xlLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ascii2d",
        "link": "https://ascii2d.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc2NpaTJkLm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Yandex",
        "link": "https://yandex.com/images/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly95YW5kZXguY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sauce",
        "link": "http://saucenao.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3NhdWNlbmFvLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "图片托管",
    items: [
      {
        "title": "极兔图床",
        "link": "https://pic.jitudisk.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waWMuaml0dWRpc2suY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "在线PS",
        "link": "https://www.gaituya.com/ps/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FpdHV5YS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "waifu2x",
        "link": "http://waifu2x.udp.jp/index.zh-CN.html",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3dhaWZ1MngudWRwLmpw",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Bigjpg",
        "link": "http://bigjpg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2JpZ2pwZy5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "SM.MS",
        "link": "https://sm.ms/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zbS5tcw==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "文件托管",
    items: [
      {
        "title": "Streamja",
        "link": "https://streamja.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdHJlYW1qYS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "cockfile",
        "link": "https://cockfile.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jb2NrZmlsZS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Fileditch",
        "link": "https://fileditch.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9maWxlZGl0Y2guY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "奶牛快传",
        "link": "https://cowtransfer.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jb3d0cmFuc2Zlci5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AnonFiles",
        "link": "https://anonfiles.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbm9uZmlsZXMuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Catbox",
        "link": "https://catbox.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jYXRib3gubW9l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Litterbox",
        "link": "https://litterbox.catbox.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9saXR0ZXJib3guY2F0Ym94Lm1vZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "硬件天梯",
    items: [
      {
        "title": "移动芯片排行",
        "link": "https://www.socpk.com/",
        "icon": "https://www.socpk.com/favicon.ico",
        "desc":  "来自极客湾的测评"
      },
      {
        "title": "显卡天梯图",
        "link": "https://tools.miku.ac/gpu_rank/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "desc":  "来自 MikuTools 的测评"
      },
      {
        "title": "CPU 天梯图",
        "link": "https://tools.miku.ac/cpu_rank/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "desc": "来自 MikuTools 的测评"
      },
      {
        "title": "手机CPU性能天梯图",
        "link": "https://www.mydrivers.com/zhuanti/tianti/01/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "桌面显卡性能天梯图",
        "link": "https://www.mydrivers.com/zhuanti/tianti/gpu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "桌面CPU性能天梯图",
        "link": "https://www.mydrivers.com/zhuanti/tianti/cpu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "工具集合",
    items: [
      {
        "title": "Coder Toolbox",
        "link": "https://lolicon.dev/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9sb2xpY29uLmRldg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "一个木函工具箱",
        "link": "https://ol.woobx.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9vbC53b29ieC5jbg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "夜雨聆风工具箱",
        "link": "http://www.yeyulingfeng.com/tool/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy55ZXl1bGluZ2ZlbmcuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "MikuTools",
        "link": "https://tools.miku.ac/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ToolTT",
        "link": "https://tooltt.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29sdHQuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网址导航",
    items: [
      {
        "title": "TGNAV",
        "link": "https://tgnav.github.io/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90Z25hdi5naXRodWIuaW8=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Chairo 导航",
        "link": "https://www.chairo.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY2hhaXJvLmNj",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "AcgnHub",
        "link": "http://www.acgfans.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hY2dmYW5zLm1l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG喵导航",
        "link": "https://www.miaoaaa.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubWlhb2FhYS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "妲己导航",
        "link": "https://dajidh.icu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYWppZGguaWN1",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "桜舞导航",
        "link": "https://all.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbGwuY2M=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "白鹭学园",
        "link": "https://srsg.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zcnNnLm1vZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG盒子",
        "link": "https://www.acgbox.link/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNnYm94Lmxpbms=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "18网站大全",
        "link": "https://whichav.video/zh-hans/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93aGljaGF2LnZpZGVv",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Porn Dude",
        "link": "https://theporndude.com/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90aGVwb3JuZHVkZS5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "快搜",
        "link": "https://search.chongbuluo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zZWFyY2guY2hvbmdidWx1by5jb20=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "趣导航",
        "link": "https://qssily.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9xc3NpbHkuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网络工具",
    items: [
      {
        "title": "中国科学技术大学测速网站",
        "link": "http://test6.ustc.edu.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3Rlc3Q2LnVzdGMuZWR1LmNu",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "LibreSpeed",
        "link": "https://www.librespeed.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubGlicmVzcGVlZC5jbg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Speedtest",
        "link": "https://www.speedtest.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc3BlZWR0ZXN0Lm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Fast.com",
        "link": "https://fast.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mYXN0LmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "在线ping",
        "link": "https://www.itdog.cn/ping/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaXRkb2cuY24=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP Geolocation API",
        "link": "https://ipdata.co/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGRhdGEuY28=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ip-api.com",
        "link": "https://ip-api.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC1hcGkuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "检查您自己的IP地址和DNS地址",
        "link": "https://whoer.net/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93aG9lci5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPinfo.io",
        "link": "https://ipinfo.io/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGluZm8uaW8=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPHub.info",
        "link": "https://iphub.info/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGh1Yi5pbmZv",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP Info",
        "link": "https://ip.voidsec.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC52b2lkc2VjLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP.SB",
        "link": "https://ip.sb/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC5zYg==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "myip.ipip.net",
        "link": "http://myip.ipip.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL215aXAuaXBpcC5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP地址",
        "link": "https://ip.skk.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC5za2subW9l",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPIP",
        "link": "https://www.ipip.net/ip.html",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaXBpcC5uZXQ=",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "Tracker合集",
    items: [
      {
        "title": "TrackersListCollection",
        "link": "https://trackerslist.com/#/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90cmFja2Vyc2xpc3QuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "animeTrackerList",
        "link": "https://github.com/DeSireFire/animeTrackerList",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "newTrackon",
        "link": "https://newtrackon.com/list",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uZXd0cmFja29uLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Tracker List",
        "link": "https://www.torrenttrackerlist.com/torrent-tracker-list/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudG9ycmVudHRyYWNrZXJsaXN0LmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Trackerslist",
        "link": "https://github.com/ngosang/trackerslist",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "机场合集",
    items: [
      {
        "title": "低价机场",
        "link": "https://xn--6nq0hk9tdjr.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tNm5xMGhrOXRkanIuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Home",
        "link": "https://dash.hhcloud.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYXNoLmhoY2xvdWQubWU=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "XMRth",
        "link": "https://xmrth.fun/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bXJ0aC5mdW4=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "魔戒.net",
        "link": "https://mojie.online/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tb2ppZS5vbmxpbmU=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "大机场",
        "link": "https://xn--mesr8b36x.business/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tbWVzcjhiMzZ4LmJ1c2luZXNz",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "白嫖机场",
        "link": "https://paolu.pics/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9wYW9sdS5waWNz",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "一元机场",
        "link": "https://xn--4gq62f52gdss.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tNGdxNjJmNTJnZHNzLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "nanoPort",
        "link": "https://v3.nanoport.xyz/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly92My5uYW5vcG9ydC54eXo=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "iKuuu VPN",
        "link": "https://ikuuu.eu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pa3V1dS5ldQ==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "动漫论坛",
    items: [
      {
        "title": "ACGN动漫花园",
        "link": "https://www.hyacgn.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaHlhY2duLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ScarletMoon",
        "link": "https://kf.miaola.work/index.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rZi5taWFvbGEud29yaw==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "2DJGAME!",
        "link": "https://bbs4.2djgame.net/home/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYnM0LjJkamdhbWUubmV0",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "MOBILISM",
        "link": "https://forum.mobilism.org/index.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mb3J1bS5tb2JpbGlzbS5vcmc=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "好萌动漫",
        "link": "https://nicemoe60.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uaWNlbW9lNjAuY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "South Plus",
        "link": "https://south-plus.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb3V0aC1wbHVzLm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "灵梦御所",
        "link": "https://blog.reimu.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ibG9nLnJlaW11Lm5ldA==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "HACG社发布页",
        "link": "https://acg.gy/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2cuZ3k=",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sankaku",
        "link": "https://www.sankakucomplex.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2Fua2FrdWNvbXBsZXguY29t",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "tsdm",
        "link": "https://www.tsdm39.com/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudHNkbTM5LmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "Bangumi",
        "link": "https://bangumi.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLnR2",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG爱动漫",
        "link": "https://www.aidm12.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWlkbTEyLmNvbQ==",
        "desc": "作者很懒，没有填写描述。"
      },
      {
        "title": "琉璃神社",
        "link": "https://www.hacg.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaGFjZy5tZQ==",
        "desc": "作者很懒，没有填写描述。"
      },
    ],
  },
];
