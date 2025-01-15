export interface navigationLinksProps {
  title: string;
  renderTo: string;
}

export const navigationLinks: navigationLinksProps[] = [
  { title: "Create", renderTo: "/create" },
  { title: "Gallery", renderTo: "/gallery" },
  { title: "About", renderTo: "/about" },
  { title: "Faq", renderTo: "/faq" },
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

export interface AboutIntroProps {
  content: string;
}

export const AboutIntro: AboutIntroProps[] = [
  {
    content:
      "Pixel Playground is your ultimate tool for creating stunning pixel art. Whether you're an experienced artist or just starting your creative journey, our platform is designed to make pixel art both simple and enjoyable.",
  },
  {
    content:
      "With an intuitive interface and a flexible grid system, you can easily create beautiful pixel art. While the platform doesn’t provide preset color palettes initially, you can effortlessly create and customize your own to match your unique vision.",
  },
  {
    content:
      "It’s not just about designing art—it’s about unlocking your creative potential. Pixel Playground offers you the tools to bring your retro-inspired creations to life, all in a smooth, accessible environment. Get ready to explore a world of endless possibilities, one pixel at a time.",
  },
];

export interface photoGalleryProps {
  title: string;
  img: string;
}

export const photoGallery = [
  {
    title: "L1",
    img: "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
  },
  {
    title: "L2",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NR9MV7uAIX9B1f16mQVe7wHaEG%26pid%3DApi&f=1&ipt=f61c9a26581f5abaf88280203d69abce58ab524c3132194c00a899872c62b867&ipo=images",
  },
  {
    title: "L3",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yKgb0_fC1SGvze6Qu7W3OwHaEo%26pid%3DApi&f=1&ipt=44807c5c9105b2f91fc07023890dd5ee1d842dd33d98c7ce7084e55d1ecd3672&ipo=images",
  },
  {
    title: "L4",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yLf7kQVaLpxqCZX1VRHw-wHaEK%26pid%3DApi&f=1&ipt=4ccc648e0323bb8d7e7e333b7e1a6e24af22bf159cee5cdd9a79ed59a7a45060&ipo=images",
  },
  {
    title: "L5",
    img: "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg",
  },
  {
    title: "L6",
    img: "http://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-landscape-wallpaper-HD-1.jpg",
  },
  {
    title: "L7",
    img: "https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg",
  },
  // Duplicates start here
  {
    title: "L8",
    img: "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
  },
  {
    title: "L9",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NR9MV7uAIX9B1f16mQVe7wHaEG%26pid%3DApi&f=1&ipt=f61c9a26581f5abaf88280203d69abce58ab524c3132194c00a899872c62b867&ipo=images",
  },
  {
    title: "L10",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yKgb0_fC1SGvze6Qu7W3OwHaEo%26pid%3DApi&f=1&ipt=44807c5c9105b2f91fc07023890dd5ee1d842dd33d98c7ce7084e55d1ecd3672&ipo=images",
  },
  {
    title: "L11",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yLf7kQVaLpxqCZX1VRHw-wHaEK%26pid%3DApi&f=1&ipt=4ccc648e0323bb8d7e7e333b7e1a6e24af22bf159cee5cdd9a79ed59a7a45060&ipo=images",
  },
  {
    title: "L12",
    img: "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg",
  },
  {
    title: "L13",
    img: "http://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-landscape-wallpaper-HD-1.jpg",
  },
  {
    title: "L14",
    img: "https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg",
  },
];

export const faqList = [
  { header: 'What is Pixel Playground?', context: 'Pixel Playground is a creative platform where you can design pixel-based artwork. Use our drawing tools to create and experiment with your designs. It’s perfect for artists and beginners alike!' },
  { header: 'How do I use the Create page tools?', context: 'Select a tool from the Create page toolbox (e.g., pencil or eraser) and start drawing. Customize your settings like color and size from the toolbar. Save or share your designs when done!' },
  {},
  {},
  {},
]
