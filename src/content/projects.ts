import fanGrillePhoto from "@/assets/fan-grille-photo.jpg.asset.json";
import fanBodyPhoto from "@/assets/fan-body-photo.jpg.asset.json";
import fanGrilleDrawing from "@/assets/fan-grille-drawing.jpg.asset.json";
import fanBodyDrawing from "@/assets/fan-body-drawing.jpg.asset.json";
import solarAssembled from "@/assets/solar-assembled.jpg.asset.json";
import solarExploded from "@/assets/solar-exploded.jpg.asset.json";
import solarPanel from "@/assets/solar-panel.jpg.asset.json";
import solarBattery from "@/assets/solar-battery.jpg.asset.json";
import solarCover from "@/assets/solar-cover.jpg.asset.json";
import solarDrawing from "@/assets/solar-drawing.jpg.asset.json";
import solarCoverDrawing from "@/assets/solar-cover-drawing.jpg.asset.json";
import solarCircuit from "@/assets/solar-circuit.jpg.asset.json";

/**
 * Project content. Every statement is taken from Ebtisam's resume or her
 * uploaded project files. To add a project, append an entry to `projects`.
 */

export type ProjectImage = { src: string; alt: string; caption: string };

export type ProjectSection = {
  title: string;
  body?: string[];
  list?: string[];
  steps?: { title: string; text: string }[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  tags: string[];
  cover: ProjectImage | null;
  /** Drawn illustration used when no project photo exists. */
  visual?: "hackathon" | "quality";
  facts: { label: string; value: string }[];
  overview: string[];
  highlights?: { value: string; label: string }[];
  highlightsNote?: string;
  sections: ProjectSection[];
  gallery: ProjectImage[];
  skills: string[];
  note?: string;
};

const fanGallery: ProjectImage[] = [
  {
    src: fanGrillePhoto.url,
    alt: "Pink front grille of the handheld fan with radial spokes, photographed on a metal surface after disassembly",
    caption: "Front grille — the physical part after disassembly",
  },
  {
    src: fanGrilleDrawing.url,
    alt: "Technical drawing sheet of the fan grille with a flat view and a shaded isometric model",
    caption: "Front grille — Autodesk Inventor drawing sheet, scale 4:1",
  },
  {
    src: fanBodyPhoto.url,
    alt: "Pink handheld fan body and ring housing photographed after removing the grille",
    caption: "Fan body and ring housing — the physical part",
  },
  {
    src: fanBodyDrawing.url,
    alt: "Technical drawing sheet of the fan body with front and side views and a shaded isometric model",
    caption: "Fan body — orthographic and isometric views, scale 2:1, millimetres",
  },
];

const solarGallery: ProjectImage[] = [
  {
    src: solarAssembled.url,
    alt: "3D model of the assembled solar phone case with a grid of solar cells on its back",
    caption: "Assembled Solar Sleeve model in Autodesk Inventor",
  },
  {
    src: solarExploded.url,
    alt: "3D model showing the solar panel separated from the phone case and the battery inside",
    caption: "Exploded view showing the panel, case and battery placement",
  },
  {
    src: solarPanel.url,
    alt: "3D model of a flat solar panel with a grid of cells",
    caption: "Solar panel component",
  },
  {
    src: solarBattery.url,
    alt: "3D model of a thin lithium-polymer battery with lead wires",
    caption: "Lithium-polymer battery component",
  },
  {
    src: solarCover.url,
    alt: "3D model of the empty protective phone case shell",
    caption: "Protective case shell",
  },
  {
    src: solarCoverDrawing.url,
    alt: "Technical drawing sheet of the phone case with front, side and isometric views",
    caption: "Case drawing sheet with orthographic views",
  },
  {
    src: solarDrawing.url,
    alt: "Drawing sheet with four exploded and assembled views of the solar phone case",
    caption: "Assembly drawing sheet",
  },
  {
    src: solarCircuit.url,
    alt: "TinkerCAD circuit simulation with a solar panel, capacitor, 9 V battery, LED and a multimeter reading 9.13 V",
    caption: "TinkerCAD circuit used for the load tests",
  },
];

export const projects: Project[] = [
  {
    slug: "reverse-engineering-cooling-fan",
    number: "01",
    title: "Reverse Engineering of a Handheld Cooling Fan",
    category: "Reverse Engineering · CAD",
    summary:
      "Taking apart an everyday handheld fan to understand its mechanical constraints, then rebuilding its parts from scratch in Autodesk Inventor.",
    context: "University of Jeddah · Course project",
    tags: ["Autodesk Inventor", "3D Modeling", "Technical Drawing"],
    cover: fanGallery[0] ?? null,
    facts: [
      { label: "Institution", value: "University of Jeddah" },
      { label: "Type", value: "Course project" },
      { label: "Software", value: "Autodesk Inventor" },
      { label: "Deliverables", value: "3D models & drawing sheets" },
    ],
    overview: [
      "This project started with a simple consumer product: a handheld cooling fan. The goal was to understand how it is put together by disassembling it, studying each part, and analysing the mechanical system constraints that shape its design.",
      "After the analysis, I modeled the physical components from scratch in Autodesk Inventor and documented them as dimensioned technical drawing sheets.",
    ],
    sections: [
      {
        title: "Process",
        steps: [
          {
            title: "Disassemble",
            text: "Took the fan apart to separate and examine its individual components, including the front grille and the main body.",
          },
          {
            title: "Analyse",
            text: "Studied how the parts fit and work together to understand the mechanical system constraints of the product.",
          },
          {
            title: "Model",
            text: "Rebuilt the physical components from scratch in Autodesk Inventor using Revolve, Extrude, Shell and Circular Pattern features.",
          },
          {
            title: "Document",
            text: "Produced technical drawing sheets with orthographic and isometric views, dimensioned in millimetres.",
          },
        ],
      },
      {
        title: "Modeling features used",
        list: ["Revolve", "Extrude", "Shell", "Circular Pattern"],
      },
    ],
    gallery: fanGallery,
    skills: [
      "Reverse engineering",
      "3D CAD modeling",
      "Technical drawing",
      "Mechanical analysis",
      "Attention to detail",
    ],
  },
  {
    slug: "solar-powered-phone-case",
    number: "02",
    title: "Solar-Powered Phone Case Project",
    category: "Engineering Design · Team Project",
    summary:
      "A team design project for “Solar Sleeve” — a protective phone case concept that harvests sunlight and charges the phone wirelessly.",
    context: "EISE 101 · Introduction to Engineering · University of Jeddah",
    tags: ["Design Process", "Autodesk Inventor", "TinkerCAD", "Survey Analysis"],
    cover: solarGallery[0] ?? null,
    facts: [
      { label: "Course", value: "EISE 101 — Introduction to Engineering" },
      { label: "Team", value: "5 students" },
      { label: "Report", value: "Final project report, December 2025" },
      { label: "Tools", value: "Autodesk Inventor, TinkerCAD, Google Forms" },
    ],
    overview: [
      "Phones often run out of battery in places without electricity — deserts, camping areas and remote locations — and power banks still depend on cables and a power source. Our team set out to design a practical, eco-friendly alternative.",
      "The concept, called Solar Sleeve, integrates a flexible solar panel, a lithium-polymer battery, a power management circuit and a wireless charging coil into a single protective phone case.",
      "I collaborated with the team on idea development, design planning and evaluating the practical functionality of the design, applying analytical thinking and teamwork throughout the project.",
    ],
    highlights: [
      { value: "≈ 9 V", label: "Stable output in the circuit simulation" },
      { value: "65.6%", label: "Of survey respondents would buy one at an affordable price" },
      { value: "42.7%", label: "Often needed a charger but couldn’t find a power source" },
    ],
    highlightsNote:
      "Simulation values come from TinkerCAD. As noted in the team report, the simulation is idealised: it does not model heat or wireless charging losses, and a real miniature panel would produce less power.",
    sections: [
      {
        title: "Engineering design process",
        steps: [
          {
            title: "Define the problem",
            text: "Literature review with a CRAAP source analysis, a present-vs-desired state analysis and a clear problem statement.",
          },
          {
            title: "Generate & select ideas",
            text: "Brainstormed ideas, grouped them with an Affinity Diagram, and used KT Decision Analysis. A device for charging electronics without relying on electricity scored highest.",
          },
          {
            title: "Plan",
            text: "Situation analysis of tasks and priorities, a Gantt chart for the timeline, and technical sketches and drawings.",
          },
          {
            title: "Implement",
            text: "Designed the outer model in Autodesk Inventor to decide where the solar panel, battery and circuit board sit inside the case.",
          },
          {
            title: "Test & evaluate",
            text: "Simulated the circuit in TinkerCAD: solar output under different lighting, battery stability with a capacitor, and load tests at 500 Ω, 220 Ω and 50 Ω.",
          },
        ],
      },
      {
        title: "Components & materials",
        list: [
          "Lithium-polymer battery",
          "Solar panel (polysilicon)",
          "TP4056 charge controller",
          "MT3608 DC-DC boost converter",
          "Wireless charging transmitter",
          "ABS filament",
          "Wires, connectors and an on/off switch",
        ],
      },
      {
        title: "Testing results",
        body: [
          "In the simulation, the battery held a steady 9.15 V across the five-minute stability test, and the highest load (50 Ω) produced the largest voltage drop, to 7.50 V — consistent with Ohm’s law.",
          "A user survey suggested strong interest: 66.1% of respondents believed a solar phone case could help with running out of battery during the day.",
        ],
      },
      {
        title: "Limitations & recommendations",
        list: [
          "Simulation values are higher than a real miniature panel would generate.",
          "Thermal effects inside an ABS case were not modeled.",
          "Wireless (Qi) charging losses were not included.",
          "Next step recommended by the team: build a physical prototype to test real sunlight efficiency, heat management and wireless charging.",
        ],
      },
    ],
    gallery: solarGallery,
    skills: [
      "Engineering design process",
      "Idea development",
      "Design planning",
      "KT decision analysis",
      "Teamwork",
      "Data evaluation",
    ],
  },
  {
    slug: "sports-hackathon",
    number: "03",
    title: "Sports Hackathon Participation",
    category: "Hackathon · Teamwork",
    summary:
      "Working with a team to develop ideas and solve challenges under time constraints.",
    context: "Team activity",
    tags: ["Teamwork", "Problem-Solving", "Communication"],
    cover: null,
    visual: "hackathon",
    facts: [
      { label: "Role", value: "Participant" },
      { label: "Format", value: "Team hackathon" },
      { label: "Theme", value: "Sports" },
    ],
    overview: [
      "I participated in a sports hackathon, collaborating with a team to develop ideas and solve challenges under time constraints.",
      "The experience strengthened my teamwork, communication and problem-solving skills — working quickly, sharing ideas openly, and turning a challenge into a structured solution with others.",
    ],
    sections: [
      {
        title: "What I practised",
        list: [
          "Collaborating with a team on a shared challenge",
          "Developing ideas quickly under time pressure",
          "Communicating clearly within the team",
          "Structured problem-solving",
        ],
      },
    ],
    gallery: [],
    skills: ["Teamwork", "Communication", "Problem-solving", "Time management"],
    note: "Photos and further details from the hackathon will be added here.",
  },
  {
    slug: "quality-control-toyota",
    number: "04",
    title: "Quality Control at Toyota Motor Corporation",
    category: "Research Report · Quality",
    summary:
      "A group research report on the role of quality control in the field, told through Toyota’s recall crisis and recovery.",
    context: "Introduction to Industrial & System Engineering · University of Jeddah",
    tags: ["Quality Control", "Lean / TPS", "Root Cause Analysis"],
    cover: null,
    visual: "quality",
    facts: [
      { label: "Course", value: "Introduction to Industrial & System Engineering" },
      { label: "Team", value: "Group 6 · 4 students" },
      { label: "Type", value: "Research report & case study" },
    ],
    overview: [
      "This group report explores quality control as a core specialty within Industrial and System Engineering — from its evolution beyond final inspection to the statistical tools engineers use to prevent defects at the source.",
      "As a case study, we examined how Toyota responded to the recall of nearly 9 million vehicles in the late 2000s and early 2010s, and how its production system and quality methods supported its recovery.",
    ],
    sections: [
      {
        title: "Topics covered",
        list: [
          "Quality control vs. quality assurance",
          "The 7 basic quality tools — including Fishbone diagrams, Pareto charts and control charts",
          "Total Quality Management (TQM) and continuous improvement (Kaizen)",
          "The two pillars of the Toyota Production System: Jidoka and Just-in-Time",
          "Root cause analysis with the “5 Whys” technique",
        ],
      },
      {
        title: "Corrective measures studied",
        steps: [
          {
            title: "Communication & transparency",
            text: "Faster reporting of safety issues and clear, truthful communication with customers.",
          },
          {
            title: "Continuous improvement",
            text: "Ongoing evaluation and learning from failures to protect product quality.",
          },
          {
            title: "Supply chain management",
            text: "Tighter supplier monitoring and joint quality improvement programmes.",
          },
          {
            title: "Safety redesign",
            text: "Redesigning the accelerator pedal mechanism and adding brake-override systems.",
          },
        ],
      },
      {
        title: "Key takeaway",
        body: [
          "Technical tools alone are not enough: quality depends on a culture of communication, accountability and continuous improvement — a perspective at the heart of Industrial and System Engineering.",
        ],
      },
    ],
    gallery: [],
    skills: ["Research", "Quality tools", "Case study analysis", "Technical writing", "Teamwork"],
  },
];

export const featuredSlugs = [
  "reverse-engineering-cooling-fan",
  "solar-powered-phone-case",
  "sports-hackathon",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
