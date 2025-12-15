import Hero from "./components/Hero";
import Process from "./components/Process";
import ServiceGrid from "./components/ServiceGrid";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Page() {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<ServiceGrid />
			<Process />
			<ContactForm />
			<Footer />
		</main>
	);
}
