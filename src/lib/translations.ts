// OJOL Multi-language Support System
// Supports: English, Indonesian, Chinese

export type Language = 'en' | 'id' | 'zh';

export const translations = {
  en: {
    // Header / Navigation
    nav: {
      home: 'Home',
      vision: 'Vision',
      features: 'Features',
      community: 'Community',
      token: 'Token',
      roadmap: 'Roadmap',
    },

    // Hero Section
    hero: {
      title: 'The Future of',
      titleHighlight: 'Transportation',
      subtitle: 'AI-powered ride-hailing platform with only 7% operational fee',
      cta: 'Get Started',
      learnMore: 'Learn More',
      buyToken: 'BUY OJOL',
      marketDrivers: '4 Million Drivers',
      marketUsers: '88.3 Million Users',
      marketOpportunity: 'An opportunity to build a new, fairer, and more efficient ecosystem that benefits both users and drivers',
      satisfaction: '98%',
      satisfactionLabel: 'Satisfaction',
      rating: '4.9',
      ratingLabel: 'Rating',
    },

    // Vision Section
    vision: {
      title: 'Our Vision',
      subtitle: 'Revolutionizing transportation through technology',
      description: 'OJOL is building the next generation of ride-hailing services powered by artificial intelligence and blockchain technology. We believe in creating a fair, transparent, and efficient ecosystem for both drivers and riders.',
      points: [
        {
          title: 'Fair Earnings',
          description: 'Only 7% fee means more income for drivers',
        },
        {
          title: 'AI-Powered',
          description: 'Smart matching and optimized routes',
        },
        {
          title: 'Transparent',
          description: 'Blockchain-based transactions and rewards',
        },
      ],
    },

    // Features Section
    features: {
      title: 'Powerful Features',
      subtitle: 'Built for the modern era',
      items: [
        {
          title: 'AI Dispatch System',
          description: 'Intelligent matching algorithms that connect riders with the nearest available drivers instantly',
          icon: 'Zap',
        },
        {
          title: 'Low Fees',
          description: 'Industry-leading 7% operational fee, ensuring fair earnings for drivers',
          icon: 'TrendingDown',
        },
        {
          title: 'Real-Time Tracking',
          description: 'Live GPS tracking with accurate ETAs and route optimization',
          icon: 'MapPin',
        },
        {
          title: 'Secure Payments',
          description: 'Multiple payment options with blockchain-based security',
          icon: 'Shield',
        },
        {
          title: 'Driver Rewards',
          description: 'Token-based reward system for loyal drivers',
          icon: 'Award',
        },
        {
          title: '24/7 Support',
          description: 'Round-the-clock customer and driver support',
          icon: 'Headphones',
        },
      ],
    },

    // Community Section
    community: {
      title: 'Driver Community',
      subtitle: 'Built by drivers, for drivers',
      description: 'Join thousands of drivers who have already switched to OJOL. Our community-focused approach ensures that drivers are treated as partners, not just workers.',
      stats: [
        { value: '4M', label: 'Market Drivers' },
        { value: '88.3M', label: 'Market Users' },
      ],
      cta: 'Join Our Community',
    },

    // Token Section
    token: {
      title: 'OJOL Token',
      subtitle: 'Rewards that matter',
      description: 'The OJOL token powers our ecosystem, providing rewards, discounts, and governance rights to community members.',
      utilities: [
        {
          title: 'Driver Rewards',
          description: 'Earn tokens for every completed ride',
        },
        {
          title: 'Ride Discounts',
          description: 'Use tokens to get discounts on rides',
        },
        {
          title: 'Governance',
          description: 'Vote on platform decisions',
        },
        {
          title: 'Staking',
          description: 'Stake tokens to earn passive income',
        },
      ],
    },

    // Services Section
    services: {
      title: 'One Platform, Many Services',
      subtitle: 'OJOL provides a complete mobility and delivery ecosystem, powered by AI and rewarded with tokens',
      items: [
        {
          title: 'Online Ojek',
          description: 'On-demand motorcycle and car ojek service with AI matching for fast and reliable pickups',
          icon: 'Bike',
        },
        {
          title: 'Food Delivery',
          description: 'Food and drink delivery from local restaurants, integrated into the OJOL ecosystem',
          icon: 'Utensils',
        },
        {
          title: 'Package Delivery',
          description: 'Fast package delivery for individuals and small businesses across the city',
          icon: 'Box',
        },
        {
          title: 'Reward System',
          description: 'Drivers and users earn token-based rewards for activities, ratings, and loyalty — automatically',
          icon: 'Gift',
        },
        {
          title: 'OJOL Coin Utility',
          description: 'OJOL Coin powers platform access, priority matching, staking, and governance. A utility-based token',
          icon: 'Coins',
        },
      ],
    },

    // App Structure Section
    app: {
      title: 'Dual-Platform Ecosystem',
      subtitle: 'Two apps, one seamless experience',
      rider: {
        title: 'For Riders',
        description: 'Book rides instantly, track your driver, and pay securely with multiple options',
        features: ['Instant Booking', 'Live Tracking', 'Multiple Payments', 'Ride History'],
      },
      driver: {
        title: 'For Drivers',
        description: 'Flexible schedules, fair earnings, and transparent reward system',
        features: ['Flexible Hours', 'Fair Earnings', 'Instant Payouts', 'Performance Rewards'],
      },
    },

    // How It Works Section
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple, Fair, and Powerful',
      steps: [
        {
          number: '01',
          title: 'Driver Registration',
          description: 'Sign up and complete verification in just a few minutes',
          icon: 'UserPlus',
        },
        {
          number: '02',
          title: 'Get Your Tokens',
          description: 'Purchase OJOL tokens stored in the app to activate network access and unlock priority matching',
          icon: 'Wallet',
        },
        {
          number: '03',
          title: 'AI Trip Matching',
          description: 'AI dispatch directs the best trip requests to the nearest driver, ensuring fairness for everyone',
          icon: 'Sparkles',
        },
        {
          number: '04',
          title: 'Fair Earnings',
          description: 'Keep 93% of every fare. Only 7% operational fee — completely transparent',
          icon: 'TrendingUp',
        },
        {
          number: '05',
          title: 'Earn Bonus Tokens',
          description: 'High ratings, activity, and loyalty automatically trigger bonus token rewards',
          icon: 'Star',
        },
      ],
    },

    // Roadmap Section
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Building the future, step by step',
      phases: [
        {
          quarter: 'Phase 1: Q1-Q2 2026',
          status: 'in-progress',
          items: [
            'Website launch & vision reveal',
            'Token launch',
            'Community building',
            'Strategic partnerships',
            'Expert team formation',
          ],
        },
        {
          quarter: 'Phase 2: Q3 2026',
          status: 'upcoming',
          items: [
            'App development & testing',
            'AI system integration',
            'Security compliance',
            'Beta launch',
          ],
        },
        {
          quarter: 'Phase 3: Q4 2026 - Q1 2027',
          status: 'upcoming',
          items: [
            'Official platform launch',
            'Driver & rider apps available',
            'Full operations',
            'Market expansion',
          ],
        },
        {
          quarter: 'Phase 4: Q2-Q3 2027',
          status: 'upcoming',
          items: [
            'Regional expansion',
            'Additional services',
            'Ecosystem growth',
          ],
        },
      ],
    },

    // Trust Section
    trust: {
      title: 'Why Trust OJOL?',
      description: 'Built on transparency, security, and community',
      points: [
        {
          title: 'Transparent Fees',
          description: 'Clear fee structure with no hidden charges',
        },
        {
          title: 'Secure Platform',
          description: 'Enterprise-grade security for all transactions',
        },
        {
          title: 'Community-Driven',
          description: 'Decisions shaped by valuable input, suggestions, and innovative ideas from our community',
        },
        {
          title: 'Beneficial for Everyone',
          description: 'Token holders, drivers, and users all share in the ecosystem\'s success through fair rewards and transparent value distribution',
        },
      ],
    },

    // Footer
    footer: {
      description: 'The future of transportation is here. Join the revolution.',
      links: {
        product: 'Product',
        company: 'Company',
        legal: 'Legal',
        connect: 'Connect',
      },
      productLinks: ['Features', 'Pricing', 'FAQ', 'Updates'],
      companyLinks: ['About', 'Careers', 'Press', 'Blog'],
      legalLinks: ['Privacy', 'Terms', 'Security', 'Cookies'],
      rights: 'All rights reserved.',
    },
  },

  id: {
    // Header / Navigation
    nav: {
      home: 'Beranda',
      vision: 'Visi',
      features: 'Fitur',
      community: 'Komunitas',
      token: 'Token',
      roadmap: 'Peta Jalan',
    },

    // Hero Section
    hero: {
      title: 'Masa Depan',
      titleHighlight: 'Transportasi',
      subtitle: 'Platform ojek online berbasis AI dengan biaya operasional hanya 7%',
      cta: 'Mulai Sekarang',
      learnMore: 'Pelajari Lebih Lanjut',
      buyToken: 'BELI OJOL SEKARANG',
      marketDrivers: '4 Juta Pengemudi',
      marketUsers: '88,3 Juta Pengguna',
      marketOpportunity: 'Kesempatan untuk membangun ekosistem baru yang lebih adil, efisien, dan ramah bagi pengguna maupun pengemudi',
      satisfaction: '98%',
      satisfactionLabel: 'Kepuasan',
      rating: '4.9',
      ratingLabel: 'Rating',
    },

    // Vision Section
    vision: {
      title: 'Visi Kami',
      subtitle: 'Revolusi transportasi melalui teknologi',
      description: 'OJOL membangun generasi baru layanan ojek online yang didukung oleh kecerdasan buatan dan teknologi blockchain. Kami percaya dalam menciptakan ekosistem yang adil, transparan, dan efisien untuk pengemudi dan penumpang.',
      points: [
        {
          title: 'Penghasilan Adil',
          description: 'Biaya hanya 7% berarti penghasilan lebih banyak untuk pengemudi',
        },
        {
          title: 'Berbasis AI',
          description: 'Pencocokan cerdas dan rute yang dioptimalkan',
        },
        {
          title: 'Transparan',
          description: 'Transaksi dan reward berbasis blockchain',
        },
      ],
    },

    // Features Section
    features: {
      title: 'Fitur Unggulan',
      subtitle: 'Dibuat untuk era modern',
      items: [
        {
          title: 'Sistem Dispatch AI',
          description: 'Algoritma pencocokan cerdas yang menghubungkan penumpang dengan pengemudi terdekat secara instan',
          icon: 'Zap',
        },
        {
          title: 'Biaya Rendah',
          description: 'Biaya operasional 7% terendah di industri, memastikan penghasilan adil untuk pengemudi',
          icon: 'TrendingDown',
        },
        {
          title: 'Pelacakan Real-Time',
          description: 'Pelacakan GPS langsung dengan ETA akurat dan optimasi rute',
          icon: 'MapPin',
        },
        {
          title: 'Pembayaran Aman',
          description: 'Opsi pembayaran beragam dengan keamanan berbasis blockchain',
          icon: 'Shield',
        },
        {
          title: 'Reward Pengemudi',
          description: 'Sistem reward berbasis token untuk pengemudi setia',
          icon: 'Award',
        },
        {
          title: 'Dukungan 24/7',
          description: 'Dukungan pelanggan dan pengemudi sepanjang waktu',
          icon: 'Headphones',
        },
      ],
    },

    // Community Section
    community: {
      title: 'Komunitas Pengemudi',
      subtitle: 'Dibangun oleh pengemudi, untuk pengemudi',
      description: 'Bergabunglah dengan ribuan pengemudi yang telah beralih ke OJOL. Pendekatan berfokus komunitas kami memastikan pengemudi diperlakukan sebagai mitra, bukan hanya pekerja.',
      stats: [
        { value: '4 Jt', label: 'Pasar Pengemudi' },
        { value: '88,3 Jt', label: 'Pasar Pengguna' },
      ],
      cta: 'Bergabung dengan Komunitas Kami',
    },

    // Token Section
    token: {
      title: 'Token OJOL',
      subtitle: 'Reward yang berarti',
      description: 'Token OJOL menggerakkan ekosistem kami, memberikan reward, diskon, dan hak tata kelola kepada anggota komunitas.',
      utilities: [
        {
          title: 'Reward Pengemudi',
          description: 'Dapatkan token untuk setiap perjalanan yang selesai',
        },
        {
          title: 'Diskon Perjalanan',
          description: 'Gunakan token untuk mendapatkan diskon perjalanan',
        },
        {
          title: 'Tata Kelola',
          description: 'Berdasarkan keputusan platform',
        },
        {
          title: 'Staking',
          description: 'Stake token untuk mendapatkan penghasilan pasif',
        },
      ],
    },

    // Services Section
    services: {
      title: 'Satu Platform, Banyak Layanan',
      subtitle: 'OJOL menyediakan ekosistem mobilitas dan pengiriman yang lengkap, didukung AI dan dihargai dengan token',
      items: [
        {
          title: 'Ojek Online',
          description: 'Layanan ojek motor dan mobil on-demand dengan pencocokan AI untuk penjemputan yang cepat dan andal',
          icon: 'Bike',
        },
        {
          title: 'Pesan Antar Makanan',
          description: 'Layanan antar makanan dan minuman dari restoran lokal, terintegrasi dalam ekosistem OJOL',
          icon: 'Utensils',
        },
        {
          title: 'Pengiriman Barang',
          description: 'Pengiriman paket dan barang cepat untuk individu dan bisnis kecil di seluruh kota',
          icon: 'Box',
        },
        {
          title: 'Sistem Reward',
          description: 'Pengemudi dan pengguna mendapatkan reward berbasis token untuk aktivitas, rating, dan loyalitas — secara otomatis',
          icon: 'Gift',
        },
        {
          title: 'Utilitas OJOL Coin',
          description: 'OJOL Coin menggerakkan akses platform, priority matching, staking, dan tata kelola. Token berbasis utilitas',
          icon: 'Coins',
        },
      ],
    },

    // App Structure Section
    app: {
      title: 'Ekosistem Dua Platform',
      subtitle: 'Dua aplikasi, satu pengalaman yang mulus',
      rider: {
        title: 'Untuk Penumpang',
        description: 'Pesan perjalanan secara instan, lacak pengemudi Anda, dan bayar dengan aman dengan berbagai opsi',
        features: ['Pemesanan Instan', 'Pelacakan Langsung', 'Pembayaran Beragam', 'Riwayat Perjalanan'],
      },
      driver: {
        title: 'Untuk Pengemudi',
        description: 'Jadwal fleksibel, penghasilan adil, dan sistem reward yang transparan',
        features: ['Jam Fleksibel', 'Penghasilan Adil', 'Pembayaran Instan', 'Reward Kinerja'],
      },
    },

    // How It Works Section
    howItWorks: {
      title: 'Cara Kerja',
      subtitle: 'Sederhana, Adil dan Kuat',
      steps: [
        {
          number: '01',
          title: 'Pengemudi Mendaftar',
          description: 'Daftar dan selesaikan verifikasi dalam hitungan menit',
          icon: 'UserPlus',
        },
        {
          number: '02',
          title: 'Dapatkan Token',
          description: 'Beli dan simpan token OJOL di Aplikasi untuk mengaktifkan akses jaringan dan membuka priority matching',
          icon: 'Wallet',
        },
        {
          number: '03',
          title: 'AI Mencocokkan Perjalanan',
          description: 'AI dispatch mengarahkan permintaan perjalanan terbaik ke pengemudi terdekat dan adil untuk semua driver',
          icon: 'Sparkles',
        },
        {
          number: '04',
          title: 'Penghasilan Adil',
          description: 'Simpan 93% dari setiap tarif. Hanya 7% biaya operasional — sepenuhnya transparan',
          icon: 'TrendingUp',
        },
        {
          number: '05',
          title: 'Dapatkan Token Bonus',
          description: 'Rating tinggi, aktivitas, dan loyalitas secara otomatis memicu reward token bonus',
          icon: 'Star',
        },
      ],
    },

    // Roadmap Section
    roadmap: {
      title: 'Peta Jalan',
      subtitle: 'Membangun masa depan, langkah demi langkah',
      phases: [
        {
          quarter: 'Fase 1: Q1-Q2 2026',
          status: 'in-progress',
          items: [
            'Peluncuran website & visi',
            'Peluncuran token',
            'Pembangunan komunitas',
            'Kemitraan strategis',
            'Pembentukan tim ahli',
          ],
        },
        {
          quarter: 'Fase 2: Q3 2026',
          status: 'upcoming',
          items: [
            'Pengembangan & pengujian aplikasi',
            'Integrasi sistem AI',
            'Kepatuhan keamanan',
            'Peluncuran beta',
          ],
        },
        {
          quarter: 'Fase 3: Q4 2026 - Q1 2027',
          status: 'upcoming',
          items: [
            'Peluncuran platform resmi',
            'Aplikasi pengemudi & penumpang',
            'Operasi penuh',
            'Ekspansi pasar',
          ],
        },
        {
          quarter: 'Fase 4: Q2-Q3 2027',
          status: 'upcoming',
          items: [
            'Ekspansi regional',
            'Layanan tambahan',
            'Pertumbuhan ekosistem',
          ],
        },
      ],
    },

    // Trust Section
    trust: {
      title: 'Mengapa Memilih OJOL?',
      description: 'Dibangun atas transparansi, keamanan, dan komunitas',
      points: [
        {
          title: 'Biaya Transparan',
          description: 'Struktur biaya yang jelas tanpa biaya tersembunyi',
        },
        {
          title: 'Platform Aman',
          description: 'Keamanan kelas enterprise untuk semua transaksi',
        },
        {
          title: 'Berbasis Komunitas',
          description: 'Keputusan dibentuk oleh masukan, saran, dan ide inovatif dari komunitas kami',
        },
        {
          title: 'Menguntungkan bagi semua pihak',
          description: 'Pemegang token, driver, dan pengguna semuanya berbagi kesuksesan ekosistem melalui reward yang adil dan distribusi nilai yang transparan',
        },
      ],
    },

    // Footer
    footer: {
      description: 'Masa depan transportasi sudah tiba. Bergabunglah dengan revolusi.',
      links: {
        product: 'Produk',
        company: 'Perusahaan',
        legal: 'Legal',
        connect: 'Hubungi',
      },
      productLinks: ['Fitur', 'Harga', 'FAQ', 'Pembaruan'],
      companyLinks: ['Tentang', 'Karir', 'Pers', 'Blog'],
      legalLinks: ['Privasi', 'Syarat', 'Keamanan', 'Cookies'],
      rights: 'Semua hak dilindungi.',
    },
  },

  zh: {
    // Header / Navigation
    nav: {
      home: '首页',
      vision: '愿景',
      features: '功能',
      community: '社区',
      token: '代币',
      roadmap: '路线图',
    },

    // Hero Section
    hero: {
      title: '交通的',
      titleHighlight: '未来',
      subtitle: '基于AI的打车平台，运营费用仅7%',
      cta: '立即开始',
      learnMore: '了解更多',
      buyToken: '立即购买 OJOL',
      marketDrivers: '400万司机',
      marketUsers: '8830万用户',
      marketOpportunity: '构建一个更公平、更高效、对用户和司机都友好的新生态系统的机会',
      satisfaction: '98%',
      satisfactionLabel: '满意度',
      rating: '4.9',
      ratingLabel: '评分',
    },

    // Vision Section
    vision: {
      title: '我们的愿景',
      subtitle: '通过技术革新交通',
      description: 'OJOL正在构建由人工智能和区块链技术驱动的新一代打车服务。我们相信为司机和乘客创造一个公平、透明、高效的生态系统。',
      points: [
        {
          title: '公平收入',
          description: '仅7%的费用意味着司机获得更多收入',
        },
        {
          title: 'AI驱动',
          description: '智能匹配和优化路线',
        },
        {
          title: '透明',
          description: '基于区块链的交易和奖励',
        },
      ],
    },

    // Features Section
    features: {
      title: '强大功能',
      subtitle: '为现代时代打造',
      items: [
        {
          title: 'AI调度系统',
          description: '智能匹配算法，即时连接乘客与最近的可用司机',
          icon: 'Zap',
        },
        {
          title: '低费用',
          description: '行业领先的7%运营费用，确保司机的公平收入',
          icon: 'TrendingDown',
        },
        {
          title: '实时跟踪',
          description: '实时GPS跟踪，提供准确的预计到达时间和路线优化',
          icon: 'MapPin',
        },
        {
          title: '安全支付',
          description: '多种支付方式，基于区块链的安全保障',
          icon: 'Shield',
        },
        {
          title: '司机奖励',
          description: '基于代币的奖励系统，回馈忠诚司机',
          icon: 'Award',
        },
        {
          title: '24/7支持',
          description: '全天候客户和司机支持',
          icon: 'Headphones',
        },
      ],
    },

    // Community Section
    community: {
      title: '司机社区',
      subtitle: '由司机构建，为司机服务',
      description: '加入数千名已经转投OJOL的司机。我们的社区导向方法确保司机被视为合作伙伴，而不仅仅是工人。',
      stats: [
        { value: '400万', label: '市场司机' },
        { value: '8830万', label: '市场用户' },
      ],
      cta: '加入我们的社区',
    },

    // Token Section
    token: {
      title: 'OJOL代币',
      subtitle: '有意义的奖励',
      description: 'OJOL代币驱动我们的生态系统，为社区成员提供奖励、折扣和治理权。',
      utilities: [
        {
          title: '司机奖励',
          description: '每完成一次行程即可获得代币',
        },
        {
          title: '行程折扣',
          description: '使用代币获得行程折扣',
        },
        {
          title: '治理',
          description: '对平台决策进行投票',
        },
        {
          title: '质押',
          description: '质押代币获得被动收入',
        },
      ],
    },

    // Services Section
    services: {
      title: '一个平台，多种服务',
      subtitle: 'OJOL提供完整的出行和配送生态系统，由AI驱动并以代币奖励',
      items: [
        {
          title: '在线网约车',
          description: '基于AI匹配的摩托车和汽车按需服务，实现快速可靠的接单',
          icon: 'Bike',
        },
        {
          title: '食品外卖',
          description: '来自当地餐厅的食品和饮料配送，集成到OJOL生态系统中',
          icon: 'Utensils',
        },
        {
          title: '包裹配送',
          description: '为个人和小型企业提供全市范围内的快速包裹配送服务',
          icon: 'Box',
        },
        {
          title: '奖励系统',
          description: '司机和用户因活动、评分和忠诚度而获得基于代币的奖励 — 自动化',
          icon: 'Gift',
        },
        {
          title: 'OJOL代币实用性',
          description: 'OJOL代币驱动平台访问、优先匹配、质押和治理。基于实用性的代币',
          icon: 'Coins',
        },
      ],
    },

    // App Structure Section
    app: {
      title: '双平台生态系统',
      subtitle: '两个应用，无缝体验',
      rider: {
        title: '乘客端',
        description: '即时预订行程，跟踪司机，并通过多种方式安全支付',
        features: ['即时预订', '实时跟踪', '多种支付', '行程历史'],
      },
      driver: {
        title: '司机端',
        description: '灵活的时间，公平的收入，透明的奖励系统',
        features: ['灵活时间', '公平收入', '即时提现', '绩效奖励'],
      },
    },

    // How It Works Section
    howItWorks: {
      title: '如何运作',
      subtitle: '简单、公平且强大',
      steps: [
        {
          number: '01',
          title: '司机注册',
          description: '注册并在几分钟内完成验证',
          icon: 'UserPlus',
        },
        {
          number: '02',
          title: '获取代币',
          description: '购买并存储OJOL代币在应用中，激活网络访问并解锁优先匹配',
          icon: 'Wallet',
        },
        {
          number: '03',
          title: 'AI行程匹配',
          description: 'AI调度系统将最佳行程请求引导到最近的司机，确保对所有人公平',
          icon: 'Sparkles',
        },
        {
          number: '04',
          title: '公平收入',
          description: '保留每笔车费的93%。仅7%运营费用 — 完全透明',
          icon: 'TrendingUp',
        },
        {
          number: '05',
          title: '获得奖励代币',
          description: '高评分、活跃度和忠诚度自动触发奖励代币',
          icon: 'Star',
        },
      ],
    },

    // Roadmap Section
    roadmap: {
      title: '路线图',
      subtitle: '一步步构建未来',
      phases: [
        {
          quarter: '第一阶段: 2026年Q1-Q2',
          status: 'in-progress',
          items: [
            '网站发布与愿景展示',
            '代币发布',
            '社区建设',
            '战略合作伙伴关系',
            '组建专业团队',
          ],
        },
        {
          quarter: '第二阶段: 2026年Q3',
          status: 'upcoming',
          items: [
            '应用开发与测试',
            'AI系统集成',
            '安全合规',
            '测试版发布',
          ],
        },
        {
          quarter: '第三阶段: 2026年Q4 - 2027年Q1',
          status: 'upcoming',
          items: [
            '正式平台发布',
            '司机与乘客应用上线',
            '全面运营',
            '市场扩展',
          ],
        },
        {
          quarter: '第四阶段: 2027年Q2-Q3',
          status: 'upcoming',
          items: [
            '区域扩展',
            '附加服务',
            '生态系统增长',
          ],
        },
      ],
    },

    // Trust Section
    trust: {
      title: '为什么选择OJOL？',
      description: '建立在透明、安全和社区基础上',
      points: [
        {
          title: '费用透明',
          description: '清晰的费用结构，无隐形收费',
        },
        {
          title: '安全平台',
          description: '企业级安全保障所有交易',
        },
        {
          title: '社区驱动',
          description: '基于社区的有价值建议和创意想法做出决策，让社区成为我们的核心驱动力',
        },
        {
          title: '惠及各方',
          description: '代币持有者、司机和用户通过公平的奖励和透明的价值分配，共同分享生态系统的成功',
        },
      ],
    },

    // Footer
    footer: {
      description: '交通的未来已经到来。加入这场革命。',
      links: {
        product: '产品',
        company: '公司',
        legal: '法律',
        connect: '联系',
      },
      productLinks: ['功能', '价格', 'FAQ', '更新'],
      companyLinks: ['关于', '职业', '新闻', '博客'],
      legalLinks: ['隐私', '条款', '安全', 'Cookies'],
      rights: '版权所有。',
    },
  },
} as const;

// Helper function to get translations for a specific language
export function getTranslations(lang: Language = 'en') {
  return translations[lang];
}

// Language names for the switcher
export const languageNames: Record<Language, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  zh: '中文',
};
