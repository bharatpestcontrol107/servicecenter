import Image from "next/image";
import Link from "next/link";
import { PHONE_NUMBER, BRAND_NAME } from "../lib/constants";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-20 border-b border-ink-100/70 bg-sand-50/85 backdrop-blur">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
				<div className="flex items-center gap-3">
					<Image src="/favicon.png" alt="Logo" width={40} height={40} />
					<div>
						<div className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">
							{BRAND_NAME}
						</div>
						<div className="text-xs font-semibold text-ink-600">
							Appliance service at your doorstep
						</div>
					</div>
				</div>
				<nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 sm:flex">
					<Link href="/" className="hover:text-ink-900">
						Home
					</Link>
					<Link href="#about" className="hover:text-ink-900">
						About
					</Link>
					<Link href="#services" className="hover:text-ink-900">
						Services
					</Link>
					<Link href="#contact" className="hover:text-ink-900">
						Contact
					</Link>
					<Link href="/privacy-policy" className="hover:text-ink-900">
						Privacy Policy
					</Link>
				</nav>
				<div className="flex items-center gap-3">
					<a
						href={`tel:${PHONE_NUMBER}`}
						className="cta-button bg-emerald-500 text-ink-900 shadow-md shadow-emerald-500/30">
						Call {PHONE_NUMBER}
					</a>
				</div>
			</div>
		</header>
	);
}
