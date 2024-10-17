import React from 'react';

// Sample data for team members
const teamMembers = [
  {
    name: "Kishan Prajapati",
    role: "Web Developer",
    image: "https://i.ibb.co/BwvBRFG/648ccf2c860bd-download-removebg-preview.jpg",
    linkedin: "https://www.linkedin.com/in/kishan0101/",
    instagram: "https://www.instagram.com/ig_kishan_/",
  },
  {
    name: "MD Alishan",
    role: "App Developer",
    image: "https://i.ibb.co/Rj4jVC3/424844200-18298391365145586-146892114269537146-n.jpg",
    linkedin: "https://www.linkedin.com/in/md-alishan-ali-251614222/",
    instagram: "https://www.instagram.com/md_alishan/",
  },
  {
    name: "Abhishek Kumar Verma",
    role: "Mentor",
    image: "https://i.ibb.co/tYrhGWY/23499-1.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek817228/",
    instagram: "https://www.instagram.com/abhishek_kumar_verma/",
  },
];

function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
        <h3 className="mt-3 text-gray-600">Meet the people who make awesome stuff</h3>

        <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member relative overflow-hidden bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <figure className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-t-lg" />
                  <figcaption className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 p-4">
                    <ul className="flex space-x-4 mt-4">
                      <li>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className="w-8 h-8" />
                        </a>
                      </li>
                      <li>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                          <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" className="w-8 h-8" />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
