// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 text-center font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold">Let’s Connect</h3>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="mailto:shivayogityapi2000@gmail.com"
            className="hover:text-[#F6337C] transition duration-300"
          >
            Email
          </a>
          <a
            href="tel:+919110432899"
            className="hover:text-[#F6337C] transition duration-300"
          >
            +91-9110432899
          </a>
          <a
            href="https://github.com/Shivayogi21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F6337C] transition duration-300"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Shivayogi Tyapi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
