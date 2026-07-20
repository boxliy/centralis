host := "0.0.0.0"
port := "3009"

default:
	@just --list

install:
	pnpm install

dev:
	rm -f .astro/data-store.json .astro/content-assets.mjs
	pnpm astro sync
	pnpm astro dev --host {{host}} --port {{port}}

dev-bg:
	mkdir -p .astro
	rm -f .astro/data-store.json .astro/content-assets.mjs
	pnpm astro sync
	setsid pnpm astro dev --host {{host}} --port {{port}} > .astro/dev.log 2>&1 < /dev/null & echo $! > .astro/dev.pid

dev-stop:
	@if [ -f .astro/dev.pid ]; then kill "$(cat .astro/dev.pid)" && rm .astro/dev.pid; else echo "No dev pid file found"; fi

dev-logs:
	tail -f .astro/dev.log

build:
	pnpm build

preview:
	pnpm astro preview --host {{host}} --port {{port}}
