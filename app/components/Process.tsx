const steps = [
	{
		title: "Book an Appointment",
		detail:
			"Give us a call to schedule a visit. We'll set up a time that works for you and gather initial details.",
	},
	{
		title: "Technician Visit",
		detail:
			"Our expert technicians arrive at your doorstep, fully equipped to diagnose and inspect your appliance.",
	},
	{
		title: "Repair & Support",
		detail:
			"We fix the issue efficiently on the spot. If any problems persist, we return to ensure it's made right.",
	},
];

import { PHONE_NUMBER, BRAND_NAME } from "../lib/constants";

export default function Process() {
	return (
		<section id="process" className="px-6 py-14 sm:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="pill bg-ink-900/8 text-ink-900">{BRAND_NAME}</p>
						<h2 className="mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl">
							Simple, fast, and transparent
						</h2>
						<p className="mt-2 max-w-2xl text-lg text-ink-700">
							Built for busy households—minimal disruption, precise
							communication, and 24×7 availability.
						</p>
					</div>
					<a
						href={`tel:${PHONE_NUMBER}`}
						className="cta-button border border-ink-200 bg-white text-ink-900">
						Call {PHONE_NUMBER}
					</a>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{steps.map((step, index) => (
						<div key={step.title} className="glow-card h-full p-5">
							<div className="mb-4 flex items-center justify-between">
								<span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sand-50">
									{String(index + 1).padStart(2, "0")}
								</span>
								<span className="text-xs font-semibold uppercase tracking-wide text-ink-600">
									White-glove
								</span>
							</div>
							<h3 className="text-lg font-semibold text-ink-900">
								{step.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-ink-700">
								{step.detail}
							</p>
							<div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
								<span
									className="h-2 w-2 rounded-full bg-emerald-500"
									aria-hidden
								/>
								On-call now
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
