"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Publications", href: "#publications" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];

const SunIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="5" />
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</svg>
);

const MoonIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
);

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
	return (
		<button
			type="button"
			onClick={onToggle}
			className="p-2 text-foreground-muted hover:text-accent transition-colors"
			aria-label="Toggle theme"
		>
			{isDark ? <SunIcon /> : <MoonIcon />}
		</button>
	);
}

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		setIsDark(!document.documentElement.classList.contains("light"));
	}, []);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function toggleTheme() {
		const next = isDark ? "light" : "dark";
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(next);
		localStorage.setItem("theme", next);
		setIsDark(!isDark);
	}

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
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
					<ThemeToggle isDark={isDark} onToggle={toggleTheme} />
				</div>

				{/* Mobile controls */}
				<div className="md:hidden flex items-center gap-2">
					<ThemeToggle isDark={isDark} onToggle={toggleTheme} />
					<button
						type="button"
						onClick={() => setMobileOpen(!mobileOpen)}
						className="p-2 text-foreground-muted hover:text-accent transition-colors"
						aria-label="Toggle menu"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-hidden="true"
						>
							{mobileOpen ? (
								<path d="M5 5l10 10M15 5L5 15" />
							) : (
								<path d="M3 6h14M3 10h14M3 14h14" />
							)}
						</svg>
					</button>
				</div>
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
