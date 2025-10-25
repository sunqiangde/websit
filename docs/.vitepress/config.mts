import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '长春睿汇商贸有限公司',
  description: '专业提供建筑智能化、系统集成、产品开发等IT服务，ISO900系列质量管理体系认证',
  
  // 禁用夜间模式
  appearance: false,
  
  // 优化SEO和社交分享
  head: [
    ['meta', { name: 'theme-color', content: '#4A6FA5' }], // 低饱和度蓝色
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }]
  ],
  
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '公司介绍', link: '#about' },
      { text: '服务领域', link: '#services' },
      { text: '技术实力', link: '#technology' },
      { text: '合作伙伴', link: '#partners' },
      { text: '成功案例', link: '#cases' },
      { text: '企业文化', link: '#culture' },
      { text: '发展愿景', link: '#vision' },
      { text: '联系我们', link: '#contact' }
    ],
    
    // 移除社交链接
    socialLinks: [],
    
    // 页脚配置 - 添加回联系方式和邮箱
    footer: {
      message: '📍 长春市南关区人民大街7520号D栋305室<br>' +
               '📞 13384312776<br>' +
               '✉️ 308755387@qq.com<br>' +
               '© 2025 长春睿汇商贸有限公司. 保留所有权利.',
      copyright: ''
    }
    
    // 移除搜索功能
  }
})