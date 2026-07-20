export const defaultLocale = 'en';

export const locales = ['en', 'zh-hans', 'zh-hant', 'ko', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
	en: 'EN',
	'zh-hans': '简中',
	'zh-hant': '繁中',
	ko: '한국어',
	ja: '日本語',
};

export const localeAliases: Record<string, Locale> = {
	zh: 'zh-hans',
	cn: 'zh-hans',
	'zh-cn': 'zh-hans',
	'zh-hans': 'zh-hans',
	tw: 'zh-hant',
	'zh-tw': 'zh-hant',
	'zh-hant': 'zh-hant',
	en: 'en',
	ko: 'ko',
	kr: 'ko',
	ja: 'ja',
	jp: 'ja',
};

export function normalizeLocale(value: string | null | undefined): Locale | null {
	if (!value) return null;
	const normalized = value.toLowerCase();
	return localeAliases[normalized] ?? (locales.includes(value as Locale) ? (value as Locale) : null);
}

export function getLocalePath(locale: Locale): string {
	if (locale === defaultLocale) return '/';
	return `/${locale}/`;
}

const baseProducts = [
	{ image: '/products/printer-pcba-black.jpg', shot: 'shot-ecosystem' },
	{ image: '/products/label-printer-white.jpg', shot: 'shot-printer' },
	{ image: '/products/paper-roll-kit.jpg', shot: 'shot-pcba' },
	{ image: '/products/printer-pcba-green.jpg', shot: 'shot-test' },
	{ image: '/products/firmware-wireless-validation.jpg', shot: 'shot-pcba' },
	{ image: '/products/app-custom.jpg', shot: 'shot-app' },
	{ image: '/products/desktop-app.jpg', shot: 'shot-desktop' },
];

const zhHans = {
	lang: 'zh-Hans',
	dir: 'ltr',
	meta: {
		title: '启枢科技 | 热敏打印产品全链路开发',
		description: '启枢科技提供热敏打印产品全链路开发服务，覆盖硬件设计、PCBA、固件、App、SDK、桌面软件与量产协作。',
	},
	aria: {
		mainNav: '主导航',
		brand: '启枢科技首页',
		sections: '页面区段',
		theme: '主题切换',
		language: '语言切换',
		terminal: '启枢科技产品状态面板',
		signal: '首页信号强度',
		heroProduct: '启枢科技热敏打印硬件、电路板、应用程序与桌面软件的霓虹产品生态图',
		gallery: '产品展示长廊',
		moduleTabs: '方案能力',
		moduleFlow: '合作输入、处理与输出',
		modulePreview: '服务模块预览',
		planSwitch: '方案切换',
		needType: '需求类型',
	},
	nav: [
		['优势', '#trust'],
		['能力', '#features'],
		['流程', '#workflow'],
		['方案', '#product'],
		['合作', '#pricing'],
		['文档', '/zh-hans/docs/'],
		['联系', '#contact'],
	],
	theme: { system: '系统', light: '亮色', dark: '暗色', current: '当前主题：{{theme}}，点击切换' },
	header: { cta: '启动合作' },
	hero: {
		eyebrow: '热敏打印产品 / 全链路开发',
		title: '从产品定义到量产导入，协同软硬件落地',
		copy: '启枢科技为品牌和渠道团队提供热敏打印产品开发服务，覆盖产品定义、结构与开模、PCBA、固件、驱动、App、SDK、桌面软件和量产导入。',
		primary: '查看服务范围',
		secondary: '提交产品需求',
		note: '打印设备 / 固件调试 / 应用软件 / SDK',
		console: '启枢科技://打印产品方案',
		stats: [
			['硬件', '结构 / 开模 / PCBA'],
			['固件', '通信 / 指令 / 调试'],
			['软件', 'App / 驱动 / SDK'],
		],
		signals: [
			['蓝牙/WiFi', '可接', '90%'],
			['多端软件', '可做', '86%'],
			['量产协作', '可落', '82%'],
		],
		productLegend: '硬件设计 / 固件调试 / 应用软件 / SDK',
	},
	trust: [
		['01 / 产品定义', '梳理机型、纸宽、连接方式、耗材、使用场景与目标成本。'],
		['02 / 硬件落地', '协同外观结构、开模、PCBA、整机装配与样机调试。'],
		['03 / 软件接入', '同步规划 App、驱动、SDK、桌面端和业务系统对接。'],
		['04 / 量产协作', '围绕物料、测试、版本、生产导入和交付节奏推进。'],
	],
	features: {
		title: '从设备硬件到应用软件，一起规划交付。',
		copy: '当一个打印产品需要同时处理结构、主控、连接、打印指令、App 和量产问题时，启枢科技可以把这些环节放在同一条开发路线里推进。',
		cards: [
			{
				icon: '',
				title: '硬件与结构设计',
				copy: '从产品外观、内部堆叠、纸路、按键、指示灯到模具和材料选择，先把设备做成可测试、可装配、可量产的形态。',
				items: ['产品结构与开模协作', 'PCBA 方案与整机调试', '标签、小票与多尺寸机型规划'],
			},
			{
				icon: 'diamond',
				title: '固件与连接调试',
				copy: '处理打印指令、蓝牙、WiFi、离线条码、纸张识别、设备状态和异常回报，让硬件进入真实使用流程。',
				items: ['固件开发与联调', '连接、指令与打印控制', '设备状态与耗材逻辑'],
			},
			{
				icon: 'ring',
				title: '软件与开发者接入',
				copy: '提供 App、桌面驱动、SDK、API 对接与定制界面，让终端用户和第三方系统都能稳定使用设备。',
				items: ['iOS / Android / Windows / macOS', 'SDK 与应用对接支持', '定制 App 与多语言界面'],
			},
		],
	},
	gallery: {
		title: '产品形态与方案展示',
		copy: '围绕热敏打印设备，展示整机、主控板、固件调试、App 定制和跨端软件等不同交付形态。',
		hint: '慢速展示 / 悬停暂停 / 可拖拽查看',
		products: [
			['整机 + PCBA', '热敏打印设备与主控板', '整机、打印纸路和控制板一起规划，让方案从外观到电控都能落地。', '热敏打印设备与主控板方案'],
			['标签机', '标签打印整机方案', '面向标签打印场景，协同整机、标签输出、主控板和量产导入。', '白色标签打印机与 PCBA 方案'],
			['硬件方案', '开放纸路与控制板', '打印机构、纸卷结构和 PCBA 可按产品形态拆解，适合定制开发。', '开放纸路打印结构与控制板'],
			['样机调试', '整机外观与板卡联调', '外观样机、打印机芯、主控板与连接逻辑同步验证，减少后期返工。', '绿色热敏打印设备与 PCBA 板卡'],
			['固件验证', '指令与无线连接验证', '固件把打印指令、蓝牙/WiFi、设备状态与错误恢复接成完整闭环。', '热敏打印设备固件指令与无线连接验证'],
			['App', '多尺寸打印 App 定制', '支持半寸到 8 寸机型的模板、预览、连接、打印与多语言界面定制。', '热敏打印机 App 定制界面'],
			['桌面端', '跨端标签打印软件', '覆盖 iOS、Android、Windows、macOS，承接批量标签和商用系统对接。', '标签打印机配套 App 和桌面端软件'],
		],
	},
	workflow: {
		title: '从需求评估到样机量产，按阶段推进。',
		copy: '无论项目还在概念阶段，还是已经有样机和已有板卡，都可以从当前状态开始拆解，逐步确认硬件、固件、软件和生产协作范围。',
		steps: [
			['START', '评估需求', '确认使用场景、机型尺寸、纸张规格、连接方式、耗材、功能和目标成本。'],
			['SCAN', '设计方案', '规划外观结构、PCBA、固件、打印控制和软件入口，明确样机开发路径。'],
			['TRY', '样机联调', '完成设备、板卡、固件、App、驱动或 SDK 的联调，让产品进入真实工作流。'],
			['ACT', '量产导入', '整理测试、物料、生产、版本和交付节奏，把方案从样机推进到出货。'],
		],
	},
	product: {
		title: '按当前产品阶段选择服务范围。',
		copy: '你可以只从硬件、固件或软件中的一个环节切入，也可以把整机、板卡、连接、应用和量产协作交给同一团队规划。',
		eyebrow: 'MODULE SELECT',
		selectTitle: '选择一条服务能力',
		online: 'ONLINE',
		foot: '启枢科技 PRODUCT CORE',
		tabs: [
			['hardware', '硬件方案'],
			['firmware', '固件调试'],
			['software', '软件接入'],
		],
		modules: {
			hardware: {
				copy: '硬件方案覆盖产品外观、结构、开模、PCBA 与整机调试，适合已有产品方向、需要做出可测样机或量产方案的团队。',
				label: 'HARDWARE STACK',
				status: '4 个硬件节点',
				flow: [['输入', '产品方向与机型需求'], ['处理', '结构、PCBA 与整机联调'], ['输出', '可测试样机与量产建议']],
				grid: [['外观结构', '机身、纸路、按键、灯号与内部堆叠。'], ['PCBA', '主控、电源、通信模块与周边接口。'], ['样机调试', '打印稳定性、纸张匹配与异常处理。'], ['量产协作', '物料、测试、版本与生产导入。']],
			},
			firmware: {
				copy: '固件调试聚焦通信、打印指令、蓝牙/WiFi、离线条码、纸张状态与错误处理，让设备进入真实使用流程。',
				label: 'FIRMWARE LOOP',
				status: '4 个固件任务',
				flow: [['输入', '样机、板卡与打印指令'], ['处理', '连接、状态与异常恢复联调'], ['输出', '稳定固件版本与测试记录']],
				grid: [['打印控制', '热敏头、走纸、切刀与撕纸流程调整。'], ['连接通信', 'Bluetooth、WiFi、USB 与配对流程。'], ['离线能力', '条码、模板、状态缓存与恢复。'], ['测试迭代', '样机调试、问题定位与版本迭代。']],
			},
			software: {
				copy: '软件接入包含 App、桌面驱动、SDK、应用对接与定制 UI，让硬件接入品牌自己的终端流程。',
				label: 'SOFTWARE LINK',
				status: '4 个软件入口',
				flow: [['输入', '设备能力与业务流程'], ['处理', 'App、驱动、SDK 与 API 对接'], ['输出', '可接入的软件入口与示例']],
				grid: [['移动 App', 'iOS、Android、模板编辑与打印预览。'], ['桌面驱动', 'Windows、macOS、批量标签与文件打印。'], ['SDK', '指令封装、示例工程与接入支持。'], ['定制流程', '多语言 UI、品牌界面与业务系统对接。']],
			},
		},
	},
	proof: {
		title: '适合这些打印产品和智能硬件场景。',
		copy: '启枢科技以热敏打印产品为核心，也承接相关智能硬件的主控、固件、App、SDK、桌面端和系统接入需求。',
		quote: '从一台设备到一套产品系统，硬件、固件、软件和生产协作需要在同一张路线图里配合。',
		cite: '启枢科技服务原则',
		cases: [
			['标签打印', '支持标签机、桌面端模板、条码/QR code、批量打印与耗材逻辑。'],
			['小票与票据', '处理热敏小票、连续纸、打印指令、驱动与商用系统对接。'],
			['智能硬件', '不只做打印机，相关硬件的主控、固件、App、桌面端、SDK/API 与系统接入都可以评估。'],
			['开发者接入', '提供 SDK、应用对接、定制 App 与多平台支持，降低集成成本。'],
		],
	},
	journey: {
		title: '合作前可以先准备这些信息。',
		copy: '需求不需要一次写成完整规格。只要说明产品阶段、目标机型、连接方式和当前卡点，就可以开始评估。',
		cards: [
			['PROJECT STAGE', '当前做到哪一步', '可以是概念、外观图、样机、已有 PCBA、已有 App，或者已经进入小批量测试。'],
			['BLOCKING POINT', '目前最需要解决什么', '例如整机结构、固件连接、打印稳定性、App/SDK 接入、成本控制或量产导入。'],
		],
	},
	pricing: {
		title: '按合作范围评估项目。',
		copy: '热敏打印产品通常需要结合机型、功能、数量、材料和对接深度评估。可以从样机导入开始，也可以按完整产品路线推进。',
		eyebrow: 'PLAN SWITCH',
		selectTitle: '选择合作方式',
		consult: '咨询此方案',
		plans: {
			starter: ['样机导入', '洽谈', '适合已有产品方向，需要先确认硬件、固件、连接和基础软件流程是否可行的团队。', ['需求拆解与机型方案', '样机、PCBA 与固件联调', 'App / SDK 接入路线图']],
			pro: ['全链路交付', '整案支持', '适合希望把产品设计、硬件、固件、软件和生产协作一起规划的品牌或渠道团队。', ['产品设计与开模协作', '固件、驱动、App、SDK', '测试、调试与量产导入']],
		},
	},
	faq: {
		title: '常见问题。',
		copy: '合作前，你可以先了解服务边界、软件定制、SDK 接入和需求评估方式。',
		items: [
			['启枢科技只做打印机吗？', '不是。热敏打印产品是目前主要展示方向，但启枢科技不只做打印机；相关智能硬件的硬件设计、PCBA、固件、App、桌面端、SDK/API、系统接入和生产协作都可以根据需求评估。'],
			['可以定制 App 或提供 SDK 吗？', '可以。可按产品需求提供 App、桌面驱动、SDK、API 对接、定制界面与多语言支持，让设备接入品牌自己的工作流。'],
			['只有概念，还没有完整规格可以聊吗？', '可以。建议先提供使用场景、目标机型、连接方式、纸张/耗材、预估数量与需要接入的系统，启枢科技可以协助整理成可评估方案。'],
		],
	},
	contact: {
		eyebrow: 'CONTACT NODE',
		title: '提交你的产品需求。',
		copy: '请描述当前产品状态：是新机型开发、固件调试、App/SDK 接入，还是希望从设计到量产一起规划。',
		emailIntro: '也可以直接写信：',
		copyEmail: '复制 hello@qishusolution.com',
		copied: '已复制',
		name: '姓名或公司',
		namePlaceholder: '例如：某某品牌产品负责人',
		email: '联系邮箱',
		emailPlaceholder: 'hello@example.com',
		need: '需求类型',
		needs: [['hardware', '硬件方案'], ['firmware', '固件调试'], ['software', 'App / SDK'], ['full', '整套方案']],
		message: '想做什么',
		messagePlaceholder: '例如：想做 4 寸蓝牙/WiFi 标签机，需要 App、SDK、离线条码和量产协助。',
		submit: '提交需求',
		missing: '请补齐姓名、邮箱和需求描述。',
		invalidEmail: '请填写有效的联系邮箱。',
		success: '已收到需求，启枢科技团队会根据内容评估回复。',
	},
	footer: {
		company: '泉州启枢科技有限公司',
		scope: '热敏打印 / PCBA / 固件 / App / SDK / 量产协作',
	},
};

