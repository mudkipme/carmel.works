export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  rel?: string;
}

export interface TopicTag {
  label: string;
  color: "sky" | "mint" | "amber" | "coral" | "violet";
}

export const site = {
  name: "Carmel Works",
  domain: "carmel.works",
  url: "https://carmel.works",
  creator: "Mudkip",
  fediverseCreator: "@mudkip@indieweb.social",
  title: "Carmel Works — Indie apps by Mudkip",
  description:
    "Indie open-source apps for self-hosting, homelabs, and personal media libraries — by Mudkip.",
  headline: "Indie apps for self-hosting & the things you love.",
  intro:
    "Built by Mudkip — open-source tools for homelabs, personal media shelves, and everyday hobbies.",
  topics: [
    { label: "self-hosted", color: "mint" },
    { label: "homelab", color: "sky" },
    { label: "local-first", color: "amber" },
    { label: "anime & games", color: "coral" },
  ] satisfies TopicTag[],
  socials: [
    {
      label: "Mudkip Mud Sport",
      href: "https://mudkip.me",
      handle: "mudkip.me",
    },
    {
      label: "GitHub",
      href: "https://github.com/mudkipme",
      handle: "github.com/mudkipme",
    },
    {
      label: "Mastodon",
      href: "https://indieweb.social/@mudkip",
      handle: "@mudkip@indieweb.social",
      rel: "me",
    },
  ] satisfies SocialLink[],
} as const;
