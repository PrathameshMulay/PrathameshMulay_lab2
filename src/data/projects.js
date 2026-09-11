export const projects = [
  {
    id: 'llm-nl-analytics',
    name: 'LLM-Powered Natural Language Analytics',
    category: 'AI / Product / Data',
    technologies: ['Microsoft Fabric', 'LLMs', 'RAG', 'Text-to-SQL', 'SQL', 'Python'],
    description:
      'Designed an AI solution that allows business users to query enterprise data using natural language instead of manually writing SQL.',
    highlight: 'Natural-language analytics over enterprise data.',
    architecture: [
      'User Question',
      'RAG / Metadata Retrieval',
      'LLM',
      'SQL Generation',
      'SQL Validation & Governance',
      'Microsoft Fabric',
      'Results',
      'Natural Language Answer',
    ],
    caseStudy: {
      problem:
        'Business users needed answers from enterprise data but depended on analysts to write SQL for every question, slowing down decision-making.',
      solution:
        'Designed an AI-driven layer that interprets natural language questions, retrieves relevant schema and metadata, and generates governed SQL queries against the underlying data platform.',
      architecture:
        'A user question is enriched with retrieved metadata (RAG) before being passed to an LLM, which generates a candidate SQL query. The query passes through validation and governance checks before executing against Microsoft Fabric, with results translated back into a natural language answer.',
      technicalApproach:
        'Combined retrieval-augmented generation for schema/metadata grounding with a text-to-SQL prompting strategy, layering validation rules to keep generated queries within approved tables and columns.',
      governance:
        'Introduced SQL validation and governance checks between generation and execution to guard against unauthorized data access or malformed queries before they reach the data platform.',
      results:
        'Enabled business users to get answers to data questions in natural language, reducing dependence on manual SQL authoring for common analytical questions.',
      technology: ['Microsoft Fabric', 'LLMs', 'RAG', 'Text-to-SQL', 'SQL', 'Python'],
    },
  },
  {
    id: 'healthcare-claims-pipeline',
    name: 'Large-Scale Healthcare Claims Data Pipeline',
    category: 'Data Engineering',
    technologies: ['PySpark', 'Spark SQL', 'Airflow', 'SQL', 'ETL'],
    description:
      'Built a scalable data pipeline for processing 25–30M healthcare claims records per refresh and transforming raw claims into patient- and HCP-level analytics datasets.',
    highlight: 'Automated ~9–10 hours of manual effort per refresh.',
    architecture: [
      'Raw Claims',
      'Silver Transformations',
      'Patient Rollup',
      'HCP Rollup',
      'Gold Analytics Tables',
      'Reporting',
    ],
    caseStudy: {
      problem:
        'Raw healthcare claims data arrived at large scale (25–30M records per refresh) and required significant manual effort to transform into usable, patient- and HCP-level analytics tables.',
      solution:
        'Built an orchestrated ETL pipeline that transforms raw claims through staged silver transformations into rolled-up patient and HCP analytics tables, ready for reporting.',
      architecture:
        'Raw claims flow through silver-layer transformations, are rolled up at the patient and HCP level, and land in gold analytics tables consumed directly by reporting.',
      technicalApproach:
        'Used PySpark and Spark SQL for distributed transformations, with Airflow for orchestration. Applied partitioning, repartitioning, bucketing, salting, and broadcast joins to manage skew and join performance, alongside predicate pushdown, column pruning, and data validation to keep the pipeline efficient and reliable.',
      governance: null,
      results:
        'Automated approximately 9–10 hours of manual effort per refresh by replacing manual transformation steps with an orchestrated pipeline.',
      technology: [
        'PySpark',
        'Spark SQL',
        'Airflow',
        'Partitioning',
        'Repartitioning',
        'Bucketing',
        'Salting',
        'Broadcast Joins',
        'Predicate Pushdown',
        'Column Pruning',
        'Data Validation',
      ],
    },
  },{
    id: 'ai-recruiter',
    name: 'AI Recruiter — Job Matching & Outreach Agent',
    category: 'AI / Product',
    technologies: [
      'Python',
      'LLMs',
      'NLP',
      'Resume Parsing',
      'Job Matching',
      'Streamlit',
    ],
    description:
      'Built an AI-powered recruiting application that analyzes a candidate’s resume against job opportunities and generates personalized application outreach.',
    highlight: 'AI-powered job matching and personalized outreach.',
    architecture: [
      'Resume',
      'Resume Parsing',
      'Job Description',
      'LLM Analysis',
      'Candidate–Job Matching',
      'Personalized Outreach',
      'Application Workflow',
    ],

    caseStudy: {

      problem:
        'Applying to jobs at scale requires repeatedly reviewing job descriptions, assessing fit, tailoring application materials, and writing personalized outreach, creating a time-consuming and repetitive workflow.',

      solution:
        'Built an AI recruiting application that parses a candidate resume, analyzes job descriptions, evaluates candidate–job fit, and generates personalized outreach based on the candidate’s experience and the specific opportunity.',

      architecture:
        'A candidate resume is provided to the application and parsed into structured information. Job descriptions are analyzed alongside the candidate profile, with an LLM evaluating the alignment between skills, experience, and role requirements. The system then generates personalized outreach and application content based on the identified fit.',

      technicalApproach:
        'Combined document parsing, natural language processing, and LLM-based reasoning to transform unstructured resume and job-description text into structured candidate–job insights. The application uses the resulting context to generate role-specific recommendations and personalized outreach.',

      governance:
        'Designed the workflow to keep generated content grounded in the candidate’s actual resume and the target job description, reducing unsupported claims and preventing the system from inventing candidate experience.',

      results:
        'Created an end-to-end AI-assisted recruiting workflow that reduces repetitive job application work while producing more targeted, role-specific outreach.',

      technology: [
        'Python',
        'LLMs',
        'NLP',
        'Resume Parsing',
        'Job Matching',
        'Streamlit',
      ],

    },
  },
  {
    id: 'fund-categorization-reporting',
    name: 'Fund Categorization & Executive Reporting',
    category: 'Analytics / Business Intelligence',
    technologies: ['Python', 'SQL', 'Power BI', 'DAX', 'Power Query'],
    description:
      'Migrated a fund categorization dashboard from Tableau to Power BI and connected reporting directly to the source database to eliminate manual Excel extraction.',
    highlight: 'Automated fund categorization and executive reporting.',
    architecture: [
      'Source Database',
      'Python Keyword Classification',
      'Power Query',
      'DAX Modeling',
      'Power BI',
      'Automated Refresh',
      'Executive Reporting',
    ],
    caseStudy: {
      problem:
        'Fund categorization reporting relied on Tableau with manual Excel extraction, making refreshes slow and dependent on manual steps.',
      solution:
        'Migrated the dashboard to Power BI and connected it directly to the source database, using Python keyword-based classification to automate fund categorization.',
      architecture:
        'Data flows from the source database through Python-based keyword classification and Power Query transformations, is modeled with DAX, and is published to Power BI with automated refresh for executive reporting.',
      technicalApproach:
        'Used Python for keyword-based classification of fund accounts, Power Query for data shaping, and DAX for the semantic model powering the Power BI report, replacing the previous Tableau and Excel-based workflow.',
      governance: null,
      results:
        'Delivered a consolidated view of fund accounts categorized by intended purpose — including scholarships, research, engineering, athletics, and other categories — with automated refresh replacing manual Excel extraction.',
      technology: ['Python', 'SQL', 'Power BI', 'DAX', 'Power Query'],
    },
  },
  {
    id: 'lstm-fraud-detection',
    name: 'Sequential Fraud Detection with LSTM',
    category: 'Deep Learning',
    technologies: ['Python', 'LSTM', 'Deep Learning', 'Machine Learning'],
    description:
      'Developed a fraud detection approach that models sequences of customer transactions to identify behavioral patterns associated with fraudulent activity.',
    highlight: null,
    architecture: ['Transactions', 'Time-Ordered Sequence', 'LSTM', 'Fraud Probability'],
    caseStudy: {
      problem:
        'Point-in-time transaction checks can miss fraud patterns that only emerge when looking at a customer\'s behavior over a sequence of transactions.',
      solution:
        'Modeled customer transactions as time-ordered sequences and used an LSTM network to learn behavioral patterns associated with fraud.',
      architecture:
        'Individual transactions are ordered into time-based sequences per customer, fed into an LSTM network, and used to output a fraud probability.',
      technicalApproach:
        'Applied sequence modeling with LSTM networks in Python to capture temporal dependencies across a customer\'s transaction history rather than treating each transaction independently.',
      governance: null,
      results:
        'Established a sequence-based approach to fraud detection that captures behavioral patterns across transactions over time.',
      technology: ['Python', 'LSTM', 'Deep Learning', 'Machine Learning'],
    },
  },
      
]
