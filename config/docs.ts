import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    }
   
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        
        {
          title: "Animated Gradient Text",
          href: `/docs/components/animated-gradient-text`,
          items: [],
          label: "",
        },
        {
          title: "Animated Shiny Text",
          href: `/docs/components/animated-shiny-text`,
          items: [],
        },
        {
          title: "Animated Grid Pattern",
          href: `/docs/components/animated-grid-pattern`,
          items: [],
          label: "New",
        },
        {
          title: "Animated tabs",
          href: `/docs/components/animated-tabs`,
          items: [],
          label: "New",
        },
        {
          title: "Border Beam",
          href: `/docs/components/border-beam`,
          items: [],
        },
        {
          title: "Fade Text",
          href: `/docs/components/fade-text`,
          items: [],
          label: "New",
        },        
        {
          title: "Globe",
          href: `/docs/components/globe`,
          items: [],
        },
        {
          title: "Github globe",
          href: `/docs/components/gitglobe`,
          items: [],
          label: "New",
        },
        {
          title: "Moving cards",
          href: `/docs/components/marquee`,
          items: [],
        },
        {
          title: "Number Ticker",
          href: `/docs/components/number-ticker`,
          items: [],
        },
        {
          title: "Particles",
          href: `/docs/components/particles`,
          items: [],
        },
        {
          title: "Retro Grid",
          href: `/docs/components/retro-grid`,
          items: [],
          label: "New",
        },
        {
          title: "Scroll Based Velocity",
          href: `/docs/components/scroll-based-velocity`,
          items: [],
          label: "New",
        },
        {
          title: "Shimmer Button",
          href: `/docs/components/shimmer-button`,
          items: [],
        },
        {
          title: "Shiny Button",
          href: `/docs/components/shiny-button`,
          items: [],
          label: "New",
        },

      ],
    },
    
  ],
};
