export default function ButtonCTA({ text, link }) {
    return (
        <a
            href={link}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
        >
            {text}
        </a>
    );
}