const zhHant = {
	...zhHans,
	lang: 'zh-Hant',
	meta: {
		title: '启枢科技 | 熱敏打印產品全鏈路開發',
		description: '启枢科技提供熱敏打印產品全鏈路開發服務，覆蓋硬體設計、PCBA、固件、App、SDK、桌面軟體與量產協作。',
	},
	nav: [['優勢', '#trust'], ['能力', '#features'], ['流程', '#workflow'], ['方案', '#product'], ['合作', '#pricing'], ['文檔', '/zh-hant/docs/'], ['聯絡', '#contact']],
	theme: { system: '系統', light: '亮色', dark: '暗色', current: '目前主題：{{theme}}，點擊切換' },
	header: { cta: '啟動合作' },
	hero: {
		...zhHans.hero,
		eyebrow: '熱敏打印產品 / 全鏈路開發',
		title: '從產品定義到量產導入，協同軟硬體落地',
		copy: '启枢科技為品牌和渠道團隊提供熱敏打印產品開發服務，覆蓋產品定義、結構與開模、PCBA、固件、驅動、App、SDK、桌面軟體和量產導入。',
		primary: '查看服務範圍',
		secondary: '提交產品需求',
		note: '打印設備 / 固件調試 / 應用軟體 / SDK',
		console: '启枢科技://打印產品方案',
		stats: [['硬體', '結構 / 開模 / PCBA'], ['固件', '通訊 / 指令 / 調試'], ['軟體', 'App / 驅動 / SDK']],
		signals: [['藍牙/WiFi', '可接', '90%'], ['多端軟體', '可做', '86%'], ['量產協作', '可落', '82%']],
		productLegend: '硬體設計 / 固件調試 / 應用軟體 / SDK',
	},
	trust: [
		['01 / 產品定義', '梳理機型、紙寬、連接方式、耗材、使用場景與目標成本。'],
		['02 / 硬體落地', '協同外觀結構、開模、PCBA、整機裝配與樣機調試。'],
		['03 / 軟體接入', '同步規劃 App、驅動、SDK、桌面端和業務系統對接。'],
		['04 / 量產協作', '圍繞物料、測試、版本、生產導入和交付節奏推進。'],
	],
	features: {
		title: '從設備硬體到應用軟體，一起規劃交付。',
		copy: '當一個打印產品需要同時處理結構、主控、連接、打印指令、App 和量產問題時，启枢科技可以把這些環節放在同一條開發路線裡推進。',
		cards: [
			{ ...zhHans.features.cards[0], title: '硬體與結構設計', copy: '從產品外觀、內部堆疊、紙路、按鍵、指示燈到模具和材料選擇，先把設備做成可測試、可裝配、可量產的形態。', items: ['產品結構與開模協作', 'PCBA 方案與整機調試', '標籤、小票與多尺寸機型規劃'] },
			{ ...zhHans.features.cards[1], title: '固件與連接調試', copy: '處理打印指令、藍牙、WiFi、離線條碼、紙張識別、設備狀態和異常回報，讓硬體進入真實使用流程。', items: ['固件開發與聯調', '連接、指令與打印控制', '設備狀態與耗材邏輯'] },
			{ ...zhHans.features.cards[2], title: '軟體與開發者接入', copy: '提供 App、桌面驅動、SDK、API 對接與定制界面，讓終端用戶和第三方系統都能穩定使用設備。', items: ['iOS / Android / Windows / macOS', 'SDK 與應用對接支持', '定制 App 與多語言界面'] },
		],
	},
	gallery: {
		title: '產品形態與方案展示',
		copy: '圍繞熱敏打印設備，展示整機、主控板、固件調試、App 定制和跨端軟體等不同交付形態。',
		hint: '慢速展示 / 懸停暫停 / 可拖拽查看',
		products: [
			['整機 + PCBA', '熱敏打印設備與主控板', '整機、打印紙路和控制板一起規劃，讓方案從外觀到電控都能落地。', '熱敏打印設備與主控板方案'],
			['標籤機', '標籤打印整機方案', '面向標籤打印場景，協同整機、標籤輸出、主控板和量產導入。', '白色標籤打印機與 PCBA 方案'],
			['硬體方案', '開放紙路與控制板', '打印機構、紙卷結構和 PCBA 可按產品形態拆解，適合定制開發。', '開放紙路打印結構與控制板'],
			['樣機調試', '整機外觀與板卡聯調', '外觀樣機、打印機芯、主控板與連接邏輯同步驗證，減少後期返工。', '綠色熱敏打印設備與 PCBA 板卡'],
			['固件驗證', '指令與無線連接驗證', '固件把打印指令、藍牙/WiFi、設備狀態與錯誤恢復接成完整閉環。', '熱敏打印設備固件指令與無線連接驗證'],
			['App', '多尺寸打印 App 定制', '支持半寸到 8 寸機型的模板、預覽、連接、打印與多語言界面定制。', '熱敏打印機 App 定制界面'],
			['桌面端', '跨端標籤打印軟體', '覆蓋 iOS、Android、Windows、macOS，承接批量標籤和商用系統對接。', '標籤打印機配套 App 和桌面端軟體'],
		],
	},
	workflow: {
		title: '從需求評估到樣機量產，按階段推進。',
		copy: '無論項目還在概念階段，還是已經有樣機和已有板卡，都可以從當前狀態開始拆解，逐步確認硬體、固件、軟體和生產協作範圍。',
		steps: [
			['START', '評估需求', '確認使用場景、機型尺寸、紙張規格、連接方式、耗材、功能和目標成本。'],
			['SCAN', '設計方案', '規劃外觀結構、PCBA、固件、打印控制和軟體入口，明確樣機開發路徑。'],
			['TRY', '樣機聯調', '完成設備、板卡、固件、App、驅動或 SDK 的聯調，讓產品進入真實工作流。'],
			['ACT', '量產導入', '整理測試、物料、生產、版本和交付節奏，把方案從樣機推進到出貨。'],
		],
	},
	product: {
		...zhHans.product,
		title: '按當前產品階段選擇服務範圍。',
		copy: '你可以只從硬體、固件或軟體中的一個環節切入，也可以把整機、板卡、連接、應用和量產協作交給同一團隊規劃。',
		selectTitle: '選擇一條服務能力',
		foot: '启枢科技 PRODUCT CORE',
		tabs: [['hardware', '硬體方案'], ['firmware', '固件調試'], ['software', '軟體接入']],
		modules: zhHans.product.modules,
	},
	proof: {
		title: '適合這些打印產品和智能硬體場景。',
		copy: '启枢科技以熱敏打印產品為核心，也承接相關智能硬體的主控、固件、App、SDK、桌面端和系統接入需求。',
		quote: '從一台設備到一套產品系統，硬體、固件、軟體和生產協作需要在同一張路線圖裡配合。',
		cite: '启枢科技服務原則',
		cases: [
			['標籤打印', '支持標籤機、桌面端模板、條碼/QR code、批量打印與耗材邏輯。'],
			['小票與票據', '處理熱敏小票、連續紙、打印指令、驅動與商用系統對接。'],
			['智能硬體', '不只做打印機，相關硬體的主控、固件、App、桌面端、SDK/API 與系統接入都可以評估。'],
			['開發者接入', '提供 SDK、應用對接、定制 App 與多平台支持，降低集成成本。'],
		],
	},
	journey: { ...zhHans.journey, title: '合作前可以先準備這些資訊。' },
	pricing: { ...zhHans.pricing, title: '按合作範圍評估項目。', copy: '熱敏打印產品通常需要結合機型、功能、數量、材料和對接深度評估。可以從樣機導入開始，也可以按完整產品路線推進。', selectTitle: '選擇合作方式', consult: '諮詢此方案', plans: { starter: ['樣機導入', '洽談', '適合已有產品方向，需要先確認硬體、固件、連接和基礎軟體流程是否可行的團隊。', ['需求拆解與機型方案', '樣機、PCBA 與固件聯調', 'App / SDK 接入路線圖']], pro: ['全鏈路交付', '整案支持', '適合希望把產品設計、硬體、固件、軟體和生產協作一起規劃的品牌或渠道團隊。', ['產品設計與開模協作', '固件、驅動、App、SDK', '測試、調試與量產導入']] } },
	faq: {
		title: '常見問題。',
		copy: '合作前，你可以先了解服務邊界、軟體定制、SDK 接入和需求評估方式。',
		items: [
			['启枢科技只做打印機嗎？', '不是。熱敏打印產品是目前主要展示方向，但启枢科技不只做打印機；相關智能硬體的硬體設計、PCBA、固件、App、桌面端、SDK/API、系統接入和生產協作都可以根據需求評估。'],
			['可以定制 App 或提供 SDK 嗎？', '可以。可按產品需求提供 App、桌面驅動、SDK、API 對接、定制界面與多語言支持，讓設備接入品牌自己的工作流。'],
			['只有概念，還沒有完整規格可以聊嗎？', '可以。建議先提供使用場景、目標機型、連接方式、紙張/耗材、預估數量與需要接入的系統，启枢科技可以協助整理成可評估方案。'],
		],
	},
	contact: { ...zhHans.contact, title: '提交你的產品需求。', copyEmail: '複製 hello@qishusolution.com', copied: '已複製', namePlaceholder: '例如：某某品牌產品負責人', missing: '請補齊姓名、信箱和需求描述。', invalidEmail: '請填寫有效的聯絡信箱。', success: '已收到需求，启枢科技團隊會根據內容評估回覆。' },
	footer: { company: '泉州启枢科技有限公司', scope: '熱敏打印 / PCBA / 固件 / App / SDK / 量產協作' },
};

