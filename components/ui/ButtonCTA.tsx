import Link from "next/link";

interface ButtonCTAProps {
  text: string;
  link: string;
}

export default function ButtonCTA({ text, link }: ButtonCTAProps) {
  return (
    <Link
      href={link}
      className="inline-flex items-center justify-center rounded-lg bg-[#98e73c] px-6 py-3 font-semibold text-[#0b2239] shadow-md transition hover:-translate-y-0.5 hover:bg-[#81d323]"
    >
      {text}
    </Link>
  );
}
