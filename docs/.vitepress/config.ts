import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '99 Nights in the Forest Guide',
  description: 'Player wiki mirror',
  themeConfig: {
    nav: [
      { text: 'Enemies', link: '/enemies' },
      { text: 'Items', link: '/items' },
      { text: 'Classes', link: '/classes' },
      { text: 'NPCs', link: '/npcs' },
    ],
    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Enemies', link: '/enemies' },
          { text: 'Items', link: '/items' },
          { text: 'Classes', link: '/classes' },
          { text: 'NPCs', link: '/npcs' },
        ]
      }
    ]
  }
})