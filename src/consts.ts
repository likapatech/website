import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ufuksfk@gmail.com",
    HREF: "mailto:ufuksfk@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "likapa.tech",
    HREF: "https://github.com/likapatech"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "likapa.tech",
    HREF: "http://linkedin.com/company/likapatech",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "likapa_tech",
    HREF: "https://twitter.com/likapa_tech",
  },
]

