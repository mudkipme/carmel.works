export type ProjectStatus = "active" | "beta" | "alpha" | "coming-soon" | "archived";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  iconDark?: string;
  screenshot?: string;
  screenshotDark?: string;
  screenshotAlt?: string;
  accent: string;
  accentDark: string;
  status?: ProjectStatus;
  categories: string[];
  platforms: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "moe-memos",
    name: "Moe Memos",
    description:
      "Offline-first client to capture thoughts locally or sync two-way with your self-hosted Memos server.",
    href: "https://memos.moe",
    icon: "/icons/moe-memos.png",
    screenshot: "/screenshots/moe-memos.png",
    screenshotAlt: "Moe Memos on iPad showing memos, activity heatmap, and tags",
    accent: "#16a37a",
    accentDark: "#2dd4a5",
    status: "active",
    categories: ["Self-hosted", "Mobile"],
    platforms: ["iOS", "iPadOS", "Android"],
    links: [
      { label: "memos.moe", href: "https://memos.moe" },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/moe-memos/id1643902185",
      },
      {
        label: "F-Droid",
        href: "https://f-droid.org/packages/me.mudkip.moememos/",
      },
      {
        label: "GitHub",
        href: "https://github.com/mudkipme?tab=repositories&q=moe+memos",
      },
    ],
  },
  {
    slug: "kizunashelf",
    name: "KizunaShelf",
    description:
      "Schema-driven personal library for anime, games, books, music, and events — stored as plain Markdown files.",
    href: "https://kizunashelf.app",
    icon: "/icons/kizunashelf.webp",
    iconDark: "/icons/kizunashelf-dark.webp",
    screenshot: "/screenshots/kizunashelf.webp",
    screenshotAlt: "KizunaShelf desktop app showing upcoming releases and Watching Anime shelf",
    accent: "#e85942",
    accentDark: "#ff7e67",
    status: "beta",
    categories: ["Self-hosted", "Media", "Desktop", "Mobile"],
    platforms: ["iOS", "macOS", "Linux", "Windows", "Web"],
    links: [
      { label: "kizunashelf.app", href: "https://kizunashelf.app" },
      {
        label: "TestFlight",
        href: "https://testflight.apple.com/join/hE7k3sWd",
      },
      {
        label: "GitHub",
        href: "https://github.com/mudkipme/kizunashelf",
      },
    ],
  },
  {
    slug: "carmel-agent",
    name: "Carmel Agent",
    description:
      "Multi-user self-hosted web app for running AI agents with your own keys, container sandboxes, and a live browser.",
    href: "https://agent.carmel.works",
    icon: "/icons/carmel-agent.png",
    screenshot: "/screenshots/carmel-agent-light.webp",
    screenshotDark: "/screenshots/carmel-agent-dark.webp",
    screenshotAlt: "Carmel Agent chat workspace with side-by-side code diff panel",
    accent: "#0e8ad4",
    accentDark: "#38bdf8",
    status: "active",
    categories: ["Self-hosted", "AI"],
    platforms: ["Web", "Podman", "Docker"],
    links: [
      { label: "agent.carmel.works", href: "https://agent.carmel.works" },
      {
        label: "GitHub",
        href: "https://github.com/mudkipme/carmel-agent",
      },
    ],
  },
  {
    slug: "maibooru",
    name: "Maibooru",
    description:
      "Fast, native desktop client for browsing, tagging, and organizing your Oxibooru or Szurubooru media library.",
    href: "https://maibooru.carmel.works",
    icon: "/icons/maibooru.png",
    screenshot: "/screenshots/maibooru.webp",
    screenshotAlt: "Maibooru desktop window browsing a tagged media library with side inspector",
    accent: "#9333ea",
    accentDark: "#c084fc",
    status: "active",
    categories: ["Self-hosted", "Media", "Desktop"],
    platforms: ["macOS", "Windows", "Linux"],
    links: [
      { label: "maibooru.carmel.works", href: "https://maibooru.carmel.works" },
      {
        label: "Releases",
        href: "https://github.com/mudkipme/maibooru/releases",
      },
      {
        label: "GitHub",
        href: "https://github.com/mudkipme/maibooru",
      },
    ],
  },
];

export function getFilterCategories(items: Project[] = projects): string[] {
  const counts = new Map<string, number>();
  for (const item of items) {
    for (const category of new Set(item.categories)) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 0 && count < items.length)
    .map(([category]) => category);
}
