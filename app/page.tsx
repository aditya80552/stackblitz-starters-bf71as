import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaBriefcase, FaComments, FaCalendarAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to Alumni Connect</h1>
      <p className="text-xl mb-8">
        Join our vibrant community of alumni to network, share experiences, and grow together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          title="Alumni Directory"
          description="Connect with fellow alumni"
          icon={<FaUserGraduate />}
          link="/directory"
        />
        <FeatureCard
          title="Job Portal"
          description="Explore career opportunities"
          icon={<FaBriefcase />}
          link="/jobs"
        />
        <FeatureCard
          title="Messaging"
          description="Stay in touch with your network"
          icon={<FaComments />}
          link="/messages"
        />
        <FeatureCard
          title="Events"
          description="Join reunions and gatherings"
          icon={<FaCalendarAlt />}
          link="/events"
        />
      </div>
    </motion.div>
  )
}

function FeatureCard({ title, description, icon, link }: { title: string; description: string; icon: React.ReactNode; link: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <div className="text-4xl mb-4 text-blue-500">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline mt-auto">
        Learn more
      </Link>
    </motion.div>
  )
}