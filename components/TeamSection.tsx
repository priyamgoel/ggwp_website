import MemberCard from './MemberCard';

export default function TeamSection() {
  // Updated team member data with information from team_member_info.txt
  const teamMembers = [
    {
      id: 1,
      name: 'Priyam Goel',
      role: 'Team Member',
      image: '/person1_priyamgoel_profile_photo.jpg', // Using the actual profile photo
      github: 'https://github.com/priyamgoel',
      linkedin: 'https://www.linkedin.com/in/priyam-goel-b517652b0/'
    },
    {
      id: 2,
      name: 'Krishiv Garg',
      role: 'Team Member',
      image: 'https://ui-avatars.com/api/?name=Krishiv+Garg&background=4338ca&color=fff&size=150',
      github: 'https://github.com/KrishivGarg',
      linkedin: 'https://www.linkedin.com/in/krishiv-garg-6a7937322/'
    },
    {
      id: 3,
      name: 'Harshit Goyal',
      role: 'Team Member',
      image: 'https://ui-avatars.com/api/?name=Harshit+Goyal&background=4338ca&color=fff&size=150',
      github: 'https://github.com/priyamgoel',
      linkedin: 'https://www.linkedin.com/in/harshit-goyal-95aa1a206/'
    },
    {
      id: 4,
      name: 'Mani Gemini',
      role: 'Team Member',
      image: 'https://ui-avatars.com/api/?name=Mani+Gemini&background=4338ca&color=fff&size=150',
      github: 'https://github.com/priyamgoel',
      linkedin: 'https://www.linkedin.com/in/mani-gemini-13596635a'
    },
  ];

  return (
    <section id="team" className="py-10 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Meet Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
