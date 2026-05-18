"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Code } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

      {/* Animated background elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        transition={{ delay: 2 }}
      />

      <div className="relative z-10 page-container text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-white/60 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90">
              {personalInfo.role}
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mt-4">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed"
          >
            Transforming complex datasets into actionable insights that drive
            business decisions. Passionate about data analytics, machine learning,
            and creating impactful visualizations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              <ArrowDown className="w-8 h-8 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}