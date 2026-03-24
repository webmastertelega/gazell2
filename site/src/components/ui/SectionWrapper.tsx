"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  alt?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  alt = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${alt ? "bg-surface-alt" : "bg-surface"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
