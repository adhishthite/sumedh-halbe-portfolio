import { SectionHeader } from "./about";

const PUBLICATIONS = [
	{
		title:
			"Economic Impacts of Price-Sensitive Loads in ERCOT: Quantifying Effects of Large Flexible Loads",
		journal: "IEEE Power and Energy Magazine",
		year: "2025",
		coAuthors: ["Sidart Deb", "Keith Dsouza", "Micah Thomas"],
		peerReviewed: true,
	},
	{
		title:
			"A comprehensive methodology for assessing the costs and benefits of renewable generation on utility operations",
		journal: "Renewable Energy",
		year: "2021",
		coAuthors: ["Badrul Chowdhury", "Mesut E. Baran", "Peter Schwarz", "Autumn Proudlove"],
		peerReviewed: true,
	},
	{
		title: "The challenges of valuing distributed generation",
		journal: null,
		year: null,
		coAuthors: [],
		peerReviewed: false,
	},
	{
		title:
			"Comparison of Peak Demand Shaving Potential of Demand Response and Distributed Energy Storage in Residential Buildings",
		journal: null,
		year: null,
		coAuthors: [],
		peerReviewed: false,
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
							className={`card-glow group relative rounded-xl border p-6 md:p-8 ${
								pub.peerReviewed
									? "border-accent/35 bg-accent/10"
									: "border-border-bright bg-surface"
							}`}
						>
							{/* Peer reviewed badge */}
							{pub.peerReviewed && (
								<div className="absolute top-0 right-6 -translate-y-1/2">
									<span className="px-3 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-accent/20 text-accent-dim border border-accent/40 rounded-full">
										Peer Reviewed
									</span>
								</div>
							)}

							<div className="flex items-start gap-4">
								{/* Index */}
								<span className="hidden sm:flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border border-border-bright bg-surface-elevated/80 font-mono text-xs text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>

								<div className="flex-1 min-w-0">
									<h3 className="font-heading text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
										{pub.title}
									</h3>

									<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-muted">
										{pub.journal && (
											<span className="font-display italic text-accent/80">{pub.journal}</span>
										)}
										{pub.year && <span className="font-mono">{pub.year}</span>}
									</div>

									{pub.coAuthors.length > 0 && (
										<p className="mt-2 text-xs text-foreground-muted/70">
											<span className="text-foreground-muted/70">with </span>
											{pub.coAuthors.join(", ")}
										</p>
									)}
								</div>
							</div>
						</article>
					))}
				</div>

				{/* ORCID */}
				<div className="mt-10 flex items-center gap-3">
					<div className="w-1.5 h-1.5 rounded-full bg-green" />
					<span className="font-mono text-xs text-foreground-muted">
						ORCID:{" "}
						<a
							href="https://orcid.org/0009-0006-5891-9396"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline underline-offset-4"
						>
							0009-0006-5891-9396
						</a>
					</span>
				</div>
			</div>
		</section>
	);
}
