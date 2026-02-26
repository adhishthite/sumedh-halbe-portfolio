.PHONY: install dev build start format lint check clean

install:
	bun install

dev:
	bun run dev

build:
	bun run build

start:
	bun run start

format:
	bun run format

lint:
	bun run lint

check:
	bun run check

clean:
	rm -rf .next node_modules
