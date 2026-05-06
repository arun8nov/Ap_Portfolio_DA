"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";
import Card from "@/components/ui/Card";
import * as Icons from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const iconMap: Record<string, any> = Icons;

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper id="skills" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis and visualization
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <Card key={index} variant="glass" className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-white/60 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + skillIndex * 0.1,
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={itemVariants}>
          <Card variant="gradient" className="max-w-4xl mx-auto text-center">
            <p className="text-white/80 text-lg">
              Continuously expanding my skillset with the latest tools and
              technologies in data analytics, machine learning, and AI.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}