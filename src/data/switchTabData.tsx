import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import { TabProps } from "@/types";

// Tabs
const switchTabData: TabProps[] = [
  {
    title: "About Me",
    value: "aboutme",
    content: (scrollRef) => <AboutMe scrollRef={scrollRef} />,
  },
  {
    title: "Experience",
    value: "experience",
    content: (scrollRef) => <Experience scrollRef={scrollRef} />,
  },
  {
    title: "Education",
    value: "education",
    content: (scrollRef) => <Education scrollRef={scrollRef} />,
  },
];

export default switchTabData;
