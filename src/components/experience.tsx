import { SectionHeader } from "./about";

const EXPERIENCES = [
	{
		title: "Energy Consultant",
		company: "LCG Consulting",
		location: "Los Altos, CA",
		period: "Present",
		current: true,
		description:
			"Developing energy market simulations and economic analyses for power systems. Quantifying the impacts of large flexible loads on wholesale electricity markets, including ERCOT. Supporting utility and regulatory clients with data-driven insights on grid modernization and renewable integration.",
		tags: ["Energy Markets", "ERCOT", "Power Systems", "Economic Analysis"],
	},
	{
		title: "Graduate Research Assistant",
		company: "UNC Charlotte - EPIC Lab",
		location: "Charlotte, NC",
		period: "2019 - 2021",
		current: false,
		description:
			"Conducted research on costs and benefits of renewable generation on utility operations. Developed comprehensive methodologies for valuing distributed energy resources. Analyzed demand response and distributed energy storage for peak demand shaving in residential buildings.",
		tags: ["Renewable Energy", "DER Valuation", "Demand Response", "Research"],
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
							className="card-glow rounded-xl border border-border-bright bg-surface p-6 md:p-8"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
								<div>
									<h3 className="font-heading text-xl font-semibold text-foreground">
										{exp.title}
									</h3>
									<p className="text-accent text-sm mt-0.5">{exp.company}</p>
								</div>
								<div className="flex items-center gap-2 text-xs text-foreground-muted shrink-0">
									<span>{exp.location}</span>
									<span className="text-border-bright">|</span>
									{exp.current ? (
										<span className="inline-flex items-center gap-1.5 font-mono text-green">
											<span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-glow" />
											{exp.period}
										</span>
									) : (
										<span className="font-mono text-foreground-muted/80">{exp.period}</span>
									)}
								</div>
							</div>

							<p className="text-foreground-muted leading-relaxed text-sm">{exp.description}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{exp.tags.map((tag) => (
									<span
										key={tag}
										className="rounded border border-border-bright bg-surface-elevated/80 px-2.5 py-0.5 text-[11px] font-mono text-foreground-muted"
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
