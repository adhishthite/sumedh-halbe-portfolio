"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollFadeIn({
	children,
	className = "",
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.style.transitionDelay = `${delay}ms`;
					el.classList.add("visible");
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);

	return (
		<div ref={ref} className={`fade-in-up ${className}`}>
			{children}
		</div>
	);
}

export function SectionHeading({ label, title }: { label: string; title: string }) {
	return (
		<ScrollFadeIn>
			<div className="mb-12">
				<span className="font-mono text-xs tracking-[0.3em] uppercase text-accent/60 block mb-3">
					{label}
				</span>
				<h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
					{title}
				</h2>
				<div className="energy-line mt-4 w-24" />
			</div>
		</ScrollFadeIn>
	);
}
