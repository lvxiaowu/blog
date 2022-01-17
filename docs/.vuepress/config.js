const guidePageList = require('../.vuepress/routerLayout');

module.exports = {
  title: '小武的博客',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/avatar.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/avatar.jpg', // 左上角logo
    nav: [
      // 导航栏配置
      { text: '首页', link: '/' },
      { text: '前端规范', link: '/guide/' },
      { text: 'github主页', link: 'https://github.com/xiaocking' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        {
          title: '文档',
          collapsable: false,
          children: guidePageList,
        },
      ],
    },
  },
  theme: 'vuepress-theme-reco', // 配置主题
};
