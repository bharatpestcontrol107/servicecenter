export default function Footer() {
	return (
		<footer className="bg-ink-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Main Footer Info */}
					<div>
						<h3 className="text-lg font-bold">Advertiser Verification Proof</h3>
						<div className="mt-4 space-y-2 text-sm text-ink-200">
							<p>
								<span className="font-semibold text-white">
									GST Licence number:
								</span>{" "}
								27BAQPV2769C2Z4
							</p>
							<p>
								<span className="font-semibold text-white">Company Name:</span>{" "}
								SS Services
							</p>
						</div>
					</div>

					{/* Disclaimer */}
					<div>
						<p className="text-sm leading-relaxed text-ink-200/80">
							We are an independent service provider and are not authorized
							associate partners from any brands. Local repair vendors perform
							all service calls and repairs (note we don't hold any
							authorization of ).
						</p>
					</div>
				</div>

				<div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-ink-200/60">
					&copy; {new Date().getFullYear()} SS Services. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
