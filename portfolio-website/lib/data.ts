export const personalInfo = {
  name: "Arunprakash B",
  role: "Data Analyst",
  tagline: "Transforming Data into Decisions",
  email: "arunbabuprakash@gmail.com",
  phone: "+91-9791157153",
  linkedin: "https://linkedin.com/in/arun8nov",
  github: "https://github.com/arun8nov",
  portfolio: "https://arun8nov.notion.site/Hey-there-I-am-Arunprakash-B-223fe4a17f8a80faa5abee1f246a06f1",
};

export const about = {
  summary: `Data Analyst with hands-on experience in SQL, Python, Power BI, and Databricks. Experienced in building scalable ETL pipelines using PySpark and implementing Medallion Architecture (Bronze, Silver, Gold layers) for structured data processing. Skilled in data cleaning, transformation, dashboard development, and generating actionable insights to support business decision-making.`,
  highlights: [
    {
      title: "6+ Years Experience",
      description: "Diverse background spanning non-IT and data analytics roles",
      icon: "Briefcase",
    },
    {
      title: "Career Transition",
      description: "Successfully transitioned from non-IT to Data Analytics",
      icon: "TrendingUp",
    },
    {
      title: "5+ Major Projects",
      description: "Real-world projects demonstrating analytical skills",
      icon: "Code",
    },
    {
      title: "Continuous Learner",
      description: "Actively upskilling in ML, NLP, and GenAI",
      icon: "BookOpen",
    },
  ],
};

export const skills = {
  categories: [
    {
      name: "Programming",
      icon: "Code",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "PySpark", level: 75 },
      ],
    },
    {
      name: "Visualization",
      icon: "BarChart",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 75 },
        { name: "Excel Advanced", level: 90 },
      ],
    },
    {
      name: "Tools",
      icon: "Wrench",
      skills: [
        { name: "Streamlit", level: 80 },
        { name: "Databricks", level: 75 },
        { name: "Git", level: 70 },
      ],
    },
    {
      name: "Concepts",
      icon: "Brain",
      skills: [
        { name: "ETL Pipelines", level: 85 },
        { name: "Data Cleaning", level: 90 },
        { name: "EDA", level: 85 },
        { name: "Basic ML", level: 70 },
      ],
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "JioHotstar Ad Vision",
    category: "ML & Analytics",
    problem: "Cricket broadcasts contain valuable brand exposure data that was being captured but not analyzed for actionable insights.",
    dataset: "Video footage from cricket matches with brand logos and timestamps",
    methodology: [
      "Implemented YOLO-based object detection for brand logo recognition",
      "Built end-to-end ETL pipeline to process video data",
      "Created MySQL database for structured data storage",
      "Developed interactive dashboards using Plotly",
      "Built GenAI chatbot for NL-to-SQL queries using Streamlit",
    ],
    tools: ["Python", "YOLO", "MySQL", "Plotly", "Streamlit", "GenAI"],
    insights: [
      "Achieved 85% accuracy in brand logo detection",
      "Identified peak brand exposure times during matches",
      "Enabled real-time performance tracking",
    ],
    impact: "Transformed video data into actionable insights for advertisers, enabling data-driven sponsorship decisions",
    github: "https://github.com/arun8nov/JioHotstar-Ad-Vision",
    image: "/images/jiohotstar.jpg",
  },
  {
    id: 2,
    title: "TN Rainfall Data Automation",
    category: "Automation",
    problem: "Manual collection and analysis of rainfall data was time-consuming and prone to errors, affecting agricultural decision-making.",
    dataset: "Historical rainfall data from Tamil Nadu meteorological stations",
    methodology: [
      "Designed automated data pipeline for rainfall data collection",
      "Implemented ETL workflows for data cleaning and transformation",
      "Built Streamlit dashboard for real-time visualization",
      "Created trend analysis and forecasting models",
    ],
    tools: ["Python", "Streamlit", "ETL", "Data Cleaning", "Visualization"],
    insights: [
      "Identified seasonal rainfall patterns across districts",
      "Enabled real-time monitoring of weather conditions",
      "Provided early warning for drought conditions",
    ],
    impact: "Empowered farmers and policymakers with data-driven agricultural planning and decision support",
    github: "https://github.com/arun8nov/TN_RainfallData_Automation",
    image: "/images/rainfall.jpg",
  },
  {
    id: 3,
    title: "Employee Attrition Prediction",
    category: "ML & Analytics",
    problem: "High employee turnover was impacting organizational performance, but the root causes were not well understood.",
    dataset: "Employee records including demographics, performance metrics, and exit data",
    methodology: [
      "Conducted exploratory data analysis on employee data",
      "Built Random Forest and XGBoost prediction models",
      "Identified key churn drivers through feature importance",
      "Created interactive dashboards for HR insights",
    ],
    tools: ["Python", "Scikit-learn", "XGBoost", "Power BI", "EDA"],
    insights: [
      "Achieved 85%+ prediction accuracy",
      "Identified top 5 factors driving employee churn",
      "Provided actionable recommendations for retention",
    ],
    impact: "Enabled data-driven HR decision-making, reducing attrition through targeted interventions",
    github: "https://github.com/arun8nov/Employee_Attrition",
    image: "/images/attrition.jpg",
  },
  {
    id: 4,
    title: "India Agricultural Data Analysis",
    category: "Analytics",
    problem: "Farmers and policymakers lacked comprehensive insights into crop production trends and weather patterns.",
    dataset: "Indian agricultural datasets including crop production, weather patterns, and market prices",
    methodology: [
      "Analyzed historical agricultural data",
      "Conducted statistical analysis on crop yields",
      "Built Power BI dashboards for visualization",
      "Identified trends and correlations",
    ],
    tools: ["Power BI", "Excel", "Statistical Analysis", "Data Visualization"],
    insights: [
      "Identified top-performing crop varieties by region",
      "Correlated weather patterns with crop yields",
      "Provided market price trend analysis",
    ],
    impact: "Supported agricultural planning and policy decisions with data-driven insights",
    github: "https://github.com/arun8nov/India-AgriData",
    image: "/images/agriculture.jpg",
  },
  {
    id: 5,
    title: "Productivity Tracking System",
    category: "Analytics",
    problem: "Organizations lacked real-time visibility into workforce productivity, making performance management challenging.",
    dataset: "Daily productivity records from 10,000+ employees",
    methodology: [
      "Designed high-volume data processing system",
      "Built real-time KPI tracking dashboard",
      "Implemented data validation and quality checks",
      "Created performance analytics and reporting",
    ],
    tools: ["Python", "SQL", "Dashboarding", "Data Validation", "KPI Tracking"],
    insights: [
      "Enabled real-time productivity monitoring",
      "Identified performance trends and patterns",
      "Supported data-driven performance management",
    ],
    impact: "Enhanced workforce performance analysis and management decision-making capabilities",
    github: "",
    image: "/images/productivity.jpg",
  },
];

