export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Grid background */}
			<div className="absolute inset-0 grid-bg" />

			{/* Radial gradient overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.06)_0%,_transparent_70%)]" />

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
				{/* Status badge */}
				<div className="animate-fade-up opacity-0 mb-8 inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/50 px-4 py-1.5 text-xs text-foreground-muted backdrop-blur-sm">
					<span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
					Energy Consultant at LCG Consulting
				</div>

				{/* Name */}
				<h1 className="animate-fade-up opacity-0 animate-delay-100 font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
					<span className="text-foreground">Sumedh Milind</span>
					<br />
					<span className="text-accent">Halbe</span>
				</h1>

				{/* Tagline */}
				<p className="animate-fade-up opacity-0 animate-delay-200 mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
					Power systems researcher and energy economist bridging
					engineering rigor with market intelligence to shape the
					future of energy.
				</p>

				{/* Specialties */}
				<div className="animate-fade-up opacity-0 animate-delay-300 mt-8 flex flex-wrap justify-center gap-3">
					{[
						"Power Systems",
						"Energy Economics",
						"Renewable Energy",
						"Demand Response",
					].map((tag) => (
						<span
							key={tag}
							className="rounded border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-foreground-muted"
						>
							{tag}
						</span>
					))}
				</div>

				{/* CTA */}
				<div className="animate-fade-up opacity-0 animate-delay-400 mt-10 flex justify-center gap-4">
					<a
						href="#publications"
						className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:scale-[1.02]"
					>
						View Publications
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M7 1v12M1 7l6 6 6-6" />
						</svg>
					</a>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-lg border border-border-bright px-5 py-2.5 text-sm font-medium text-foreground-muted transition-all hover:border-accent hover:text-accent"
					>
						Get in Touch
					</a>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 animate-delay-500">
				<span className="text-[10px] uppercase tracking-[0.2em] text-foreground-muted/50">
					Scroll
				</span>
				<div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
			</div>
		</section>
	);
}
