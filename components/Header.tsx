import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Using the existing image file in the public directory - with larger dimensions */}
          <div className="relative w-24 h-16">
            <Image 
              src="/ChatGPT Image Apr 4, 2025, 05_10_45 PM.png" 
              alt="GGWP Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#home" className="text-white hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#team" className="text-white hover:text-primary transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
