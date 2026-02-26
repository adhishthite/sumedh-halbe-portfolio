"use client";

import { useEffect, useState } from "react";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#publications", label: "Publications" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-background/80 backdrop-blur-xl border-b border-border"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<a
					href="#"
					className="font-display text-xl text-foreground hover:text-accent transition-colors"
				>
					SMH
				</a>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-mono text-xs tracking-wider uppercase text-foreground-muted hover:text-accent transition-colors"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					className="md:hidden text-foreground-muted hover:text-accent transition-colors"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle navigation menu"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						{mobileOpen ? (
							<path d="M6 6l12 12M6 18L18 6" />
						) : (
							<path d="M3 6h18M3 12h18M3 18h18" />
						)}
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border">
					<div className="px-6 py-4 flex flex-col gap-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-mono text-sm tracking-wider uppercase text-foreground-muted hover:text-accent transition-colors"
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
