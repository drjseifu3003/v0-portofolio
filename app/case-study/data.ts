export type Metric = {
  value: string
  label: string
}

export type Study = {
  slug: string
  title: string
  subtitle: string
  /** Short founder-scan line shown under title on list cards */
  listResultLine?: string
  tag: string
  /** Optional public URL for the live product */
  liveSite?: string
  /** Primary / OG image, also used when `gallery` omitted */
  image?: string
  /** Extra screenshots for this study only (detail gallery); falls back to `image` */
  gallery?: string[]
  /** Shown in byline, e.g. "September 2025" */
  publishedAt?: string
  /** Optional timeline like the DAD case study "Build Timeline" */
  timeline?: Array<{ period: string; title: string; body: string }>
  overview: string[]
  problem: string[]
  whyItMattered: string[]
  whatIBuilt: string[]
  stack: Array<{ layer: string; tech: string; description?: string }>
  /** Intro paragraph directly before stack grid */
  stackIntro?: string
  /** Italic sidebar-style pull quote mid “good bet” narrative */
  callout?: string
  /** Overrides default insights block (below stack). Defaults to insights title + result bullets as paragraphs */
  insightsSection?: { title: string; paragraphs: string[] }
  /** “What’s next” closing section */
  whatsNext?: string[]
  /** Chart subtitle under headline metrics row */
  chartCaption?: string
  /** Upper-left chart card title */
  chartTitle?: string
  compliance?: string[]
  results: Metric[]
  resultBullets: string[]
}

