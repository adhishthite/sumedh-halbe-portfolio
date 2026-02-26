export function Footer() {
	return (
		<footer className="border-t border-border py-8 px-6">
			<div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted/60">
				<span>
					{new Date().getFullYear()} Sumedh Milind Halbe
				</span>
				<span className="font-mono">
					Built with Next.js & Tailwind CSS
				</span>
			</div>
		</footer>
	);
}
