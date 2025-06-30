import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
	return (
		<div className="min-h-screen relative">
			{/* Descripción centrada en X e Y */}
			<section className="absolute inset-0 flex items-center justify-center">
				<div className="text-left text-sm sm:text-base leading-relaxed font-[family-name:var(--font-geist-mono)] tracking-tight">
					Decker Urbano
					<br />
					CTO{" "}
					<Link
						className="hover:underline hover:underline-offset-4"
						href="https://commet.co"
						target="_blank"
						rel="noopener noreferrer"
					>
						@Commet
					</Link>
					<br />
					Open source contributor
					<br />
					Startup enthusiast
				</div>
			</section>

			{/* Cards más chicas y posicionadas arriba de los links */}
			<section className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-md px-6">
				<div className="grid gap-2 mx-auto">
					<Link
						href="https://commet.co"
						target="_blank"
						rel="noopener noreferrer"
						className="group border border-gray-800 rounded-lg p-3 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center min-h-[60px]"
					>
						<div className="text-center">
							<h3 className="text-xs sm:text-sm font-medium font-[family-name:var(--font-geist-mono)] tracking-tight group-hover:text-gray-300 transition-colors">
								Commet
							</h3>
							<p className="text-xs text-gray-500 mt-1">
								Smart commission automation for sales teams
							</p>
						</div>
					</Link>

					{/* Bottom row - Two projects side by side */}
					<div className="grid grid-cols-2 gap-2">
						<Link
							href="https://better-analytics.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="group border border-gray-800 rounded-lg p-3 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center min-h-[60px]"
						>
							<div className="text-center">
								<h3 className="text-xs font-medium font-[family-name:var(--font-geist-mono)] tracking-tight group-hover:text-gray-300 transition-colors">
									Better Analytics
								</h3>
								<p className="text-xs text-gray-500 mt-1">Analytics tool</p>
							</div>
						</Link>

						<Link
							href="https://mystic.lat/"
							target="_blank"
							rel="noopener noreferrer"
							className="group border border-gray-800 rounded-lg p-3 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center min-h-[60px]"
						>
							<div className="text-center">
								<h3 className="text-xs font-medium font-[family-name:var(--font-geist-mono)] tracking-tight group-hover:text-gray-300 transition-colors">
									Mystic
								</h3>
								<p className="text-xs text-gray-500 mt-1">Development tool</p>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* Links pegados al borde inferior */}
			<section className="absolute bottom-0 left-0 right-0 p-6 flex gap-6 flex-wrap items-center justify-center">
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/decker-urbano/"
				>
					<FaLinkedinIn size={16} />
					LinkedIn
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
					href="https://github.com/decker-dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={16} />
					GitHub
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
					href="https://x.com/0xDecker"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaXTwitter size={16} />
					Twitter
				</Link>
			</section>
		</div>
	);
}
