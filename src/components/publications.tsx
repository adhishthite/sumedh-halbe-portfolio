import { SectionHeader } from "./about";

const PUBLICATIONS = [
	{
		title:
			"Economic Impacts of Price-Sensitive Loads in ERCOT: Quantifying Effects of Large Flexible Loads",
		journal: "IEEE Power and Energy Magazine",
		year: "2025",
		coAuthors: ["Sidart Deb", "Keith Dsouza", "Micah Thomas"],
		status: "published" as const,
	},
	{
		title:
			"A comprehensive methodology for assessing the costs and benefits of renewable generation on utility operations",
		journal: "Renewable Energy",
		year: "2021",
		coAuthors: [
			"Badrul Chowdhury",
			"Mesut E. Baran",
			"Peter Schwarz",
			"Autumn Proudlove",
		],
		status: "published" as const,
	},
	{
		title: "The challenges of valuing distributed generation",
		journal: null,
		year: null,
		coAuthors: [],
		status: "forthcoming" as const,
	},
	{
		title:
			"Comparison of Peak Demand Shaving Potential of Demand Response and Distributed Energy Storage in Residential Buildings",
		journal: null,
		year: null,
		coAuthors: [],
		status: "forthcoming" as const,
	},
];

export function Publications() {
	return (
		<section id="publications" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="03" title="Publications" />

				<div className="mt-12 space-y-4">
					{PUBLICATIONS.map((pub, i) => (
						<article
							key={pub.title}
							className="card-glow group rounded-xl border border-border bg-surface/30 p-6 md:p-8"
						>
							<div className="flex items-start gap-4">
								{/* Index */}
								<span className="hidden sm:flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border border-border bg-background font-mono text-xs text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>

								<div className="flex-1 min-w-0">
									<h3 className="font-heading text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
										{pub.title}
									</h3>

									<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-muted">
										{pub.journal && (
											<span className="italic text-accent-dim">
												{pub.journal}
											</span>
										)}
										{pub.year && <span>{pub.year}</span>}
										{pub.status === "forthcoming" && (
											<span className="rounded bg-accent-glow text-accent px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
												Forthcoming
											</span>
										)}
									</div>

									{pub.coAuthors.length > 0 && (
										<p className="mt-2 text-xs text-foreground-muted/70">
											Co-authors:{" "}
											{pub.coAuthors.join(", ")}
										</p>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
