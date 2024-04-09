// Icon SVGs
export type SVGProps = React.SVGAttributes<SVGElement>;

// Text
export type TextProps = {
  title: string;
  paragraphs: string[];
};

// Toggle Button  (Navbar)
export type ToggleButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

// Social Icon
export type SocialIconProps = {
  index: number;
  name: string;
  href: URL["href"];
  icon: JSX.Element;
};

// Nav & Button Link
export type LinkProps = {
  href: URL["href"];
  title: string;
};

// About Tab
export type ScrollRef = MutableRefObject<HTMLDivElement | null>;

export type TabProps = {
  title: string;
  value: string;
  content: (scrollRef: ScrollRef) => JSX.Element;
};

export type AboutContentProps = {
  scrollRef: ScrollRef;
};

export type AboutMeProps = TextProps & {
  aside: {
    key: string;
    title: string;
    value: number;
  }[];
};

export type ExperienceDetailsProps = {
  id: number;
  position: string;
  company: string;
  companyLink: URL["href"];
  time: string;
  address: string;
  works: string[];
};

export type EducationDetailsProps = {
  id: number;
  type: string;
  time: string;
  place: string;
  info: string;
};

// Skills SVGs
export type skillsSVGsProps = {
  [key: string]: JSX.Element;
};

// Project
export type ProjectProps = {
  id: number;
  className?: string;
  title: string;
  tools: string[];
  summary: string;
  video: string;
  link: URL["href"];
  github?: URL["href"];
};
