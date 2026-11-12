export type ProjectCategory = "Professional" | "Personal Project";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  features: string[];
  category: ProjectCategory;
  company?: string;
}

export const projects: Project[] = [
  // ── Professional Experience Projects (Valoriz Digital) ──
  {
    title: "MAGRABi UAE",
    description:
      "Leading luxury eyewear retail chain in the UAE — developed responsive and interactive web interfaces for the e-commerce platform.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://www.magrabi.com/ae-en/",
    features: [
      "Developed responsive and interactive web interfaces for the luxury eyewear retail platform.",
      "Converted Figma designs into production-ready user interfaces across devices.",
      "Implemented smooth scrolling, animations, and interactive UI elements.",
      "Integrated frontend interfaces with dynamic data rendering APIs.",
    ],
    category: "Professional",
    company: "Valoriz Digital",
  },

  // ── Personal / Academic Projects ──
  {
    title: "AURA | Anti-Ragging Solution Platform",
    description:
      "Full-stack complaint management system with secure authentication and role-based access control.",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    live: "https://antiragging-solution-website-jjep.vercel.app/",
    features: [
      "Full-stack complaint management platform",
      "Secure role-based authentication system",
      "Responsive React dashboard and UI",
      "Node.js APIs for real-time data handling",
      "Efficient complaint tracking and reporting",
    ],
    category: "Personal Project",
  },
  {
    title: "Smart Resume Analyzer",
    description:
      "Resume parsing and skill analysis platform with intelligent recommendations.",
    tech: ["Python", "Django", "PyPDF2", "MySQL"],
    github: "#",
    live: "https://smart-resume-analyzer-ootc.onrender.com/",
    features: [
      "Extracts and analyzes resume data from PDFs",
      "Detects skills using keyword-based matching",
      "Scores resumes based on identified skills",
      "Suggests missing skills and suitable job roles",
      "Built with Django authentication and file upload",
    ],
    category: "Personal Project",
  },

  {
    title: "Network Portfolio — NOC Toolkit",
    description:
      "Personal technical project featuring a network-engineering portfolio with a NOC Toolkit and practical networking resources and tools.",
    tech: ["React", "Next.js", "TypeScript"],
    github: "#",
    live: "https://network-portfolio-psi.vercel.app/",
    features: [
      "Interactive NOC Toolkit with practical networking utilities",
      "Comprehensive networking resource library",
      "Clean, professional portfolio layout for network engineering concepts",
      "Responsive design optimized for desktop and mobile access",
    ],
    category: "Personal Project",
  },
];