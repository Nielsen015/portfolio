"use client";

import { FaCode, FaPaintBrush, FaCogs, FaTools } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "I build dynamic and responsive websites tailored to your needs. From crafting custom web applications to enhancing user experience, my focus is on delivering high-quality, scalable solutions that drive engagement and meet your business objectives.",
    href: "",
    icon: FaCode, // Assign an icon to each service
  },
  {
    num: "02",
    title: "Graphic Design",
    desc: "I create visually compelling graphics that capture your brand’s essence. Whether it’s designing logos, marketing materials, or website assets, I ensure each design element aligns with your brand identity and effectively communicates your message.",
    href: "",
    icon: FaPaintBrush,
  },
  {
    num: "03",
    title: "Software Integration",
    desc: "I specialize in integrating diverse software systems to ensure seamless operation across your technology stack. By connecting different tools and platforms, I help automate workflows, enhance data sharing, and boost overall efficiency.",
    href: "",
    icon: FaCogs,
  },
  {
    num: "04",
    title: "Maintenance & Support",
    desc: "I provide comprehensive maintenance and support services to keep your software running smoothly. This includes bug fixes, performance enhancements, updates, and troubleshooting to ensure your applications continue to operate efficiently and effectively.",
    href: "",
    icon: FaTools,
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            const Icon = service.icon; // Get the icon component
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl 
                  
                   text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <Icon className="text-primary text-3xl" /> {/* Use the assigned icon */}
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.desc}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;