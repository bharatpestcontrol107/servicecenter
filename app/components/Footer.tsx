import { BRAND_NAME } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="bg-ink-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

				<div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-ink-200/60">
					&copy; {new Date().getFullYear()} {BRAND_NAME} All rights reserved.
				</div>
			</div>
		</footer>
	);
}
