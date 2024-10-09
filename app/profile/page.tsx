import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEdit, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'Tech Co.',
    bio: 'Passionate about building scalable web applications and solving complex problems. Always eager to learn new technologies and contribute to open-source projects.',
    experience: [
      { id: 1, title: 'Software Engineer', company: 'Tech Co.', period: '2020 to Present' },
      { id: 2, title: 'Junior Developer', company: 'Startup Inc.', period: '2018 to 2020' },
    ],
    education: [
      { id: 1, degree: 'B.S. in Computer Science', school: 'University of Technology', year: '2018' },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  })

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically send an API request to update the profile
  }

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          {isEditing ? (
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Save Profile
            </button>
          ) : (
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              <FaEdit className="inline-block mr-2" />
              Edit Profile
            </button>
          )}
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{profile.title} at {profile.company}</h2>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          {profile.experience.map((exp) => (
            <div key={exp.id} className="mb-2">
              <h4 className="font-semibold">{exp.title}</h4>
              <p className="text-gray-600">{exp.company} - {exp.period}</p>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          {profile.education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.school}, {edu.year}</p>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap">
            {profile.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4">
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <FaGithub className="text-2xl" />
            </a>
            <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}