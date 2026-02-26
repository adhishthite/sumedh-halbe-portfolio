export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Grid background */}
			<div className="absolute inset-0 grid-bg" />

			{/* Radial gradient overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.06)_0%,_transparent_70%)]" />

			{/* Top energy line */}
			<div className="absolute top-0 left-0 right-0 energy-line" />

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
				{/* Status badge */}
				<div className="animate-fade-up opacity-0 mb-8 inline-flex items-center gap-2.5 rounded-full border border-border-bright bg-surface/50 px-5 py-2 backdrop-blur-sm">
					<span className="h-2 w-2 rounded-full bg-green animate-pulse-glow" />
					<span className="font-mono text-xs tracking-wider text-foreground-muted">
						Energy Consultant at LCG Consulting
					</span>
				</div>

				{/* Name - using Instrument Serif display font */}
				<h1 className="animate-fade-up opacity-0 animate-delay-100">
					<span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.95] block">
						Sumedh
					</span>
					<span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-accent leading-[0.95] block mt-1">
						Halbe
					</span>
				</h1>

				{/* Tagline */}
				<p className="animate-fade-up opacity-0 animate-delay-200 mt-8 text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
					Powering decisions at the intersection of{" "}
					<span className="text-accent">energy economics</span>,{" "}
					<span className="text-green">renewable systems</span>, and grid modernization.
				</p>

				{/* CTA */}
				<div className="animate-fade-up opacity-0 animate-delay-300 mt-10 flex flex-col sm:flex-row justify-center gap-4">
					<a
						href="#publications"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent font-heading text-sm tracking-wider uppercase rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all"
					>
						View Research
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
						className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border-bright text-foreground-muted font-heading text-sm tracking-wider uppercase rounded-lg hover:border-accent/30 hover:text-accent transition-all"
					>
						Get in Touch
					</a>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 animate-delay-500">
				<span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground-muted/50">
					Scroll
				</span>
				<div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
			</div>
		</section>
	);
}
