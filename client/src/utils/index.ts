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
