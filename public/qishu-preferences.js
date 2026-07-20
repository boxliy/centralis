(function () {
	const themeKey = 'qishu-theme';
	const starlightThemeKey = 'starlight-theme';
	const localeKey = 'qishu-locale';
	const localeSourceKey = 'qishu-locale-source';
	const locales = ['zh-hans', 'zh-hant', 'en', 'ko', 'ja'];
	const localePaths = {
		'zh-hans': { home: '/zh-hans/', docs: '/zh-hans/docs/' },
		'zh-hant': { home: '/zh-hant/', docs: '/zh-hant/docs/' },
		en: { home: '/', docs: '/docs/' },
		ko: { home: '/ko/', docs: '/ko/docs/' },
		ja: { home: '/ja/', docs: '/ja/docs/' },
	};
	const docsPrefixes = [
		['zh-hant', '/zh-hant/docs/'],
		['zh-hans', '/zh-hans/docs/'],
		['ko', '/ko/docs/'],
		['ja', '/ja/docs/'],
		['en', '/docs/'],
	];
	const homePaths = new Map(locales.map((locale) => [localePaths[locale].home, locale]));
	let mirroringTheme = false;

	function normalizeTheme(value) {
		return value === 'light' || value === 'dark' || value === 'system' ? value : null;
	}

	function starlightToTheme(value) {
		return value === 'light' || value === 'dark' ? value : 'system';
	}

	function themeToStarlight(value) {
		return value === 'light' || value === 'dark' ? value : '';
	}

	function normalizeLocale(value) {
		if (!value) return null;
		const lower = String(value).toLowerCase();
		const aliases = {
			zh: 'zh-hans',
			root: 'en',
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
		return aliases[lower] || null;
	}

	function getBrowserLocale() {
		const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
		for (const language of preferred) {
			const normalized = normalizeLocale(language);
			if (normalized) return normalized;
			const primary = String(language || '').split('-')[0];
			const fallback = normalizeLocale(primary);
			if (fallback) return fallback;
		}
		return 'en';
	}

	function setStoredLocale(locale, source) {
		if (!locales.includes(locale)) return;
		localStorage.setItem(localeKey, locale);
		if (source) localStorage.setItem(localeSourceKey, source);
	}

	function getCurrentLocale(pathname) {
		for (const [locale, prefix] of docsPrefixes) {
			if (pathname === prefix || pathname.startsWith(prefix)) {
				return { locale, surface: 'docs', explicit: locale !== 'en', prefix };
			}
		}
		const homeLocale = homePaths.get(pathname);
		if (homeLocale) return { locale: homeLocale, surface: 'home', explicit: homeLocale !== 'en', prefix: pathname };
		return null;
	}

	function getLocalizedPath(current, targetLocale, pathname) {
		const target = localePaths[targetLocale];
		if (!target) return null;
		if (current.surface === 'home') return target.home;
		const rest = pathname.slice(current.prefix.length);
		return target.docs + rest;
	}

	function syncThemeStorage() {
		const qishuTheme = normalizeTheme(localStorage.getItem(themeKey));
		const starlightTheme = localStorage.getItem(starlightThemeKey);
		const mode = qishuTheme || starlightToTheme(starlightTheme);
		mirroringTheme = true;
		localStorage.setItem(themeKey, mode);
		localStorage.setItem(starlightThemeKey, themeToStarlight(mode));
		mirroringTheme = false;
	}

	function syncLocaleFromPath() {
		const current = getCurrentLocale(window.location.pathname);
		if (!current) return;
		const explicitParam = normalizeLocale(new URLSearchParams(window.location.search).get('hl'));
		if (explicitParam) {
			setStoredLocale(explicitParam, 'manual');
			const nextPath = getLocalizedPath(current, explicitParam, window.location.pathname);
			if (nextPath && nextPath !== window.location.pathname) {
				window.location.replace(nextPath + window.location.hash);
				return;
			}
		}
		if (!current.explicit) {
			const stored = normalizeLocale(localStorage.getItem(localeKey));
			const hasManualLocale = localStorage.getItem(localeSourceKey) === 'manual';
			const target = hasManualLocale && stored ? stored : getBrowserLocale();
			if (target && target !== 'en') {
				const nextPath = getLocalizedPath(current, target, window.location.pathname);
				if (nextPath && nextPath !== window.location.pathname) {
					window.location.replace(nextPath + window.location.search + window.location.hash);
					return;
				}
			}
			setStoredLocale('en', hasManualLocale ? 'manual' : 'auto');
			return;
		}
		setStoredLocale(current.locale, 'manual');
	}

	function updateFirstTextNode(element, value) {
		if (!element) return;
		const node = Array.from(element.childNodes).find((item) => item.nodeType === Node.TEXT_NODE);
		if (node) node.nodeValue = value;
		else element.prepend(document.createTextNode(value));
	}

	function localizeDocsChrome() {
		const current = getCurrentLocale(window.location.pathname);
		if (!current || current.surface !== 'docs') return;
		const labels = {
			'zh-hans': {
				onThisPage: '本页目录',
				overview: '概览',
				previous: '上一页',
				next: '下一页',
			},
			'zh-hant': {
				onThisPage: '本頁目錄',
				overview: '概覽',
				previous: '上一頁',
				next: '下一頁',
			},
		}[current.locale];
		if (!labels) return;
		document.querySelectorAll('#starlight__on-this-page, #starlight__on-this-page--mobile .toggle').forEach((element) => {
			updateFirstTextNode(element, labels.onThisPage);
		});
		document.querySelectorAll('starlight-toc a[href="#_top"] span, mobile-starlight-toc a[href="#_top"] span').forEach((element) => {
			element.textContent = labels.overview;
		});
		updateFirstTextNode(document.querySelector('.pagination-links a[rel="prev"] > span'), labels.previous);
		updateFirstTextNode(document.querySelector('.pagination-links a[rel="next"] > span'), labels.next);
	}

	try {
		syncThemeStorage();
		syncLocaleFromPath();
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', localizeDocsChrome, { once: true });
		} else {
			localizeDocsChrome();
		}

		const setItem = localStorage.setItem.bind(localStorage);
		localStorage.setItem = function (key, value) {
			setItem(key, value);
			if (mirroringTheme) return;
			if (key === themeKey) {
				const mode = normalizeTheme(value) || 'system';
				mirroringTheme = true;
				setItem(starlightThemeKey, themeToStarlight(mode));
				mirroringTheme = false;
			}
			if (key === starlightThemeKey) {
				const mode = starlightToTheme(value);
				mirroringTheme = true;
				setItem(themeKey, mode);
				mirroringTheme = false;
			}
		};

		document.addEventListener('click', function (event) {
			const link = event.target instanceof Element ? event.target.closest('[data-lang]') : null;
			const locale = normalizeLocale(link && link.getAttribute('data-lang'));
			if (locale) setStoredLocale(locale, 'manual');
		}, true);

		document.addEventListener('change', function (event) {
			const select = event.target;
			if (!(select instanceof HTMLSelectElement)) return;
			if (!select.closest('starlight-lang-select')) return;
			const current = getCurrentLocale(select.value);
			if (current) setStoredLocale(current.locale, 'manual');
		}, true);
	} catch {
		// Preference sync should never block rendering.
	}
})();
