import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Classname Util
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
