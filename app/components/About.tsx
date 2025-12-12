import { BRAND_NAME } from "../lib/constants";

export default function About() {
	return (
		<section id="about" className="bg-sand-50 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-8 text-3xl font-bold text-ink-900 sm:text-4xl">
						About {BRAND_NAME}
					</h2>
					<div className="space-y-6 text-lg text-ink-700">
						<p>
							At {BRAND_NAME}, we are dedicated to providing exceptional
							appliance repair and maintenance services right at your doorstep.
							With years of experience in the industry, our team of certified
							technicians is committed to delivering reliable, efficient, and
							professional service.
						</p>
						<p>
							We understand how essential your appliances are to your daily
							life, which is why we prioritize quick response times and quality
							workmanship. Whether it&apos;s a refrigerator, washing machine, or
							any other household appliance, we have the expertise to get it
							running smoothly again.
						</p>
						<p>
							Our mission is simple: to make appliance repair hassle-free and
							accessible for everyone. We believe in transparent pricing, honest
							communication, and customer satisfaction above all else.
						</p>
					</div>
				</div>
				{/* Feature cards below About */}
				<div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
						<div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
							Low Price Guarantee
						</div>
						<h3 className="text-xl font-semibold text-ink-900">
							Honest, Upfront Pricing
						</h3>
						<p className="mt-2 text-ink-700">
							Transparent quotes with no hidden fees. If you find a comparable
							service for less, we&apos;ll match it.
						</p>
					</div>

					<div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
						<div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
							Trust Our Experience
						</div>
						<h3 className="text-xl font-semibold text-ink-900">
							Thousands of Appliances Fixed
						</h3>
						<p className="mt-2 text-ink-700">
							Seasoned technicians with years of field experience and a track
							record of dependable repairs.
						</p>
					</div>

					<div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
						<div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
							Expert Technicians
						</div>
						<h3 className="text-xl font-semibold text-ink-900">
							Skilled & Trusted Experts
						</h3>
						<p className="mt-2 text-ink-700">
							Trained professionals using quality parts and best practices to
							ensure lasting performance.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
