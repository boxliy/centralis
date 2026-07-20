// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://qishusolution.com',
	vite: {
		server: {
			allowedHosts: ['eu2.ncp.kahub.in', 'qishusolution.com', 'www.qishusolution.com'],
		},
	},
	integrations: [
		starlight({
			title: {
				en: 'Qishu Archives',
				'zh-Hans': '启枢档案馆',
				'zh-Hant': '啟樞檔案館',
				ko: 'Qishu Archives',
				ja: '啓枢アーカイブ',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-hans': {
					label: '简体中文',
					lang: 'zh-Hans',
				},
				'zh-hant': {
					label: '繁體中文',
					lang: 'zh-Hant',
				},
				ko: {
					label: '한국어',
				},
				ja: {
					label: '日本語',
				},
			},
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				alt: 'Site logo',
				replacesTitle: true,
			},
			favicon: '/logo-light.png',
			customCss: ['./src/styles/logo.css', './src/styles/opendesign-docs.css'],
			components: {
				Header: './src/components/starlight/Header.astro',
				PageFrame: './src/components/starlight/PageFrame.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				TwoColumnContent: './src/components/starlight/TwoColumnContent.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
				LanguageSelect: './src/components/starlight/LanguageSelect.astro',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/qishu-preferences.js',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: 'Qishu Archives collects printer SDK, driver, firmware, PCBA, and integration documents for Qishu Technology products and services.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'Qishu Archives, printer SDK, printer driver, firmware, PCBA, thermal printer documentation',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'index, follow, max-image-preview:large',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'Qishu Archives',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://qishusolution.com/hero/qishu-printer-ecosystem-light.webp',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://qishusolution.com/hero/qishu-printer-ecosystem-light.webp',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/logo-light.png',
						type: 'image/png',
						media: '(prefers-color-scheme: light)',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/logo-dark.png',
						type: 'image/png',
						media: '(prefers-color-scheme: dark)',
					},
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/boxliy/centralis' }],
			sidebar: [
				{ slug: 'docs' },
				{
					label: 'Printer SDK',
					translations: {
						'zh-Hans': '打印机 SDK',
						'zh-Hant': '打印機 SDK',
						ja: 'プリンター SDK',
						ko: '프린터 SDK',
					},
					collapsed: false,
					items: [{ autogenerate: { directory: 'docs/sdk', collapsed: false } }],
				},
				{
					label: 'Commands',
					translations: {
						'zh-Hans': '指令',
						'zh-Hant': '指令',
						ja: 'コマンド',
						ko: '명령',
					},
					collapsed: false,
					items: [{ autogenerate: { directory: 'docs/commands', collapsed: false } }],
				},
				{ slug: 'docs/driver' },
				{ slug: 'docs/firmware' },
			],
		}),
	],
});