const en = {
	...zhHans,
	lang: 'en',
	meta: {
		title: 'Qishu Technology | End-to-End Thermal Printing Product Development',
		description: 'Qishu Technology develops thermal printing products across hardware design, PCBA, firmware, apps, SDKs, desktop software, and production coordination.',
	},
	aria: { ...zhHans.aria, mainNav: 'Main navigation', brand: 'Qishu Technology homepage', sections: 'Page sections', theme: 'Theme switcher', language: 'Language switcher', terminal: 'Qishu Technology product status panel', signal: 'Homepage signal panel', heroProduct: 'Neon ecosystem diagram for Qishu thermal printing hardware, circuit boards, apps, and desktop software', gallery: 'Product showcase rail', moduleTabs: 'Solution capabilities', moduleFlow: 'Project input, process, and output', modulePreview: 'Service module preview', planSwitch: 'Plan switcher', needType: 'Need type' },
	nav: [['Strengths', '#trust'], ['Capabilities', '#features'], ['Process', '#workflow'], ['Solutions', '#product'], ['Engagement', '#pricing'], ['Docs', '/docs/'], ['Contact', '#contact']],
	theme: { system: 'System', light: 'Light', dark: 'Dark', current: 'Current theme: {{theme}}. Click to switch.' },
	header: { cta: 'Start' },
	hero: {
		eyebrow: 'Thermal printing products / end-to-end development',
		title: 'From product definition to production launch',
		copy: 'Qishu Technology helps brands and channel teams develop thermal printing products, covering product definition, structure and tooling, PCBA, firmware, drivers, apps, SDKs, desktop software, and production launch.',
		primary: 'View services',
		secondary: 'Send brief',
		note: 'Printing devices / firmware / apps / SDK',
		console: 'Qishu://printing-product-solution',
		stats: [['Hardware', 'Structure / tooling / PCBA'], ['Firmware', 'Comms / commands / tuning'], ['Software', 'App / driver / SDK']],
		signals: [['Bluetooth/WiFi', 'Ready', '90%'], ['Cross-platform software', 'Built', '86%'], ['Production support', 'Launch', '82%']],
		productLegend: 'Hardware design / firmware tuning / app software / SDK',
	},
	trust: [
		['01 / Product definition', 'Clarify model, paper width, connectivity, consumables, usage scenarios, and target cost.'],
		['02 / Hardware delivery', 'Coordinate industrial structure, tooling, PCBA, assembly, and prototype debugging.'],
		['03 / Software integration', 'Plan apps, drivers, SDKs, desktop software, and business system integration together.'],
		['04 / Production coordination', 'Move forward around BOM, testing, versions, production launch, and delivery cadence.'],
	],
	features: {
		title: 'Plan hardware and software as one delivery path.',
		copy: 'When a printing product needs structure, control boards, connectivity, print commands, apps, and production planning, Qishu Technology can move those pieces along one development route.',
		cards: [
			{ icon: '', title: 'Hardware and structure design', copy: 'From product appearance, internal stack, paper path, buttons, indicators, tooling, and materials, we shape the device for testing, assembly, and production.', items: ['Structure and tooling coordination', 'PCBA solution and device debugging', 'Label, receipt, and multi-size device planning'] },
			{ icon: 'diamond', title: 'Firmware and connectivity tuning', copy: 'Handle print commands, Bluetooth, WiFi, offline barcodes, paper detection, device status, and error reporting so hardware works in real flows.', items: ['Firmware development and joint testing', 'Connectivity, commands, and print control', 'Device status and consumable logic'] },
			{ icon: 'ring', title: 'Software and developer integration', copy: 'Provide apps, desktop drivers, SDKs, API integration, and custom UI so users and third-party systems can operate devices reliably.', items: ['iOS / Android / Windows / macOS', 'SDK and app integration support', 'Custom apps and multilingual UI'] },
		],
	},
	gallery: {
		title: 'Product forms and solution examples',
		copy: 'Examples around thermal printing devices, including complete products, control boards, firmware tuning, custom apps, and cross-platform software.',
		hint: 'Slow showcase / hover to pause / drag to browse',
		products: [
			['Device + PCBA', 'Thermal printer and control board', 'Plan the device, paper path, and control board together so the solution lands from exterior design to electronics.', 'Thermal printer and control board solution'],
			['Label printer', 'Complete label printer solution', 'For label printing scenarios, coordinate device design, label output, control board, and production launch.', 'White label printer with PCBA solution'],
			['Hardware solution', 'Open paper path and control board', 'Printing mechanism, paper roll structure, and PCBA can be split by product form for custom development.', 'Open paper path printing structure and control board'],
			['Prototype tuning', 'Device appearance and board testing', 'Validate appearance prototypes, print engines, control boards, and connectivity logic together to reduce rework.', 'Green thermal printing device and PCBA board'],
			['Firmware validation', 'Commands and wireless connection validation', 'Firmware links print commands, Bluetooth/WiFi, device status, and error recovery into a closed loop.', 'Thermal printer firmware command and wireless validation'],
			['App', 'Multi-size printing app customization', 'Support templates, preview, connection, printing, and multilingual UI for half-inch to 8-inch models.', 'Custom thermal printer app UI'],
			['Desktop', 'Cross-platform label printing software', 'Cover iOS, Android, Windows, and macOS for batch labels and commercial system integration.', 'Label printer companion app and desktop software'],
		],
	},
	workflow: {
		title: 'Move from requirement review to prototype and production.',
		copy: 'Whether the project is still a concept or already has prototypes and boards, we can start from the current state and define hardware, firmware, software, and production scope step by step.',
		steps: [
			['START', 'Assess needs', 'Confirm usage scenario, model size, paper specs, connectivity, consumables, functions, and target cost.'],
			['SCAN', 'Design solution', 'Plan structure, PCBA, firmware, print control, and software entry points, then define the prototype path.'],
			['TRY', 'Prototype testing', 'Jointly test devices, boards, firmware, apps, drivers, or SDKs so the product enters real workflows.'],
			['ACT', 'Production launch', 'Organize testing, BOM, production, versions, and delivery cadence to move from prototype to shipment.'],
		],
	},
	product: {
		...zhHans.product,
		title: 'Choose the service scope by your current product stage.',
		copy: 'Start with hardware, firmware, or software only, or let one team plan the device, boards, connectivity, apps, and production coordination together.',
		selectTitle: 'Choose one service capability',
		foot: 'Qishu Technology PRODUCT CORE',
		tabs: [['hardware', 'Hardware'], ['firmware', 'Firmware'], ['software', 'Software']],
		modules: {
			hardware: { copy: 'Hardware scope covers product appearance, structure, tooling, PCBA, and device debugging for teams that need a testable prototype or production-ready solution.', label: 'HARDWARE STACK', status: '4 hardware nodes', flow: [['Input', 'Product direction and model needs'], ['Process', 'Structure, PCBA, and device debugging'], ['Output', 'Testable prototype and production advice']], grid: [['Industrial structure', 'Body, paper path, buttons, indicators, and internal stack.'], ['PCBA', 'Main control, power, communication modules, and peripheral interfaces.'], ['Prototype tuning', 'Print stability, paper matching, and exception handling.'], ['Production support', 'Materials, testing, versions, and production launch.']] },
			firmware: { copy: 'Firmware tuning focuses on communication, print commands, Bluetooth/WiFi, offline barcodes, paper status, and error handling so devices work in real usage.', label: 'FIRMWARE LOOP', status: '4 firmware tasks', flow: [['Input', 'Prototype, board, and print commands'], ['Process', 'Connectivity, status, and recovery tuning'], ['Output', 'Stable firmware version and test record']], grid: [['Print control', 'Thermal head, paper feed, cutter, and tear-off flows.'], ['Connectivity', 'Bluetooth, WiFi, USB, and pairing flows.'], ['Offline capability', 'Barcode, templates, status cache, and recovery.'], ['Test iteration', 'Prototype debugging, issue tracing, and version iteration.']] },
			software: { copy: 'Software integration includes apps, desktop drivers, SDKs, app integration, and custom UI so hardware connects to your brand workflow.', label: 'SOFTWARE LINK', status: '4 software entry points', flow: [['Input', 'Device capability and business flow'], ['Process', 'App, driver, SDK, and API integration'], ['Output', 'Usable software entry and examples']], grid: [['Mobile app', 'iOS, Android, template editing, and print preview.'], ['Desktop driver', 'Windows, macOS, batch labels, and file printing.'], ['SDK', 'Command wrappers, sample projects, and integration support.'], ['Custom workflow', 'Multilingual UI, branded screens, and system integration.']] },
		},
	},
	proof: {
		title: 'Built for printing products and related smart hardware.',
		copy: 'Thermal printing is the main showcased direction. Qishu Technology also evaluates related smart hardware needs across control boards, firmware, apps, SDKs, desktop software, and system integration.',
		quote: 'From one device to a complete product system, hardware, firmware, software, and production coordination need to work from the same roadmap.',
		cite: 'Qishu Technology service principle',
		cases: [
			['Label printing', 'Support label printers, desktop templates, barcodes/QR codes, batch printing, and consumable logic.'],
			['Receipts and tickets', 'Handle thermal receipts, continuous paper, print commands, drivers, and commercial system integration.'],
			['Smart hardware', 'Not only printers. Related hardware control boards, firmware, apps, desktop software, SDK/API, and system integration can be evaluated.'],
			['Developer integration', 'Provide SDKs, app integration, custom apps, and multi-platform support to reduce integration cost.'],
		],
	},
	journey: {
		title: 'What to prepare before talking with us.',
		copy: 'You do not need a full specification at the start. Share the product stage, target model, connectivity, and current blocker, and the evaluation can begin.',
		cards: [
			['PROJECT STAGE', 'Where the project stands', 'It can be a concept, appearance drawing, prototype, existing PCBA, existing app, or small-batch test stage.'],
			['BLOCKING POINT', 'What needs solving first', 'For example: device structure, firmware connection, print stability, app/SDK integration, cost control, or production launch.'],
		],
	},
	pricing: {
		title: 'Projects are assessed by scope.',
		copy: 'Thermal printing projects are usually evaluated by model, features, quantity, materials, and integration depth. Start from prototype onboarding or move along a full product roadmap.',
		eyebrow: 'PLAN SWITCH',
		selectTitle: 'Choose engagement mode',
		consult: 'Discuss this plan',
		plans: {
			starter: ['Prototype onboarding', 'Discuss', 'For teams with a product direction that need to confirm hardware, firmware, connectivity, and basic software feasibility.', ['Requirement breakdown and model plan', 'Prototype, PCBA, and firmware tuning', 'App / SDK integration roadmap']],
			pro: ['End-to-end delivery', 'Full support', 'For brands or channel teams that want product design, hardware, firmware, software, and production coordination planned together.', ['Product design and tooling coordination', 'Firmware, drivers, apps, SDKs', 'Testing, tuning, and production launch']],
		},
	},
	faq: {
		title: 'FAQ.',
		copy: 'Before cooperation, you can review service boundaries, software customization, SDK integration, and requirement evaluation.',
		items: [
			['Does Qishu Technology only make printers?', 'No. Thermal printing products are the main showcased direction right now, but Qishu Technology is not limited to printers. Related smart hardware design, PCBA, firmware, apps, desktop software, SDK/API, system integration, and production coordination can all be evaluated based on the need.'],
			['Can you customize apps or provide SDKs?', 'Yes. We can provide apps, desktop drivers, SDKs, API integration, custom UI, and multilingual support so devices connect to your brand workflow.'],
			['Can we talk if we only have a concept?', 'Yes. Share the usage scenario, target model, connectivity, paper or consumables, estimated quantity, and systems to integrate with. Qishu Technology can help turn that into an evaluable plan.'],
		],
	},
	contact: {
		eyebrow: 'CONTACT NODE',
		title: 'Send your product brief.',
		copy: 'Describe the current product state: new model development, firmware tuning, App/SDK integration, or planning from design to production.',
		emailIntro: 'You can also email:',
		copyEmail: 'Copy hello@qishusolution.com',
		copied: 'Copied',
		name: 'Name or company',
		namePlaceholder: 'Example: product lead at a brand',
		email: 'Contact email',
		emailPlaceholder: 'hello@example.com',
		need: 'Need type',
		needs: [['hardware', 'Hardware'], ['firmware', 'Firmware'], ['software', 'App / SDK'], ['full', 'Full solution']],
		message: 'What do you want to build?',
		messagePlaceholder: 'Example: a 4-inch Bluetooth/WiFi label printer with app, SDK, offline barcodes, and production support.',
		submit: 'Send brief',
		missing: 'Add your name, email, and product brief.',
		invalidEmail: 'Use a valid contact email.',
		success: 'Request received. The Qishu Technology team will review the details and reply.',
	},
	footer: { company: 'Quanzhou Qishu Technology Co., Ltd.', scope: 'Thermal printing / PCBA / firmware / apps / SDK / production coordination' },
};

