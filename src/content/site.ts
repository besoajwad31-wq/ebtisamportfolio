import resumeAsset from "@/assets/resume.pdf.asset.json";

/**
 * Single source of truth for personal details.
 * Everything here comes from Ebtisam's resume and the brief she provided.
 */
export const MAJOR = "Industrial & Systems Engineering";

export const profile = {
  fullName: "Ebtisam Ajwad Alshiyamy",
  shortName: "Ebtisam Alshiyamy",
  firstName: "Ebtisam",
  initials: "EA",
  major: MAJOR,
  university: "University of Jeddah",
  country: "Saudi Arabia",
  level: "Third-year student",
  gpa: "4.8 / 5.0",
  email: "ealshiyamy@gmail.com",
  linkedin: "https://linkedin.com/in/ebtisam-alshiyamy-5210a1394",
  linkedinLabel: "linkedin.com/in/ebtisam-alshiyamy",
  location: "Jeddah, Saudi Arabia",
  resumeUrl: resumeAsset.url as string | undefined,
  languages: ["Arabic", "English"],
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export type SkillGroup = {
  title: string;
  items: { name: string; detail?: string }[];
};

export const technicalSkills: SkillGroup[] = [
  {
    title: "Engineering Design & CAD",
    items: [
      {
        name: "Autodesk Inventor",
        detail: "Revolve, Extrude, Shell, Circular Pattern",
      },
      { name: "Technical drawings", detail: "Orthographic & isometric views" },
      { name: "Canva", detail: "Basic design & posters" },
    ],
  },
  {
    title: "Data Analysis & Statistics",
    items: [
      {
        name: "Minitab",
        detail: "Statistical analysis, hypothesis testing, probability distributions, data visualization",
      },
      { name: "Microsoft Excel", detail: "Formulas, pivot tables, charts" },
    ],
  },
  {
    title: "Business & Documentation",
    items: [
      { name: "Microsoft Word & PowerPoint", detail: "Technical reports and presentation development" },
      { name: "Data organization & reporting", detail: "Clear documentation and basic reporting" },
    ],
  },
];

export const coreStrengths = [
  "Organization & time management",
  "Teamwork",
  "Problem-solving & analytical thinking",
  "Attention to detail",
  "Fast learner & adaptable",
];

export const engineeringMethods = [
  "Reverse engineering",
  "Engineering design process",
  "KT decision analysis",
  "Affinity diagrams",
  "Gantt chart planning",
  "Quality control tools",
];
