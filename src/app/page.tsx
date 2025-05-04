import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Decker Urbano
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
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
          href="mailto:me@decker.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdMail size={16} />
          Email
        </Link>
      </footer>
    </div>
  );
}