export const experience = [
  {
    id: 1,
    role: "Associate",
    company: "Hurix Systems Private Limited",
    location: "Chennai",
    period: "Nov 2025 - Present",
    description: [
      "Improved data reliability through structured cleaning and validation processes",
      "Assessed and refined multimodal datasets to support AI model optimization",
      "Maintained consistent quality benchmarks for data processing",
    ],
    logo: "/images/hurix.png",
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "Unified Mentor Pvt. Ltd",
    location: "Remote",
    period: "Jan 2025 - Mar 2025",
    description: [
      "Designed interactive dashboards using Power BI and Tableau",
      "Analyzed campaign performance metrics and sales funnels",
      "Identified opportunities to improve lead conversion rates",
    ],
    logo: "/images/unified mentor.png",
  },
  {
    id: 3,
    role: "IT Support and Data Entry Executive",
    company: "GodSend Technology",
    location: "Virudhunagar",
    period: "Jun 2020 - Nov 2025",
    description: [
      "Performed accurate data entry for billing and accounting systems",
      "Maintained organized records using Excel",
      "Provided IT support while ensuring data consistency",
    ],
    logo: "/images/godsent.jpg",
  },
  {
    id: 4,
    role: "Production Engineer",
    company: "Flex India Pvt Ltd",
    location: "Chennai",
    period: "May 2019 - Mar 2020",
    description: [
      "Managed production workflow and reporting",
      "Collaborated with inventory and logistics teams",
      "Optimized production processes",
    ],
    logo: "/images/flex.png",
  },
];

export const valueProposition = {
  coreCapabilities: [
    {
      title: "Data Analysis",
      description: "Expert in cleaning, transforming, and analyzing complex datasets",
      icon: "Database",
    },
    {
      title: "SQL Expertise",
      description: "Proficient in joins, aggregations, and querying for insights",
      icon: "Server",
    },
    {
      title: "Reporting & Dashboards",
      description: "Creating impactful dashboards using Power BI and Excel",
      icon: "BarChart3",
    },
    {
      title: "Business Insights",
      description: "Turning raw data into actionable business decisions",
      icon: "Lightbulb",
    },
  ],
  realWorldApplication: [
    {
      title: "Real Datasets",
      description: "Experience working with actual production data",
      icon: "FileText",
    },
    {
      title: "Problem-Solving",
      description: "Systematic approach to analytical challenges",
      icon: "Puzzle",
    },
    {
      title: "Outcome-Focused",
      description: "Delivering measurable business impact",
      icon: "Target",
    },
  ],
  adaptability: [
    {
      title: "Career Transition",
      description: "Successfully transitioned from non-IT to data analytics",
      icon: "ArrowRight",
    },
    {
      title: "Continuous Upskilling",
      description: "Actively learning new tools and technologies",
      icon: "Zap",
    },
    {
      title: "Project-Based Learning",
      description: "Building practical skills through hands-on projects",
      icon: "Code2",
    },
  ],
  additionalStrengths: [
    {
      title: "Python Automation",
      description: "Automating repetitive tasks and workflows",
      icon: "Bot",
    },
    {
      title: "Streamlit Apps",
      description: "Building interactive data applications",
      icon: "AppWindow",
    },
    {
      title: "ML Fundamentals",
      description: "Understanding of machine learning concepts",
      icon: "BrainCircuit",
    },
    {
      title: "Data Storytelling",
      description: "Communicating insights effectively",
      icon: "MessageSquare",
    },
  ],
};

export const certifications = [
  {
    title: "Data Science Certified",
    issuer: "GUVI – IIT-M RP",
    link: "https://www.zenclass.in/certificateDownload/cQt5WRFi58FKT6Vf?download=true",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/arun8nov",
    icon: "Code",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/arun8nov",
    icon: "Users",
  },
  {
    name: "Email",
    url: "mailto:arunbabuprakash@gmail.com",
    icon: "Mail",
  },
];

// Icon mapping for lucide-react
export const iconMapping: Record<string, string> = {
  "Github": "Github",
  "Linkedin": "Linkedin",
  "Tool": "Wrench",
};