const ko = {
	...en,
	lang: 'ko',
	meta: { title: 'Qishu Technology | 감열 프린팅 제품 일괄 개발', description: 'Qishu Technology는 하드웨어 설계, PCBA, 펌웨어, 앱, SDK, 데스크톱 소프트웨어, 양산 협업까지 감열 프린팅 제품 개발을 지원합니다.' },
	nav: [['강점', '#trust'], ['역량', '#features'], ['프로세스', '#workflow'], ['솔루션', '#product'], ['협업', '#pricing'], ['문서', '/ko/docs/'], ['문의', '#contact']],
	header: { cta: '시작하기' },
	hero: { ...en.hero, eyebrow: '감열 프린팅 제품 / 일괄 개발', title: '제품 기획부터 양산 도입까지, 하드웨어와 소프트웨어를 함께 완성합니다', copy: 'Qishu Technology는 브랜드와 채널 팀의 감열 프린팅 제품 개발을 지원하며 제품 정의, 구조와 금형, PCBA, 펌웨어, 드라이버, 앱, SDK, 데스크톱 소프트웨어, 양산 도입을 함께 다룹니다.', primary: '서비스 보기', secondary: '요구사항 보내기', note: '프린팅 장비 / 펌웨어 / 앱 / SDK', productLegend: '하드웨어 설계 / 펌웨어 튜닝 / 앱 소프트웨어 / SDK' },
	trust: [['01 / 제품 정의', '기종, 용지 폭, 연결 방식, 소모품, 사용 장면, 목표 원가를 정리합니다.'], ['02 / 하드웨어 구현', '외관 구조, 금형, PCBA, 완제품 조립, 시제품 디버깅을 조율합니다.'], ['03 / 소프트웨어 연동', '앱, 드라이버, SDK, 데스크톱 소프트웨어, 업무 시스템 연동을 함께 계획합니다.'], ['04 / 양산 협업', '자재, 테스트, 버전, 생산 도입, 납품 일정을 기준으로 진행합니다.']],
	features: { ...en.features, title: '기기 하드웨어와 소프트웨어를 하나의 납품 경로로 설계합니다.', copy: '프린팅 제품에 구조, 제어 보드, 연결, 인쇄 명령, 앱, 양산 계획이 함께 필요할 때 Qishu Technology는 이 요소들을 하나의 개발 경로로 추진합니다.' },
	gallery: { ...en.gallery, title: '제품 형태와 솔루션 예시', copy: '감열 프린팅 장비를 중심으로 완제품, 제어 보드, 펌웨어 튜닝, 맞춤 앱, 크로스 플랫폼 소프트웨어 형태를 보여줍니다.', hint: '느린 전시 / 호버 시 정지 / 드래그로 보기' },
	workflow: { ...en.workflow, title: '요구사항 검토부터 시제품과 양산까지 단계별로 진행합니다.', copy: '개념 단계이든 시제품과 보드가 이미 있든 현재 상태에서 시작해 하드웨어, 펌웨어, 소프트웨어, 양산 협업 범위를 단계별로 정합니다.' },
	product: { ...en.product, title: '현재 제품 단계에 맞춰 서비스 범위를 선택하세요.', copy: '하드웨어, 펌웨어, 소프트웨어 중 한 영역부터 시작하거나 완제품, 보드, 연결, 앱, 양산 협업을 한 팀에서 함께 계획할 수 있습니다.', selectTitle: '서비스 역량 선택', tabs: [['hardware', '하드웨어'], ['firmware', '펌웨어'], ['software', '소프트웨어']] },
	proof: { ...en.proof, title: '프린팅 제품과 관련 스마트 하드웨어에 적합합니다.', copy: '감열 프린팅은 주요 전시 방향입니다. Qishu Technology는 관련 스마트 하드웨어의 제어 보드, 펌웨어, 앱, SDK, 데스크톱 소프트웨어, 시스템 연동도 평가합니다.', cases: [['라벨 프린팅', '라벨 프린터, 데스크톱 템플릿, 바코드/QR 코드, 대량 인쇄, 소모품 로직을 지원합니다.'], ['영수증과 티켓', '감열 영수증, 연속 용지, 인쇄 명령, 드라이버, 상용 시스템 연동을 처리합니다.'], ['스마트 하드웨어', '프린터만 하는 것이 아닙니다. 관련 하드웨어의 제어 보드, 펌웨어, 앱, 데스크톱 소프트웨어, SDK/API, 시스템 연동을 평가할 수 있습니다.'], ['개발자 연동', 'SDK, 앱 연동, 맞춤 앱, 다중 플랫폼 지원으로 통합 비용을 줄입니다.']] },
	journey: { ...en.journey, title: '상담 전 준비하면 좋은 정보', copy: '처음부터 완전한 사양서가 필요하지 않습니다. 제품 단계, 목표 기종, 연결 방식, 현재 막힌 지점을 공유하면 평가를 시작할 수 있습니다.' },
	pricing: { ...en.pricing, title: '프로젝트는 협업 범위에 따라 평가합니다.', selectTitle: '협업 방식 선택', consult: '이 방식 상담하기', plans: { starter: ['시제품 도입', '상담', '제품 방향이 있고 하드웨어, 펌웨어, 연결, 기본 소프트웨어 흐름의 가능성을 먼저 확인하려는 팀에 적합합니다.', ['요구사항 분해와 기종 계획', '시제품, PCBA, 펌웨어 튜닝', 'App / SDK 연동 로드맵']], pro: ['일괄 납품', '전체 지원', '제품 디자인, 하드웨어, 펌웨어, 소프트웨어, 양산 협업을 함께 계획하려는 브랜드나 채널 팀에 적합합니다.', ['제품 디자인과 금형 협업', '펌웨어, 드라이버, 앱, SDK', '테스트, 튜닝, 양산 도입']] } },
	faq: { ...en.faq, title: '자주 묻는 질문', copy: '협업 전에 서비스 범위, 소프트웨어 맞춤 개발, SDK 연동, 요구사항 평가 방식을 확인할 수 있습니다.', items: [['Qishu Technology는 프린터만 만드나요?', '아닙니다. 감열 프린팅 제품이 현재 주요 전시 방향이지만 프린터에만 한정되지 않습니다. 관련 스마트 하드웨어의 설계, PCBA, 펌웨어, 앱, 데스크톱 소프트웨어, SDK/API, 시스템 연동, 양산 협업도 요구에 따라 평가할 수 있습니다.'], ['앱 맞춤 개발이나 SDK 제공이 가능한가요?', '가능합니다. 앱, 데스크톱 드라이버, SDK, API 연동, 맞춤 UI, 다국어 지원을 제공해 장비가 브랜드의 업무 흐름에 연결되도록 합니다.'], ['개념만 있고 완전한 사양이 없어도 상담할 수 있나요?', '가능합니다. 사용 장면, 목표 기종, 연결 방식, 용지/소모품, 예상 수량, 연동할 시스템을 알려주시면 평가 가능한 계획으로 정리할 수 있습니다.']] },
	contact: { ...en.contact, title: '제품 요구사항을 보내주세요.', copy: '현재 제품 상태를 설명해 주세요: 새 기종 개발, 펌웨어 튜닝, App/SDK 연동, 또는 설계부터 양산까지의 계획.', emailIntro: '이메일로도 문의할 수 있습니다:', copyEmail: 'hello@qishusolution.com 복사', copied: '복사됨', name: '이름 또는 회사', namePlaceholder: '예: 브랜드 제품 담당자', email: '이메일', need: '문의 유형', needs: [['hardware', '하드웨어'], ['firmware', '펌웨어'], ['software', 'App / SDK'], ['full', '전체 솔루션']], message: '무엇을 만들고 싶나요?', messagePlaceholder: '예: 앱, SDK, 오프라인 바코드, 양산 지원이 필요한 4인치 Bluetooth/WiFi 라벨 프린터.', submit: '문의 보내기', missing: '이름, 이메일, 요청 내용을 입력해 주세요.', invalidEmail: '유효한 이메일을 입력해 주세요.', success: '요청이 접수되었습니다. Qishu Technology 팀이 내용을 검토해 회신합니다.' },
	footer: { company: 'Quanzhou Qishu Technology Co., Ltd.', scope: '감열 프린팅 / PCBA / 펌웨어 / 앱 / SDK / 양산 협업' },
};

