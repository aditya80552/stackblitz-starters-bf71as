import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Alumni Connect</h3>
          <p>Connecting graduates, fostering growth, and building a stronger community.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/jobs" className="hover:underline">Job Board</Link></li>
            <li><Link href="/donations" className="hover:underline">Support Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Alumni Connect. All rights reserved.</p>
      </div>
    </footer>
  )
}