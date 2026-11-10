import type { Locale } from './home';

export const wechatContact = {
	number: '19516312589',
	displayNumber: '195 1631 2589',
	qrCode: '/contact/wechat-xu.jpg',
};

const contactCopy = {
	en: {
		title: 'Let’s talk on WeChat',
		name: 'Mr. Xu · 许工',
		channel: 'WeChat',
		body: 'Questions about a product or SDK integration? Contact Mr. Xu directly on WeChat.',
		scan: 'Scan with WeChat to add a contact',
		qrAlt: 'WeChat contact QR code for Mr. Xu',
		copy: 'Copy WeChat ID',
		copied: 'WeChat ID copied',
		failed: 'Could not copy automatically. Select or long-press the number above to copy it.',
		save: 'Save QR code',
	},
	'zh-hans': {
		title: '加个微信，聊聊你的需求',
		name: '许工',
		channel: '微信 WeChat',
		body: '产品咨询、方案沟通或 SDK 接入问题，都可以直接联系许工。',
		scan: '使用微信扫一扫，添加联系人',
		qrAlt: '许工的微信联系二维码',
		copy: '复制微信号',
		copied: '微信号已复制',
		failed: '暂时无法自动复制，请选择或长按上方号码复制。',
		save: '保存二维码',
	},
	'zh-hant': {
		title: '加個微信，聊聊你的需求',
		name: '許工',
		channel: '微信 WeChat',
		body: '產品諮詢、方案溝通或 SDK 串接問題，都可以直接聯絡許工。',
		scan: '使用微信掃一掃，新增聯絡人',
		qrAlt: '許工的微信聯絡二維碼',
		copy: '複製微信號',
		copied: '微信號已複製',
		failed: '暫時無法自動複製，請選取或長按上方號碼複製。',
		save: '儲存二維碼',
	},
	ko: {
		title: 'WeChat으로 문의하세요',
		name: '쉬 엔지니어 · 许工',
		channel: 'WeChat',
		body: '제품 상담, 솔루션 또는 SDK 연동에 관한 질문은 WeChat으로 문의해 주세요.',
		scan: 'WeChat에서 스캔하여 연락처 추가',
		qrAlt: '쉬 엔지니어의 WeChat 연락처 QR 코드',
		copy: 'WeChat ID 복사',
		copied: 'WeChat ID가 복사되었습니다',
		failed: '자동으로 복사할 수 없습니다. 위 번호를 선택하거나 길게 눌러 복사하세요.',
		save: 'QR 코드 저장',
	},
	ja: {
		title: 'WeChatでご相談ください',
		name: '許エンジニア · 许工',
		channel: 'WeChat',
		body: '製品のご相談、ソリューションやSDK連携に関するご質問は、WeChatでお問い合わせください。',
		scan: 'WeChatでスキャンして連絡先を追加',
		qrAlt: '許エンジニアのWeChat連絡先QRコード',
		copy: 'WeChat IDをコピー',
		copied: 'WeChat IDをコピーしました',
		failed: '自動コピーできませんでした。上の番号を選択するか長押ししてコピーしてください。',
		save: 'QRコードを保存',
	},
} satisfies Record<Locale, Record<string, string>>;

export function getContactCopy(locale: Locale) {
	return contactCopy[locale];
}
