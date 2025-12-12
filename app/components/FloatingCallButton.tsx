import { PHONE_NUMBER } from "../lib/constants";

export default function FloatingCallButton() {
	return (
		<a
			href={`tel:${PHONE_NUMBER}`}
			className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-xl transition-all hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
			aria-label="Call Now">
			<span className="relative flex h-6 w-6">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
				<span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600">
					<svg
						className="h-4 w-4 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</span>
			</span>
			<span className="font-bold">Call Now</span>
		</a>
	);
}
