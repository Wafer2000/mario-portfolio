import Portfolio from "@/components/portfolio";
import { defaultContent, publicContent } from "@/lib/portfolio-content";
export default function Home() { return <Portfolio initialContent={publicContent(defaultContent)} />; }
