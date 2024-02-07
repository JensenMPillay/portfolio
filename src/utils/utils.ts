import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Classname Util
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function capitalizeString(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getTitlePage(title: string): string {
  return `Portfolio JM | ${capitalizeString(title)}`;
}
