# vite-plugin-add-timestamp
### 一个在构建阶段给vite模板(html)中的.js,.css文件添加时间戳的插件

# 安装

```sh
npm install vite-plugin-add-timestamp --save-dev
```

# 使用

```js
// vite.config.js

import addTimestamp from 'vite-plugin-add-timestamp'

export default {
    plugins: [
        addTimestamp()
    ]
}
```