const ja = {
	...ko,
	lang: 'ja',
	meta: { title: 'Qishu Technology | 感熱プリント製品の一貫開発', description: 'Qishu Technology は、ハードウェア設計、PCBA、ファームウェア、アプリ、SDK、デスクトップソフト、量産連携まで感熱プリント製品の開発を支援します。' },
	nav: [['強み', '#trust'], ['対応範囲', '#features'], ['流れ', '#workflow'], ['ソリューション', '#product'], ['連携', '#pricing'], ['ドキュメント', '/ja/docs/'], ['お問い合わせ', '#contact']],
	header: { cta: '相談する' },
	hero: { ...en.hero, eyebrow: '感熱プリント製品 / 一貫開発', title: '製品の構想から量産立ち上げまで、ハードとソフトを一体で支える', copy: 'Qishu Technology は、製品定義、構造設計と金型、PCBA、ファームウェア、ドライバー、アプリ、SDK、デスクトップソフト、量産導入まで、感熱プリント製品の開発を支援します。', primary: '対応範囲を見る', secondary: '製品相談を送る', note: 'プリント機器 / ファームウェア / アプリ / SDK', productLegend: 'ハードウェア設計 / ファームウェア調整 / アプリソフト / SDK' },
	trust: [['01 / 製品定義', '機種、紙幅、接続方式、消耗品、利用シーン、目標コストを整理します。'], ['02 / ハードウェア実装', '外観構造、金型、PCBA、完成品組立、試作機調整を連携します。'], ['03 / ソフトウェア接続', 'アプリ、ドライバー、SDK、デスクトップソフト、業務システム接続を同時に計画します。'], ['04 / 量産連携', '部材、テスト、バージョン、量産導入、納品ペースを軸に進行します。']],
	features: { ...en.features, title: 'デバイスのハードウェアからソフトウェアまで、一つの開発ルートで計画します。', copy: 'プリント製品に構造、制御基板、接続、印刷コマンド、アプリ、量産計画が必要なとき、Qishu Technology はそれらを同じ開発ルートで進めます。' },
	gallery: { ...en.gallery, title: '製品形態とソリューション例', copy: '感熱プリント機器を中心に、完成品、制御基板、ファームウェア調整、カスタムアプリ、クロスプラットフォームソフトを紹介します。', hint: 'ゆっくり表示 / ホバーで停止 / ドラッグで閲覧' },
	workflow: { ...en.workflow, title: '要件確認から試作、量産導入まで段階的に進めます。', copy: '構想段階でも、試作機や既存基板がある段階でも、現在の状態から始めてハードウェア、ファームウェア、ソフトウェア、量産連携の範囲を確認できます。' },
	product: { ...en.product, title: '現在の製品段階に合わせて対応範囲を選べます。', copy: 'ハードウェア、ファームウェア、ソフトウェアの一部から始めることも、完成品、基板、接続、アプリ、量産連携を一つのチームで計画することもできます。', selectTitle: 'サービス能力を選択', tabs: [['hardware', 'ハードウェア'], ['firmware', 'ファームウェア'], ['software', 'ソフトウェア']] },
	proof: { ...en.proof, title: 'プリント製品と関連スマートハードウェアに対応します。', copy: '感熱プリントは主な掲載方向です。Qishu Technology は関連スマートハードウェアの制御基板、ファームウェア、アプリ、SDK、デスクトップソフト、システム接続も評価できます.', cases: [['ラベルプリント', 'ラベルプリンター、デスクトップテンプレート、バーコード/QRコード、バッチ印刷、消耗品ロジックに対応します。'], ['レシートとチケット', '感熱レシート、連続紙、印刷コマンド、ドライバー、商用システム接続を扱います。'], ['スマートハードウェア', 'プリンターだけではありません。関連ハードウェアの制御基板、ファームウェア、アプリ、デスクトップソフト、SDK/API、システム接続を評価できます。'], ['開発者接続', 'SDK、アプリ接続、カスタムアプリ、マルチプラットフォーム対応で導入コストを下げます。']] },
	journey: { ...en.journey, title: '相談前に準備できる情報', copy: '最初から完全な仕様書は不要です。製品段階、対象機種、接続方式、現在の課題を共有すれば評価を始められます。' },
	pricing: { ...en.pricing, title: 'プロジェクトは対応範囲に応じて評価します。', selectTitle: '連携方式を選択', consult: 'この方式を相談する', plans: { starter: ['試作導入', '相談', '製品方向があり、ハードウェア、ファームウェア、接続、基本ソフトウェアの実現性を先に確認したいチーム向けです。', ['要件分解と機種計画', '試作機、PCBA、ファームウェア調整', 'App / SDK 接続ロードマップ']], pro: ['一貫納品', '全体支援', '製品設計、ハードウェア、ファームウェア、ソフトウェア、量産連携を一緒に計画したいブランドやチャネルチーム向けです。', ['製品設計と金型連携', 'ファームウェア、ドライバー、アプリ、SDK', 'テスト、調整、量産導入']] } },
	faq: { ...en.faq, title: 'よくある質問', copy: '連携前に、サービス範囲、ソフトウェアカスタム、SDK 接続、要件評価の方法を確認できます。', items: [['Qishu Technology はプリンターだけを作りますか？', 'いいえ。感熱プリント製品は現在の主な掲載方向ですが、プリンターに限定していません。関連スマートハードウェアの設計、PCBA、ファームウェア、アプリ、デスクトップソフト、SDK/API、システム接続、量産連携も要件に応じて評価できます。'], ['アプリのカスタムや SDK 提供はできますか？', 'できます。アプリ、デスクトップドライバー、SDK、API 接続、カスタム UI、多言語対応により、デバイスをブランド独自の業務フローへ接続します。'], ['構想だけで完全な仕様がなくても相談できますか？', 'できます。利用シーン、対象機種、接続方式、紙/消耗品、想定数量、接続したいシステムを共有してください。評価可能な計画に整理できます。']] },
	contact: { ...en.contact, title: '製品相談を送信', copy: '現在の製品状態を教えてください: 新機種開発、ファームウェア調整、App/SDK 接続、または設計から量産までの計画。', emailIntro: 'メールでも相談できます:', copyEmail: 'hello@qishusolution.com をコピー', copied: 'コピーしました', name: '氏名または会社名', namePlaceholder: '例: ブランドの製品担当者', email: 'メールアドレス', need: '相談内容', needs: [['hardware', 'ハードウェア'], ['firmware', 'ファームウェア'], ['software', 'App / SDK'], ['full', '一括ソリューション']], message: '作りたいもの', messagePlaceholder: '例: アプリ、SDK、オフラインバーコード、量産支援が必要な4インチBluetooth/WiFiラベルプリンター。', submit: '送信する', missing: '名前、メール、相談内容を入力してください。', invalidEmail: '有効なメールアドレスを入力してください。', success: '相談を受け付けました。Qishu Technology チームが内容を確認して返信します。' },
	footer: { company: 'Quanzhou Qishu Technology Co., Ltd.', scope: '感熱プリント / PCBA / ファームウェア / アプリ / SDK / 量産連携' },
};

