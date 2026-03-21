import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider">
          ClinicSelect
        </Link>
        <nav className="flex space-x-4 md:space-x-6 text-base md:text-lg">
          <Link href="/" className="hover:text-primary-light transition">ホーム</Link>
        </nav>
      </div>
    </header>
  );
}
