"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Publications", href: "#publications" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];

export function Nav() {
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
			<div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
				<a
					href="#"
					className="font-heading text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
				>
					SMH
				</a>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm text-foreground-muted hover:text-accent transition-colors duration-200"
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden p-2 text-foreground-muted hover:text-accent transition-colors"
					aria-label="Toggle menu"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
					>
						{mobileOpen ? (
							<path d="M5 5l10 10M15 5L5 15" />
						) : (
							<path d="M3 6h14M3 10h14M3 14h14" />
						)}
					</svg>
				</button>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border">
					<div className="px-6 py-4 flex flex-col gap-4">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setMobileOpen(false)}
								className="text-sm text-foreground-muted hover:text-accent transition-colors"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
