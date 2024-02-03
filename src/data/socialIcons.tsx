import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/Icons/Icons";
import { SocialIconProps } from "@/types";

const socialIcons: SocialIconProps[] = [
  {
    index: 3,
    name: "Github",
    href: "https://www.github.com/JensenMPillay",
    icon: (
      <GithubIcon className="transition-all duration-300 group-hover:scale-125" />
    ),
  },
  {
    index: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jensenpillay/",
    icon: (
      <LinkedInIcon className="transition-all duration-300 group-hover:scale-125" />
    ),
  },
  {
    index: 1,
    name: "Email",
    href: "mailto:jmooroongapillay@gmail.com",
    icon: (
      <MailIcon className="transition-all duration-300 group-hover:scale-125" />
    ),
  },
];

export default socialIcons;
