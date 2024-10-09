import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold">
            Alumni Connect
          </Link>
        </motion.div>
        <nav>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex space-x-4 items-center"
          >
            <NavItem href="/dashboard">Dashboard</NavItem>
            <NavItem href="/feed">Feed</NavItem>
            <NavItem href="/network">Network</NavItem>
            <NavItem href="/jobs">Jobs</NavItem>
            <NavItem href="/events">Events</NavItem>
            <NavItem href="/mentorship">Mentorship</NavItem>
            {session ? (
              <>
                <NavItem href="/profile">
                  <FaUserCircle className="inline-block mr-1" />
                  Profile
                </NavItem>
                <li>
                  <button onClick={() => signOut()} className="hover:underline flex items-center">
                    <FaSignOutAlt className="mr-1" />
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <NavItem href="/auth/signin">Sign In</NavItem>
                <NavItem href="/auth/signup">Sign Up</NavItem>
              </>
            )}
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </motion.li>
  )
}