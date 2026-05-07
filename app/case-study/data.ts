export type Metric = {
  value: string
  label: string
}

export type Study = {
  slug: string
  title: string
  subtitle: string
  tag: string
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
  testimonial: string
  meaning: string
}

export const studies: Study[] = [
  {
    slug: "healium-sono",
    title: "Healium Sono",
    subtitle: "AI-powered remote ultrasound and teleguidance for cardiology and OB/GYN",
    tag: "Case Study 01 - Healthcare AI",
    image: "/images/case-study/thumb-healium-sono.png",
    overview: [
      "Client: [Client Name]",
      "Industry: HealthTech / Telemedicine",
      "Location: [Country/Region]",
      "Timeline: [Duration, e.g. 6 months]",
      "Role: Lead full-stack engineer responsible for architecture, AI service integration, real-time video, and deployment.",
    ],
    problem: [
      "Specialist cardiologists and OB/GYN physicians are concentrated in urban centers, while rural clinics often have ultrasound hardware but no real-time interpretation expertise.",
      "Patient transfer and delayed referral increased risk and cost.",
      "The client needed remote specialist guidance in real time, with AI-assisted analysis running in parallel.",
    ],
    whyItMattered: [
      "Misread or delayed OB/GYN ultrasound can lead to missed fetal abnormalities or undetected high-risk pregnancies.",
      "Cardiology patients in low-resource settings waited days for specialist review.",
      "Traditional teleconsultation tools offered video, but no guidance layer or AI decision support.",
      "Target market included [number of clinics / region detail] with no on-site specialist access.",
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
      { layer: "Cloud", tech: "AWS (Lambda, S3, API Gateway)" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "Storage", tech: "Supabase Storage / S3" },
    ],
    compliance: [
      "Patient data encrypted at rest and in transit (TLS 1.3 + AES-256).",
      "Compliance standard met: [HIPAA / GDPR / local health data regulation].",
      "Audit logging: [all specialist actions logged per session].",
    ],
    results: [
      { value: "[X]", label: "Clinics onboarded" },
      { value: "[X]", label: "Teleguidance sessions" },
      { value: "[X%]", label: "Reduction in transfer rate" },
      { value: "[Xms]", label: "Average AI response time" },
    ],
    resultBullets: [
      "Remote specialists guided [X] sessions across [Y] clinics in the first [N] months.",
      "Average scan-to-specialist finding time reduced from [X hours] to [Y minutes].",
      "[X%] of flagged cases confirmed by specialists.",
      "Positive physician feedback: [quote / rating].",
    ],
    testimonial:
      "[Client/Doctor feedback] The system allowed our team to support clinics in real time and make faster, safer decisions.",
    meaning:
      "If you are building real-time healthcare collaboration with AI-assisted decision support, this project demonstrates deep execution across reliability, compliance, and clinical workflow design.",
  },
  {
    slug: "healium-ckd",
    title: "Healium CKD",
    subtitle: "CKD detection through AI-powered kidney ultrasound analysis",
    tag: "Case Study 02 - Healthcare AI",
    image: "/images/case-study/thumb-healium-ckd.png",
    overview: [
      "Client: [Client Name - same as Healium Sono or separate engagement]",
      "Location: [Country/Region]",
      "Timeline: [Duration]",
      "Role: Lead engineer responsible for AI pipeline, inference API, data architecture, and deployment.",
    ],
    problem: [
      "CKD affects more than 850 million people, but many cases are diagnosed too late.",
      "Early-stage indicators are visible in ultrasound, but specialist interpretation is not available in many settings.",
      "The client needed an AI service that turns kidney ultrasound into structured findings for general practitioners.",
    ],
    whyItMattered: [
      "Early intervention can significantly slow CKD progression.",
      "In [region], nephrologist access was a bottleneck at approximately [ratio].",
      "General practitioners needed fast triage to decide referral urgency.",
      "Delayed diagnosis contributed to [avoidable dialysis starts / emergency admissions].",
    ],
    whatIBuilt: [
      "Implemented an upload-to-inference flow with Next.js, API Gateway, Lambda, and FastAPI.",
      "Built image preprocessing for model consistency across different ultrasound hardware.",
      "Returned structured outputs: findings, severity score, confidence, and recommended next action.",
      "Stored reports in Supabase linked to patient records with clinic-level data isolation.",
      "Added specialist escalation path integrated with Healium Sono teleguidance.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Inference Service", tech: "FastAPI (Python) on AWS Lambda" },
      { layer: "Database", tech: "Supabase (PostgreSQL + RLS)" },
      { layer: "Image Storage", tech: "Supabase Storage / AWS S3" },
      { layer: "Cloud", tech: "AWS Lambda + API Gateway" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "Image Processing", tech: "[Pillow / OpenCV]" },
      { layer: "Model Serving", tech: "[ONNX Runtime / TensorFlow Serving]" },
    ],
    results: [
      { value: "[X]", label: "Images analyzed" },
      { value: "[X%]", label: "Early-stage detection rate" },
      { value: "[Xms]", label: "Average analysis time" },
      { value: "[X%]", label: "Specialist confirmation rate" },
    ],
    resultBullets: [
      "System analyzed [X] ultrasound images in the first [Y] months.",
      "[X%] of AI-flagged cases confirmed as CKD by nephrologist review.",
      "Average upload-to-report time: [X seconds].",
      "Identified [X] early-stage CKD cases that standard workflow would likely miss.",
    ],
    testimonial:
      "[Clinician feedback] This gave us a practical way to catch potential CKD earlier and escalate faster.",
    meaning:
      "If you need a production-ready medical AI pipeline, this case shows end-to-end execution from ingestion and preprocessing to secure reporting and clinical triage support.",
  },
  {
    slug: "roasform",
    title: "Roasform",
    subtitle: "GHL-integrated AI form and marketing platform for high-ticket sales",
    tag: "Case Study 03 - SaaS / MarTech",
    image: "/images/case-study/thumb-roasform.png",
    overview: [
      "Product type: B2B SaaS, built and launched as a standalone product.",
      "Target market: agencies, coaches, and high-ticket sales businesses using GoHighLevel.",
      "Timeline: [Build duration]",
      "Role: Sole developer across product design, engineering, integrations, billing, and deployment.",
    ],
    problem: [
      "Standard GHL forms are static and do not qualify leads intelligently.",
      "Sales teams were wasting call slots on unqualified prospects.",
      "Third-party form tools lacked native GHL pipeline and automation depth.",
      "Manual review volume reached [X submissions per week] with missed high-intent leads.",
    ],
    whyItMattered: [
      "High-ticket pipelines depend on call quality and qualification accuracy.",
      "No AI-native dynamic questioning, scoring, or routing inside standard GHL form workflows.",
      "Paid traffic was converting into calendar volume, but not consistently into qualified opportunities.",
    ],
    whatIBuilt: [
      "Built an AI-driven adaptive form engine that changes the next question based on prior answers.",
      "Implemented real-time lead scoring (0-100) with qualification tags (Hot, Warm, Cold, Disqualified).",
      "Integrated deep GHL sync for contacts, tags, custom fields, and pipeline stage movement.",
      "Implemented Stripe subscriptions with plan-based usage limits and webhook-driven account state.",
      "Built dashboard analytics for lead volume, score distribution, and conversion by form.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Database", tech: "Supabase (PostgreSQL + RLS)" },
      { layer: "Auth", tech: "Supabase Auth" },
      { layer: "CRM Integration", tech: "GoHighLevel API" },
      { layer: "Billing", tech: "Stripe (Subscriptions + Webhooks)" },
      { layer: "AI Engine", tech: "[OpenAI API / custom model]" },
      { layer: "Hosting", tech: "Vercel" },
      { layer: "Background Jobs", tech: "[Supabase Edge Functions / Inngest]" },
    ],
    results: [
      { value: "[X]", label: "Paying customers" },
      { value: "[X%]", label: "Lead score improvement" },
      { value: "[X%]", label: "Reduction in unqualified calls" },
      { value: "[$X]", label: "MRR at launch" },
    ],
    resultBullets: [
      "First paying customer onboarded within [X days] of launch.",
      "Users reported [X%] less manual qualification time.",
      "Average lead score for booked calls increased from [X] to [Y].",
      "Processed [X] submissions in the first [Y] months.",
    ],
    testimonial:
      "[Customer feedback] Roasform improved lead quality and gave our closers cleaner calendars.",
    meaning:
      "If your SaaS product needs deep CRM integration, AI logic, and subscription reliability, this build demonstrates full-stack ownership from product to revenue operations.",
  },
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    subtitle: "End-to-end AI automation for inbound business calls, qualification, booking, and CRM logging without any human involvement",
    tag: "Case Study 04 - AI Automation",
    image: "/images/case-study/thumb-ai-voice-receptionist.png",
    publishedAt: "2025",
    callout:
      "The breakthrough isn't the model alone, it's the operational pipeline behind it. Voice without logging, retries, and deduplication is only a prototype.",
    stackIntro:
      "The goal was validation speed first, then reliability: get a real assistant on a real phone number, observe failure modes in production telemetry, then harden the automation layer once traffic proved the workflow.",
    chartTitle: "Product & engagement · rollout window",
    chartCaption: "Throughput and qualitative measures improved sharply once transcripts and webhook ordering were stabilized.",
    insightsSection: {
      title: "Why Reliability Matters More Than a Flashy Demo",
      paragraphs: [
        "A conversational voice layer is worthless if duplicates hit the CRM, if booking tools race, or if transcripts arrive out of order. Those edge cases dominate real-world behavior once you leave scripted demos.",
        "This build treats event ordering, idempotency, and structured payloads as first-class citizens, the same mindset that scales from one demo line into production traffic.",
        "That operational discipline is what makes the assistant quotable, not mic-drop quotes in a landing page headline.",
      ],
    },
    whatsNext: [
      "Extend to additional CRM backends, multi-number routing, richer summary objects for sales handoff, and per-tenant prompt governance.",
      "If your inbound motion needs the same rigor, webhook ordering, deduplication, and operator-grade logging, I can map it to your stack.",
    ],
    timeline: [
      {
        period: "Week 1",
        title: "Voice agent + call flow",
        body: "Defined qualification script, Vapi assistant config, and tool definitions for booking and handoff. First test calls with structured logging.",
      },
      {
        period: "Week 2",
        title: "N8N + webhooks",
        body: "Built the automation pipeline and webhook router for all Vapi events, deduplication, CRM writes, transcripts, and error recovery.",
      },
      {
        period: "Final days",
        title: "Production hardening",
        body: "End-to-end testing on real numbers, Airtable schemas, transcript retention, and deploy to Next.js behind the same URLs used by Liya on this portfolio.",
      },
      {
        period: "Now",
        title: "Live iteration",
        body: "The system runs continuously on inbound traffic, same pipeline that powers Ask Liya for visitors evaluating the build.",
      },
    ],
    overview: [
      "Product type: Productised AI system, live on this portfolio as 'Liya'.",
      "Use case: Inbound call handling for businesses that need 24/7 lead qualification without a receptionist.",
      "Timeline: Built and deployed in 2 weeks.",
      "Role: Sole architect and engineer, voice agent design, N8N automation pipeline, webhook routing, and CRM integration.",
    ],
    problem: [
      "Businesses running inbound campaigns miss or mishandle calls outside business hours, losing high-intent leads.",
      "Hiring and training human receptionists is expensive and introduces inconsistency in qualification conversations.",
      "Existing IVR and chatbot tools were scripted, not conversational, leads dropped off before qualifying.",
    ],
    whyItMattered: [
      "Every missed call is a missed opportunity, for high-ticket offers, one missed call can represent thousands in lost revenue.",
      "Manual CRM entry by staff introduced errors and delays in follow-up.",
      "Businesses needed a system that was always on, always consistent, and automatically logged structured data.",
    ],
    whatIBuilt: [
      "Built a full AI voice agent using Vapi with a natural conversation flow for lead qualification and appointment scheduling.",
      "Designed an N8N automation pipeline that handles booking tool calls, structured data extraction, and real-time CRM logging.",
      "Engineered a webhook router that filters and routes 6+ Vapi event types with zero duplicate processing.",
      "Integrated with Airtable as the CRM backend, with per-call transcripts, lead scores, and contact records.",
      "The same system powers Liya, the AI assistant visible on this portfolio.",
    ],
    stack: [
      {
        layer: "Voice AI",
        tech: "Vapi",
        description: "Full duplex voice agent with conversational qualification, configurable tools, and call lifecycle events.",
      },
      {
        layer: "Automation",
        tech: "N8N",
        description: "Graph-based orchestration for booking handoffs, JSON extraction retries, and human-readable operational alerts.",
      },
      {
        layer: "Frontend",
        tech: "Next.js · Vercel",
        description: "Portfolio surface and webhook endpoints colocated, fast deploys so assistant changes ship with the codebase.",
      },
      {
        layer: "CRM / Storage",
        tech: "Airtable",
        description: "Single source for leads, transcripts, call metadata, and review queues without heavy infra overhead.",
      },
      {
        layer: "AI Model",
        tech: "OpenAI",
        description: "LLM powering intent detection, nuanced replies, and structured fields written back to downstream systems.",
      },
      {
        layer: "Realtime",
        tech: "Daily.co (via Vapi)",
        description: "Media path managed by Vapi so the codebase stays thin on WebRTC specifics.",
      },
      {
        layer: "Gateway",
        tech: "Next.js routes",
        description: "Custom webhook router partitioning Vapi payloads and enforcing idempotent writes across automations.",
      },
    ],
    results: [
      { value: "24/7", label: "Availability without staff" },
      { value: "6+", label: "Vapi event types handled" },
      { value: "0", label: "Duplicate CRM entries" },
      { value: "2 wks", label: "Build-to-deploy time" },
    ],
    resultBullets: [
      "System handles all inbound calls, qualification, objection handling, and booking, without human involvement.",
      "Every call produces a structured Airtable record: transcript, lead score, intent tags, and contact data.",
      "Webhook router processes 6+ distinct Vapi event types with deduplication and error recovery.",
      "Live on this portfolio, Liya runs on this exact system.",
    ],
    testimonial:
      "The assistant feels like a real receptionist. Leads are qualified before I even see their name in the CRM.",
    meaning:
      "If you need a voice AI system that handles real conversations, qualifies leads, and logs structured data automatically, this is built, deployed, and running. I can adapt this to your business in days.",
  },
  {
    slug: "intuitysync",
    title: "IntuitySync AI",
    subtitle: "AI-powered social media automation, posting, scheduling, analytics, and content generation across all channels from one dashboard",
    tag: "Case Study 05 - SaaS / AI Content",
    image: "/images/case-study/thumb-intuitysync.png",
    overview: [
      "Product: B2B SaaS, social media automation platform.",
      "Live at: intuitysync.com",
      "Timeline: Full MVP delivered in 3 months.",
      "Role: Frontend lead, product UI, AI content pipeline integration, responsive architecture, and performance.",
    ],
    problem: [
      "Marketing teams managing multiple social channels were spending hours per week on manual posting, caption writing, and performance tracking.",
      "Existing tools were either too simple (no AI) or too expensive for growing teams.",
      "No single dashboard handled content creation, scheduling, analytics, and multi-channel publishing together.",
    ],
    whyItMattered: [
      "Social media consistency directly impacts brand growth, gaps in posting cost reach and follower momentum.",
      "AI-generated captions and images were available as point tools but not integrated into a unified workflow.",
      "Early adopters needed a solution that reduced workload by at least 50% to justify switching costs.",
    ],
    whatIBuilt: [
      "Delivered the full frontend MVP in 3 months as sole frontend lead.",
      "Built the AI content pipeline UI, content brief input, AI-generated caption and image previews, edit-and-approve flow.",
      "Implemented responsive architecture that maintained consistent UX across desktop, tablet, and mobile.",
      "Integrated with the analytics and scheduling backend to surface post performance, best times, and channel metrics.",
      "Optimized component architecture to handle large content queues without UI degradation.",
    ],
    stack: [
      { layer: "Frontend", tech: "Next.js (React)" },
      { layer: "Automation", tech: "N8N" },
      { layer: "Database", tech: "Supabase" },
      { layer: "AI Content", tech: "OpenAI" },
      { layer: "Billing", tech: "Stripe" },
      { layer: "Cloud", tech: "AWS" },
    ],
    results: [
      { value: "3 mo", label: "MVP delivery time" },
      { value: "60%", label: "Manual workload reduction" },
      { value: "40%", label: "User engagement increase" },
      { value: "50+", label: "Paying early adopters" },
    ],
    resultBullets: [
      "Full MVP delivered in 3 months as sole frontend lead.",
      "AI content pipeline cut manual content creation workload by 60% for early users.",
      "Responsive architecture improvements lifted user engagement metrics by 40%.",
      "50+ paying early adopters onboarded in Q1 post-launch with zero downtime.",
    ],
    testimonial:
      "The dashboard made our social workflow dramatically faster. We went from spending 5 hours a week on content to under 1.",
    meaning:
      "If you need a high-quality frontend on a complex AI-powered SaaS, one that handles content pipelines, multi-channel data, and real-time UI, I have shipped this at speed without cutting corners.",
  },
  {
    slug: "wumis",
    title: "Water Utility Management System",
    subtitle: "Mission-critical enterprise SaaS for billing, meter reading, and customer management across 20+ water utility organisations",
    tag: "Case Study 06 - Enterprise SaaS",
    image: "/images/case-study/thumb-wumis.png",
    overview: [
      "Product: Enterprise SaaS, deployed across 20+ organisations in Ethiopia.",
      "Live at: wumis.et",
      "Scale: 100,000+ active users.",
      "Timeline: 8 months.",
      "Role: Sole frontend architect, owned the entire frontend across the product lifecycle.",
    ],
    problem: [
      "Water utility companies across Ethiopia were managing billing, meter reading, and customer records manually or with fragmented spreadsheet-based systems.",
      "Errors in manual billing led to revenue loss and customer disputes.",
      "No centralised system existed for managing customer accounts, payment history, and meter data at scale.",
    ],
    whyItMattered: [
      "Water utility billing errors have direct consequences for both the organisation's revenue and the customer's service access.",
      "Manual processes could not scale as organisations grew their customer base.",
      "Deployment across multiple organisations required a multi-tenant architecture with strict data isolation.",
    ],
    whatIBuilt: [
      "Architected and owned the complete frontend across all modules, billing, meter management, customer accounts, and reporting.",
      "Built high-load dashboards capable of displaying real-time billing data for 100,000+ users without performance degradation.",
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
      "Deployed across 20+ water utility organisations serving 100,000+ active users.",
      "CI/CD pipeline reduced deployment time by 70% and eliminated manual deployment errors.",
      "Zero data integrity issues reported across all production deployments.",
      "Sole frontend architect, owned every UI decision from architecture to pixel.",
    ],
    testimonial:
      "The system transformed how we manage billing and customer records. We eliminated manual errors and cut processing time significantly.",
    meaning:
      "If you are building an enterprise SaaS that needs to scale reliably across multiple organisations, handle large datasets without performance issues, and deploy consistently, this is the kind of frontend architecture I bring.",
  },
  {
    slug: "huluplus",
    title: "Hulu Plus",
    subtitle: "Real-time ride-sharing and delivery platform across 3 major cities, live GPS tracking, automated dispatch, and event-driven infrastructure",
    tag: "Case Study 07 - Transportation Tech",
    image: "/images/case-study/thumb-huluplus.png",
    overview: [
      "Product: Consumer transportation and delivery platform.",
      "Live at: huluplus.et",
      "Scale: 3 major cities, thousands of concurrent rides.",
      "Timeline: 6 months to product-market fit.",
      "Role: Frontend lead and DevOps, led frontend team, owned CI/CD pipeline and AWS infrastructure.",
    ],
    problem: [
      "Existing ride-sharing options in the target markets were unreliable, with no real-time tracking or automated dispatch.",
      "Driver and customer apps needed to stay in sync under high concurrency without dropped events.",
      "The business needed to expand into 3 cities simultaneously without rebuilding infrastructure for each.",
    ],
    whyItMattered: [
      "Real-time accuracy in ride-sharing is non-negotiable, users abandon platforms that show stale location data.",
      "The platform needed to handle simultaneous ride requests across cities without event loss or race conditions.",
      "Rapid city expansion required an infrastructure that could scale horizontally without per-city engineering effort.",
    ],
    whatIBuilt: [
      "Led the frontend team from zero to product-market fit in 6 months.",
      "Built the real-time event system using Socket.io and Kafka to handle thousands of concurrent ride events.",
      "Owned the AWS CI/CD pipeline, cutting release time by 30% and enabling daily deployments.",
      "Designed the driver and customer app UIs with live GPS tracking, estimated arrival, and ride state management.",
      "Architected the frontend to scale into new cities by configuration rather than code changes.",
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
      { value: "6 mo", label: "Time to product-market fit" },
      { value: "1000s", label: "Concurrent rides handled" },
    ],
    resultBullets: [
      "Platform scaled into 3 major cities with consistent uptime through rapid growth.",
      "AWS CI/CD pipeline cut release time by 30%, enabling faster iteration.",
      "Real-time event system handles thousands of concurrent rides without dropped events.",
      "Led frontend team from first commit to product-market fit in 6 months.",
    ],
    testimonial:
      "The real-time tracking and smooth dispatch experience set us apart from every other option in the market at launch.",
    meaning:
      "If you are building a real-time platform that needs to scale into multiple markets quickly, whether ride-sharing, logistics, or any event-driven consumer product, I have led exactly this kind of build.",
  },
]

export function getStudyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug)
}