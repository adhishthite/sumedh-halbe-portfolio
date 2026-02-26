import { SectionHeader } from "./about";

export function Education() {
	return (
		<section id="education" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="04" title="Education" />

				<div className="mt-12">
					<div className="card-glow rounded-xl border border-border bg-surface/30 p-6 md:p-8">
						<div className="flex flex-col md:flex-row md:items-start gap-6">
							{/* Degree icon */}
							<div className="shrink-0 h-14 w-14 rounded-xl border border-border-bright bg-accent-glow flex items-center justify-center">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									className="text-accent"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5z" />
									<path d="M2 17l10 5 10-5" />
									<path d="M2 12l10 5 10-5" />
								</svg>
							</div>

							<div className="flex-1">
								<h3 className="font-heading text-xl font-semibold text-foreground">
									Master of Science in Electrical Engineering
								</h3>
								<p className="text-accent text-sm mt-1">
									University of North Carolina at Charlotte
								</p>

								<div className="mt-3 flex flex-wrap gap-3 text-xs text-foreground-muted">
									<span className="inline-flex items-center gap-1.5">
										<span className="h-1 w-1 rounded-full bg-green" />
										Concentration: Power & Energy
									</span>
								</div>

								<div className="mt-5">
									<span className="block text-[10px] uppercase tracking-[0.15em] text-foreground-muted/60 mb-2">
										Research Areas
									</span>
									<div className="flex flex-wrap gap-2">
										{[
											"Power Systems Analysis",
											"Renewable Integration",
											"Distributed Generation",
											"Energy Storage",
											"Demand Response",
											"Grid Optimization",
										].map((area) => (
											<span
												key={area}
												className="rounded border border-border bg-background px-2.5 py-0.5 text-[11px] font-mono text-foreground-muted"
											>
												{area}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
