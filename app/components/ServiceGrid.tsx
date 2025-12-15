"use client";

import Image from "next/image";
import { PHONE_NUMBER } from "../lib/constants";

type Service = {
	title: string;
	summary: string;
	tags: string[];
	image: string;
};

const services: Service[] = [
	{
		title: "Microwave",
		summary:
			"Control board checks, magnetron diagnostics, and safe door latch repairs.",
		tags: ["Built-in", "Countertop"],
		image: "/microwave.jpg",
	},
	{
		title: "Dishwasher",
		summary:
			"Spray arm and drain troubleshooting, leak prevention, and quiet cycle tuning.",
		tags: ["Under-counter", "Drawer"],
		image: "/dishwasher.png",
	},
	{
		title: "Washing Machine & Dryer",
		summary:
			"Vibration fixes, pump unclogs, heat loss, and airflow improvement for lint paths.",
		tags: ["Front-load", "Top-load", "Stacked"],
		image: "/washing_machine.png",
	},
	{
		title: "Refrigerator",
		summary:
			"Gasket swaps, temperature stability, sealed system checks, and ice maker rebuilds.",
		tags: ["French door", "Side-by-side", "Freezer"],
		image: "/fridge.jpg",
	},
	{
		title: "AC",
		summary:
			"Condenser refresh, condensate fixes, and ductless mini-split tuning for quiet comfort.",
		tags: ["Ductless", "Window", "Split"],
		image: "/ac.jpg",
	},
	{
		title: "TV",
		summary:
			"Panel inspection, power board diagnostics, and setup assistance for a clean living room experience.",
		tags: ["LED", "OLED", "Smart"],
		image: "/tv.png",
	},
];

export default function ServiceGrid() {
	const handleCardClick = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="services" className="bg-sand-50 px-6 py-14 sm:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h2 className="mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl">
							Appliances We Repair
						</h2>
						<p className="mt-2 max-w-2xl text-lg text-ink-700">
							Our skilled technicians arrive quickly with the right parts to get
							your appliances working again.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<a
							href={`tel:${PHONE_NUMBER}`}
							className="cta-button border border-ink-200 bg-white text-ink-900">
							Call {PHONE_NUMBER}
						</a>
					</div>
				</div>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<article
							key={service.title}
							onClick={handleCardClick}
							className="glow-card h-full overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-105">
							<div className="relative h-48 w-full bg-ink-100">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
							</div>
							<div className="flex flex-col grow p-6 sm:p-7">
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-semibold text-ink-900">
										{service.title}
									</h3>
								</div>
								<p className="mt-3 text-base leading-relaxed text-ink-700 grow">
									{service.summary}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{service.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700">
											{tag}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
