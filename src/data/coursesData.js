
export const coursesData = [
  // AWS
  {
    id: "aws-certified-cloud-practitioner",
    provider: "AWS",
    category: "AWS",
    slug: "/courses/aws/aws-certified-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    level: "Beginner",
    duration: "4 weeks",
    price: "$99",
    rating: "4.8",
    learners: "15,200+",
    batchStartDate: "2026-04-10",
    description: "The ultimate beginner-friendly course to start your AWS cloud journey.",
    overview: "Entry-level certification ideal for non-technical or beginner IT professionals. Comprehensive coverage of AWS fundamentals and cloud computing concepts. Deep dive into core AWS services (EC2, S3, RDS, VPC). Understanding AWS pricing models and support plans.",
    keyFeatures: [
      { title: "Video Lectures", desc: "15+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Hands-on Labs", desc: "20+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["IT Beginners", "Sales & Marketing in Tech", "Project Managers"],
    prerequisites: ["Basic computer skills", "Eagerness to learn cloud"],
    skillsYouWillGain: ["AWS Cloud Concepts", "Security & Compliance", "Core AWS Services", "Billing & Pricing", "Cloud Architecture Basics", "Deployment Models"],
    examSkills: ["Cloud concepts", "Security and compliance", "Technology", "Billing and pricing"],
    labsAndTests: "Includes 20+ guided hands-on labs and 3 full-length timed practice exams.",
    faqItems: [
      { q: "Do I need coding experience?", a: "No, the Cloud Practitioner exam does not require any programming knowledge." },
      { q: "Is the exam fee included?", a: "No, the AWS certification exam fee ($100 USD) must be paid directly to AWS." },
      { q: "How long do I have access?", a: "You get lifetime access to the course content." }
    ]
  },
  {
    id: "aws-certified-solutions-architect-associate",
    provider: "AWS",
    category: "AWS",
    slug: "/courses/aws/aws-certified-solutions-architect-associate",
    title: "AWS Certified Solutions Architect - Associate",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$149",
    rating: "4.9",
    learners: "22,500+",
    description: "Master the fundamentals of building IT infrastructure on AWS.",
    overview: "Learn to design highly available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.",
    keyFeatures: [
      { title: "Video Lectures", desc: "40+ hours of content" },
      { title: "Practice Exams", desc: "4 full-length tests" },
      { title: "Hands-on Labs", desc: "50+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Systems Engineers", "Developers", "Solutions Architects"],
    prerequisites: ["Basic understanding of networking", "Some IT experience"],
    skillsYouWillGain: ["Compute & Networking", "Storage & Database", "Security & Identity", "Cost Optimization"],
    examSkills: ["Design Secure Architectures", "Design Resilient Architectures", "Design High-Performing Architectures", "Design Cost-Optimized Architectures"],
    labsAndTests: "50+ labs on EC2, VPC, S3, RDS, IAM, and more.",
    faqItems: [
      { q: "Do I need Cloud Practitioner first?", a: "No, it's not a mandatory prerequisite, though helpful." },
      { q: "What is the exam cost?", a: "The exam costs $150 USD." },
      { q: "Are the labs real environments?", a: "Yes, you practice in actual AWS environments." }
    ]
  },
  {
    id: "aws-certified-solutions-architect-professional",
    provider: "AWS",
    category: "AWS",
    slug: "/courses/aws/aws-certified-solutions-architect-professional",
    title: "AWS Certified Solutions Architect - Professional",
    level: "Advanced",
    duration: "12 weeks",
    price: "$199",
    rating: "4.9",
    learners: "8,100+",
    description: "Advanced design principles and complex infrastructure deployment on AWS.",
    overview: "Prepare for one of the most challenging and highly regarded cloud certifications in the industry.",
    keyFeatures: [
      { title: "Video Lectures", desc: "60+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Advanced Labs", desc: "30+ complex scenarios" },
      { title: "24/7 Support", desc: "Expert Q&A access" }
    ],
    whoIsThisFor: ["Senior Solutions Architects", "Cloud Engineers", "IT Directors"],
    prerequisites: ["AWS Solutions Architect Associate", "2+ years hands-on AWS experience"],
    skillsYouWillGain: ["Migration Planning", "Cost Control", "Continuous Delivery", "Complex Networks"],
    examSkills: ["Design for Organizational Complexity", "Design for New Solutions", "Migration Planning", "Cost Control"],
    labsAndTests: "Complex multi-tier architecture labs.",
    faqItems: [
      { q: "How hard is the exam?", a: "It is considered one of the hardest IT exams." },
      { q: "Is the exam fee included?", a: "No, the exam is $300 USD." }
    ]
  },
  {
    id: "aws-certified-machine-learning-specialty",
    provider: "AWS",
    category: "AWS",
    slug: "/courses/aws/aws-certified-machine-learning-specialty",
    title: "AWS Certified Machine Learning - Specialty",
    level: "Advanced",
    duration: "10 weeks",
    price: "$179",
    rating: "4.8",
    learners: "5,400+",
    description: "Build, train, tune, and deploy machine learning models on AWS.",
    overview: "Deep dive into AWS ML services, SageMaker, and data engineering fundamentals.",
    keyFeatures: [
      { title: "Video Lectures", desc: "35+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "SageMaker Labs", desc: "25+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Data Scientists", "ML Engineers", "Developers"],
    prerequisites: ["Basic Python", "Understanding of ML algorithms"],
    skillsYouWillGain: ["Data Engineering", "Exploratory Data Analysis", "Modeling", "ML Implementation"],
    examSkills: ["Data Engineering", "EDA", "Modeling", "ML Implementation and Operations"],
    labsAndTests: "Hands-on with SageMaker, Rekognition, Comprehend.",
    faqItems: [
      { q: "Do I need deep math knowledge?", a: "A basic understanding of statistics and algorithms helps." },
      { q: "What is the exam cost?", a: "The specialty exam costs $300 USD." }
    ]
  },
  {
    id: "aws-certified-ai-practitioner",
    provider: "AWS",
    category: "AWS",
    slug: "/courses/aws/aws-certified-ai-practitioner",
    title: "AWS Certified AI Practitioner (AIF-C01)",
    level: "Beginner",
    duration: "4 weeks",
    price: "$99",
    rating: "4.7",
    learners: "3,200+",
    description: "Learn foundational AI/ML concepts and how to apply them on AWS.",
    overview: "A great starting point for anyone looking to understand AI and Machine Learning services provided by AWS.",
    keyFeatures: [
      { title: "Video Lectures", desc: "12+ hours of content" },
      { title: "Practice Exams", desc: "2 full-length tests" },
      { title: "Hands-on Labs", desc: "15+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Business Leaders", "Product Managers", "IT Beginners"],
    prerequisites: ["None"],
    skillsYouWillGain: ["Generative AI Basics", "AWS AI Services", "Prompt Engineering", "Responsible AI"],
    examSkills: ["AI/ML Concepts", "AWS AI Services", "Security in AI", "Responsible AI"],
    labsAndTests: "Interactive labs with Amazon Bedrock and Q.",
    faqItems: [
      { q: "Is coding required?", a: "No, this is a conceptual and foundational certification." }
    ]
  },

  // Azure
  {
    id: "microsoft-azure-exam-az-900",
    provider: "Azure",
    category: "Azure",
    slug: "/courses/azure/microsoft-azure-exam-az-900",
    title: "AZ-900: Microsoft Azure Fundamentals",
    level: "Beginner",
    duration: "4 weeks",
    price: "$99",
    rating: "4.8",
    learners: "18,000+",
    description: "Prove your knowledge of cloud concepts, Azure services, and workloads.",
    overview: "The perfect starting point for learning Microsoft Azure. Covers cloud concepts, core services, security, privacy, and support.",
    keyFeatures: [
      { title: "Video Lectures", desc: "10+ hours of content" },
      { title: "Practice Exams", desc: "4 full-length tests" },
      { title: "Hands-on Labs", desc: "15+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["IT Beginners", "Sales Professionals", "Managers"],
    prerequisites: ["General IT knowledge"],
    skillsYouWillGain: ["Cloud Concepts", "Core Azure Services", "Security & Privacy", "Azure Pricing"],
    examSkills: ["Describe cloud concepts", "Describe core Azure services", "Describe core solutions", "Describe identity, governance"],
    labsAndTests: "Basic portal navigation and resource creation labs.",
    faqItems: [
      { q: "Do I need Azure experience?", a: "No, this is an entry-level course." },
      { q: "How much is the exam?", a: "$99 USD." }
    ]
  },
  {
    id: "microsoft-azure-exam-az-104",
    provider: "Azure",
    category: "Azure",
    slug: "/courses/azure/microsoft-azure-exam-az-104",
    title: "AZ-104: Microsoft Azure Administrator",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$149",
    rating: "4.8",
    learners: "14,500+",
    description: "Manage cloud services that span storage, security, networking, and compute.",
    overview: "Learn how to manage Azure identities, governance, storage, compute, and virtual networks.",
    keyFeatures: [
      { title: "Video Lectures", desc: "30+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Hands-on Labs", desc: "40+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["System Administrators", "Cloud Engineers"],
    prerequisites: ["AZ-900 (Recommended)", "Basic networking and virtualization"],
    skillsYouWillGain: ["Azure AD", "Virtual Machines", "Virtual Networks", "Storage Accounts"],
    examSkills: ["Manage Azure identities", "Implement storage", "Deploy compute resources", "Configure networking"],
    labsAndTests: "Extensive labs on VM creation, VNet peering, and RBAC.",
    faqItems: [
      { q: "Is PowerShell required?", a: "Basic knowledge of PowerShell and CLI is covered and required." },
      { q: "How much is the exam?", a: "$165 USD." }
    ]
  },
  {
    id: "microsoft-azure-exam-az-204",
    provider: "Azure",
    category: "Azure",
    slug: "/courses/azure/microsoft-azure-exam-az-204",
    title: "AZ-204: Developing Solutions for Microsoft Azure",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$149",
    rating: "4.7",
    learners: "9,200+",
    description: "Design, build, test, and maintain cloud applications and services.",
    overview: "For developers who want to master building apps on Azure using PaaS, serverless, and storage solutions.",
    keyFeatures: [
      { title: "Video Lectures", desc: "25+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Coding Labs", desc: "30+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Software Developers", "Cloud Programmers"],
    prerequisites: ["Programming experience (C# or Python)"],
    skillsYouWillGain: ["Azure App Service", "Azure Functions", "Cosmos DB", "Azure Key Vault"],
    examSkills: ["Develop Azure compute solutions", "Develop for Azure storage", "Implement Azure security", "Monitor solutions"],
    labsAndTests: "Code-heavy labs deploying functions and web apps.",
    faqItems: [
      { q: "What languages are supported?", a: "C# and Python are primarily used in the labs." }
    ]
  },
  {
    id: "microsoft-azure-exam-ai-900",
    provider: "Azure",
    category: "Azure",
    slug: "/courses/azure/microsoft-azure-exam-ai-900",
    title: "AI-900: Microsoft Azure AI Fundamentals",
    level: "Beginner",
    duration: "4 weeks",
    price: "$99",
    rating: "4.8",
    learners: "8,500+",
    description: "Demonstrate knowledge of common ML and AI workloads on Azure.",
    overview: "Learn the basics of Artificial Intelligence and Machine Learning and how Microsoft Azure services support them.",
    keyFeatures: [
      { title: "Video Lectures", desc: "10+ hours of content" },
      { title: "Practice Exams", desc: "2 full-length tests" },
      { title: "Hands-on Labs", desc: "15+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Data Enthusiasts", "Business Analysts", "IT Beginners"],
    prerequisites: ["None"],
    skillsYouWillGain: ["AI Workloads", "Computer Vision", "NLP", "Responsible AI"],
    examSkills: ["Describe AI workloads", "Describe fundamental ML principles", "Describe computer vision", "Describe NLP"],
    labsAndTests: "Labs using Azure Cognitive Services.",
    faqItems: [
      { q: "Do I need data science experience?", a: "No, this is a foundational course." }
    ]
  },
  {
    id: "microsoft-azure-exam-az-500",
    provider: "Azure",
    category: "Azure",
    slug: "/courses/azure/microsoft-azure-exam-az-500",
    title: "AZ-500: Microsoft Azure Security Technologies",
    level: "Advanced",
    duration: "10 weeks",
    price: "$179",
    rating: "4.8",
    learners: "6,200+",
    description: "Implement secure cloud solutions across Azure environments.",
    overview: "Master identity and access, platform protection, security operations, and securing data/apps on Azure.",
    keyFeatures: [
      { title: "Video Lectures", desc: "35+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Security Labs", desc: "30+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Security Engineers", "Cloud Administrators"],
    prerequisites: ["AZ-104 (Recommended)", "Strong networking knowledge"],
    skillsYouWillGain: ["Identity Management", "Network Security", "Azure Defender", "Key Vault"],
    examSkills: ["Manage identity and access", "Implement platform protection", "Manage security operations", "Secure data and apps"],
    labsAndTests: "Hands-on security configurations and threat mitigation.",
    faqItems: [
      { q: "Is this a tough exam?", a: "Yes, it requires deep technical knowledge of Azure security." }
    ]
  },

  // GCP
  {
    id: "google-cloud-certified-cloud-digital-leader",
    provider: "GCP",
    category: "GCP",
    slug: "/courses/gcp/google-cloud-certified-cloud-digital-leader",
    title: "Google Cloud Digital Leader",
    level: "Beginner",
    duration: "4 weeks",
    price: "$99",
    rating: "4.7",
    learners: "5,100+",
    description: "Understand cloud computing fundamentals and how Google Cloud products achieve business goals.",
    overview: "A broad overview of Google Cloud capabilities, focusing on how it helps organizations digitally transform.",
    keyFeatures: [
      { title: "Video Lectures", desc: "10+ hours of content" },
      { title: "Practice Exams", desc: "2 full-length tests" },
      { title: "Case Studies", desc: "10+ real-world examples" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Business Executives", "Sales Teams", "Non-technical roles"],
    prerequisites: ["None"],
    skillsYouWillGain: ["Digital Transformation", "GCP Core Infrastructure", "Data & AI Basics", "Cloud Security"],
    examSkills: ["Digital transformation with Google Cloud", "Innovating with data and Google Cloud", "Infrastructure and application modernization", "Trust and security"],
    labsAndTests: "Focuses on conceptual understanding and case studies.",
    faqItems: [
      { q: "Are there hands-on labs?", a: "Minimal. The focus is on business value and concepts." }
    ]
  },
  {
    id: "google-cloud-certified-associate-cloud-engineer",
    provider: "GCP",
    category: "GCP",
    slug: "/courses/gcp/google-cloud-certified-associate-cloud-engineer",
    title: "GCP Associate Cloud Engineer",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$149",
    rating: "4.8",
    learners: "12,300+",
    description: "Deploy applications, monitor operations, and manage enterprise solutions on GCP.",
    overview: "The foundational technical certification for GCP. Learn to set up a cloud solution environment, plan/configure a cloud solution, and deploy/implement it.",
    keyFeatures: [
      { title: "Video Lectures", desc: "25+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Hands-on Labs", desc: "40+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["System Administrators", "Cloud Engineers", "Developers"],
    prerequisites: ["Basic IT and networking knowledge"],
    skillsYouWillGain: ["Compute Engine", "GKE", "Cloud Storage", "IAM & Networking"],
    examSkills: ["Set up a cloud solution environment", "Plan and configure", "Deploy and implement", "Ensure successful operation"],
    labsAndTests: "Extensive practice with gcloud CLI and Google Cloud Console.",
    faqItems: [
      { q: "How much is the exam?", a: "$125 USD." }
    ]
  },
  {
    id: "google-cloud-certified-professional-cloud-architect",
    provider: "GCP",
    category: "GCP",
    slug: "/courses/gcp/google-cloud-certified-professional-cloud-architect",
    title: "Google Cloud Professional Cloud Architect",
    level: "Advanced",
    duration: "12 weeks",
    price: "$199",
    rating: "4.9",
    learners: "9,800+",
    description: "Design, develop, and manage robust, secure, scalable, highly available solutions.",
    overview: "Master enterprise cloud architecture on Google Cloud. This course dives deep into designing for security, scalability, and cost.",
    keyFeatures: [
      { title: "Video Lectures", desc: "40+ hours of content" },
      { title: "Practice Exams", desc: "3 full-length tests" },
      { title: "Architecture Labs", desc: "30+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Cloud Architects", "Senior Engineers"],
    prerequisites: ["Associate Cloud Engineer", "3+ years industry experience"],
    skillsYouWillGain: ["System Design", "Migration Planning", "Security Architecture", "GCP Optimization"],
    examSkills: ["Design cloud solution architecture", "Manage and provision infrastructure", "Design for security and compliance", "Analyze and optimize technical processes"],
    labsAndTests: "Complex architecture and case study analysis.",
    faqItems: [
      { q: "Is the exam case-study based?", a: "Yes, a significant portion uses fictional business cases." }
    ]
  },
  {
    id: "google-cloud-certified-generative-ai-leader",
    provider: "GCP",
    category: "GCP",
    slug: "/courses/gcp/google-cloud-certified-generative-ai-leader",
    title: "Google Cloud Generative AI Leader",
    level: "Intermediate",
    duration: "6 weeks",
    price: "$129",
    rating: "4.8",
    learners: "4,500+",
    description: "Lead generative AI initiatives and strategies using Google Cloud tools.",
    overview: "Understand how to implement Generative AI responsibly and effectively within an organization using Vertex AI.",
    keyFeatures: [
      { title: "Video Lectures", desc: "15+ hours of content" },
      { title: "Practice Exams", desc: "2 full-length tests" },
      { title: "Vertex AI Labs", desc: "20+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["AI Leaders", "Product Managers", "Data Strategists"],
    prerequisites: ["Basic understanding of ML concepts"],
    skillsYouWillGain: ["Vertex AI", "LLM Fine-tuning", "Prompt Engineering", "Responsible AI"],
    examSkills: ["Explain Generative AI", "Determine use cases", "Understand Vertex AI", "Implement Responsible AI"],
    labsAndTests: "Hands-on prompt design and model tuning in Vertex AI.",
    faqItems: [
      { q: "Is this highly technical?", a: "It balances technical implementation with strategic leadership." }
    ]
  },
  {
    id: "google-cloud-certified-associate-data-practitioner",
    provider: "GCP",
    category: "GCP",
    slug: "/courses/gcp/google-cloud-certified-associate-data-practitioner",
    title: "Google Cloud Associate Data Practitioner",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$149",
    rating: "4.7",
    learners: "3,800+",
    description: "Build data pipelines, query data, and create visualizations on Google Cloud.",
    overview: "Learn the fundamentals of data engineering and analytics using BigQuery, Dataflow, and Looker.",
    keyFeatures: [
      { title: "Video Lectures", desc: "20+ hours of content" },
      { title: "Practice Exams", desc: "2 full-length tests" },
      { title: "Data Labs", desc: "25+ practical exercises" },
      { title: "24/7 Support", desc: "Instructor Q&A access" }
    ],
    whoIsThisFor: ["Data Analysts", "Junior Data Engineers"],
    prerequisites: ["Basic SQL", "Data concepts"],
    skillsYouWillGain: ["BigQuery", "Dataflow", "Cloud Storage", "Looker Studio"],
    examSkills: ["Data ingestion", "Data transformation", "Data storage", "Data analysis and visualization"],
    labsAndTests: "Writing queries in BigQuery and building dashboards.",
    faqItems: [
      { q: "How much SQL do I need?", a: "You should be comfortable with basic queries, joins, and aggregations." }
    ]
  }
];

export const getCourseById = (id) => coursesData.find(c => c.id === id);
export const getCoursesByProvider = (provider) => coursesData.filter(c => c.provider === provider);