Object.assign(zhHant.product, {
	modules: {
		hardware: {
			copy: '硬體方案覆蓋產品外觀、結構、開模、PCBA 與整機調試，適合已有產品方向、需要做出可測樣機或量產方案的團隊。',
			label: 'HARDWARE STACK',
			status: '4 個硬體節點',
			flow: [['輸入', '產品方向與機型需求'], ['處理', '結構、PCBA 與整機聯調'], ['輸出', '可測試樣機與量產建議']],
			grid: [['外觀結構', '機身、紙路、按鍵、燈號與內部堆疊。'], ['PCBA', '主控、電源、通訊模組與周邊介面。'], ['樣機調試', '打印穩定性、紙張匹配與異常處理。'], ['量產協作', '物料、測試、版本與生產導入。']],
		},
		firmware: {
			copy: '固件調試聚焦通訊、打印指令、藍牙/WiFi、離線條碼、紙張狀態與錯誤處理，讓設備進入真實使用流程。',
			label: 'FIRMWARE LOOP',
			status: '4 個固件任務',
			flow: [['輸入', '樣機、板卡與打印指令'], ['處理', '連接、狀態與異常恢復聯調'], ['輸出', '穩定固件版本與測試記錄']],
			grid: [['打印控制', '熱敏頭、走紙、切刀與撕紙流程調整。'], ['連接通訊', 'Bluetooth、WiFi、USB 與配對流程。'], ['離線能力', '條碼、模板、狀態快取與恢復。'], ['測試迭代', '樣機調試、問題定位與版本迭代。']],
		},
		software: {
			copy: '軟體接入包含 App、桌面驅動、SDK、應用對接與定制 UI，讓硬體接入品牌自己的終端流程。',
			label: 'SOFTWARE LINK',
			status: '4 個軟體入口',
			flow: [['輸入', '設備能力與業務流程'], ['處理', 'App、驅動、SDK 與 API 對接'], ['輸出', '可接入的軟體入口與示例']],
			grid: [['移動 App', 'iOS、Android、模板編輯與打印預覽。'], ['桌面驅動', 'Windows、macOS、批量標籤與文件打印。'], ['SDK', '指令封裝、示例工程與接入支持。'], ['定制流程', '多語言 UI、品牌界面與業務系統對接。']],
		},
	},
});

