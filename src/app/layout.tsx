import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Outfit, Sora } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-instrument-serif",
	display: "swap",
});

const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	display: "swap",
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Sumedh Milind Halbe | Energy Consultant & Researcher",
	description:
		"Portfolio of Sumedh Milind Halbe - Energy Consultant at LCG Consulting specializing in power systems, energy economics, and renewable energy research.",
	keywords: [
		"energy consultant",
		"power systems",
		"renewable energy",
		"demand response",
		"energy economics",
		"ERCOT",
		"LCG Consulting",
	],
	authors: [{ name: "Sumedh Milind Halbe" }],
	openGraph: {
		title: "Sumedh Milind Halbe | Energy Consultant & Researcher",
		description:
			"Energy Consultant at LCG Consulting. MS in Electrical Engineering from UNC Charlotte. Researcher in power systems and energy economics.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${instrumentSerif.variable} ${sora.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
			>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`,
					}}
				/>
				{children}
			</body>
		</html>
	);
}
