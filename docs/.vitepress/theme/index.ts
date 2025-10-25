import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  // 使用默认布局，应用低饱和度科技风格CSS
  Layout: () => {
    return h(DefaultTheme.Layout)
  }
}