export function About() {
	return (
		<section id="about" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="01" title="About" />

				<div className="mt-12 grid md:grid-cols-[2fr_1fr] gap-12">
					{/* Bio */}
					<div className="space-y-5 text-foreground-muted leading-relaxed">
						<p>
							I am an energy consultant at{" "}
							<span className="text-accent">LCG Consulting</span>{" "}
							in Los Altos, CA, where I work at the intersection
							of power systems engineering and energy market
							analysis.
						</p>
						<p>
							My research spans the economics of flexible loads in
							wholesale electricity markets, the operational costs
							and benefits of integrating renewable generation,
							and the comparative effectiveness of demand response
							versus distributed energy storage for peak demand
							management.
						</p>
						<p>
							I hold an MS in Electrical Engineering with a
							concentration in Power and Energy from the
							University of North Carolina at Charlotte, where I
							developed methodologies for assessing the value of
							distributed generation and renewable energy
							integration.
						</p>
					</div>

					{/* Quick facts */}
					<div className="space-y-4">
						<QuickFact
							label="Location"
							value="Los Altos, CA"
						/>
						<QuickFact
							label="Focus"
							value="Power Systems & Energy Economics"
						/>
						<QuickFact
							label="ORCID"
							value="0009-0006-5891-9396"
							href="https://orcid.org/0009-0006-5891-9396"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function SectionHeader({ label, title }: { label: string; title: string }) {
	return (
		<div className="flex items-center gap-4">
			<span className="font-mono text-xs text-accent">{label}</span>
			<div className="energy-line flex-1" />
			<h2 className="font-heading text-3xl font-bold tracking-tight">
				{title}
			</h2>
		</div>
	);
}

function QuickFact({
	label,
	value,
	href,
}: {
	label: string;
	value: string;
	href?: string;
}) {
	return (
		<div className="rounded-lg border border-border bg-surface/40 p-4">
			<span className="block text-[10px] uppercase tracking-[0.15em] text-foreground-muted/60 mb-1">
				{label}
			</span>
			{href ? (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-accent hover:underline"
				>
					{value}
				</a>
			) : (
				<span className="text-sm text-foreground">{value}</span>
			)}
		</div>
	);
}

export { SectionHeader };
