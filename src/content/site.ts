import resumeAsset from "@/assets/resume.pdf.asset.json";
import type { Locale } from "@/lib/i18n/locale";

/**
 * Single source of truth for personal details, in English and Arabic.
 * Everything here comes from Ebtisam's resume and the brief she provided;
 * the Arabic entries are translations of the same facts.
 */
export const MAJOR = "Industrial & Systems Engineering";
export const MAJOR_AR = "الهندسة الصناعية وهندسة النظم";

export type Profile = {
  fullName: string;
  shortName: string;
  firstName: string;
  initials: string;
  major: string;
  /** Shortened major for tight spaces (hero stats). */
  majorShort: string;
  university: string;
  country: string;
  level: string;
  email: string;
  linkedin: string;
  linkedinLabel: string;
  location: string;
  resumeUrl: string | undefined;
  languages: string[];
};

export const profile: Profile = {
  fullName: "Ebtisam Ajwad Alshiyamy",
  shortName: "Ebtisam Alshiyamy",
  firstName: "Ebtisam",
  initials: "EA",
  major: MAJOR,
  majorShort: "Industrial & Systems Eng.",
  university: "University of Jeddah",
  country: "Saudi Arabia",
  level: "Third-year student",
  email: "ealshiyamy@gmail.com",
  linkedin: "https://linkedin.com/in/ebtisam-alshiyamy-5210a1394",
  linkedinLabel: "linkedin.com/in/ebtisam-alshiyamy",
  location: "Jeddah, Saudi Arabia",
  resumeUrl: resumeAsset.url as string | undefined,
  languages: ["Arabic", "English"],
};

/** Name and contact details are shared; only wording is translated. */
const profileAr: Profile = {
  ...profile,
  major: MAJOR_AR,
  majorShort: "الهندسة الصناعية والنظم",
  university: "جامعة جدة",
  country: "المملكة العربية السعودية",
  level: "طالبة في السنة الثالثة",
  location: "جدة، المملكة العربية السعودية",
  languages: ["العربية", "الإنجليزية"],
};

export const navLinks = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/activities", key: "activities" },
  { to: "/contact", key: "contact" },
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

const technicalSkillsAr: SkillGroup[] = [
  {
    title: "التصميم الهندسي والرسم بالحاسوب (CAD)",
    items: [
      { name: "Autodesk Inventor", detail: "Revolve وExtrude وShell وCircular Pattern" },
      { name: "الرسومات الهندسية", detail: "المساقط المتعامدة والمنظور الأيزومتري" },
      { name: "Canva", detail: "تصميم أساسي وملصقات" },
    ],
  },
  {
    title: "تحليل البيانات والإحصاء",
    items: [
      {
        name: "Minitab",
        detail: "التحليل الإحصائي، واختبار الفرضيات، والتوزيعات الاحتمالية، وتمثيل البيانات بصريًا",
      },
      { name: "Microsoft Excel", detail: "المعادلات، والجداول المحورية، والرسوم البيانية" },
    ],
  },
  {
    title: "الأعمال والتوثيق",
    items: [
      { name: "Microsoft Word وPowerPoint", detail: "إعداد التقارير التقنية والعروض التقديمية" },
      { name: "تنظيم البيانات وإعداد التقارير", detail: "توثيق واضح وإعداد تقارير أساسية" },
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

const coreStrengthsAr = [
  "التنظيم وإدارة الوقت",
  "العمل الجماعي",
  "حل المشكلات والتفكير التحليلي",
  "الاهتمام بالتفاصيل",
  "سرعة التعلّم والقدرة على التكيّف",
];

export const engineeringMethods = [
  "Reverse engineering",
  "Engineering design process",
  "KT decision analysis",
  "Affinity diagrams",
  "Gantt chart planning",
  "Quality control tools",
];

const engineeringMethodsAr = [
  "الهندسة العكسية",
  "عملية التصميم الهندسي",
  "تحليل القرار بأسلوب KT",
  "مخططات التقارب (Affinity Diagrams)",
  "التخطيط بمخطط جانت",
  "أدوات ضبط الجودة",
];

export type SiteContent = {
  profile: Profile;
  technicalSkills: SkillGroup[];
  coreStrengths: string[];
  engineeringMethods: string[];
};

export const siteContent: Record<Locale, SiteContent> = {
  en: { profile, technicalSkills, coreStrengths, engineeringMethods },
  ar: {
    profile: profileAr,
    technicalSkills: technicalSkillsAr,
    coreStrengths: coreStrengthsAr,
    engineeringMethods: engineeringMethodsAr,
  },
};

/** Completed courses shown under "Relevant Coursework" (names only). */
export const relevantCoursework = [
  "Introduction to Industrial & Systems Engineering",
  "Probability & Statistics for Engineers",
  "Statistical Methods for Industrial Engineers",
  "Engineering Economic Analysis",
  "Engineering Management",
  "Fundamentals of Engineering Mechanics",
  "Computer Programming",
];

export const peerLearning = {
  title: "Peer Learning & Knowledge Sharing",
  description:
    "Created and managed free Telegram study channels, sharing explanations, summaries, and exam-preparation resources to support peer learning through initiative, clear communication, and knowledge transfer.",
  subscriberLabel: "subscribers",
  channelLabel: "View channel",
  channels: [
    {
      code: "EISE131",
      course: "Probability and Statistics for Engineers",
      resources: "Final-exam study channel",
      subscribers: 143,
      url: "https://t.me/statuniofjed",
    },
    {
      code: "EISE232",
      course: "Engineering Statistics",
      resources: "Midterm 2 study resources",
      subscribers: 81,
      url: "https://t.me/EISE232mid",
    },
  ],
};

/**
 * Home landing copy. Home is an overview only: each preview points at the
 * page that holds the detail, so nothing here repeats a full biography,
 * project write-up, course list or skills inventory.
 */
export const homeLanding = {
  eyebrow: "Engineering Portfolio",
  surname: "Alshiyamy",
  studentLabel: "Student",
  supportingSentence:
    "Interested in engineering, structured problem-solving and continuous learning — with a careful eye for how systems actually work.",
  scroll: "Scroll",
  indexLabel: "Start here",
  pagesLabel: "pages",
  previews: [
    {
      index: "01",
      to: "/about",
      label: "About",
      title: "Who I am",
      text: "Third-year Industrial & Systems Engineering student at the University of Jeddah, interested in problem-solving, engineering design and data analysis.",
      linkLabel: "More about me",
    },
    {
      index: "02",
      to: "/projects",
      label: "Projects",
      title: "Selected work",
      text: "Three university projects: reverse engineering a handheld cooling fan, a solar-powered phone case, and a quality control case study.",
      linkLabel: "See projects",
    },
    {
      index: "03",
      to: "/activities",
      label: "Activities",
      title: "Beyond the coursework",
      text: "Sports hackathon participation, plus free Telegram study channels I created and managed to support peer learning.",
      linkLabel: "See activities",
    },
    {
      index: "04",
      to: "/contact",
      label: "Contact",
      title: "Get in touch",
      text: "Open to conversations about engineering, university projects and learning opportunities — the best way to reach me is email or LinkedIn.",
      linkLabel: "Contact me",
    },
  ],
} as const;
