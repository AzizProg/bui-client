import { LucideIcon } from "lucide-react";

export default interface BuiInfoProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    icon: LucideIcon;
    bgColor?: string;
  }