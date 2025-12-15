import { BRAND_NAME } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="bg-ink-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
				<div>
					<h2 className="text-2xl font-bold mb-6">{BRAND_NAME}</h2>
					<div className="text-base text-ink-200/80 space-y-3">
						<p>
							<span className="font-bold text-white">UDYAM Registration Number:</span> UDYAM-MH-33-0015678
						</p>
						<p>
							<span className="font-bold text-white">Enterprise Name:</span> 24X7 CUSTOMER CARE
						</p>
						<div className="pt-2">
							<p className="font-bold text-white mb-2">Office Address</p>
							<address className="not-italic space-y-1">
								<p>D/2, Manohar Estate, Goregaon East, Near Lodha Tower, Link Road</p>
								<p>Mumbai 400068, Maharashtra, India</p>
							</address>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-ink-200/60">
					&copy; {new Date().getFullYear()} {BRAND_NAME} All rights reserved.
				</div>
			</div>
		</footer>
	);
}
