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
