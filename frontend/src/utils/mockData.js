export const mockData = {
  name: "Jai Adithya Nayani",
  title: "AI/ML Engineer | GenAI Specialist",
  about: "AI/ML Engineer and Generative AI specialist with 7+ years of experience building production-grade machine learning and GenAI systems at scale across financial crime, regulatory compliance, healthcare payment integrity, and identity verification. At Socure, I design and deploy enterprise Generative AI platforms that sit directly in high-stakes decision workflows—architecting a GenAI Explainability Engine using LangChain and self-hosted LLMs (Llama 3) that converts fraud model signals into regulator-ready natural language explanations, reducing analyst escalations by 40% and case review times by 90%. Built a RAG-based Global Watchlist Compliance Copilot spanning 1,000+ sanctions and PEP lists with sub-200ms semantic retrieval and 96% retrieval accuracy. Experienced in LoRA/QLoRA fine-tuning with Hugging Face PEFT, LLM guardrails with hallucination detection and factual grounding, and multi-agent orchestration with LangGraph. Previously at Cotiviti and Experian, I built large-scale ML systems processing billions of records monthly—driving $15B+ in flagged claims annually, 42% prepay review migration, and 45% program value growth. Strong MLOps, SHAP explainability, bias monitoring, and cloud-native deployment on AWS and Azure.",

  workExperience: [
    {
      title: "AI/ML Engineer",
      company: "Socure | Remote, US",
      duration: "July 2024 – Present",
      description: "• Architected GenAI Explainability Engine using LangChain and self-hosted LLMs (Llama 3), transforming Sigma Fraud Model risk scores into natural-language explanations for analysts reviewing identity verification decisions. • Built RAG-based Compliance Copilot for Global Watchlist Screening using vector search over 1,000+ sanctions and PEP lists, implementing fuzzy name matching with 88% name similarity accuracy and entity correlation algorithms. • Designed vector search infrastructure using Pinecone and pgvector, enabling semantic retrieval across millions of adverse media records with sub-200ms query latency and 96% retrieval accuracy. • Implemented two-stage scoring pipeline combining Name Match and Entity Correlation modules, reducing false positives by 30% compared to legacy rule-based compliance solutions. • Applied LoRA fine-tuning on Llama 3 using Hugging Face PEFT for compliance-specific terminology, reducing inference costs by 50% while improving entity extraction accuracy on sanctions datasets. • Implemented LLM guardrails with hallucination detection and factual grounding validation against source documents, ensuring AI-generated explanations remained traceable for regulatory audits. • Designed multi-agent orchestration using LangGraph for complex compliance workflows, enabling autonomous document retrieval, cross-reference validation, and iterative reasoning with human oversight. • Reduced analyst escalation rates by 40% and case review times by 90% through intelligent pre-population of compliance findings and automated evidence gathering."
    },
    {
      title: "ML Engineer",
      company: "Cotiviti Holdings | Hyderabad, India",
      duration: "March 2021 – July 2023",
      description: "• Built probability scoring models for Clinical Chart Validation using Python and scikit-learn, prioritizing high-risk claims for certified auditors and achieving 42% prepay review migration with 45% program value growth. • Developed anomaly detection pipelines for FWA Pattern Review using gradient boosting and clustering algorithms, identifying suspicious provider billing patterns contributing to $15B+ in flagged claims annually. • Engineered NLP extraction models for medical record coding using spaCy and Hugging Face Transformers, automating DRG validation from unstructured clinical documents and reducing manual review time by 60%. • Designed HCC risk adjustment models for DxCG Intelligence platform, predicting members with highest probability of missing conditions to improve RAF score accuracy across 147M+ members. • Constructed end-to-end ML pipelines on AWS (SageMaker, S3, Lambda) and Azure ML Studio, implementing model versioning, A/B testing, and automated retraining with MLflow experiment tracking for production governance. • Established model governance framework including bias detection modules, explainability dashboards using SHAP, and fairness metrics ensuring responsible ML deployment in healthcare."
    },
    {
      title: "Data Scientist",
      company: "Experian | Hyderabad, India",
      duration: "December 2019 – March 2021",
      description: "• Built DataSights analytics platform with config-driven ETL modules using Python and PySpark, implementing 20+ automated data profiling rules across 361 financial attributes for risk assessment. • Improved data accuracy from 78% to 96% through automated validation pipelines including null checks, referential integrity verification, statistical outlier detection, and format standardization. • Developed risk scoring models using scikit-learn and XGBoost to predict compliance violations and flag high-risk entities, achieving 85% precision in identifying KYC anomalies across banking portfolios. • Created feature engineering pipelines extracting 100+ derived attributes from raw financial data, including beneficial ownership patterns, transaction velocity metrics, and entity relationship signals. • Deployed Perpetual KYC monitoring system on AWS using Lambda and Glue for continuous sanctions screening, processing watchlist updates and triggering risk re-assessment workflows automatically. • Implemented customer segmentation models identifying high-value vs. high-risk client clusters, enabling targeted compliance interventions and reducing false positive rates by 30%."
    },
    {
      title: "Python Developer",
      company: "Infocusp Innovations | Hyderabad, India",
      duration: "January 2018 – November 2019",
      description: "• Built ETL pipelines using Python and Apache Airflow, authoring DAG-based workflows with scheduling, retry logic, and run monitoring to automate batch data processing across 500K+ daily records. • Implemented data quality validation layer with schema checks, null detection, and statistical outlier flagging, improving data accuracy from 78% to 96% before downstream analytics consumption. • Developed Flask REST APIs exposing versioned endpoints for data access, implementing request validation, pagination patterns, and consistent error handling for internal analytics consumers. • Deployed serverless data processing jobs on Azure Functions and Blob Storage, automating file ingestion and transformation workflows that reduced manual processing time by 60%. • Created automated test suites using pytest covering unit and integration scenarios, establishing CI pipelines with Jenkins that reduced regression defects by 35% across releases."
    }
  ],

  education: [
    {
      school: "George Mason University",
      degree: "Master of Science, Computer Science",
      duration: "Graduated",
      gpa: ""
    }
  ],

  skills: {
    languages: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "Bash", "C++"],
    aiLLM: ["LLMs", "RAG", "Prompt Engineering", "LangChain", "LangGraph", "LlamaIndex", "AutoGen", "OpenAI GPT-4", "Anthropic Claude", "Llama 3", "Hugging Face", "Hugging Face Transformers", "PEFT/LoRA", "Sentence Transformers", "spaCy"],
    mlFrameworks: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "LightGBM", "Keras", "Pandas", "NumPy", "OpenCV"],
    mlopsGovernance: ["MLflow", "Weights & Biases", "Azure ML Studio", "AWS SageMaker", "Model Versioning", "A/B Testing", "SHAP", "Drift Detection", "CI/CD", "Jenkins", "GitHub Actions"],
    vectorDatabases: ["Pinecone", "pgvector", "FAISS", "ChromaDB", "Weaviate", "Elasticsearch"],
    dataEngineering: ["Apache Spark (PySpark)", "Apache Airflow", "Kafka", "AWS Glue", "Snowflake", "dbt", "ETL/ELT Pipelines"],
    cloudPlatform: ["AWS (EKS, Lambda, S3, Glue, SageMaker, RDS, EventBridge, CloudFormation)", "Azure (ML Studio, AKS, DevOps, Blob Storage)"],
    devopsObservability: ["Docker", "Kubernetes", "Helm", "Terraform", "Jenkins", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "CI/CD", "TDD"],
    backendAPIs: ["FastAPI", "Flask", "Spring Boot", "NestJS", "Node.js", "GraphQL", "REST APIs"],
    frontend: ["React", "Next.js", "Redux"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
    productIntegrations: ["Twilio", "Stripe", "OAuth 2.0", "Tesseract"]
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
      title: "AWS Certified Generative AI Developer – Professional",
      description: "Cloud & AI certification",
      type: "certification"
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      description: "Cloud & AI certification",
      type: "certification"
    },
    {
      title: "NVIDIA Certified Associate: Generative AI Multimodal",
      description: "Generative AI certification",
      type: "certification"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      description: "Cloud foundations certification",
      type: "certification"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      description: "Cloud AI certification",
      type: "certification"
    },
    {
      title: "Databricks Generative AI Fundamentals",
      description: "Generative AI fundamentals",
      type: "certification"
    }
  ]
};
