import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillBoxGen',
  description: 'SkillBoxGen offers personalized monthly subscription boxes tailored to the specific needs of small business owners and startups, filled with tools, services, and resources curated by industry experts.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillBoxGen</h1>
      <p className="mt-4 text-lg">SkillBoxGen offers personalized monthly subscription boxes tailored to the specific needs of small business owners and startups, filled with tools, services, and resources curated by industry experts.</p>
    </main>
  )
}
