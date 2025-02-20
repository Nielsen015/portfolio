"use client";

import { Title } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import { FaHtml5,FaCss3, FaJs,FaReact, FaFigma, FaNodeJs,FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPhp, SiAdobephotoshop, SiLaravel, SiMysql, SiMongodb } from "react-icons/si";

const about = {
  title: "About Me",
  description: "I am a dedicated software engineer with a deep passion for leveraging technology to solve real-world problems. My journey into software development was driven by a fascination with how code can transform ideas into tangible, impactful solutions.I thrive on tackling complex challenges and enjoy the process of continuous learning and growth in this ever-evolving field. What motivates me is the opportunity to create innovative and efficient software that makes a difference. Whether working on cutting-edge projects or refining existing systems, I am driven by the challenge of delivering high-quality solutions that exceed expectations and contribute to meaningful progress.",
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
  description: "A dynamic Software Engineer with a proven track record of delivering high-quality software solutions that align with organizational objectives.",
  items: [
    {
      company: "SG NewTech",
      position: "Technical Lead",
      duration: "January 2025 - Current",
    },
    {
      company: "SG NewTech",
      position: "Software Engineer",
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
      institution: "Mosh School of Programming",
      certificate: "Front-end fundamentals",
      duration: "January 2023 - April 2023",
    },
    {
      institution: "Pirple S/w Engineering",
      certificate: "Full Stack Web Development",
      duration: "June 2022 - November 2022",
    },
     {
      institution: "Jomo Kenyatta University",
      certificate: "BSc. Business Computing",
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
    }
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";

import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "/components/ui/tooltip";
import { ScrollArea } from "/components/ui/scroll-area";
import { motion } from "framer-motion";



const resume = () => {
  return <motion.div initial={{ opacity:0 }} animate={{ 
    opacity: 1,
    transition: {
      delay:2.4,
      duration: 0.4,
      ease: "easeIn"
    },
   }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
   <div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
        <TabsTrigger value='skills'>Skills</TabsTrigger>
        <TabsTrigger value='about'>About me</TabsTrigger>
      </TabsList>
      {/* content */}
      <div className="min-h-[70vh] w-full" >
      {/* Experience */}
      <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{experience.items.map((item, index)=>{
              return(
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-lg max-w-[300px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>
                </li>
              )
            })}</ul>
          </ScrollArea>
        </div>
      </TabsContent>
      {/* Eduaction */}
      <TabsContent value="education" className="w-full"><div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{education.items.map((item, index)=>{
              return(
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-lg max-w-[300px] min-h-[60px] text-center lg:text-left">{item.certificate}</h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                </li>
              )
            })}</ul>
          </ScrollArea>
        </div></TabsContent>
      {/* Skills */}
      <TabsContent value="skills" className="w-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {skills.skillSet.map((skill, index)=>{
            return <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                </TooltipTrigger>
                <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </li>;
          })}
        </ul>
      </div></TabsContent>
      {/* About */}
      <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px] mx-auto xl:mx-0">
          {about.info.map((item,index)=>{
            return <li key="index" className="flex items-center justify-center xl:justify-start gap-4">
              <span className="text-white/60">{item.fieldname}</span>
              <span className="text-xl">{item.fieldValue}</span>
            </li>
          })}
        </ul>
      </div>
      </TabsContent>
      </div>
    </Tabs>
   </div></motion.div>;
};

export default resume;
