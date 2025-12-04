import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/ProjectDetail'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projectsData } from '@/lib/projectsData'

export default function ProjectPage({ params }) {
  const project = projectsData.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <ProjectDetail project={project} />
      </main>
      
      <Footer />
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}
