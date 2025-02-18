"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel,
  SelectTrigger,
  SelectValue } from "@/components/ui/select";

  import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

  const info = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "(+254) 796 892 012",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mosesnielsen68@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      value: "Nairobi, Kenya. P.O Box 3764 - 00200, City square",
    }
  ]

import {motion} from "framer-motion";


const contact = () => {
  return <motion.section initial={{ opacity:0 }} animate={{ opacity:1, transition:{delay: 2.4, duration:0.4, ease: "easeIn"} }} className="py-6">
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
      {/* form */}
      <div className="xl:w-[54%] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
        <h3 className="text-4xl text-accent">Let&apos;s Work together</h3>
        <p className="text-white/60">I’m always excited to collaborate on new projects, explore creative ideas, and bring innovative solutions to life. Whether you have a specific project in mind or just want to chat about possibilities, I’d love to hear from you!</p>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input type="Name" placeholder="Full name" />
          <Input type="email" placeholder="Email address" />
          <Input type="phone" placeholder="Phone Number" />
        </div>
        {/* select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder='Select a service'></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value='web'>Web Development</SelectItem>
              <SelectItem value='ui'>UI/UX Design</SelectItem>
              <SelectItem value='design'>Graphic and Logo Design</SelectItem>
              <SelectItem value='int'>System Integration</SelectItem>
              <SelectItem value='cnt'>Consultation and maintenance</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Textarea */}
        <Textarea className='h-[200px]' placeholder="Type your Message here"></Textarea>
        {/* button */}
        <Button size='md' className="max-w-40">Send message</Button>
        </form>
      </div>
      {/* info */}
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
      <ul className="flex flex-col gap-10">
        {info.map((item, index) => {
          return <li key={index} className="flex gap-6 items-center">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-full bg-[#27272c] text-accent flex items-center justify-center">
              <div className="text-[28px]">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-xl">{item.value}</h3>
            </div>
          </li>
        })}
      </ul>
      </div>
    </div>
  </div>
  </motion.section>;
};

export default contact;
