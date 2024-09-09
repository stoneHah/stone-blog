import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 获取ComfyUI目录下的所有md文件
function getMarkdownFiles(dirName: string) {
  const dir = path.resolve(__dirname, `../${dirName}`)
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      text: path.parse(file).name,
      link: `/${dirName}/${file}`
    }))
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "神龙大xia",
  description: "记录开发与认知心得",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'ComfyUI', link: '/comfyui' },
      { text: 'AI',
        items: [
          { text: '提示词工程师', link: '/markdown-examples' },
        ]
      },
      { text: 'Python', link: '/markdown-examples' },
      { text: 'Java', link: '/markdown-examples' },
      { text: '英语', link: '/markdown-examples' },
      { text: '网站搭建',
        items: [
          { text: '个人技术博客搭建(VitePress)', link: '/website_build/vitepress/安装tailwindcss' },
        ]
      },
    ],

    sidebar: {
      '/comfyui/': [{
        text: 'ComfyUI',
        items: getMarkdownFiles('comfyui')
      }],
      '/website_build/vitepress/': [{
        text: '个人技术博客搭建(VitePress)',
        items: getMarkdownFiles('website_build/vitepress')
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
