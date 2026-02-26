import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Publications } from "@/components/publications";

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<hr className="section-divider" />
				<About />
				<hr className="section-divider" />
				<Experience />
				<hr className="section-divider" />
				<Publications />
				<hr className="section-divider" />
				<Education />
				<hr className="section-divider" />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
