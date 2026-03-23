"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: React.ReactNode;
  description: string;
  variant?: "default" | "blue" | "purple";
}

export default function PageHeader({
  title,
  description,
  variant = "default",
}: PageHeaderProps) {
  const getBackground = () => {
    switch (variant) {
      case "blue":
        return (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        );
      case "purple":
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-950 pointer-events-none" />
        );
      default:
        return (
          <>
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          </>
        );
    }
  };

  const getTitleStyles = () => {
    switch (variant) {
      case "blue":
        return "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200";
      case "purple":
        return "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200";
      default:
        return "text-4xl md:text-6xl font-bold mb-6 text-white";
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {getBackground()}
      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={getTitleStyles()}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
