import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-base/6 text-balance sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em]">
          Decker Urbano
          <br />
          CTO <Link className="hover:underline hover:underline-offset-4" href="https://commet.co" target="_blank" rel="noopener noreferrer">@Commet</Link>
          <br />
          Open source contributor
          <br />
          Startup enthusiast
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
