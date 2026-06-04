# 叶旭宇's Homepage
这是一个轻量化、响应式的个人主页网站，支持暗黑/亮色主题切换，包含个人介绍、家庭成员、工作经历、项目经历、能力证书、个人作品等核心模块。

## 目录
- [目录结构](#目录结构)
- [环境要求](#环境要求)
- [使用指南](#使用指南)
- [核心功能说明](#核心功能说明)
- [自定义配置](#自定义配置)

## 目录结构
```
personal-homepage/
├── index.html                    # 核心HTML页面
├── 个人信息.txt                  # 个人基本信息
├── 工作经历.txt                  # 工作经历内容
├── 项目经历.txt                  # 项目经历内容
├── 能力证书.txt                 # 能力证书内容
├── 个人项目.txt                  # 个人项目内容
├── assets/                      # 静态资源目录
│   ├── css/
│   │   └── style.css           # 全局样式（含主题、布局、组件样式）
│   ├── js/
│   │   └── main.js             # 核心交互（主题切换、内容渲染等）
│   └── images/                  # 图片目录
│       ├── Avatar.jpg           # 个人头像
│       ├── jiuqian.jpg         # 家庭成员头像
│       ├── max.jpg             # 家庭成员头像
│       ├── huazi.jpg           # 家庭成员头像
│       └── ...                 # 其他图片资源
├── pages/
│   ├── projects/                # 工作项目详情页
│   │   ├── project1.html
│   │   ├── project2.html
│   │   ├── project3.html
│   │   └── project4.html
│   └── portfolio/              # 个人作品详情页
│       ├── portfolio1.html
│       └── portfolio2.html
└── README.md
```

## 环境要求
无需复杂环境，满足以下任一条件即可运行：
- 现代浏览器（Chrome/Firefox/Safari/Edge 最新版）
- 静态文件服务器（如 Nginx、VS Code Live Server）
- GitHub Pages/Gitee Pages 等静态页面托管平台

## 使用指南

### 本地运行
```bash
# 方法1：直接双击 index.html 打开
# 方法2：VS Code 安装 Live Server 插件，右键 index.html → "Open with Live Server"
# 方法3：Python 启动简易服务器
python -m http.server 8080
# 方法4：Node.js http-server
npx http-server -p 8080
```
访问地址：`http://localhost:8080`

### 部署上线
#### GitHub Pages
1. 将代码推送到 GitHub 仓库；
2. 进入仓库 → Settings → Pages → 选择分支 → 保存；
3. 等待几分钟后访问 `https://[用户名].github.io`

## 核心功能说明

### 1. 主题切换
- 初始化：读取 localStorage 中的主题偏好，无则匹配系统深色/亮色模式
- 切换逻辑：点击导航栏「月亮/太阳」图标，切换 `data-theme` 为 `dark/light`

### 2. 个人介绍区域
- 左侧：头像、姓名、个人信息（出生年月、联系电话、邮箱、教育经历）
- 右侧：家庭成员展示（头像、名字、简介）
- 社交链接：支持哔哩哔哩、GitHub、推特、知乎（链接可配置）

### 3. 工作经历
- 时间线展示，点击可展开查看详细工作内容和成绩
- 数据配置：在 `main.js` 的 `TIMELINE_EVENTS` 数组中

### 4. 项目经历
- 卡片式展示，点击跳转到详情页
- 详情页支持图片展示，可点击放大查看
- 数据配置：在 `main.js` 的 `PROJECTS` 数组中

### 5. 能力证书
- 卡片展示，配有证书图片
- 图片支持点击放大查看
- 数据配置：在 `main.js` 的 `CERTIFICATES` 数组中

### 6. 个人作品
- 卡片展示，配有项目图片
- 图片支持点击放大查看
- 数据配置：在 `main.js` 的 `PORTFOLIO_ITEMS` 数组中

### 7. 图片灯箱
- 证书图片、项目图片、家庭成员头像等支持点击放大
- 点击背景或按 ESC 键关闭

## 自定义配置

### 1. 修改个人信息
- 修改 `index.html` 中的姓名、个人信息
- 替换 `assets/images/Avatar.jpg` 更新头像
- 修改 `assets/js/main.js` 中的 `CONTACT_LINKS` 配置社交链接

### 2. 修改家庭成员
- 在 `main.js` 中修改 `FAMILY_MEMBERS` 数组
- 头像图片放入 `assets/images/` 目录

### 3. 修改工作经历/项目经历
- 在 `main.js` 中修改对应的数据数组
- 或更新对应的 `.txt` 文件内容后同步到 `main.js`

### 4. 修改能力证书
- 在 `main.js` 中修改 `CERTIFICATES` 数组
- 证书图片放入 `assets/images/` 目录

### 5. 自定义主题
- 修改 `assets/css/style.css` 中的 CSS 变量
- `:root`（light 主题）和 `[data-theme="dark"]`（dark 主题）
