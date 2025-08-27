import Link from "next/link";

interface ButtonCTAProps {
  text: string;
  link: string;
}

export default function ButtonCTA({ text, link }: ButtonCTAProps) {
  return (
    <Link
      href={{
        pathname: link,
        query: { name: link },
      }}
      className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
    >
      <button className="bg-[#98e73c] hover:bg-[#81d323] text-black px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105">
        {text}
      </button>
    </Link>
  );
}
