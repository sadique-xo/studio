// AI SEO Configuration for better search engine and AI understanding
export const aiSeoConfig = {
  // Core business information for AI understanding
  business: {
    name: "Sadique",
    title: "Modern Web Designer",
    description: "Professional web design services specializing in real estate, Airbnb, and homestay websites",
    location: "India",
    services: [
      "Web Design",
      "UI/UX Design", 
      "Real Estate Websites",
      "Airbnb Websites",
      "Homestay Websites",
      "Responsive Design",
      "SEO Optimization",
      "Brand Identity"
    ],
    targetAudience: [
      "Real Estate Agents",
      "Property Developers", 
      "Airbnb Hosts",
      "Vacation Rental Owners",
      "Bed & Breakfast Owners",
      "Homestay Hosts"
    ],
    industries: [
      "Real Estate",
      "Hospitality",
      "Short-term Rentals",
      "Vacation Rentals",
      "Property Management"
    ]
  },

  // Content optimization for AI understanding
  contentStrategy: {
    primaryKeywords: [
      "web designer",
      "real estate website design",
      "Airbnb website",
      "property website",
      "vacation rental website",
      "homestay website",
      "modern web design",
      "responsive design",
      "UI/UX designer"
    ],
    longTailKeywords: [
      "professional real estate website design",
      "custom Airbnb website design",
      "luxury property website design",
      "vacation rental booking website",
      "modern homestay website design",
      "responsive property website",
      "real estate agent website design",
      "property listing website design"
    ],
    semanticKeywords: [
      "property marketing",
      "booking optimization",
      "guest experience",
      "property showcase",
      "digital presence",
      "online booking",
      "property visibility",
      "conversion optimization"
    ]
  },

  // AI-friendly content structure
  contentStructure: {
    headings: {
      h1: "Primary service or page title",
      h2: "Main service categories or sections", 
      h3: "Specific services or features",
      h4: "Detailed benefits or processes"
    },
    contentTypes: [
      "Service descriptions",
      "Case studies", 
      "Process explanations",
      "Benefits and features",
      "Client testimonials",
      "FAQ content",
      "Industry insights"
    ]
  },

  // Technical SEO for AI
  technicalSeo: {
    structuredData: [
      "Person",
      "Organization", 
      "Service",
      "WebSite",
      "FAQPage",
      "BreadcrumbList",
      "Offer",
      "Review"
    ],
    metaTags: [
      "title",
      "description", 
      "keywords",
      "author",
      "robots",
      "canonical",
      "og:title",
      "og:description",
      "og:image",
      "twitter:card",
      "twitter:title",
      "twitter:description"
    ],
    performance: {
      coreWebVitals: true,
      imageOptimization: true,
      lazyLoading: true,
      preloading: true,
      compression: true
    }
  },

  // AI content optimization
  aiOptimization: {
    contentClarity: {
      useSimpleLanguage: true,
      avoidJargon: true,
      clearValuePropositions: true,
      specificBenefits: true
    },
    contextProvision: {
      industryContext: true,
      serviceContext: true,
      locationContext: true,
      experienceContext: true
    },
    entityRecognition: {
      personEntities: ["Sadique", "Web Designer"],
      organizationEntities: ["Sadique Web Design"],
      serviceEntities: ["Web Design", "UI/UX Design"],
      locationEntities: ["India", "Worldwide"],
      industryEntities: ["Real Estate", "Hospitality", "Property Management"]
    }
  },

  // Content guidelines for AI understanding
  contentGuidelines: {
    tone: "Professional yet approachable",
    style: "Clear and concise",
    focus: "Client benefits and results",
    structure: "Logical flow from problem to solution",
    evidence: "Case studies and testimonials",
    callsToAction: "Clear and compelling"
  }
};

// Helper functions for AI SEO
export const generateAIOptimizedContent = (content: string, context: string) => {
  return {
    original: content,
    optimized: content,
    aiFriendly: true,
    context: context,
    entities: extractEntities(content),
    keywords: extractKeywords(content),
    sentiment: analyzeSentiment(content)
  };
};

export const extractEntities = (text: string) => {
  // Simple entity extraction - in production, use NLP libraries
  const entities = {
    services: aiSeoConfig.business.services.filter(service => 
      text.toLowerCase().includes(service.toLowerCase())
    ),
    industries: aiSeoConfig.business.industries.filter(industry => 
      text.toLowerCase().includes(industry.toLowerCase())
    ),
    keywords: aiSeoConfig.contentStrategy.primaryKeywords.filter(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    )
  };
  return entities;
};

export const extractKeywords = (text: string) => {
  const words = text.toLowerCase().split(/\W+/);
  const keywordCounts = words.reduce((acc, word) => {
    if (word.length > 3) {
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(keywordCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));
};

export const analyzeSentiment = (text: string) => {
  // Simple sentiment analysis - in production, use proper NLP
  const positiveWords = ['amazing', 'excellent', 'great', 'wonderful', 'fantastic', 'outstanding'];
  const negativeWords = ['terrible', 'awful', 'bad', 'poor', 'disappointing'];
  
  const words = text.toLowerCase().split(/\W+/);
  const positiveCount = words.filter(word => positiveWords.includes(word)).length;
  const negativeCount = words.filter(word => negativeWords.includes(word)).length;
  
  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
};
