export interface navigationLinksProps {
  title: string;
  renderTo: string;
}

export const navigationLinks = [
  { title: "Create", renderTo: "/create" },
  { title: "Gallery", renderTo: "/gallery" },
  { title: "About", renderTo: "/about" },
  { title: "Report", renderTo: "/report" },
];

export interface missionProps {
  title: string;
  description: string;
}

export const missionDetails = [
  {
    title: "Empower Creativity",
    description:
      "Our mission is to provide accessible tools that help creators bring their ideas to life, pixel by pixel.",
  },
  {
    title: "Foster a Community",
    description:
      "We aim to create a space where designers, creators, and enthusiasts can learn, share, and grow together.",
  },
  {
    title: "Simplify the Process",
    description:
      "We believe creating pixel art should be intuitive and fun for everyone, regardless of skill level.",
  },
];

export interface reportOptionsProps {
  value: string;
  label: string;
}

export const reportOptions: reportOptionsProps[] = [
  { value: "bug", label: "Bug Report" },
  { value: "feature_request", label: "Feature Request" },
  { value: "ui_feedback", label: "UI Feedback" },
  { value: "performance", label: "Performance Issue" },
  { value: "other", label: "Other" },
];

import AI from "../assets/AI.svg";
import Download from "../assets/Download.svg";
import ColorPalette from "../assets/ColorPalette.svg";

export interface FeatureProps {
  title: string;
  description: string;
  iconType: string;
  iconPath: string;
}

export const featureCards: FeatureProps[] = [
  {
    title: "Create Custom Palettes",
    description:
      "Your art, your colors. Easily build and save custom palettes to match your vision.",
    iconType: "palette",
    iconPath: ColorPalette,
  },
  {
    title: "Download in Multiple Formats",
    description:
      "Export your creations in PNG, JPEG, JPG, or SVG for crisp designs.",
    iconType: "file",
    iconPath: Download,
  },
  {
    title: "AI-Powered Pixelation",
    description:
      "Upload any image and let our AI transform it into pixel art in seconds.",
    iconType: "ai",
    iconPath: AI,
  },
];
