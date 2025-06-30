import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-30">
				<div className="text-base/6 text-balance sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em]">
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
			</main>

			{/* Projects Section */}
			<section className="row-start-3 flex justify-center">
				<div className="grid grid-rows-2 gap-3 h-[200px] w-[400px]">
					{/* Commet - Full width top row */}
					<Link
						href="https://commet.co"
						target="_blank"
						rel="noopener noreferrer"
						className="group border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center"
					>
						<div className="text-center">
							<h3 className="text-base font-medium font-[family-name:var(--font-geist-mono)] tracking-[-.01em] group-hover:text-gray-300 transition-colors">
								Commet
							</h3>
							<p className="text-xs text-gray-500 mt-1">
								Smart commission automation for sales teams
							</p>
						</div>
					</Link>

					{/* Bottom row - Two projects side by side */}
					<div className="grid grid-cols-2 gap-3">
						<Link
							href="https://better-analytics.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center"
						>
							<div className="text-center">
								<h3 className="text-sm font-medium font-[family-name:var(--font-geist-mono)] tracking-[-.01em] group-hover:text-gray-300 transition-colors">
									Better Analytics
								</h3>
								<p className="text-xs text-gray-500 mt-1">Analytics tool</p>
							</div>
						</Link>

						<Link
							href="https://mystic.lat"
							target="_blank"
							rel="noopener noreferrer"
							className="group border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors duration-200 flex items-center justify-center"
						>
							<div className="text-center">
								<h3 className="text-sm font-medium font-[family-name:var(--font-geist-mono)] tracking-[-.01em] group-hover:text-gray-300 transition-colors">
									Mystic
								</h3>
								<p className="text-xs text-gray-500 mt-1">
                  Wyzard game
								</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/decker-urbano/"
				>
					<FaLinkedinIn size={16} />
					LinkedIn
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://github.com/decker-dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={16} />
					GitHub
				</Link>
				<Link
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://x.com/0xDecker"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaXTwitter size={16} />
					Twitter
				</Link>
			</footer>
		</div>
	);
}
