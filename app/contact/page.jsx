"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
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
  SelectValue,
} from "@/components/ui/select";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact information
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
  },
];

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control, // Add control from useForm
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Send email using Nodemailer or an API
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          duration: 30000, // 30 seconds
          position: "top-right",
        });
        reset(); // Clear the form
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work together</h3>
              <p className="text-white/60">
                I’m always excited to collaborate on new projects, explore
                creative ideas, and bring innovative solutions to life. Whether
                you have a specific project in mind or just want to chat about
                possibilities, I’d love to hear from you!
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Full name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Select Service */}
              <div>
                <Controller
                  name="service"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={field.onChange} // Update form value on change
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a Service</SelectLabel>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                          <SelectItem value="Graphic and Logo Design">Graphic and Logo Design</SelectItem>
                          <SelectItem value="System Integration">System Integration</SelectItem>
                          <SelectItem value="Consultation and maintenance">Consultation and maintenance</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Textarea */}
              <div>
                <Textarea
                  placeholder="Type your Message here"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-full bg-[#27272c] text-accent flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </motion.section>
  );
};

export default Contact;