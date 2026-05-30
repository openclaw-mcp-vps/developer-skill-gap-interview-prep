import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InterviewGap – Identify and Fill Coding Interview Skill Gaps',
  description: 'AI-powered analysis of your failed interview feedback to create personalized study plans targeting your specific technical weaknesses.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e28ef6f-ec3b-46c3-881f-8b0c1659105c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
