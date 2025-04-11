import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Home Farm",
  description: "Home of the Young Clan",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },     
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Memorial Day 2025', link: 'pages/2025memorialday' },
          { text: 'July 4th 2025', link: 'pages/2025julyfourth' },
          { text: 'Square Dance 2025', link: 'pages/2025squaredance' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
