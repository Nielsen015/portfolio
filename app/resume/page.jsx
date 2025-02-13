"use client";

import { Title } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import { FaHtml5,FaCss3, FaJs,FaReact, FaFigma, FaNodeJs,FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPhp, SiAdobephotoshop, SiLaravel, SiMysql, SiMongodb } from "react-icons/si";

const about = {
  Title: "About Me",
  description: "I’m a dedicated software engineer with a deep passion for leveraging technology to solve real-world problems. My journey into software development was driven by a fascination with how code can transform ideas into tangible, impactful solutions.I thrive on tackling complex challenges and enjoy the process of continuous learning and growth in this ever-evolving field. What motivates me is the opportunity to create innovative and efficient software that makes a difference. Whether working on cutting-edge projects or refining existing systems, I am driven by the challenge of delivering high-quality solutions that exceed expectations and contribute to meaningful progress.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Moses Nielsen"
    },
    {
      fieldname: "Phone",
      fieldValue: "(+254) 796 892 012"
    },
    {
      fieldname: "Experience",
      fieldValue: "5+ years"
    },
    {
      fieldname: "Email",
      fieldValue: "mosesnielsen68@gmail.com"
    },
    {
      fieldname: "Languages",
      fieldValue: "English, Swahili"

    },]
};
// Experience data

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "A dynamic Software Engineer with a proven track record of delivering high-quality software solutions that align with organizational objectives. Proficient in leveraging cutting-edge technologies and methodologies, with expertise in full-stack development, including React, AngularJS, and Node.js. Possess a robust understanding of databases, both SQL and NoSQL, such as PostgreSQL, MySQL, and MongoDB. Skilled in multiple programming languages, including Python, Java, and JavaScript. Adept in agile project management and dedicated to providing top-notch customer service, with exceptional communication and problem-solving abilities. Ready to drive innovation and deliver impactful results in the field of software engineering.",
  items: [
    {
      company: "SG NewTech",
      position: "Technical Lead - Temenos Infinity Products",
      duration: "January 2025 - Current",
    },
    {
      company: "SG NewTech",
      position: "Software Engineer - Implementation specialist",
      duration: "December 2023 - January 2025",
    },
    {
      company: "Software Group",
      position: "Graduate Trainee",
      duration: "April 2023 - December 2023",
    },
    {
      company: "Software Group",
      position: "Software Engineer Intern",
      duration: "November 2022 – April 2023",
    },
    {
      company: "Freelance",
      position: "Software developer",
      duration: "January 2022 – November 2022",
    }
  ]
};

// Eduaction data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Eduaction",
  description: "My academic journey has been a cornerstone of my professional development, equipping me with the knowledge, skills, and critical thinking necessary to excel in my field.",
  items: [
    {
      institution: "Power Learn Project (PLP)",
      certificate: "Software Scholarship Program",
      duration: "August 2024 - December 2024",
    },
     {
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      certificate: "Bachelor of Science in Business Computing",
      duration: "September 2017 - November 2022",
    }
  ]
};

// Skills data
const skills = {
  title: "My Skills",
  description: "I possess a diverse skill set that enables me to deliver high-quality software solutions across the full development lifecycle. From front-end design to back-end development, I leverage cutting-edge technologies and methodologies to create innovative, efficient, and scalable software.",
  skillSet: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },{
      icon: <FaCss3 />,
      name: "CSS3",
    },{
      icon: <FaJs />,
      name: "JavaScript",
    },{
      icon: <FaPython />,
      name: "Python",
    },{
      icon: <FaNodeJs />,
      name: "Node.js",
    },{
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },{
      icon: <FaFigma />,
      name: "Figma",
    },{
      icon: <FaReact />,
      name: "React",
    },{
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },{
      icon: <SiPhp />,
      name: "PHP",
    },{
      icon: <SiLaravel />,
      name: "Laravel",
    },{
      icon: <SiNextdotjs />,
      name: "Next.js",
    },{
      icon: <SiMongodb />,
      name: "MongoDB",
    },{
      icon: <SiMysql />,
      name: "MySQL",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const resume = () => {
  return <div>Resume resume</div>;
};

export default resume;
