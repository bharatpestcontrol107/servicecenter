import { BRAND_NAME, PHONE_NUMBER } from "../lib/constants";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="bg-sand-50 px-6 py-16 sm:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left side - Content */}
					<div className="space-y-8">
						<div className="animate-fade-in-up">
							<h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
								Expert Care for Your{" "}
								<span className="text-emerald-600">Home Appliances</span>
							</h1>
							<p className="mt-6 text-lg leading-relaxed text-ink-600 sm:text-xl">
								{BRAND_NAME} brings you fast, reliable, and transparent repair
								services. We restore the comfort of your home with certified
								expertise and a commitment to excellence.
							</p>
						</div>

						<div className="flex flex-wrap gap-3 text-sm font-semibold text-ink-700">
							<div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm ring-1 ring-ink-100">
								<svg
									className="h-5 w-5 text-emerald-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Same-Day Service
							</div>
							<div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm ring-1 ring-ink-100">
								<svg
									className="h-5 w-5 text-emerald-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Upfront Pricing
							</div>
						</div>

						<div className="pt-2">
							<a
								href={`tel:${PHONE_NUMBER}`}
								className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
								<svg
									className="h-5 w-5 transition-transform group-hover:rotate-12"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								Book a Repair Now
								<span className="ml-1 opacity-70">|</span>
								<span className="font-normal opacity-90">{PHONE_NUMBER}</span>
							</a>
							<p className="mt-4 text-sm text-ink-500">
								Are you a technician?{" "}
								<a
									href={`tel:${PHONE_NUMBER}`}
									className="font-semibold text-emerald-600 hover:underline">
									Join our team
								</a>
							</p>
						</div>
					</div>

					{/* Right side - Image */}
					<div className="relative h-96 lg:h-[32rem] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink-900/5">
						<Image
							src="/hero.png"
							alt="Professional Technician"
							fill
							className="object-cover transition-transform duration-700 hover:scale-105"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
