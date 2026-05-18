export type Project = {
  title: string;
  description: string;
  problem: string;
  dataset: string;
  approach: string;
  tools: string[];
  insights: string[];
  impact: string;
  github: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: 'JioHotstar Ad Vision',
    description: 'Built a video-to-data analytics pipeline for brand exposure and ad performance tracking.',
    problem: 'Marketers needed structured advertising insights from raw streaming media to track brand recall and reach.',
    dataset: 'Video ad files, brand exposure timestamps, inferred object detection metadata, and campaign logs.',
    approach:
      'Extracted frames from video, applied YOLO object detection, transformed exposures into structured insights, and delivered dashboards with interactive filters.',
    tools: ['Python', 'YOLO', 'MySQL', 'Streamlit', 'SQL'],
    insights: [
      'Mapped video ad placements to time-stamped brand exposures.',
      'Enabled campaign owners to compare ad visibility across multiple segments.',
      'Reduced manual annotation effort by automating the exposure pipeline.',
    ],
    impact:
      'Provided real-time performance tracking for streaming ad campaigns and improved decision-making for marketing teams.',
    github: 'https://github.com/arun8nov/JioHotstar-Ad-Vision',
  },
  {
    title: 'TN Rainfall Data Automation',
    description: 'Designed a scalable weather pipeline to monitor rainfall trends for agricultural planning.',
    problem: 'Remote agriculture stakeholders lacked automated, clean rainfall analytics for seasonal planning.',
    dataset: 'Meteorological rainfall datasets from Tamil Nadu, processed hourly and daily for trend analysis.',
    approach:
      'Built ingestion, cleaning, and transformation steps, then surfaced results in a Streamlit dashboard with trend forecasting views.',
    tools: ['Python', 'Pandas', 'Streamlit', 'SQL', 'Excel'],
    insights: [
      'Normalized inconsistent weather feeds for analytics-ready reporting.',
      'Produced clear seasonal rainfall summaries and anomaly detection.',
      'Improved farm planning with a data-driven rainfall monitoring workflow.',
    ],
    impact: 'Enabled faster agricultural decisions through automated weather intelligence and reusable analytics pipelines.',
    github: 'https://github.com/arun8nov/TN_RainfallData_Automation',
  },
  {
    title: 'India Agricultural Data Analysis',
    description: 'Analyzed nationwide crop and weather datasets to uncover actionable agri-business trends.',
    problem: 'Agricultural planners needed data-backed insights on crop production and climate patterns.',
    dataset: 'Public agriculture datasets combined with regional weather information and production statistics.',
    approach:
      'Performed exploratory data analysis, created visual narratives, and designed Power BI dashboards for stakeholder review.',
    tools: ['Power BI', 'Python', 'Excel', 'SQL'],
    insights: [
      'Identified correlations between crop output and seasonal weather changes.',
      'Ranked high-impact crops by production growth and climate resilience.',
      'Delivered executive-ready dashboards for planning teams.',
    ],
    impact: 'Supported agricultural planning with clear recommendations and actionable KPI tracking.',
    github: 'https://github.com/arun8nov/India-AgriData',
  },
  {
    title: 'Employee Attrition & Performance Prediction',
    description: 'Created an HR analytics dashboard predicting churn risk and performance drivers.',
    problem: 'Business leaders needed a proactive solution to retain talent and improve workforce performance.',
    dataset: 'Employee profiles, performance metrics, attrition records, and engagement scores.',
    approach:
      'Engineered features, trained Random Forest and XGBoost models, and highlighted churn drivers through interactive reporting.',
    tools: ['Python', 'XGBoost', 'Pandas', 'Power BI', 'SQL'],
    insights: [
      'Discovered top attrition drivers such as engagement, tenure, and satisfaction.',
      'Built explainable visuals for HR stakeholders to act on retention signals.',
      'Created a predictive model with 85%+ accuracy for early intervention.',
    ],
    impact: 'Helped HR teams move from reactive reporting to strategic talent management.',
    github: 'https://github.com/arun8nov/Employee_Attrition',
  },
];
