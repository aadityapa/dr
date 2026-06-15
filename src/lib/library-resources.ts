export type LibraryResource = {
  id: string;
  title: string;
  description: string;
  category: string;
  fileName: string;
};

export const libraryResources: LibraryResource[] = [
  {
    id: "sensory-screening",
    title: "Sensory Screening Questionnaire",
    description: "A parent-friendly checklist to identify sensory processing patterns — over-responsivity, under-responsivity, and sensory seeking behaviors.",
    category: "Screening Tools",
    fileName: "sensory-screening-questionnaire.pdf",
  },
  {
    id: "school-readiness",
    title: "School Readiness Checklist",
    description: "Essential skills checklist for children entering preschool or Grade 1 — motor, sensory, self-care, and social readiness indicators.",
    category: "Checklists",
    fileName: "school-readiness-checklist.pdf",
  },
  {
    id: "handwriting",
    title: "Handwriting Development Checklist",
    description: "Age-appropriate handwriting milestones and red flags — pencil grip, letter formation, speed, and legibility benchmarks.",
    category: "Checklists",
    fileName: "handwriting-checklist.pdf",
  },
  {
    id: "autism-guide",
    title: "Autism Parent Guide",
    description: "Understanding autism from an OT perspective — sensory profiles, daily routines, therapy goals, and practical home strategies.",
    category: "Parent Guides",
    fileName: "autism-parent-guide.pdf",
  },
  {
    id: "adhd-guide",
    title: "ADHD Parent Guide",
    description: "Movement-based strategies, attention-building routines, homework support, and classroom accommodations for children with ADHD.",
    category: "Parent Guides",
    fileName: "adhd-parent-guide.pdf",
  },
  {
    id: "sensory-diet",
    title: "Sensory Diet Guide",
    description: "How to create a personalized sensory diet — scheduled activities that help your child stay regulated throughout the day.",
    category: "Parent Guides",
    fileName: "sensory-diet-guide.pdf",
  },
  {
    id: "fine-motor",
    title: "Fine Motor Activities Guide",
    description: "30+ home activities to build hand strength, pencil control, scissor skills, and dexterity — organized by age group.",
    category: "Activity Guides",
    fileName: "fine-motor-activities-guide.pdf",
  },
  {
    id: "gross-motor",
    title: "Gross Motor Activities Guide",
    description: "Movement activities for balance, coordination, body awareness, and strength — suitable for home and outdoor play.",
    category: "Activity Guides",
    fileName: "gross-motor-activities-guide.pdf",
  },
];

export function getLibraryResource(id: string): LibraryResource | undefined {
  return libraryResources.find((r) => r.id === id);
}
