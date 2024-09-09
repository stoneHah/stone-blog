# 在VitePress中安装tailwind_css

参考tailwind_css官网: https://tailwindcss.com/docs/guides/vite#vue, 官方文档中有个src路径，但是vitepress中没有,所以我这指定了.vitepress下的文件(也不清楚对不对，反正最后是样式是生效了)

1. 安装tailwind_css及其相关依赖，然后初始化

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. 在tailwind.config.js中添加以下内容

```js
export default {
  content: [ // [!code focus:4]
    "./.vitepress/**/*.{js,ts,vue}",
    "./**/*.md"
  ],
  theme: {
    extend: {},
  },
}
```

3.  将 Tailwind 每个层的@tailwind指令添加到.vitepress/theme/style.css文件中。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. 验证是否安装好

```html
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```



