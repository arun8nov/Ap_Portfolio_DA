"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { valueProposition } from "@/lib/data";
import Card from "@/components/ui/Card";
import * as Icons from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const iconMap: Record<string, any> = Icons;

export default function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sections = [
    {
      title: "Core Capabilities",
      items: valueProposition.coreCapabilities,
      gradient: "from-blue-500/20 to-purple-600/20",
    },
    {
      title: "Real-World Application",
      items: valueProposition.realWorldApplication,
      gradient: "from-purple-500/20 to-pink-600/20",
    },
    {
      title: "Adaptability & Learning",
      items: valueProposition.adaptability,
      gradient: "from-pink-500/20 to-orange-600/20",
    },
    {
      title: "Additional Strengths",
      items: valueProposition.additionalStrengths,
      gradient: "from-orange-500/20 to-yellow-600/20",
    },
  ];

  return (
    <SectionWrapper id="value" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            How I Create Value
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A data-driven problem solver who combines analytical skills,
            practical experience, and continuous learning
          </p>
        </motion.div>

        {/* Value Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white text-center">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.items.map((item, itemIndex) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <Card
                        key={itemIndex}
                        variant="glass"
                        className={`bg-gradient-to-br ${section.gradient} hover:scale-105 transition-transform`}
                      >
                        <div className="flex flex-col items-center space-y-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div variants={itemVariants}>
          <Card variant="gradient" className="max-w-4xl mx-auto text-center">
            <p className="text-white/90 text-xl font-medium leading-relaxed">
              "A data-driven problem solver who combines analytical skills,
              practical experience, and continuous learning to deliver meaningful
              insights."
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}