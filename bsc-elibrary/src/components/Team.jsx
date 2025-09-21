import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & Lead Developer',
    image: '/images/sauvik.png', // Placeholder image
    description: 'John is the visionary behind ReadSphere, leading the development with a passion for accessible education.',
  },
  {
    name: 'Jane Doe',
    role: 'Content Strategist',
    image: '/images/jane.png', // Placeholder image
    description: 'Jane ensures that our library is filled with high-quality and relevant educational content.',
  },
  {
    name: 'John Smith',
    role: 'Community Manager',
    image: '/images/john.png', // Placeholder image
    description: 'John connects with our users, gathering feedback and fostering a vibrant learning community.',
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our <span className="text-blue-600">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-200"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;