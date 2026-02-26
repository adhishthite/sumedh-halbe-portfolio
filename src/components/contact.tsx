import { SectionHeader } from "./about";

export function Contact() {
	return (
		<section id="contact" className="py-24 px-6">
			<div className="mx-auto max-w-4xl">
				<SectionHeader label="05" title="Contact" />

				<div className="mt-12 text-center">
					<p className="text-foreground-muted text-lg max-w-xl mx-auto leading-relaxed">
						Interested in discussing energy markets, power systems
						research, or potential collaborations? I would love to
						connect.
					</p>

					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<a
							href="https://orcid.org/0009-0006-5891-9396"
							target="_blank"
							rel="noopener noreferrer"
							className="card-glow inline-flex items-center gap-3 rounded-xl border border-border bg-surface/30 px-6 py-4 text-sm text-foreground-muted transition-all hover:text-accent"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="text-green"
							>
								<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.05-2.381 4.05-3.713 0-1.803-1.188-3.731-3.938-3.731h-2.409z" />
							</svg>
							ORCID Profile
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
