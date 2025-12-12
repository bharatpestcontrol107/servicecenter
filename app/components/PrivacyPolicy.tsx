import { BRAND_NAME } from "../lib/constants";

export default function PrivacyPolicy() {
	return (
		<section id="process" className="bg-sand-50/85 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
				<div className="mx-auto max-w-4xl">
					<h2 className="mb-8 text-3xl font-bold text-ink-900 sm:text-4xl">
						Privacy Policy
					</h2>
					<div className="space-y-8 text-ink-700">
						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								Information We Collect
							</h3>
							<p className="leading-relaxed">
								We collect information necessary to provide our appliance repair
								services, including your name, contact details, address, and
								details about the appliances requiring service. This information
								is collected when you contact us for service requests or
								appointments.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								How We Use Your Information
							</h3>
							<p className="leading-relaxed">
								Your information is used solely to deliver our services,
								schedule appointments, communicate with you about your service
								requests, and maintain records of services provided. We may also
								use your contact information to send service reminders or
								updates about {BRAND_NAME}.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								Data Protection
							</h3>
							<p className="leading-relaxed">
								We take the security of your personal information seriously. We
								implement appropriate technical and organizational measures to
								protect your data against unauthorized access, alteration,
								disclosure, or destruction.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								Information Sharing
							</h3>
							<p className="leading-relaxed">
								We do not sell, trade, or rent your personal information to
								third parties. Your information may only be shared with our
								technicians as necessary to complete service requests, and they
								are bound by confidentiality agreements.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								Your Rights
							</h3>
							<p className="leading-relaxed">
								You have the right to access, correct, or delete your personal
								information at any time. If you have any questions or concerns
								about our privacy practices, please contact us directly.
							</p>
						</div>

						<div>
							<h3 className="mb-3 text-xl font-semibold text-ink-900">
								Updates to This Policy
							</h3>
							<p className="leading-relaxed">
								We may update this privacy policy from time to time. Any changes
								will be posted on this page with an updated revision date.
							</p>
						</div>

						<p className="mt-8 text-sm text-ink-600">
							Last updated: December 12, 2025
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
