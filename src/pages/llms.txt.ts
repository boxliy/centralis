import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const origin = site?.origin ?? 'https://qishusolution.com';
	const body = `# Qishu Technology

> Qishu Technology helps teams develop thermal printing products and related smart hardware, covering product definition, hardware design, PCBA, firmware, drivers, apps, SDKs, desktop software, and production coordination.

## Website

- Homepage: ${origin}/
- Simplified Chinese: ${origin}/zh-hans/
- Traditional Chinese: ${origin}/zh-hant/
- Korean: ${origin}/ko/
- Japanese: ${origin}/ja/

## Documentation

- Qishu Archives: ${origin}/docs/
- Printer SDK: ${origin}/docs/sdk/
- Driver: ${origin}/docs/driver/
- Firmware: ${origin}/docs/firmware/

## Contact

- Email: hello@qishusolution.com
- Company: Quanzhou Qishu Technology Co., Ltd.
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
