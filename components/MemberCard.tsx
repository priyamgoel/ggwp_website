import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface MemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    github: string;
    instagram: string;
    linkedin: string;
  }
}

export default function MemberCard({ member }: MemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-60">
        <Image 
          src={member.image} 
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.role}</p>
        
        <div className="flex space-x-4">
          <Link href={member.github} className="text-gray-700 hover:text-primary transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href={member.instagram} className="text-gray-700 hover:text-primary transition-colors">
            <FaInstagram size={20} />
          </Link>
          <Link 
            href={member.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
