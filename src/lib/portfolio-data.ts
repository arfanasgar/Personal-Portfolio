export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  number: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "task-aware-image-compression",
    title: "Task-Aware Image Compression for VLMs",
    category: "Computer vision · Research",
    description:
      "Exploring how image compression can preserve the visual information most useful to vision-language model tasks.",
    tags: ["Image compression", "Computer vision", "VLMs"],
    number: "01",
  },
  {
    slug: "static-test-flakiness-prediction",
    title: "Static Test Flakiness Prediction",
    category: "Software engineering · Research",
    description:
      "Investigating how static signals can help identify tests that may produce inconsistent results.",
    tags: ["Testing", "Static analysis", "Prediction"],
    number: "02",
  },
  {
    slug: "energy-intelligence-platform",
    title: "Energy Intelligence Platform",
    category: "Intelligent systems",
    description:
      "An exploration of software for making energy information and insights easier to work with.",
    tags: ["Energy", "Intelligent systems", "Software"],
    number: "03",
  },
  {
    slug: "svd-image-compression-tool",
    title: "SVD Image Compression Tool",
    category: "Image processing",
    description:
      "A tool exploring singular value decomposition as an approach to image compression.",
    tags: ["SVD", "Image processing", "Compression"],
    number: "04",
  },
  {
    slug: "secure-multi-client-chat-system",
    title: "Secure Multi-Client Chat System",
    category: "Software engineering",
    description:
      "A multi-client messaging system focused on security and communication between connected clients.",
    tags: ["Security", "Networking", "Software"],
    number: "05",
  },
  {
    slug: "ai-personal-style-companion",
    title: "AI Personal Style Companion",
    category: "Applied AI",
    description:
      "An idea for a personal style companion shaped by the possibilities of applied AI.",
    tags: ["Applied AI", "Personalization", "Design"],
    number: "06",
  },
];