import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTrash, FaDownload } from 'react-icons/fa'
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Styles for PDF
const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10 },
  subtitle: { fontSize: 14, marginBottom: 5 },
  text: { fontSize: 12, marginBottom: 5 },
})

// PDF Document component
const ResumePDF = ({ resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{resume.personalInfo.name}</Text>
        <Text style={styles.text}>{resume.personalInfo.email} | {resume.personalInfo.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        {resume.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>{edu.school}, {edu.degree}, {edu.year}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        {resume.experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>{exp.company}, {exp.position}</Text>
            <Text style={styles.text}>{exp.startDate} - {exp.endDate}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>{resume.skills.join(', ')}</Text>
      </View>
    </Page>
  </Document>
)

export default function ResumeBuilder() {
  // ... (previous useState and handlers remain the same)

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        {/* ... (previous form fields remain the same) */}
        
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Save Resume
          </button>
          <PDFDownloadLink document={<ResumePDF resume={resume} />} fileName="resume.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : (
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center">
                  <FaDownload className="mr-2" /> Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </motion.div>
    </div>
  )
}