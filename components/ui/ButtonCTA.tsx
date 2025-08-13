interface ButtonCTAProps {
  text: string;
  link: string;
}

export default function ButtonCTA({ text, link }: ButtonCTAProps) {
  return (
    <a
      href={link}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110"
    >
      {text}
    </a>
  );
}
