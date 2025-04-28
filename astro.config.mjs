// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(), // TODO astro image manipulation blur pixel images
  },
  integrations: [
    starlight({
      title: "Conquest Faction Mod",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/etherplay/conquest-eth",
        },
      ],
      sidebar: [
        {
          label: "What is Conquest.eth ?",
          slug: "what-is-conquest",
        },
        {
          label: "Guides",
          items: [
            {
              label: "Setting up your account",
              slug: "guides/setting-up-your-account",
            },
            {
              label: "Get hold of your first planet",
              slug: "guides/get-hold-of-your-first-planet",
            },
            {
              label: "Send your first fleet",
              slug: "guides/send-your-first-fleet",
            },
            {
              label: "Agent Service",
              slug: "guides/agent-service",
            },
            {
              label: "Watch the logs",
              slug: "guides/watch-the-logs",
            },
            {
              label: "Resolving Manually",
              slug: "guides/resolving-manually",
            },
            {
              label: "Exit a planet",
              slug: "guides/exit-a-planet",
            },
            {
              label: "Withdraw",
              slug: "guides/withdraw",
            },
          ],
        },
        {
          label: "Advanced Guides",
          items: [
            {
              label: "Combining Attacks",
              slug: "advanced-guides/combining-attacks",
            },
            {
              label: "What changed from traditional mode?",
              slug: "advanced-guides/what-changed-from-traditional-mode",
            },
          ],
        },
        {
          label: "Fundamentals",
          items: [
            {
              label: "Planets",
              slug: "fundamentals/planets",
            },
            {
              label: "Fleets",
              slug: "fundamentals/fleets",
            },
            {
              label: "Combat",
              slug: "fundamentals/combat",
            },
            {
              label: "Upkeep",
              slug: "fundamentals/upkeep",
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
