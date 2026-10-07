import { z } from "zod";
import { archiveRepos, certificates, contact, experience, expertise, projects } from "./portfolio-data";

const short = z.string().trim().max(300);
const paragraph = z.string().trim().max(6000);
const copy = z.tuple([paragraph, paragraph]);
const mediaUrl = z.string().max(2048).refine(value => {
  if (!value) return true;
  if (/^\/(?:assets|cv)\/[A-Za-z0-9_./-]+$/.test(value) && !value.includes("..")) return true;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password; } catch { return false; }
}, "Usa una dirección HTTPS o un archivo subido al portafolio.");
const externalUrl = z.string().max(2048).refine(value => {
  if (!value) return true;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password; } catch { return false; }
}, "Usa una dirección HTTPS válida.");

export const projectSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]{1,80}$/), name: short.min(1), number: short,
  category: z.enum(["web", "backend", "mobile", "ai", "desktop", "education", "cloud", "concept"]), year: short,
  type: copy, status: copy, headline: copy, description: copy, problem: copy,
  contribution: copy, decisions: z.array(copy).max(30), features: z.array(copy).max(30),
  validation: copy, stack: z.array(short).max(40), link: externalUrl.optional(), repo: externalUrl.optional(),
  visual: z.string().regex(/^[a-z0-9-]{1,80}$/), visible: z.boolean().optional(),
  cover: mediaUrl.optional(), gallery: z.array(z.object({ url: mediaUrl, caption: copy })).max(12).optional(),
  caseStudy: z.object({
    context: copy.optional(), role: copy.optional(), architecture: z.array(copy).max(12).optional(), challenges: z.array(copy).max(12).optional(),
    security: z.array(copy).max(12).optional(), testing: z.array(copy).max(12).optional(), deployment: z.array(copy).max(12).optional(),
    results: z.array(copy).max(12).optional(), lessons: z.array(copy).max(12).optional(),
  }).optional(),
});

export const portfolioSchema = z.object({
  profile: z.object({
    fullName: short.min(1), shortName: short.min(1), role: short.min(1), location: short,
    university: short, education: copy, title: copy, subtitle: copy, introduction: copy,
    about: z.array(copy).max(12), softwareYears: short, flutterYears: short, currentCompany: short,
    photoUrl: mediaUrl, cvEsUrl: mediaUrl, cvEnUrl: mediaUrl,
    training: paragraph, trainingNote: copy,
  }),
  contact: z.object({ email: z.string().email(), github: externalUrl, linkedin: externalUrl, whatsapp: externalUrl }),
  projects: z.array(projectSchema).max(100),
  experience: z.array(z.object({ company: short.min(1), role: short, dates: copy, description: copy, current: z.boolean().optional(), visible: z.boolean().optional() })).max(40),
  certificates: z.array(z.object({ issuer: short.min(1), name: short.min(1), year: short, kind: copy, url: mediaUrl.optional(), visible: z.boolean().optional() })).max(100),
  expertise: z.array(z.object({ title: copy, note: copy, items: z.array(short).max(60) })).min(1).max(12),
  archiveRepos: z.array(z.string().regex(/^[A-Za-z0-9_.-]{1,100}$/)).max(100),
}).superRefine((data, ctx) => {
  if (new Set(data.projects.map(p => p.id)).size !== data.projects.length) ctx.addIssue({ code: "custom", path: ["projects"], message: "Cada proyecto necesita un identificador distinto." });
});

export type PortfolioContent = z.infer<typeof portfolioSchema>;
export type PortfolioProject = PortfolioContent["projects"][number];
export type ContentSnapshot = { content: PortfolioContent; revision: number; updatedAt: string | null };
export type PortfolioAsset = { id: string; name: string; mime: string; size: number; created_at: string; url: string };
export type PortfolioVersion = { id: string; revision: number; actor: string; created_at: string };

export const defaultContent: PortfolioContent = portfolioSchema.parse({
  profile: {
    fullName: "Mario Fernando Gonsalvez Arias", shortName: "Mario Gonsalvez",
    role: "Senior Software Engineer", location: "Maicao, La Guajira · Colombia",
    university: "Universidad de La Guajira", education: ["Ingeniería de Sistemas", "Systems Engineering"],
    title: ["Senior Software Engineer", "Senior Software Engineer"], subtitle: ["Mobile · Backend · Cloud · AI", "Mobile · Backend · Cloud · AI"],
    introduction: ["Diseño y construyo software de producción para mobile, backend y cloud, combinando Flutter, Python, TypeScript, arquitectura cloud e inteligencia artificial aplicada.", "I design and build production software across mobile, backend and cloud environments, combining Flutter, Python, TypeScript, cloud architecture and applied AI."],
    about: [["Mi experiencia combina ingeniería mobile, backend y cloud. Trabajo desde la experiencia de usuario y las reglas de negocio hasta APIs, datos, arquitectura, automatización y despliegue. Flutter es una de mis especialidades más fuertes, dentro de un perfil más amplio de Software Engineering.", "My experience combines mobile, backend and cloud engineering. I work across user experience, business logic, APIs, data, architecture, automation and deployment. Flutter is one of my strongest specialties within a broader Software Engineering profile."]],
    softwareYears: "7+", flutterYears: "6+", currentCompany: "EPAM",
    photoUrl: "/assets/mario-portrait.webp", cvEsUrl: "/cv/Mario_Gonsalvez_ES.pdf", cvEnUrl: "/cv/Mario_Gonsalvez_EN.pdf",
    training: "Accelerate Development with Antigravity · Deploy an Agent with ADK · Evaluate and Improve ADK Agents",
    trainingNote: ["Google · Cursos de formación. Laboratorio Northstar Financial Security dentro de la ruta OpenAI PartnerU.", "Google · Training courses. Northstar Financial Security lab within the OpenAI PartnerU learning path."],
  },
  contact, projects, experience, certificates, expertise, archiveRepos,
});

export function publicContent(content: PortfolioContent): PortfolioContent {
  return { ...content, projects: content.projects.filter(p => p.visible !== false).map(p => ({ ...p, gallery: p.gallery?.filter(photo => Boolean(photo.url)) })), experience: content.experience.filter(e => e.visible !== false), certificates: content.certificates.filter(c => c.visible !== false) };
}

