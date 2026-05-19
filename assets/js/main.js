(() => {
  const PROJECT_TAG_LIBRARY = {
    ROBOTICS: '机器人',
    EMBEDDED: '嵌入式',
    REINFORCEMENT_LEARNING: '强化学习',
    SIM2REAL: 'Sim2Real',
    DEPLOYMENT: '部署',
    FREERTOS: 'FreeRTOS',
    MOTION_CONTROL: '运动控制',
    MOTOR_CONTROL: '电机控制',
    SLAM: 'SLAM',
    LIDAR: '激光雷达',
    MECHANICAL_DESIGN: '机械设计',
    UNDERWATER_ROBOTICS: '水下机器人',
    VECTOR_PROPULSION: '矢量推进',
    WATERPROOF_ENGINEERING: '防水工程',
    AGRICULTURAL_ROBOTICS: '农业机器人',
    MULTI_ROBOT_COLLABORATION: '多机协同',
    WIKI: 'Wiki',
    KNOWLEDGE_BASE: '知识库',
    OPEN_SOURCE: '开源',
  };

  const PROJECTS = [
    {
      title: '业务中心销售AI智能助理项目',
      role: '方案架构设计',
      date: '2026-03',
      desc: '负责业务中心销售客户AI智能助理的场景调研、需求分析、数据分析、逻辑设计与功能设计。整合内外部数据，为销售提供客户全景画像与行动建议的智能助理。设计对接外部标讯、DPM项目信息、客户出库信息等数据，涵盖库内交易客户、休眠客户、拓新高潜客户的画像分析。提升单个销售组高潜客户筛选效率50%。',
      link: 'pages/projects/project1.html',
    },
    {
      title: 'AI-Agent辅助运营项目',
      role: '项目负责人',
      date: '2026-01',
      desc: '从0-1完成部门内部AI-Agent的搭建测试工作，包括知识库搭建、运营需求分析与工作流程拆解。实现政采业务点单运营跟踪、意向及项目数据推送、RCC项目分类与跟进等功能。政采项目推送精准率提升30%，RCC项目月度复盘效率提升60%。',
      link: 'pages/projects/project2.html',
    },
    {
      title: '中山大学智慧校园建设项目',
      role: '售前解决方案经理',
      date: '2025-05',
      desc: '对校本部物联大数据平台进行业务优化，实现三校区五校园的物联底座架构设计，同时对综合管理平台定制业务进行重新设计。优化整体架构后，中心端智能分析服务器利用率提升60%。文搜场景调研18个，落地推进4个，部分场景预警与处置效率提升80%。',
      link: 'pages/projects/project3.html',
    },
    {
      title: '广州某集团智能感知物联网建设项目',
      role: '项目经理',
      date: '2022-12',
      desc: '进行下属多个厂区子系统的需求调研，针对不同的厂区业务，调研实际管理的关注点以及当前建设内容，梳理目标对接工作。研讨数据治理相关细节，收敛需求，确保落地可行性。针对巡检业务进行方案审核，梳理风险点，及时拉通资源优化调整方案，降低实际交付的风险点。',
      link: 'pages/projects/project4.html',
    },
  ];

  const CERTIFICATES = [
    {
      title: '影刀初级/中级RPA技能认证',
      desc: '影刀RPA自动化工具认证，掌握RPA流程设计与开发能力',
      date: '2026-04',
      img: 'assets/images/RPA.jpg',
    },
    {
      title: '阿里云专业工程师认证（ACP）',
      desc: '阿里云云计算专业认证，具备云平台架构设计与管理能力',
      date: '2025-09',
      img: 'assets/images/ACP.jpg',
    },
    {
      title: '海康威视HCA数据工程师认证（DI）',
      desc: '海康威视数据智能方向认证，掌握数据分析与智能应用能力',
      date: '2023-09',
      img: 'assets/images/HCA.jpg',
    },
    {
      title: '产品经理国际资格认证（NPDP）',
      desc: '产品开发与管理专业认证，掌握产品规划与生命周期管理',
      date: '2022-09',
      img: 'assets/images/NPDP.jpg',
    },
    {
      title: '项目管理专业资格认证（PMP）',
      desc: '项目管理专业人士资格认证，具备项目全流程管理能力',
      date: '2020-12',
      img: 'assets/images/PMP.jpg',
    },
  ];

  const PORTFOLIO_ITEMS = [
    {
      title: '基于影刀RPA+AI Agent的自动化数据看板搭建',
      desc: '项目介绍：广东省教育厅专项资金采购跟踪，通过影刀RPA与AI Agent协作，实现政采网订单数据自动抓取，结合BI看板展示各地市市场情况，替代人工重复操作。<br>项目前后两个版本，从Agent与人配合转为Agent与RPA配合。',
      tags: ['影刀RPA', 'AI Agent', 'BI看板', '数据处理', 'Postman', '数据库'],
      img: 'assets/images/BI-6.jpg',
      link: 'pages/portfolio/portfolio3.html',
    },
    {
      title: '基于影刀RPA+AI Agent的自动化标讯数据处理',
      desc: '设计目标：<br>1-每日自动从指定标讯网站中，获取招标公告信息，结合内部业务方案进行匹配，进行项目信息卡片推送；<br>2-每日自动从指定标讯网站中，获取中标公告，并归档各项目的用户信息与参与公司信息，形成历史外部市场参与地图。',
      tags: ['影刀RPA', 'AI Agent', '自动化', '数据处理'],
      img: 'assets/images/RPA-1.jpg',
      link: 'pages/portfolio/portfolio1.html',
    },
    {
      title: '基于YOLO图像识别+AI Agent的猫咪活动识别',
      desc: '设计目标：<br>通过YOLO算法识别猫咪，并进行抓拍，再生成猫咪活动事件推送或一天总结。',
      tags: ['YOLO', '图像识别', 'AI Agent', '猫咪识别'],
      img: 'assets/images/YOLO-1.jpg',
      link: 'pages/portfolio/portfolio2.html',
    },
  ];

  const TIMELINE_EVENTS = [
    {
      date: '2024-04 至今',
      title: '杭州海康威视 - 解决方案经理',
      desc: '负责广东省EBG行业省级解决方案相关工作：头部客用户业务支持、招投标工作、项目落地沟通、AI业务设计。主导头部重点教育、医疗、文旅、建筑等用户重点项目共36个，金额4700W；25年全省达成600W（20%增长）；主导参与广东省集采项目13个，入围中标12个。',
      detail: '工作内容：\n1、头部客用户业务支持：负责全省各地市行业重点客用户的业务交流支持，涵盖产品技术交流，行业方案宣讲，产品功能演示培训，客户技术部门培训，方案设计与推进验证；\n2、招投标工作：独立完成集采框采，财政采购，自有资金建设等类型项目的投标工作，配合客户输出技术方案，业务架构说明等技术材料；配合销售完成参数导入；\n3、项目落地沟通：输出方案详细说明，系统设计架构，组件部署说明，实现功能清单说明等材料，协助项目经理与交付同事完成项目落地；同时与软硬件研发保持沟通，梳理现场用户需求与场景匹配缺陷，促进产品及方案迭代优化；\n4、AI业务设计：承接部门内从0到1搭建AI-Agent的工作，通过对日常运营工作进行流程拆分、知识库搭建、业务流程设计等环节，提升运营效率；主导业务中心AI智能工具架构逻辑设计与业务部门需求调研，通过对内外部数据的结构化与关联逻辑设计等，为销售提供客户全景画像与行动建议的智能分析工具。\n\n工作成绩：\n主导头部重点教育，医疗，文旅，建筑等用户的物联网、信息化、安防智能化等重点项目共36个，金额4700W；\n25年全年主要推进教育重点高教教学业务，全省达成600W（20%增长）；\n重点产品促成生态客户合作对接3家，关联出货130W；\n全省各区域重点/高潜客户业务推广交流60余家，1-10阶段业务达成落地18家；\n25年全年主导参与广东省集采项目13个，入围中标12个；\n主导完成重大项目股份公司直投两个，深度参与各地市重点项目及新业务招投标项目50+；\n25年共推进复杂项目落地4个，新业务项目落地15个，输出业务交付说明文档8篇，快捷业务工具（业务布设示意图，资源速算表等）5个',
    },
    {
      date: '2021-01 至 2024-04',
      title: '杭州海康威视 - 技术交付经理',
      desc: '领导企事业交付12+4人团队完成广州区域企事业项目交付，涵盖项目标前评审、方案可行性评审、交付方案设计、进度跟踪、风险把控、资源协调。平均年支撑复杂业务/200W+级项目28个；实现3个方向业务专项专家培养；外包团队培养时长缩短50%。',
      detail: '工作内容：\n1、项目管理：领导企事业交付12+4人团队完成广州区域企事业项目交付，涵盖项目标前评审，方案可行性评审，交付方案设计，进度跟踪，风险把控，资源协调等内容；\n2、人才梯队建设：根据业务计划，制定人才培养计划，及时完成能力业务匹配；从0-1制定全省外包团队工作支撑机制，内外联动支撑制度；\n3、业务支撑：创新支撑体系，成立专项业务支撑组，在招投标，新品演示，新业务测试，外部合作对接，远程支持工作上，提升支撑工作效率；\n4、重点难点项目交付支持：对复杂业务及复杂场景项目专项支撑，完成整体业务逻辑梳理，业务功能实现路径设计，数据流逻辑梳理，数据对接工具部署与数据清洗，业务平台升级迁移支持，新兴业务-AI工程化落地支持等；\n5、工具应用：对组内成员日常工作应用的工具需求进行整理，收集学习各类技术知识，输出sql，脚本等，编写各类问题处置/工具使用指引，提升整体问题处置效率。\n\n工作成绩：\n平均年支撑复杂业务/200W+级项目28个；\n内部实现3个方向业务专项专家培养，及时应对新业务交付需求，同时全员通过综合交付能力较强的高级工程师考核；\n外包团队实现快速培养，较外包业务引入初期，培养时长缩短50%，1个月内能完成基础项目交付工作；\n远程工作台流转机制提升问题平均解决时长3h。',
    },
    {
      date: '2018-07 至 2021-01',
      title: '杭州海康威视 - 交付技术支持',
      desc: '负责EBG行业项目交付与客户培训工作。',
      detail: '工作内容：负责EBG行业项目交付与客户培训工作。',
    },
  ];

  const TECH_STACK = [
    {
      category: '结构与硬件设计',
      items: [
        { name: 'Fusion 360', icon: 'fas fa-cube' },
        { name: 'SolidWorks', icon: 'fas fa-drafting-compass' },
        { name: 'LCEDA', icon: 'fas fa-pencil-ruler' },
        { name: 'KiCad', icon: 'fas fa-layer-group' },
      ],
    },
    {
      category: '嵌入式开发',
      items: [
        { name: 'MCU', icon: 'fas fa-microchip' },
        { name: 'SBC', icon: 'fas fa-server' },
        { name: 'RTOS', icon: 'fas fa-cogs' },
        { name: 'Keil MDK', icon: 'fas fa-screwdriver-wrench' },
        { name: 'STM32CubeMX', icon: 'fas fa-cubes' },
        { name: 'C/C++', icon: 'fas fa-code' },
        { name: 'Rust', icon: 'fab fa-rust' },
      ],
    },
    {
      category: '机器人技术',
      items: [
        { name: 'ROS/ROS2', icon: 'fas fa-robot' },
        { name: 'MuJoCo', icon: 'fas fa-cube' },
        { name: 'Isaac Gym', icon: 'fas fa-dumbbell' },
        { name: 'Isaac Sim', icon: 'fas fa-vr-cardboard' },
        { name: 'Webots', icon: 'fas fa-globe' },
      ],
    },
    {
      category: '开发工具链',
      items: [
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'CMake', icon: 'fas fa-gears' },
        { name: 'conda', icon: 'fas fa-box-open' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'GitLab CI', icon: 'fab fa-gitlab' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fab fa-bilibili', label: '哔哩哔哩', link: '' },
    { icon: 'fab fa-github', label: '代码仓库', link: '' },
    { icon: 'fab fa-twitter', label: '推特', link: '' },
    { icon: 'fab fa-zhihu', label: '知乎', link: '' },
  ];

  const FAMILY_MEMBERS = [
    {
      name: '华子',
      desc: '一位个性鲜明向往自然的有趣灵魂伴侣',
      img: 'assets/images/huazi.jpg',
    },
    {
      name: '玖仟',
      desc: '一只犟得不行的挑食美短小猫咪',
      img: 'assets/images/jiuqian.jpg',
    },
    {
      name: 'MAX',
      desc: '一只间歇性发发神经的活泼阿比',
      img: 'assets/images/max.jpg',
    },
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;

    PROJECTS.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'card project-card';
      card.innerHTML = `
        <div class="project-info">
          <h3>${project.title}</h3>
          <span class="project-role">${project.role}</span>
          <span class="project-date">${project.date}</span>
          <p>${project.desc}</p>
          <a href="${project.link}" class="project-link">查看详情</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initCertificates() {
    const grid = qs('.certificates-grid');
    if (!grid) return;

    CERTIFICATES.forEach((cert) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `
        ${cert.img ? `<div class="cert-image-wrapper"><img src="${cert.img}" alt="${cert.title}" class="cert-image"><i class="fas fa-search-plus zoom-icon"></i></div>` : ''}
        <div class="cert-header">
          <div class="cert-title">${cert.title}</div>
        </div>
        <p class="cert-desc">${cert.desc}</p>
        <span class="cert-date">${cert.date}</span>
      `;
      grid.appendChild(card);
    });
  }

  function initPortfolio() {
    const grid = qs('.portfolio-grid');
    if (!grid) return;

    PORTFOLIO_ITEMS.forEach((item) => {
      const tagsHtml = renderSpanTags(item.tags, 'os-tag');
      const linkHtml = item.link
        ? `<a href="${item.link}" class="portfolio-link">查看详情</a>`
        : '';

      const card = document.createElement('div');
      card.className = 'os-card portfolio-card';
      card.innerHTML = `
        ${item.img ? `<div class="os-image-wrapper"><img src="${item.img}" alt="${item.title}" class="os-image"></div>` : ''}
        <div class="os-header">
          <div class="os-title">${item.title}</div>
          <i class="fas fa-code-branch" style="color:var(--primary); opacity:0.5;"></i>
        </div>
        <p class="os-desc">${item.desc}</p>
        <div class="os-tags">${tagsHtml}</div>
        ${linkHtml}
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;

    TIMELINE_EVENTS.forEach((item) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';

      const detailHtml = item.detail
        ? `<div class="timeline-detail"><p>${item.detail.replace(/\n/g, '</p><p>')}</p></div>`
        : '';

      timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${item.date}</span>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>${item.title}</h3>
            ${item.detail ? '<button class="timeline-toggle"><i class="fas fa-chevron-down"></i></button>' : ''}
          </div>
          <p>${item.desc}</p>
          ${detailHtml}
        </div>
      `;

      const toggleBtn = timelineItem.querySelector('.timeline-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const detail = timelineItem.querySelector('.timeline-detail');
          const icon = toggleBtn.querySelector('i');
          timelineItem.classList.toggle('expanded');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
        });
      }

      container.appendChild(timelineItem);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;

    CONTACT_LINKS.forEach((contact) => {
      const item = document.createElement('a');
      item.className = 'intro-contact-link';
      item.href = contact.link;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.title = contact.label;
      item.setAttribute('aria-label', contact.label);
      item.innerHTML = `<i class="${contact.icon}"></i>`;
      container.appendChild(item);
    });
  }

  function initModal() {
    const modal = qs('#imageModal');
    const modalImg = qs('#modalImage');
    const closeBtn = qs('.modal-close');
    
    if (!modal || !modalImg) return;

    document.querySelectorAll('.cert-image, .os-image, .family-avatar, .detail-image, .detail-image-sm').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  }

  function initFamilyMembers() {
    const container = qs('.family-members');
    if (!container) return;

    FAMILY_MEMBERS.forEach((member) => {
      const memberEl = document.createElement('div');
      memberEl.className = 'family-member';
      memberEl.innerHTML = `
        <img src="${member.img}" alt="${member.name}" class="family-avatar">
        <div class="family-info">
          <div class="family-name">${member.name}</div>
          <div class="family-desc">${member.desc}</div>
        </div>
      `;
      container.appendChild(memberEl);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = qs(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.project-detail-card'),
      ...qsa('.projects-grid .card'),
      ...qsa('.certificates-grid .cert-card'),
      ...qsa('.portfolio-grid .os-card'),
      ...qsa('.timeline-container .timeline-item'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initSmoothScroll();
    initProjects();
    initCertificates();
    initPortfolio();
    initTimeline();
    initContactLinks();
    initFamilyMembers();
    initModal();
    initRevealMotion();
  });
})();