export const studies: Study[] = [
  {
    slug: "healium-sono",
    title: "Healium Sono",
    listResultLine: "Real-time AI ultrasound teleguidance . HIPAA-compliant . FDA-adjecent",
    liveSite: "https://healiumsono.com",
    subtitle: "AI-powered remote ultrasound and teleguidance for cardiology and OB/GYN",
    tag: "Case Study 01 - Healthcare AI",
    image: "/images/case-study/thumb-healium-sono.png",
    overview: [
      "Client: Healium Intelliscan Corporation",
      "Industry: HealthTech / Telemedicine",
      "Location: United States",
      "Role: Lead Full-stack engineer responsible for architecture, AI service integration, real-time video, and deployment.",
    ],
    problem: [
      "Specialist cardiologists and OB/GYN physicians are concentrated in urban centers, while rural clinics often have ultrasound hardware but no real-time interpretation expertise.",
      "Patient transfer and delayed referral increased clinical risk and operational costs.",
      "The platform required remote specialist guidance in real time, with AI-assisted analysis running in parallel.",
    ],
    whyItMattered: [
      "Misread or delayed OB/GYN ultrasound can lead to missed fetal abnormalities or undetected high-risk pregnancies.",
      "Cardiology patients in low-resource settings often waited days for specialist review, delaying life-saving interventions.",
      "Traditional teleconsultation tools offered video, but lacked a specialized guidance layer or AI decision support.",
      "The target market included dozens of rural clinics with no on-site specialist access.",
    ],
    whatIBuilt: [
      "Built a full teleguidance workflow with encrypted low-latency specialist sessions.",
      "Integrated Zoom Video SDK for specialist-tech collaboration with live annotation and voice instruction.",
      "Created an AI inference pipeline with FastAPI on AWS Lambda for structured ultrasound findings.",
      "Implemented secure storage and clinic-level data isolation with Supabase Row-Level Security.",
      "Solved timestamp drift and unstable network handling with session recovery and adaptive quality.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Backend / API", tech: "FastAPI (Python)" },
      { layer: "Database", tech: "Supabase (PostgreSQL + RLS)" },
      { layer: "Real-time Video", tech: "Zoom Video SDK" },
      { layer: "AI Inference", tech: "AWS Lambda + FastAPI" },
      { layer: "Cloud", tech: "AWS (Lambda, API Gateway)" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "Storage", tech: "Supabase Storage" },
    ],
    compliance: [
      "Patient data encrypted at rest and in transit (TLS 1.3 + AES-256).",
      "Compliance standards met: HIPAA and local health data regulations.",
      "Audit logging: All specialist actions and session modifications logged for clinical accountability.",
    ],
    results: [
      { value: "45+", label: "Clinics onboarded" },
      { value: "1,200+", label: "Teleguidance sessions" },
      { value: "35%", label: "Reduction in transfer rate" },
      { value: "450ms", label: "Average AI response time" },
    ],
    resultBullets: [
      "Remote specialists guided 1,200 sessions across 45 clinics in the first year.",
      "Average scan-to-specialist finding time reduced from 48 hours to 15 minutes.",
      "92% of flagged cases were confirmed by subsequent specialist review.",
      "Physician feedback indicates high reliability in low-bandwidth rural environments.",
    ]
  },
  {
    slug: "healium-ckd",
    title: "Healium CKD",
    listResultLine: "AI kidney disease detection . Multi-tenant medical data . AWS Lambda inference pipeline",
    subtitle: "CKD detection through AI-powered kidney ultrasound analysis",
    tag: "Case Study 02 - Healthcare AI",
    image: "/images/case-study/thumb-healium-ckd.png",
    overview: [
      "Client: Healium Intelliscan Corporation",
      "Location: United States",
      "Role: Lead Full-stack engineer responsible for AI pipeline, inference API, data architecture, and deployment.",
    ],
    problem: [
      "Chronic Kidney Disease (CKD) affects millions, but many cases are diagnosed too late for effective intervention.",
      "Early-stage indicators are visible in ultrasound, but specialist interpretation is rarely available in primary care settings.",
      "The project required an AI service that converts kidney ultrasound into structured findings for general practitioners.",
    ],
    whyItMattered: [
      "Early intervention can significantly slow CKD progression and reduce the need for dialysis.",
      "Nephrologist access was a critical bottleneck, with a very low specialist-to-patient ratio in the region.",
      "General practitioners needed fast triage tools to decide referral urgency.",
      "Delayed diagnosis contributed to a high rate of emergency admissions and late-stage dialysis starts.",
    ],
    whatIBuilt: [
      "Implemented an upload-to-inference flow with Next.js, API Gateway, Lambda, and FastAPI.",
      "Built image preprocessing for model consistency across different ultrasound hardware manufacturers.",
      "Returned structured outputs including automated findings, severity score, confidence, and recommended next action.",
      "Stored reports in Supabase linked to patient records with strict clinic-level data isolation.",
      "Added specialist escalation path integrated with Healium Sono teleguidance.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Inference Service", tech: "FastAPI (Python) on AWS Lambda" },
      { layer: "Database", tech: "Supabase (PostgreSQL + RLS)" },
      { layer: "Image Storage", tech: "Supabase Storage" },
      { layer: "Cloud", tech: "AWS Lambda + API Gateway" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "Image Processing", tech: "OpenCV" },
      { layer: "Model Serving", tech: "ONNX Runtime" },
    ],
    results: [
      { value: "5,000+", label: "Images analyzed" },
      { value: "88%", label: "Early-stage detection rate" },
      { value: "600ms", label: "Average analysis time" },
      { value: "94%", label: "Specialist confirmation rate" },
    ],
    resultBullets: [
      "System analyzed over 5,000 ultrasound images within the first 6 months of deployment.",
      "94% of AI-flagged cases were confirmed as CKD by nephrologist review.",
      "Average upload-to-report time stabilized at 3 seconds, including network latency.",
      "Identified over 200 early-stage CKD cases that standard clinical workflows would likely have missed.",
    ],
  },
  {
    slug: "roasform",
    title: "Roasform",
    listResultLine: "GHL-integrated AI qualification . Stripe billing . Live product with paying customers",
    liveSite: "https://roasform.com",
    subtitle: "GHL-integrated AI form and marketing platform for high-ticket sales",
    tag: "Case Study 03 - SaaS / MarTech",
    image: "/images/case-study/thumb-roasform.png",
    overview: [
      "Industry: Marketing / Sales",
      "Location: United States",
      "Product type: B2B SaaS, built and launched as a standalone product.",
      "Target market: Agencies, coaches, and high-ticket sales businesses using GoHighLevel.",
      "Role: Lead Full-stack developer across product design, engineering, integrations, billing, and deployment.",
    ],
    problem: [
      "Standard CRM forms are static and do not qualify leads intelligently, leading to inefficient sales calls.",
      "Sales teams were wasting up to 40% of their call slots on unqualified prospects.",
      "Third-party form tools lacked native GoHighLevel (GHL) pipeline depth and automation.",
      "Manual review volume led to significant delays in contacting high-intent leads.",
    ],
    whyItMattered: [
      "High-ticket pipelines depend entirely on call quality and qualification accuracy.",
      "There was no AI-native dynamic questioning or routing available inside standard GHL workflows.",
      "Paid traffic was converting into calendar volume, but not consistently into qualified revenue opportunities.",
    ],
    whatIBuilt: [
      "Built an AI-driven adaptive form engine that changes the next question based on prior answers.",
      "Implemented real-time lead scoring (0-100) with qualification tags including Hot, Warm, and Cold.",
      "Integrated deep GHL sync for contacts, tags, custom fields, and pipeline stage movement.",
      "Implemented Stripe subscriptions with plan-based usage limits and webhook-driven account state.",
      "Built dashboard analytics for lead volume, score distribution, and conversion metrics.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Database", tech: "Supabase (PostgreSQL + RLS)" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "CRM Integration", tech: "GoHighLevel API" },
      { layer: "Billing", tech: "Stripe (Subscriptions + Webhooks)" },
      { layer: "AI Engine", tech: "OpenAI API" },
      { layer: "Hosting", tech: "Vercel" },
      { layer: "Background Jobs", tech: "Inngest" },
    ],
    results: [
      { value: "120+", label: "Paying customers" },
      { value: "40%", label: "Lead score improvement" },
      { value: "50%", label: "Reduction in unqualified calls" },
      { value: "$4,500", label: "MRR at launch" },
    ],
    resultBullets: [
      "First paying customer onboarded within 7 days of the beta launch.",
      "Users reported a 50% reduction in time spent on manual lead qualification.",
      "Average lead score for booked calls increased significantly across all active agencies.",
      "Processed over 10,000 lead submissions in the first 3 months.",
    ],
  },
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    listResultLine: "End-to-end call automation . AI qualification . CRM logging . Zero human intervention",
    subtitle: "End-to-end AI automation for inbound business calls, qualification, and CRM logging",
    tag: "Case Study 04 - AI Automation",
    image: "/images/case-study/thumb-ai-voice-receptionist.png",
    publishedAt: "2025",
    stackIntro:
      "The goal was validation speed first, then reliability: get a real assistant on a real phone number, observe failure modes in production telemetry, then harden the automation layer once traffic proved the workflow.",
    chartTitle: "Product & engagement rollout window",
    chartCaption: "Throughput and qualitative measures improved sharply once transcripts and webhook ordering were stabilized.",
    insightsSection: {
      title: "Why Reliability Matters More Than a Flashy Demo",
      paragraphs: [
        "A conversational voice layer is worthless if duplicates hit the CRM, if booking tools race, or if transcripts arrive out of order. Those edge cases dominate real-world behavior once you leave scripted demos.",
        "This build treats event ordering, idempotency, and structured payloads as first-class citizens, the same mindset that scales from one demo line into production traffic.",
        "That operational discipline is what makes the assistant viable for business use, moving beyond simple landing page headlines.",
      ],
    },
    overview: [
      "Product type: Productised AI system, live on this portfolio as Liya.",
      "Use case: Inbound call handling for businesses that need 24/7 lead qualification without a receptionist.",
      "Role: Sole architect and engineer, voice agent design, N8N automation pipeline, webhook routing, and CRM integration.",
    ],
    problem: [
      "Businesses running inbound campaigns miss or mishandle calls outside business hours, losing high-intent leads.",
      "Hiring and training human receptionists is expensive and introduces inconsistency in qualification conversations.",
      "Existing IVR and chatbot tools were scripted and non-conversational, causing leads to drop off early.",
    ],
    whyItMattered: [
      "Every missed call is a missed opportunity; for high-ticket offers, one missed call can represent thousands in lost revenue.",
      "Manual CRM entry by staff introduced errors and delays in critical follow-up tasks.",
      "Businesses needed a system that was always on, always consistent, and automatically logged structured data.",
    ],
    whatIBuilt: [
      "Built a full AI voice agent using Vapi with a natural conversation flow for lead qualification and appointment scheduling.",
      "Designed an N8N automation pipeline that handles booking tool calls, structured data extraction, and real-time CRM logging.",
      "Engineered a webhook router that filters and routes 6+ Vapi event types with zero duplicate processing.",
      "Integrated with Airtable and GHL as the CRM backend, with per-call transcripts, lead scores, and contact records.",
      "The same system powers the AI assistant visible on this portfolio.",
    ],
    stack: [
      {
        layer: "Voice AI",
        tech: "Vapi",
        // description: "Full duplex voice agent with conversational qualification, configurable tools, and call lifecycle events.",
      },
      {
        layer: "Automation",
        tech: "N8N",
        // description: "Graph-based orchestration for booking handoffs, JSON extraction retries, and human-readable operational alerts.",
      },
      {
        layer: "Frontend",
        tech: "Next.js / Vercel",
        // description: "Portfolio surface and webhook endpoints colocated, ensuring fast deployments and unified codebase.",
      },
      {
        layer: "CRM Integration",
        tech: "Airtable & GohighLevel(GHL)",
        // description: "Single source for leads, transcripts, call metadata, and review queues without heavy infra overhead.",
      },
      {
        layer: "AI Model",
        tech: "OpenAI",
        // description: "LLM powering intent detection, nuanced replies, and structured fields written back to downstream systems.",
      },
      {
        layer: "Realtime",
        tech: "Daily.co (via Vapi)",
        // description: "Media path managed by Vapi so the codebase stays thin on WebRTC specifics.",
      },
      {
        layer: "Gateway",
        tech: "Next.js routes",
        // description: "Custom webhook router partitioning Vapi payloads and enforcing idempotent writes across automations.",
      },
    ],
    results: [
      { value: "24/7", label: "Availability without staff" },
      { value: "6+", label: "Vapi event types handled" },
      { value: "0", label: "Duplicate CRM entries" },
      { value: "14 Days", label: "Build-to-deploy time" },
    ],
    resultBullets: [
      "System handles all inbound calls, qualification, objection handling, and booking without human involvement.",
      "Every call produces a structured Airtable record containing transcript, lead score, intent tags, and contact data.",
      "Webhook router processes 6+ distinct Vapi event types with robust deduplication and error recovery.",
      "The system is live and powers the automated assistant on this portfolio.",
    ]
  },
  {
    slug: "intuitysync",
    title: "IntuitySync AI",
    listResultLine: "AI social media automation . Multi-channel posting . Analytics across all platforms",
    subtitle: "AI-powered social media automation, posting, and analytics across all channels",
    tag: "Case Study 05 - SaaS / AI Content",
    image: "/images/case-study/thumb-intuitysync.png",
    overview: [
      "Product: B2B SaaS, social media automation platform.",
      "Industry: Marketing / Social Media",
      "Location: United States",
      "Product type: B2B SaaS, social media automation platform.",
      "Target market: Agencies, social media managers, and marketing teams.",
      "Role: Frontend lead, product UI, AI content pipeline integration, and responsive architecture.",
    ],
    problem: [
      "Marketing teams were spending hours per week on manual posting, caption writing, and performance tracking across channels.",
      "Existing tools were either too simple or too expensive for growing agencies.",
      "No single dashboard handled content creation, scheduling, analytics, and multi-channel publishing together.",
    ],
    whyItMattered: [
      "Social media consistency directly impacts brand growth; gaps in posting cost reach and follower momentum.",
      "AI-generated captions and images were available as point tools but not integrated into a unified workflow.",
      "Early adopters needed a solution that reduced workload by at least 50% to justify switching costs.",
    ],
    whatIBuilt: [
      "Delivered the full frontend MVP in 3 months as sole frontend lead.",
      "Built the AI content pipeline UI, including content brief inputs and AI-generated caption/image previews.",
      "Implemented a responsive architecture that maintained a consistent UX across desktop, tablet, and mobile.",
      "Integrated with the analytics and scheduling backend to surface post performance and best times.",
      "Optimized component architecture to handle large content queues without UI degradation.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Automation", tech: "N8N" },
      { layer: "Database", tech: "Supabase" },
      { layer: "AI Content", tech: "OpenAI" },
      { layer: "Billing", tech: "Stripe" },
      { layer: "Cloud", tech: "Vercel" },
    ],
    results: [
      { value: "3 Months", label: "MVP delivery time" },
      { value: "60%", label: "Manual workload reduction" },
      { value: "40%", label: "User engagement increase" },
      { value: "50+", label: "Paying early adopters" },
    ],
    resultBullets: [
      "Full MVP delivered in 3 months as the sole frontend lead.",
      "AI content pipeline cut manual creation workload by 60% for early users.",
      "Responsive architecture improvements lifted user engagement metrics by 40%.",
      "Successfully onboarded 50+ paying early adopters in the first quarter post-launch.",
    ],
  },
  {
    slug: "wumis",
    title: "Water Utility Management System",
    listResultLine: "Enterprise utility SaaS . 100K+ active users . Deployed across 20+ organizations . 70% faster deployments",
    subtitle: "Mission-critical enterprise SaaS for billing and meter reading across 20+ organisations",
    tag: "Case Study 06 - Enterprise SaaS",
    liveSite: "https://wumis.et",
    image: "/images/case-study/thumb-wumis.png",
    overview: [
      "Product: Enterprise SaaS, deployed across 20+ organisations in Ethiopia.",
      "Industry: Enterprise SaaS",
      "Location: Ethiopia",
      "Live at: wumis.et",
      "Product type: Enterprise SaaS, water utility management system.",
      "Target market: Water utility companies.",
      "Scale: 100,000+ active users.",
      "Role: Frontend Engineer, owned the entire frontend across the product lifecycle.",
    ],
    problem: [
      "Water utility companies were managing billing and meter reading manually or with fragmented spreadsheet-based systems.",
      "Errors in manual billing led to revenue loss and frequent customer disputes.",
      "No centralised system existed for managing customer accounts, payment history, and meter data at scale.",
    ],
    whyItMattered: [
      "Water utility billing errors have direct consequences for both revenue and customer service access.",
      "Manual processes could not scale as organisations grew their customer base.",
      "Deployment across multiple organisations required a multi-tenant architecture with strict data isolation.",
    ],
    whatIBuilt: [
      "Architected and owned the complete frontend including billing, meter management, and reporting modules.",
      "Built high-load dashboards capable of displaying real-time data for 100,000+ users without performance loss.",
      "Implemented a CI/CD pipeline with Docker and Nginx that reduced deployment time by 70%.",
      "Designed the multi-tenant UI layer with per-organisation theming and data isolation.",
      "Delivered consistent zero data integrity issues across all production deployments.",
    ],
    stack: [
      { layer: "Frontend", tech: "React + TypeScript" },
      { layer: "Containerisation", tech: "Docker" },
      { layer: "CI/CD", tech: "CI/CD pipeline (custom)" },
      { layer: "Web Server", tech: "Nginx" },
      { layer: "Hosting", tech: "Digital Ocean" },
    ],
    results: [
      { value: "100K+", label: "Active users" },
      { value: "20+", label: "Organisations deployed" },
      { value: "70%", label: "Faster deployments" },
      { value: "0", label: "Data integrity issues" },
    ],
    resultBullets: [
      "Successfully deployed across 20+ water utility organisations serving over 100,000 active users.",
      "CI/CD pipeline reduced deployment time by 70% and eliminated manual deployment errors.",
      "Zero data integrity issues reported across all production deployments.",
      "Owned every UI decision from architecture to final implementation.",
    ],
  },
  {
    slug: "huluplus",
    title: "Hulu Plus",
    listResultLine: "Real-time ride and delivery platform . Live GPS tracking . AWS CI/CD . Scaled across 3 cities",
    subtitle: "Real-time ride-sharing and delivery platform with live GPS and automated dispatch",
    tag: "Case Study 07 - Transportation Tech",
    image: "/images/case-study/thumb-huluplus.png",
    overview: [
      "Product: Consumer transportation and delivery platform.",
      "Industry: Transportation / Delivery",
      "Location: Ethiopia",
      "Product type: Consumer transportation and delivery platform.",
      "Target market: Ride-sharing and delivery users.",
      "Scale: 3 major cities, thousands of concurrent rides.",
      "Role: Frontend lead and DevOps, led frontend team, owned CI/CD and AWS infrastructure.",
    ],
    problem: [
      "Existing ride-sharing options were unreliable, with no real-time tracking or automated dispatch features.",
      "Driver and customer apps needed to stay in sync under high concurrency without dropped events.",
      "The business needed to expand into 3 cities simultaneously without rebuilding per-city infrastructure.",
    ],
    whyItMattered: [
      "Real-time accuracy in ride-sharing is non-negotiable; users abandon platforms with stale location data.",
      "The platform needed to handle simultaneous requests across cities without event loss or race conditions.",
      "Rapid city expansion required horizontal scaling without per-city engineering overhead.",
    ],
    whatIBuilt: [
      "Led the frontend team from zero to product-market fit in 6 months.",
      "Owned the AWS CI/CD pipeline, cutting release time by 30% and enabling daily deployments.",
      "Designed driver and customer app UIs with live GPS tracking and ride state management.",
      "Architected the frontend to scale into new cities via configuration rather than code changes.",
    ],
    stack: [
      { layer: "Frontend", tech: "React + TypeScript" },
      { layer: "Backend", tech: "Node.js" },
      { layer: "Real-time Events", tech: "Socket.io + Kafka" },
      { layer: "Database", tech: "MySQL" },
      { layer: "Cloud", tech: "AWS" },
      { layer: "CI/CD", tech: "AWS CodePipeline" },
    ],
    results: [
      { value: "3", label: "Cities scaled into" },
      { value: "30%", label: "Faster releases" },
      { value: "6 Months", label: "Time to PMF" },
      { value: "1000s", label: "Concurrent rides handled" },
    ],
    resultBullets: [
      "Platform scaled into 3 major cities with consistent uptime throughout rapid growth.",
      "AWS CI/CD pipeline cut release time by 30%, enabling faster feature iteration.",
      "Real-time event system handles thousands of concurrent rides without dropped events.",
      "Led the frontend team from the first commit to product-market fit.",
    ],
  },
  {
    slug: "hipaa-stack",
    title: "HIPAA Stack",
    listResultLine: "AWS HIPAA Compliance . Hardened IaC Library . 3-Layer Security Envelope . 100% Audit Readiness",
    subtitle: "Production-ready open-source AWS compliance infrastructure and hardened IaC library",
    tag: "Case Study 08 - Cloud Security & Compliance",
    image: "/images/case-study/thumb-hipaastack.png",
    publishedAt: "2026",
    overview: [
      "Product: Open-source IaC library and compliance-first cloud architecture.",
      "Industry: Healthcare Technology (Digital Health / MedTech)",
      // "Location: United States",
      "Target market: Digital health startups, medical AI founders, and B2B SaaS companies building on AWS.",
      "Role: Lead Cloud & Security Architect (Infrastructure Engineering, Cryptographic Controls, Network Security, and Compliance Auditing).",
    ],
    problem: [
      "Digital health startups waste up to 6 months and tens of thousands of dollars on security consultants trying to achieve HIPAA compliance before writing their first line of clinical code.",
      "Implementing HIPAA Technical Safeguards (45 CFR § 164.312) is challenging, requiring deep knowledge of isolated network boundaries, KMS key policies, and multi-AZ database setups.",
      "Standard application configurations frequently leak Protected Health Information (PHI) in log streams, error traces, or unencrypted storage buckets, exposing companies to civil penalties and reputational damage.",
      "Standard cloud auditing is often mutable, incomplete, or lacks data-plane tracking, making it impossible to pass clinical-grade security audits.",
      "Healthtech B2B SaaS sales cycles are delayed or lost because startups cannot prove their infrastructure meets strict institutional security reviews.",
    ],
    whyItMattered: [
      "Compliance bottlenecks delay critical clinical product launches, keeping life-saving healthtech products away from patients who need them.",
      "A single PHI telemetry leak can lead to catastrophic HIPAA civil penalties, regulatory audits, and irreparable reputational damage for a young startup.",
      "Enterprise health systems and hospital networks require rigorous proof of security before starting a pilot, creating a massive barrier to entry for innovators.",
    ],
    whatIBuilt: [
      "Developed a modular library of security-hardened Infrastructure-as-Code (IaC) blueprints to automate the deployment of a fully compliant AWS environment in minutes.",
      "Implemented a Three-Layer Security Envelope featuring: Network Isolation (RDS and ECS Fargate in private subnets with WAFv2/ALB ingress and Client VPN), Cryptographic Enforcement (SSE-KMS with Customer Managed Key and TLS-enforcing S3 policies), and an Immutable Audit Pipeline (multi-region CloudTrail and 365-day encrypted CloudWatch retention).",
      "Built an Interactive Compliance Skill comprising a local verification engine and IDE guardrails that analyze configuration and application code to prevent telemetry leakage of the 18 PHI identifiers.",
      "Created Secure App Templates providing production-ready Python patterns demonstrating structured, PHI-redacted logging and Flask decorators enforcing the 'Minimum Necessary' disclosure standard.",
    ],
    stack: [
      { layer: "Infrastructure-as-Code", tech: "Terraform (HCL)" },
      { layer: "Cloud Provider", tech: "Amazon Web Services (AWS)" },
      { layer: "Isolated Network", tech: "AWS VPC (Private Subnets, Flow Logs, PrivateLink Interface Endpoints)" },
      { layer: "Secure Compute", tech: "AWS ECS Fargate" },
      { layer: "Relational Database", tech: "Amazon RDS PostgreSQL (Multi-AZ, IAM Auth, Forced SSL)" },
      { layer: "Clinical Datastore", tech: "Amazon HealthLake (Native FHIR R4 API)" },
      { layer: "Storage & Backups", tech: "Amazon S3 (SSE-KMS, Object Versioning, AWS Backup Vault with compliance locks)" },
      { layer: "Secret Management", tech: "AWS Secrets Manager (KMS-encrypted, automated rotation)" },
      { layer: "Ingress Shielding", tech: "AWS WAFv2 + AWS Client VPN" },
      { layer: "Centralized Auditing", tech: "AWS CloudTrail + AWS CloudWatch (KMS-encrypted, 365-day retention)" },
    ],
    results: [
      { value: "< 5 Days", label: "Time-to-market setup" },
      { value: "100%", label: "PHI redaction rate" },
      { value: "100%", label: "Audit-plane coverage" },
      { value: "Multi-AZ", label: "Zero-downtime availability" },
    ],
    resultBullets: [
      "Reduced infrastructure setup and compliance validation time for digital health engineering teams from 6 months to under 5 days.",
      "Successfully redacted all 18 PHI identifiers (SSNs, emails, phone numbers, MRNs) across active testing pipelines with zero log leakage.",
      "Delivered 100% coverage of management-plane and S3 data-plane events, enabling startups to pass security questionnaires and sell to hospital networks.",
      "Engineered Multi-AZ failover configurations for database and compute clusters, ensuring continuous access under heavy clinical processing loads.",
    ],
  },
];

export function getStudyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug)
}