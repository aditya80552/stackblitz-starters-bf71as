import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaBriefcase, FaCalendarAlt, FaChartLine } from 'react-icons/fa'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Dashboard() {
  const [networkGrowth, setNetworkGrowth] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Network Growth',
        data: [65, 78, 90, 105, 125, 138],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  })

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Alumni" value="1,234" icon={<FaUserGraduate />} />
        <DashboardCard title="Job Opportunities" value="56" icon={<FaBriefcase />} />
        <DashboardCard title="Upcoming Events" value="3" icon={<FaCalendarAlt />} />
        <DashboardCard title="Network Growth" value="+12%" icon={<FaChartLine />} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Network Growth</h2>
        <Line data={networkGrowth} />
      </div>
    </div>
  )
}

function DashboardCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md flex items-center"
    >
      <div className="text-4xl mr-4 text-blue-500">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </motion.div>
  )
}