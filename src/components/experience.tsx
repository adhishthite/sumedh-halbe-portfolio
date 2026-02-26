import { SectionHeader } from "./about";

const EXPERIENCES = [
	{
		title: "Energy Consultant",
		company: "LCG Consulting",
		location: "Los Altos, CA",
		period: "Present",
		description:
			"Conducting power systems analysis and energy market consulting. Specializing in modeling the economic impacts of flexible loads, renewable integration, and demand response in wholesale electricity markets including ERCOT.",
		tags: ["Energy Markets", "ERCOT", "Power Systems", "Consulting"],
	},
];

export function Experience() {
	return (
		<section id="experience" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="02" title="Experience" />

				<div className="mt-12 space-y-6">
					{EXPERIENCES.map((exp) => (
						<div
							key={`${exp.company}-${exp.title}`}
							className="card-glow rounded-xl border border-border bg-surface/30 p-6 md:p-8"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
								<div>
									<h3 className="font-heading text-xl font-semibold text-foreground">
										{exp.title}
									</h3>
									<p className="text-accent text-sm mt-0.5">
										{exp.company}
									</p>
								</div>
								<div className="flex items-center gap-2 text-xs text-foreground-muted shrink-0">
									<span>{exp.location}</span>
									<span className="text-border-bright">
										|
									</span>
									<span className="font-mono text-green">
										{exp.period}
									</span>
								</div>
							</div>

							<p className="text-foreground-muted leading-relaxed text-sm">
								{exp.description}
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{exp.tags.map((tag) => (
									<span
										key={tag}
										className="rounded border border-border bg-background px-2.5 py-0.5 text-[11px] font-mono text-foreground-muted"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