Object.assign(zhHant.journey, {
	copy: '需求不需要一次寫成完整規格。只要說明產品階段、目標機型、連接方式和當前卡點，就可以開始評估。',
	cards: [['PROJECT STAGE', '當前做到哪一步', '可以是概念、外觀圖、樣機、已有 PCBA、已有 App，或者已經進入小批量測試。'], ['BLOCKING POINT', '目前最需要解決什麼', '例如整機結構、固件連接、打印穩定性、App/SDK 接入、成本控制或量產導入。']],
});

Object.assign(zhHant.contact, {
	copy: '請描述當前產品狀態：是新機型開發、固件調試、App/SDK 接入，還是希望從設計到量產一起規劃。',
	emailIntro: '也可以直接寫信：',
	name: '姓名或公司',
	email: '聯絡信箱',
	need: '需求類型',
	needs: [['hardware', '硬體方案'], ['firmware', '固件調試'], ['software', 'App / SDK'], ['full', '整套方案']],
	message: '想做什麼',
	messagePlaceholder: '例如：想做 4 寸藍牙/WiFi 標籤機，需要 App、SDK、離線條碼和量產協助。',
	submit: '提交需求',
});

Object.assign(ko, {
	theme: { system: '시스템', light: '라이트', dark: '다크', current: '현재 테마: {{theme}}. 클릭해 전환하세요.' },
	features: {
		...ko.features,
		cards: [
			{ icon: '', title: '하드웨어와 구조 설계', copy: '외관, 내부 적층, 용지 경로, 버튼, 표시등, 금형, 소재까지 테스트와 조립, 양산이 가능한 형태로 정리합니다.', items: ['구조와 금형 협업', 'PCBA 솔루션과 완제품 디버깅', '라벨, 영수증, 다양한 크기 기종 계획'] },
			{ icon: 'diamond', title: '펌웨어와 연결 튜닝', copy: '인쇄 명령, Bluetooth, WiFi, 오프라인 바코드, 용지 감지, 장비 상태, 오류 리포트를 처리해 하드웨어가 실제 흐름에서 동작하도록 합니다.', items: ['펌웨어 개발과 연동 테스트', '연결, 명령, 인쇄 제어', '장비 상태와 소모품 로직'] },
			{ icon: 'ring', title: '소프트웨어와 개발자 연동', copy: '앱, 데스크톱 드라이버, SDK, API 연동, 맞춤 UI를 제공해 사용자와 외부 시스템이 안정적으로 장비를 사용할 수 있게 합니다.', items: ['iOS / Android / Windows / macOS', 'SDK와 앱 연동 지원', '맞춤 앱과 다국어 UI'] },
		],
	},
	gallery: {
		...ko.gallery,
		products: [
			['완제품 + PCBA', '감열 프린터와 제어 보드', '완제품, 용지 경로, 제어 보드를 함께 계획해 외관부터 전장까지 구현합니다.', '감열 프린터와 제어 보드 솔루션'],
			['라벨 프린터', '라벨 프린터 완제품 솔루션', '라벨 프린팅 장면에 맞춰 완제품, 라벨 출력, 제어 보드, 양산 도입을 함께 진행합니다.', '흰색 라벨 프린터와 PCBA 솔루션'],
			['하드웨어 솔루션', '개방형 용지 경로와 제어 보드', '프린팅 구조, 용지 롤 구조, PCBA를 제품 형태에 맞춰 분리해 맞춤 개발할 수 있습니다.', '개방형 용지 경로와 제어 보드'],
			['시제품 튜닝', '완제품 외관과 보드 연동', '외관 시제품, 프린트 엔진, 제어 보드, 연결 로직을 함께 검증해 재작업을 줄입니다.', '녹색 감열 프린터와 PCBA 보드'],
			['펌웨어 검증', '명령과 무선 연결 검증', '펌웨어가 인쇄 명령, Bluetooth/WiFi, 장비 상태, 오류 복구를 하나의 폐루프로 연결합니다.', '감열 프린터 펌웨어 명령과 무선 검증'],
			['App', '다양한 크기 프린팅 앱 맞춤 개발', '반인치부터 8인치 기종까지 템플릿, 미리보기, 연결, 인쇄, 다국어 UI를 지원합니다.', '감열 프린터 맞춤 앱 화면'],
			['데스크톱', '크로스 플랫폼 라벨 프린팅 소프트웨어', 'iOS, Android, Windows, macOS를 커버하며 대량 라벨과 상용 시스템 연동을 지원합니다.', '라벨 프린터 앱과 데스크톱 소프트웨어'],
		],
	},
	workflow: {
		...ko.workflow,
		steps: [['START', '요구사항 평가', '사용 장면, 기종 크기, 용지 규격, 연결 방식, 소모품, 기능, 목표 원가를 확인합니다.'], ['SCAN', '솔루션 설계', '외관 구조, PCBA, 펌웨어, 인쇄 제어, 소프트웨어 진입점을 계획하고 시제품 경로를 정합니다.'], ['TRY', '시제품 연동 테스트', '장비, 보드, 펌웨어, 앱, 드라이버 또는 SDK를 함께 테스트해 실제 워크플로에 넣습니다.'], ['ACT', '양산 도입', '테스트, 자재, 생산, 버전, 납품 일정을 정리해 시제품에서 출하로 진행합니다.']],
	},
	product: {
		...ko.product,
		online: '온라인',
		foot: 'Qishu Technology 제품 코어',
		modules: {
			hardware: { copy: '하드웨어 범위는 제품 외관, 구조, 금형, PCBA, 완제품 디버깅을 포함하며 테스트 가능한 시제품이나 양산 솔루션이 필요한 팀에 적합합니다.', label: 'HARDWARE STACK', status: '하드웨어 노드 4개', flow: [['입력', '제품 방향과 기종 요구사항'], ['진행', '구조, PCBA, 완제품 디버깅'], ['산출물', '테스트 가능한 시제품과 양산 제안']], grid: [['외관 구조', '본체, 용지 경로, 버튼, 표시등, 내부 적층.'], ['PCBA', '메인 컨트롤, 전원, 통신 모듈, 주변 인터페이스.'], ['시제품 튜닝', '인쇄 안정성, 용지 매칭, 예외 처리.'], ['양산 협업', '자재, 테스트, 버전, 생산 도입.']] },
			firmware: { copy: '펌웨어 튜닝은 통신, 인쇄 명령, Bluetooth/WiFi, 오프라인 바코드, 용지 상태, 오류 처리를 중심으로 장비가 실제 사용 흐름에 들어가게 합니다.', label: 'FIRMWARE LOOP', status: '펌웨어 작업 4개', flow: [['입력', '시제품, 보드, 인쇄 명령'], ['진행', '연결, 상태, 복구 튜닝'], ['산출물', '안정화 펌웨어와 테스트 기록']], grid: [['인쇄 제어', '감열 헤드, 용지 이송, 커터, 절취 흐름.'], ['연결 통신', 'Bluetooth, WiFi, USB, 페어링 흐름.'], ['오프라인 기능', '바코드, 템플릿, 상태 캐시와 복구.'], ['테스트 반복', '시제품 디버깅, 문제 추적, 버전 반복.']] },
			software: { copy: '소프트웨어 연동은 앱, 데스크톱 드라이버, SDK, 애플리케이션 연동, 맞춤 UI를 포함해 하드웨어가 브랜드의 단말 흐름에 연결되도록 합니다.', label: 'SOFTWARE LINK', status: '소프트웨어 진입점 4개', flow: [['입력', '장비 기능과 업무 흐름'], ['진행', '앱, 드라이버, SDK, API 연동'], ['산출물', '사용 가능한 소프트웨어 진입점과 예제']], grid: [['모바일 앱', 'iOS, Android, 템플릿 편집, 인쇄 미리보기.'], ['데스크톱 드라이버', 'Windows, macOS, 대량 라벨, 파일 인쇄.'], ['SDK', '명령 래핑, 예제 프로젝트, 연동 지원.'], ['맞춤 흐름', '다국어 UI, 브랜드 화면, 업무 시스템 연동.']] },
		},
	},
	proof: { ...ko.proof, quote: '한 대의 장비에서 하나의 제품 시스템까지, 하드웨어, 펌웨어, 소프트웨어, 양산 협업은 같은 로드맵 위에서 맞물려야 합니다.', cite: 'Qishu Technology 서비스 원칙' },
	journey: { ...ko.journey, cards: [['PROJECT STAGE', '현재 어디까지 진행됐나요?', '개념, 외관도, 시제품, 기존 PCBA, 기존 앱, 또는 소량 테스트 단계일 수 있습니다.'], ['BLOCKING POINT', '지금 가장 먼저 풀 문제', '예: 완제품 구조, 펌웨어 연결, 인쇄 안정성, App/SDK 연동, 원가 제어, 양산 도입.']] },
	pricing: { ...ko.pricing, copy: '감열 프린팅 프로젝트는 보통 기종, 기능, 수량, 소재, 연동 깊이에 따라 평가합니다. 시제품 도입부터 시작하거나 전체 제품 로드맵으로 진행할 수 있습니다.' },
});

