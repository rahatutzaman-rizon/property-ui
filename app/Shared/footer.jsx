import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm sm:text-base">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-green-500 text-lg sm:text-xl font-bold mb-2 sm:mb-4">JMC Group</h2>
            <p>JMC Asset Management Ltd.</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-2 sm:mb-4">Address</h3>
            <p>MN Tower, House# F-6/1A,</p>
            <p>Aftabnagar, Road# 6A,</p>
            <p>Dhaka-1212,</p>
            <p>Bangladesh</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-2 sm:mb-4">Navigate</h3>
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <Link href="/about" className="hover:text-green-500 transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="hover:text-green-500 transition-colors">
                Projects
              </Link>
              <Link href="/achievements" className="hover:text-green-500 transition-colors">
                Our Achievements
              </Link>
              <Link href="/contacts" className="hover:text-green-500 transition-colors">
                Contacts
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-2 sm:mb-4">Hotline</h3>
            <p>+880 1234 56789</p>
            <p>jmc.asset@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}