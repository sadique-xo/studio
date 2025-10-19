import { MetadataRoute } from 'next'
import { projects } from '@/lib/placeholder-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sadique.co'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic project pages
  const projectPages = projects
    .filter(project => project.published)
    .map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...projectPages]
}
