/**
 * Dereje Seifu — brand theme (canonical HSL tokens live in `app/globals.css`).
 * Use these hex strings for manifest, theme-color meta, and non-CSS contexts.
 */
export const brandTheme = {
  id: "seifu-studio",
  displayName: "Seifu Studio",

  hex: {
    /** Main page canvas (warm light) */
    canvas: "#f6f3ed",
    /** Body text */
    ink: "#121826",
    /** Primary CTAs / success signal (emerald) */
    primary: "#1d9a78",
    /** Links, logo partner tone (violet) */
    accent: "#6d45c5",
    /** Dark footer band */
    footer: "#10151c",
    /** Card / header surface */
    surface: "#ffffff",
  },
} as const
