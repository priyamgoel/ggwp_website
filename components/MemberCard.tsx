import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface MemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    github: string;
    linkedin: string;
  }
}

export default function MemberCard({ member }: MemberProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-60">
        <Image 
          src={member.image} 
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-xl text-white">{member.name}</h3>
        <p className="text-gray-400 mb-4">{member.role}</p>
        
        <div className="flex space-x-4">
          <Link href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link 
            href={member.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
