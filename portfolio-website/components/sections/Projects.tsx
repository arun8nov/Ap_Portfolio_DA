"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const categories = ["All", "ML & Analytics", "Automation", "Analytics"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper id="projects" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real-world data analytics projects demonstrating practical expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="glass"
              className="group hover:border-white/30 transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(project.id)}
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Problem Statement */}
                <p className="text-white/60 text-sm line-clamp-3">
                  {project.problem}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {expandedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setExpandedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              >
                {(() => {
                  const project = projects.find((p) => p.id === expandedProject);
                  if (!project) return null;

                  return (
                    <div className="p-8 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <button
                          onClick={() => setExpandedProject(null)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <X className="w-6 h-6 text-white/60" />
                        </button>
                      </div>

                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Problem Statement
                        </h4>
                        <p className="text-white/70">{project.problem}</p>
                      </div>

                      {/* Dataset */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Dataset
                        </h4>
                        <p className="text-white/70">{project.dataset}</p>
                      </div>

                      {/* Methodology */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Approach & Methodology
                        </h4>
                        <ul className="space-y-2">
                          {project.methodology.map((step, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-white/70"
                            >
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-medium flex-shrink-0">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Insights */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Key Insights
                        </h4>
                        <ul className="space-y-2">
                          {project.insights.map((insight, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-white/70"
                            >
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Business Impact */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Business Impact
                        </h4>
                        <p className="text-white/70">{project.impact}</p>
                      </div>

                      {/* GitHub Link */}
                      {project.github && (
                        <Button
                          onClick={() => window.open(project.github, "_blank")}
                          className="w-full"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View on GitHub
                        </Button>
                      )}
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}