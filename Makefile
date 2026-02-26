.PHONY: install format lint check test clean dev build

install:
	bun install

format:
	bun run format

lint:
	bun run lint

check:
	bun run check

test:
	@echo "No tests configured yet"

clean:
	rm -rf .next node_modules

dev:
	bun run dev

build:
	bun run build
