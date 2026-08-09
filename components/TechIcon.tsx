import { createElement } from "react";
import type { IconType } from "react-icons";
import {
  SiShopify,
  SiBigcommerce,
  SiZoho,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiGraphql,
  SiGit,
  SiJira,
  SiAsana,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiApple,
  SiGooglechrome,
  SiNotepadplusplus,
} from "react-icons/si";
import { FaAws, FaWindows, FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const exact: Record<string, IconType> = {
  Shopify: SiShopify,
  BigCommerce: SiBigcommerce,
  "Zoho Commerce": SiZoho,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  jQuery: SiJquery,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  SCSS: SiSass,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  PHP: SiPhp,
  "Node.js": SiNodedotjs,
  GraphQL: SiGraphql,
  Git: SiGit,
  JIRA: SiJira,
  Asana: SiAsana,
  MySQL: SiMysql,
  Postgresql: SiPostgresql,
  "Mac OS": SiApple,
  Windows: FaWindows,
  "Chrome Developer Tools": SiGooglechrome,
  "Visual Studio Code": VscVscode,
  "Notepad++": SiNotepadplusplus,
  AWS: FaAws,
};

export function getTechIcon(name: string): IconType | null {
  if (exact[name]) return exact[name];
  if (name.startsWith("Shopify")) return SiShopify;
  if (name.startsWith("BigCommerce")) return SiBigcommerce;
  if (name.startsWith("Zoho")) return SiZoho;
  if (name.includes("AWS")) return FaAws;
  if (name.startsWith("Linux")) return SiLinux;
  return null;
}

export default function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const icon = getTechIcon(name);
  if (!icon) return null;
  return createElement(icon, { className, "aria-hidden": true });
}
