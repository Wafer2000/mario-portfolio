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
  category: z.enum(["web", "mobile", "ai", "desktop", "education", "cloud", "concept"]), year: short,
  type: copy, status: copy, headline: copy, description: copy, problem: copy,
  contribution: copy, decisions: z.array(copy).max(30), features: z.array(copy).max(30),
  validation: copy, stack: z.array(short).max(40), link: externalUrl.optional(), repo: externalUrl.optional(),
  visual: z.string().regex(/^[a-z0-9-]{1,80}$/), visible: z.boolean().optional(),
  cover: mediaUrl.optional(), gallery: z.array(z.object({ url: mediaUrl, caption: copy })).max(12).optional(),
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
    role: "Senior Flutter Developer · Full-Stack Engineer", location: "Maicao, La Guajira · Colombia",
    university: "Universidad de La Guajira", education: ["Ingeniería de Sistemas", "Systems Engineering"],
    title: ["Ideas claras.", "Clear ideas."], subtitle: ["Software real.", "Real software."],
    introduction: ["Soy Mario Fernando Gonsalvez Arias. Desarrollo aplicaciones móviles, plataformas web y herramientas de IA que resuelven problemas concretos.", "I'm Mario Fernando Gonsalvez Arias. I build mobile applications, web platforms and AI tools that solve real problems."],
    about: [["Mi especialidad es Flutter, pero mi trabajo comienza antes de la primera pantalla y continúa después del despliegue. Conecto experiencia de usuario, reglas de negocio, APIs, datos y nube.", "Flutter is my specialty, but my work starts before the first screen and continues after deployment. I connect user experience, business rules, APIs, data and cloud."], ["He trabajado en productos financieros, aplicaciones móviles y soluciones Full-Stack. Hoy también construyo herramientas de automatización y agentes locales, con atención a la arquitectura, las pruebas y el control de sus acciones.", "I've worked on financial products, mobile applications and Full-Stack solutions. Today I also build automation tools and local agents, with attention to architecture, testing and control over their actions."]],
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

