"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";
import Card from "@/components/ui/Card";
import { Calendar, MapPin } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Image from "next/image";

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionWrapper id="experience" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Experience & Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A career transition from operations to data analytics
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-black transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card variant="glass" className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-white/80 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 ml-4">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-2 text-white/70 text-sm"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Summary */}
        <motion.div variants={itemVariants}>
          <Card variant="gradient" className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                From Operations to Analytics
              </h3>
              <p className="text-white/80 text-lg">
                My journey began in engineering and operations, where I developed
                strong problem-solving skills and business understanding. This
                foundation, combined with continuous learning in data analytics,
                enables me to bridge the gap between technical solutions and
                business needs.
              </p>
              <p className="text-white/70">
                Every role has contributed to my growth - from understanding
                operational challenges to building data-driven solutions that
                create real impact.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}