Object.assign(ja, {
	theme: { system: 'システム', light: 'ライト', dark: 'ダーク', current: '現在のテーマ: {{theme}}。クリックして切り替えます。' },
	features: {
		...ja.features,
		cards: [
			{ icon: '', title: 'ハードウェアと構造設計', copy: '外観、内部レイアウト、紙経路、ボタン、表示灯、金型、材料まで、テスト、組立、量産できる形に整えます。', items: ['構造と金型の連携', 'PCBA ソリューションと完成品調整', 'ラベル、レシート、多サイズ機種の計画'] },
			{ icon: 'diamond', title: 'ファームウェアと接続調整', copy: '印刷コマンド、Bluetooth、WiFi、オフラインバーコード、紙検知、デバイス状態、エラー通知を扱い、実利用の流れに入れます。', items: ['ファームウェア開発と連携テスト', '接続、コマンド、印刷制御', 'デバイス状態と消耗品ロジック'] },
			{ icon: 'ring', title: 'ソフトウェアと開発者接続', copy: 'アプリ、デスクトップドライバー、SDK、API 接続、カスタム UI を提供し、ユーザーと外部システムが安定して使えるようにします。', items: ['iOS / Android / Windows / macOS', 'SDK とアプリ接続支援', 'カスタムアプリと多言語 UI'] },
		],
	},
	gallery: {
		...ja.gallery,
		products: [
			['完成品 + PCBA', '感熱プリンターと制御基板', '完成品、紙経路、制御基板を一緒に計画し、外観から電装まで実装します。', '感熱プリンターと制御基板ソリューション'],
			['ラベル機', 'ラベルプリンター完成品ソリューション', 'ラベル印刷シーンに向けて、完成品、ラベル出力、制御基板、量産導入を連携します。', '白いラベルプリンターと PCBA ソリューション'],
			['ハードウェア', 'オープン紙経路と制御基板', '印刷機構、紙ロール構造、PCBA を製品形態に合わせて分解し、カスタム開発できます。', 'オープン紙経路印刷構造と制御基板'],
			['試作調整', '完成品外観と基板連携', '外観試作、プリントエンジン、制御基板、接続ロジックを同時に検証し、手戻りを減らします。', '緑色の感熱プリンターと PCBA 基板'],
			['ファームウェア検証', 'コマンドと無線接続検証', 'ファームウェアが印刷コマンド、Bluetooth/WiFi、デバイス状態、エラー復旧を閉じた流れにします。', '感熱プリンターのファームウェアコマンドと無線検証'],
			['App', '多サイズ印刷アプリのカスタム', '半インチから8インチ機種まで、テンプレート、プレビュー、接続、印刷、多言語 UI に対応します。', '感熱プリンターのカスタムアプリ画面'],
			['デスクトップ', 'クロスプラットフォームラベル印刷ソフト', 'iOS、Android、Windows、macOS をカバーし、バッチラベルと商用システム接続に対応します。', 'ラベルプリンター連携アプリとデスクトップソフト'],
		],
	},
	workflow: {
		...ja.workflow,
		steps: [['START', '要件評価', '利用シーン、機種サイズ、紙仕様、接続方式、消耗品、機能、目標コストを確認します。'], ['SCAN', 'ソリューション設計', '外観構造、PCBA、ファームウェア、印刷制御、ソフトウェア入口を計画し、試作ルートを決めます。'], ['TRY', '試作連携テスト', 'デバイス、基板、ファームウェア、アプリ、ドライバーまたは SDK を連携テストし、実際の流れに入れます。'], ['ACT', '量産導入', 'テスト、部材、生産、バージョン、納品ペースを整理し、試作から出荷へ進めます。']],
	},
	product: {
		...ja.product,
		online: 'オンライン',
		foot: 'Qishu Technology 製品コア',
		modules: {
			hardware: { copy: 'ハードウェア範囲は製品外観、構造、金型、PCBA、完成品調整を含み、テスト可能な試作機や量産ソリューションが必要なチームに適しています。', label: 'HARDWARE STACK', status: 'ハードウェアノード 4件', flow: [['入力', '製品方針と機種要件'], ['対応', '構造、PCBA、完成品調整'], ['成果物', 'テスト可能な試作機と量産提案']], grid: [['外観構造', '本体、紙経路、ボタン、表示灯、内部レイアウト。'], ['PCBA', 'メイン制御、電源、通信モジュール、周辺インターフェース。'], ['試作調整', '印刷安定性、紙適合、例外処理。'], ['量産連携', '部材、テスト、バージョン、生産導入。']] },
			firmware: { copy: 'ファームウェア調整は通信、印刷コマンド、Bluetooth/WiFi、オフラインバーコード、紙状態、エラー処理に注力し、デバイスを実利用の流れに入れます。', label: 'FIRMWARE LOOP', status: 'ファームウェア作業 4件', flow: [['入力', '試作機、基板、印刷コマンド'], ['対応', '接続、状態、復旧調整'], ['成果物', '安定版ファームウェアとテスト記録']], grid: [['印刷制御', '感熱ヘッド、紙送り、カッター、切り取りフロー。'], ['接続通信', 'Bluetooth、WiFi、USB、ペアリングフロー。'], ['オフライン機能', 'バーコード、テンプレート、状態キャッシュと復旧。'], ['テスト反復', '試作調整、問題追跡、バージョン反復。']] },
			software: { copy: 'ソフトウェア接続はアプリ、デスクトップドライバー、SDK、アプリ連携、カスタム UI を含み、ハードウェアをブランドの端末フローへ接続します。', label: 'SOFTWARE LINK', status: 'ソフトウェア入口 4件', flow: [['入力', 'デバイス機能と業務フロー'], ['対応', 'アプリ、ドライバー、SDK、API 接続'], ['成果物', '利用可能なソフトウェア入口とサンプル']], grid: [['モバイルアプリ', 'iOS、Android、テンプレート編集、印刷プレビュー。'], ['デスクトップドライバー', 'Windows、macOS、バッチラベル、ファイル印刷。'], ['SDK', 'コマンドラップ、サンプルプロジェクト、接続支援。'], ['カスタムフロー', '多言語 UI、ブランド画面、業務システム接続。']] },
		},
	},
	proof: { ...ja.proof, copy: '感熱プリントは主な掲載方向です。Qishu Technology は関連スマートハードウェアの制御基板、ファームウェア、アプリ、SDK、デスクトップソフト、システム接続も評価できます。', quote: '一台のデバイスから一つの製品システムまで、ハードウェア、ファームウェア、ソフトウェア、量産連携は同じロードマップ上で噛み合う必要があります。', cite: 'Qishu Technology サービス原則' },
	journey: { ...ja.journey, cards: [['PROJECT STAGE', '現在どこまで進んでいますか', '構想、外観図、試作機、既存 PCBA、既存アプリ、または小ロットテスト段階でも構いません。'], ['BLOCKING POINT', '今いちばん解くべき課題', '例: 完成品構造、ファームウェア接続、印刷安定性、App/SDK 接続、コスト制御、量産導入。']] },
	pricing: { ...ja.pricing, copy: '感熱プリント案件は通常、機種、機能、数量、材料、接続の深さに応じて評価します。試作導入から始めることも、製品ロードマップ全体で進めることもできます。' },
});

export const homeCopy = {
	'zh-hans': zhHans,
	'zh-hant': zhHant,
	en,
	ko,
	ja,
} satisfies Record<Locale, typeof zhHans>;

export function getHomeCopy(locale: Locale) {
	return homeCopy[locale];
}

export function withProductAssets(locale: Locale) {
	const copy = getHomeCopy(locale);
	return copy.gallery.products.map((product, index) => ({
		tag: product[0],
		title: product[1],
		copy: product[2],
		alt: product[3],
		image: baseProducts[index].image,
		shot: baseProducts[index].shot,
	}));
}
