export const mockData = {
  name: "Jai Adithya Ram Nayani",
  title: "Full-Stack AI Engineer",
  about: "Full-Stack AI Engineer with 4+ years building production systems across healthcare SaaS, fintech, and accessibility platforms. Shipped LLM-powered applications using RAG pipelines, multi-agent architectures (Google Gemini 2.0, LangChain, ChromaDB), and scalable backends with Python, FastAPI, Next.js, TypeScript, PostgreSQL, and AWS. Transformed monolithic fintech platforms into microservices processing 50TB+ datasets. Built HIPAA-aligned healthcare automation serving 50+ medical facilities with 50-70% operational time savings. Proven ability to ship 0→1 products at startup velocity while bridging engineering, product, and business stakeholders. Y Combinator Vibecon 2025 selectee (Top 200 from 30,000+ applicants) | Kaggle Top 10% (321/3,724) | McKinsey Forward \"Super Learner\"",
  
  workExperience: [
    {
      title: "Founding Engineer",
      company: "Stealth AI Startup (Healthcare) | Remote USA",
      duration: "May 2025 – Oct 2025",
      description: "• Developed a HIPAA-aligned healthcare B2B platform using React, Next.js, and Node.js (NestJS), automating scheduling, billing, pharmacy, and financial workflows for 50+ medical facilities with 50-70% operational time savings. • Implemented data governance controls with PostgreSQL OLAP reporting, MongoDB state management, and AWS Cognito/KMS for authentication and encryption, ensuring RBAC authorization and audit compliance across patient data workflows. • Built Python-based OCR pipelines using Tesseract for invoice ingestion, deployed via Docker containers, and integrated n8n orchestration with Twilio/WhatsApp notifications for real-time appointment confirmations."
    },
    {
      title: "Software Engineer",
      company: "George Mason University | Virginia",
      duration: "January 2024 – May 2025",
      description: "• Designed accessible web modules for the Mason LIFE platform using React, TypeScript, and PostgreSQL, delivering WCAG-compliant interfaces that streamlined admissions and student resource workflows for neurodiverse learners. • Integrated RESTful APIs with AWS Athena analytics, Dynamic Forms, and payment gateways, enabling real-time data orchestration across MySQL and PostgreSQL environments for high-volume educational data processing. • Configured CI/CD pipelines using GitHub Actions and Jenkins, deploying Docker containerized applications on AWS infrastructure (EC2, S3, Lambda) with Kubernetes orchestration for scalable, zero-downtime releases. • Validated automated test suites with JUnit and Mockito, implementing Google Analytics performance monitoring to ensure accessibility compliance and rapid troubleshooting across cross-functional development teams."
    },
    {
      title: "Software Engineer",
      company: "Humint Global Technologies | India",
      duration: "January 2021 – July 2023",
      description: "• Engineered data pipelines processing 50TB+ datasets using Python, PySpark, and Apache Airflow DAG orchestration across MySQL, Aurora, and Snowflake, accelerating data throughput by 50% for real-time financial analytics. • Created dynamic frontend interfaces using React with TypeScript and Material UI, deploying Cypress-based automated testing suites that reduced UI defect rates by 35% across customer-facing fintech applications. • Deployed containerized microservices on AWS (S3, Lambda, Glue, EventBridge, SNS, SQS) with Docker and Kubernetes, implementing Splunk and CloudWatch monitoring to reduce deployment failures by 30%. • Transformed monolithic fintech platforms into microservices using Java, Spring Boot, and Spring Cloud Gateway, implementing OAuth 2.0 and API Gateway rate limiting for PCI-compliant transaction flows."
    }
  ],
  
  education: [
    {
      school: "George Mason University, Virginia",
      degree: "Master of Science, Computer Science",
      duration: "May 2025",
      gpa: "3.60"
    },
    {
      school: "Jawaharlal Nehru Technological University (JNTU-H), India",
      degree: "Bachelors, Computer Science Engineering",
      duration: "July 2023", 
      gpa: "3.85"
    }
  ],
  
  skills: {
    languages: ["Python", "Ruby on Rails", "SQL", "Java", "JavaScript", "C", "C++", "R", "Bash"],
    aiLLM: ["OpenAI API", "Anthropic Claude", "LLaMA", "LlamaIndex", "LangSmith", "MLflow", "Weights & Biases"],
    mlFrameworks: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "scikit-learn", "Keras"],
    vectorDatabases: ["Pinecone", "Qdrant", "FAISS", "pgvector", "Weaviate", "ChromaDB"],
    backendAPIs: ["GraphQL", "gRPC", "Prisma", "tRPC", "FastAPI", "NestJS", "Node.js", "Express"],
    cloudPlatform: ["GCP (BigQuery, Vertex AI)", "Azure", "Vercel", "Cloudflare", "Fly.io"],
    awsServices: ["ECS", "Fargate", "RDS", "IAM", "CloudFormation", "CDK", "EC2", "S3", "Lambda", "Cognito", "KMS"],
    databases: ["Redis", "Elasticsearch", "DynamoDB", "Redshift", "Databricks", "PostgreSQL", "MongoDB", "MySQL", "Snowflake"],
    dataWorkflow: ["Kafka", "Pandas", "NumPy", "dbt", "Prefect", "Temporal", "Celery", "Jupyter Notebook", "Apache Airflow", "PySpark"],
    devopsObservability: ["Prometheus", "Grafana", "Datadog", "ArgoCD", "ELK Stack", "Loki", "PagerDuty", "PostHog", "Git", "Sentry", "Helm", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    frontend: ["Tailwind CSS", "Redux", "Chakra UI", "Next.js", "React.js", "TypeScript", "Angular", "Material UI"],
    productIntegrations: ["Stripe", "OAuth", "WebSockets", "Segment", "Mixpanel", "Algolia", "Figma"],
    projectManagement: ["Jira", "Confluence", "Notion"],
    methodologies: ["Agile", "Scrum", "SDLC"]
  },
  
  projects: [
    {
      title: "Aqua-Sentinel: Real-Time AI Agents for Water Crisis Prevention",
      description: "• Constructed a multi-agent AI system using Google Gemini 2.0 Flash and Agent Development Kit (ADK) to ingest real-time data streams from NASA, USGS, and weather APIs. • Orchestrated predictive analytics pipelines with Python for proactive water crisis detection through multi-source environmental data aggregation and autonomous agent coordination.",
      technologies: ["Python", "Google Gemini 2.0", "Agent Development Kit", "NASA API", "USGS API", "Multi-Agent Systems"],
      category: "featured",
      date: "Dec 2025",
      githubUrl: "https://github.com/jai-nayani/AQUA-SENTINEL-Real-Time-AI-Agents-for-Water-Crisis-Prevention"
    },
    {
      title: "AI-Legal-Doc-Assistant",
      description: "• Shipped a full-stack legal document platform using Next.js, TypeScript, and Google Gemini AI with Supabase authentication and cloud storage for secure document processing. • Executed AI-powered document analysis pipelines enabling automated contract review, clause extraction, and legal summary generation through structured prompt engineering and streaming responses.",
      technologies: ["Next.js", "TypeScript", "Google Gemini AI", "Supabase", "Document Processing"],
      category: "featured",
      date: "Nov 2025",
      githubUrl: "https://github.com/jai-nayani/AI-Legal-Doc-Assistant"
    },
    {
      title: "AI Resume Chatbot (jai-llm-chatbot)",
      description: "• Trained a conversational AI assistant using RAG architecture with ChromaDB vector database and Google Gemini, serving low-latency semantic retrieval responses through FastAPI REST endpoints. • Fine-tuned the base model using LoRA (Low-Rank Adaptation) techniques, optimizing inference performance for context-aware Q&A with custom embedding pipelines in Python.",
      technologies: ["Python", "FastAPI", "ChromaDB", "Google Gemini", "RAG", "LoRA Fine-tuning"],
      category: "featured",
      date: "Sept 2025",
      githubUrl: "https://github.com/jai-nayani/jai-llm-chatbot"
    },
    {
      title: "Kaggle Loan Prediction Competition",
      description: "• Ranked Top 10% (321 of 3,724 participants) training stacked ensemble models with XGBoost, LightGBM, and CatBoost, applying advanced feature engineering and pseudo-labeling techniques. • Optimized model performance using SMOTE for class imbalance, GridSearchCV hyperparameter tuning, and SHAP analysis for feature importance interpretation across 15+ behavioral variables.",
      technologies: ["Python", "XGBoost", "LightGBM", "CatBoost", "scikit-learn", "SHAP", "SMOTE"],
      category: "featured",
      date: "Nov 2025",
      githubUrl: "https://github.com/jai-nayani/Kaggle-Loan-Prediction-"
    }
  ],
  
  certifications: [
    {
      title: "Y Combinator Vibecon 2025",
      description: "Selected among 200 builders from 30,000+ global applicants",
      type: "achievement"
    },
    {
      title: "Kaggle Top 10%",
      description: "Ranked 321 out of 3,724 participants in Loan Prediction Competition",
      type: "achievement"
    },
    {
      title: "McKinsey Forward",
      description: "\"Super Learner\" certification",
      type: "achievement"
    },
    {
      title: "Machine Learning Specialization",
      description: "Stanford University (Coursera)",
      type: "certification"
    },
    {
      title: "Data Analytics and Predictive Technologies",
      description: "IIT-BHU, Varanasi",
      type: "certification"
    },
    {
      title: "Facebook Hacker Cup",
      description: "Advanced to Round 3 of 4 in global competitive programming competition",
      type: "achievement"
    },
    {
      title: "Microsoft Imagine Cup",
      description: "Semi-Finalist (Top 15% of participants)",
      type: "achievement"
    },
    {
      title: "Academic Excellence Award",
      description: "Recipient for consistent performance (Top 5% of class)",
      type: "achievement"
    },
    {
      title: "Dean's List",
      description: "JNTU-H, India",
      type: "achievement"
    }
  ]
};