import { SectionHeader } from "./about";

const links = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/sumedh-halbe",
		sublabel: "linkedin.com/in/sumedh-halbe",
		color: "accent",
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: "ORCID",
		href: "https://orcid.org/0009-0006-5891-9396",
		sublabel: "0009-0006-5891-9396",
		color: "green",
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.197-3.722-3.938-3.722h-2.381z" />
			</svg>
		),
	},
];

export function Contact() {
	return (
		<section id="contact" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="05" title="Contact" />

				<div className="mt-12 grid md:grid-cols-[1.5fr_1fr] gap-12">
					<div>
						<p className="text-foreground-muted text-lg leading-relaxed">
							Interested in energy market analysis, research collaboration, or consulting
							opportunities? I would be glad to connect.
						</p>

						<div className="mt-8 space-y-4">
							{links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 p-4 rounded-lg border border-border-bright bg-surface card-glow group"
								>
									<div
										className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
											link.color === "green"
												? "bg-green/18 text-green-dim group-hover:text-green"
												: "bg-accent/18 text-accent-dim group-hover:text-accent"
										}`}
									>
										{link.icon}
									</div>
									<div className="flex-1 min-w-0">
										<span
											className={`font-heading text-sm text-foreground transition-colors ${
												link.color === "green"
													? "group-hover:text-green"
													: "group-hover:text-accent"
											}`}
										>
											{link.label}
										</span>
										<span className="block font-mono text-xs text-foreground-muted/80 truncate">
											{link.sublabel}
										</span>
									</div>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="shrink-0 text-foreground-muted/60 group-hover:text-accent transition-colors"
									>
										<path d="M7 17L17 7M7 7h10v10" />
									</svg>
								</a>
							))}
						</div>
					</div>

					{/* Decorative energy indicator */}
					<div className="hidden md:flex items-center justify-center">
						<div className="relative w-44 h-44">
							<div className="absolute inset-0 rounded-full border border-accent/10" />
							<div className="absolute inset-3 rounded-full border border-accent/15" />
							<div className="absolute inset-6 rounded-full border border-accent/20" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<div className="w-3 h-3 rounded-full bg-accent mx-auto animate-pulse-glow" />
									<span className="block mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-accent/70">
										Available for
									</span>
									<span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-accent/70">
										Collaboration
									</span>
								</div>
							</div>
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-accent/20" />
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 bg-accent/20" />
							<div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-4 bg-accent/20" />
							<div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-4 bg-accent/20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
