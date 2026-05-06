"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { about } from "@/lib/data";
import Card from "@/components/ui/Card";
import * as Icons from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const iconMap: Record<string, any> = Icons;

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionWrapper id="about" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A data-driven professional with a unique journey from non-IT to Data
            Analytics
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="max-w-4xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              {about.summary}
            </p>
          </Card>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {about.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <Card key={index} variant="gradient" className="text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </motion.div>

        {/* Career Transition Story */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                My Journey
              </h3>
              <div className="space-y-3 text-white/70">
                <p>
                  Starting with a background in engineering and operations, I
                  discovered my passion for data while working with Excel and
                  reporting systems. This realization sparked a deliberate career
                  transition into data analytics.
                </p>
                <p>
                  Through continuous learning and hands-on projects, I've built
                  expertise in Python, SQL, Power BI, and machine learning.
                  My non-IT background gives me a unique perspective - I
                  understand business challenges firsthand and can translate
                  them into data solutions.
                </p>
                <p>
                  Today, I combine analytical skills with practical business
                  understanding to deliver insights that drive real-world
                  impact.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}