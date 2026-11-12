export const contact = {
  email: 'bellojohn556@gmail.com',
  github: 'https://github.com/JohnConfidence556',
  linkedin: 'https://www.linkedin.com/in/john-confidence-bello-',
}

/** Set `src` to the photo path (e.g. '/images/john.jpg') once it is added to /public. */
export const portrait: { src: string | null; alt: string } = {
  src: '/images/john.png',
  alt: 'John Confidence Bello speaking into a microphone on stage, wearing glasses and a white T-shirt',
}

export const education = [
  {
    period: '2020 – 2025',
    title: 'B.Eng Mechanical Engineering',
    org: 'University of Benin, Edo State',
  },
]

export const learning = [
  { period: 'Aug – Nov 2026', title: 'AWS AI/ML Nanodegree Scholar program' },
  { period: 'Nov 2025', title: 'Build Chat Applications with OpenAI and LangChain, 365 Data Science' },
  { period: 'Oct 2025', title: 'Data Science Nigeria Bootcamp' },
]

export type Project = {
  index: string
  name: string
  kind: string
  title: string
  summary: string
  details: string[]
  metrics: { value: string; label: string }[]
  note: string
  stack: string[]
  links: { label: string; href: string }[]
  image?: { src: string; alt: string }   
}

export const projects: Project[] = [
    {
    index: '01',
    name: 'Kora',
    kind: 'Voice and chat telecom assistant',
    title: 'It prepares the purchase. You confirm it.',
    summary:
      'A self-service telecom app with an assistant you can type to or call from the browser. It answers plan questions from published MTN Nigeria information and prepares purchases for you to confirm.',
    details: [
      'The assistant has tools to prepare a data or airtime order but none to confirm one. Only the signed-in user confirms, inside a locking database transaction, so pressing twice charges once. Orders expire after 10 minutes.',
      'Plan and price answers come only from retrieved text (FastEmbed and FAISS). Below a similarity threshold of 0.75, chosen from measured scores, it says it is not sure and points to the service line.',
      'One tools module serves both channels. The voice agent (LiveKit Agents with Groq speech-to-text, LLM and text-to-speech) and the chat assistant behave the same, and a signed token limits each call to that user’s own account.',
      '79 evaluation questions across retrieval, refusals, account reads, purchases and safety, with a check that balances and transactions are untouched after every question.',
    ],
    metrics: [
      { value: '95%', label: 'Right chunk in top 4' },
      { value: '10 / 10', label: 'Out-of-scope refused' },
      { value: '4.8 s', label: 'Median chat reply' },
    ],
    note: 'Balances and payments are simulated. Chat passed 57 of 79 questions; 10 of the 22 misses were provider errors, including all six safety questions, which need a clean rerun.',
    stack: ['LiveKit', 'Groq', 'FastAPI', 'FAISS', 'Next.js', 'Docker'],
    links: [
      { label: 'Live app', href: 'https://kora-voice-agent.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/JohnConfidence556/kora-voice-agent' },
      { label: 'Watch the demo', href: 'YOUR-KORA-DEMO-URL' },
    ],
    image: {
      src: '/images/kora.png',
      alt: 'Kora landing page: the headline "Check your balance, buy data, or just ask" beside a phone showing a voice call with the Kora assistant',
    },
  },
  {
    index: '02',
    name: 'Promptly',
    kind: 'Agentic AI app builder',
    title: 'Checked by code, not by another model.',
    summary:
      'Describe a small web app in plain English. A multi-agent pipeline plans it, writes the HTML, CSS and JavaScript, validates it, and lets you refine it as versions you can restore.',
    details: [
      'A LangGraph pipeline of Planner, Architect, Coder, Validator and Repair. The Architect writes a contract of element IDs, classes and functions that all three files must share, so separate model calls do not drift apart.',
      'A deterministic validator checks structure and scope with plain code: contract IDs, defined functions, no network APIs or external URLs, no placeholder text. Repair regenerates only the failing files, capped at two rounds.',
      'Built for a rate-limited free tier: typed retryable errors, Retry-After handling, hard caps on every loop, and live streaming with a visible retry countdown. A build finishes and saves even if the tab closes.',
      'Generated code is treated as untrusted: a single locked filename for writes, a sandboxed cross-origin preview with a restrictive content-security policy, hashed tokens and daily quotas. Every run is logged and traced in Langfuse.',
    ],
    metrics: [
      { value: '15 / 16', label: 'Builds passed validation' },
      { value: '0.31', label: 'Avg fix rounds per build' },
      { value: '99.5 s', label: 'Median build time' },
    ],
    note: 'Evaluated on 16 prompts. The one failure was a plan note over a schema length limit, and the single out-of-scope prompt was not redirected. 79% of build time was spent waiting on free-tier rate limits.',
    stack: ['LangGraph', 'FastAPI', 'Groq', 'React', 'TypeScript', 'Langfuse'],
    links: [
      { label: 'Live app', href: 'https://promptly-two-delta.vercel.app/' },
      { label: 'Watch the demo', href: 'https://youtu.be/1Iby48S8OxE' },
      { label: 'GitHub', href: 'https://github.com/JohnConfidence556/Promptly' },
    ],
    image: {
      src: '/images/promptly.png',
      alt: 'Promptly landing page',
    },
  },
  {
    index: '03',
    name: 'Kredt',
    kind: 'AI-assisted credit intelligence',
    title: 'The AI investigates. The analyst decides.',
    summary:
      'A credit-review system that gathers evidence for a human analyst instead of handing down a verdict.',
    details: [
      'A five-stage LangGraph pipeline (validation, policy retrieval, financial analysis, credit-risk scoring and report synthesis) that assembles an evidence report for review.',
      'Credit-risk model trained on the Home Credit Default Risk data with 12 engineered features. Logistic Regression was benchmarked against HistGradientBoosting, which was selected.',
      'Retrieval over the credit-policy document with ChromaDB and sentence-transformer embeddings. Reports are written by an LLM via Groq, with a fallback path when no API key is configured.',
      'Borrower application, document upload, analyst queue, investigation progress, report and audit-oriented views, deployed on Azure with a documented API and health check.',
    ],
    metrics: [
      { value: '0.6483', label: 'ROC-AUC' },
      { value: '0.1449', label: 'PR-AUC' },
      { value: '5', label: 'Pipeline stages' },
    ],
    note: 'The model is one input to the report, not the decision.',
    stack: ['Azure', 'LangGraph', 'ChromaDB', 'Scikit-learn', 'LLM', 'FastAPI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/tag-ecosystemai/c1-tuners-project-3' },
      {
        label: 'API docs',
        href: 'https://kredt-backend-api.agreeabletree-ad7aebd5.westus2.azurecontainerapps.io/docs',
      },
    ],
    image: {
      src: '/images/kredt.png',
      alt: 'Kredt landing page',   // describe what the screenshot shows
    },
  },
  {
    index: '04',
    name: 'SabiLearn',
    kind: 'Local RAG study assistant',
    title: 'A tutor that answers from your own course materials.',
    summary:
      'Built to run locally and offline, so a student’s notes and lectures stay on their own machine.',
    details: [
      'An ingestion pipeline that extracts text from PDFs, transcribes lecture audio with local Whisper, then chunks, embeds and stores the content in a vector database organised by course.',
      'Course-scoped retrieval, so answers come from the student’s own materials and cite the source documents.',
      'Supports follow-up questions and simplified explanations when the first answer doesn’t land.',
    ],
    metrics: [
      { value: 'Offline', label: 'Runs locally' },
      { value: 'PDF + audio', label: 'Source types' },
      { value: 'Cited', label: 'Every answer' },
    ],
    note: 'Scoping retrieval to a course keeps answers tied to what was actually taught.',
    stack: ['Python', 'RAG', 'Vector database', 'Ollama', 'Whisper'],
    links: [{ label: 'GitHub', href: 'https://github.com/tag-ecosystemai/c1-tuners-project-2' }],
    
    image: {
      src: '/images/sabilearn.png',
      alt: 'Dashboard of a student using SabiLearn',   // describe what the screenshot shows
    },  
  },
  {
    index: '05',
    name: 'Crop & Produce Inspector',
    kind: 'Computer vision for agriculture',
    title: 'First, decide whether it’s a potato leaf at all.',
    summary:
      'A two-stage vision pipeline that rejects unrelated images before classifying leaf disease.',
    details: [
      'A potato-leaf detector filters out unrelated images, then a fine-tuned ResNet18 classifies leaves as Healthy, Early Blight or Late Blight.',
      'Four experiments: a custom CNN, class weighting, ResNet18 feature extraction and full fine-tuning.',
      'The inference pipeline returns prediction confidence with confidence-aware explanations and recommendations. Rejection of unrelated images was tested.',
    ],
    metrics: [
      { value: '100%', label: 'Classifier, 323 held-out images' },
      { value: '97.01%', label: 'Detector, 234 held-out images' },
      { value: '4', label: 'Experiments' },
    ],
    note: 'These scores come from one dataset’s held-out split. Real-field performance is untested.',
    stack: ['PyTorch', 'Torchvision', 'ResNet18', 'FastAPI', 'Streamlit'],
    links: [{ label: 'Live app', href: 'https://inspect-feaf-ai.streamlit.app/' }],

    image: {
      src: '/images/leafinspector.png',
      alt: 'Instance of a prediction of a potato leaf',   // describe what the screenshot shows
    },
  },
]

export const principles = [
  {
    title: 'Keep a person where the stakes are.',
    body: 'In Kredt, the system does the legwork and a human analyst makes the call. I’d rather build something that makes a good decision easier than one that pretends to make it alone.',
  },
  {
    title: 'Report the number, and its limits.',
    body: 'A score means little without the conditions it was measured under. I state the dataset, the split and what hasn’t been tested yet, even when the headline number looks good.',
  },
  {
    title: 'Plan for the unhappy path.',
    body: 'A fallback when an API key is missing. A confidence gate that holds back weak matches. A detector that says “that isn’t a leaf.” The edges are where systems earn trust.',
  },
]

export const experience = [
  {
    role: 'Product Lead & AI Engineer',
    org: 'Areaa Technologies Limited',
    period: 'Mar – Aug 2026',
    body: 'Led product and engineering for an AI-powered campus marketplace MVP with three AI features: AI Store Builder, semantic Smart Search and Ask Areaa, an agentic shopping assistant. Designed an escrow-style Paystack payment flow and commission model, working towards a UNIBEN launch.',
  },
  {
    role: 'AI/ML Engineer (Contributor)',
    org: 'Authorrrity',
    period: 'Apr – Jul 2026',
    body: 'Built Signal V1, a WhatsApp-accessible talent-intelligence system that parses client briefs with an LLM, queries a database of Nigerian professionals, applies three-tier filtering with weighted scoring and writes match rationales. Added a confidence gate, a message router and message splitting, integrated via Twilio and Flask.',
  },
  {
    role: 'AI Engineering Bootcamp Fellow',
    org: 'TAG Ecosystem',
    period: 'Sep 2026',
    body: 'Led a team of five AI engineers building across computer vision, local LLM applications and credit-risk intelligence, from data preparation and experimentation to inference pipelines, backend integration and documentation.',
  },
]

export const skills = [
  {
    group: 'Machine learning',
    items: [
      'Supervised & unsupervised learning',
      'XGBoost, Random Forest, HistGradientBoosting',
      'Logistic Regression',
      'SMOTE & class weighting',
      'Leakage-safe time-based splits',
      'ROC-AUC / PR-AUC',
      'Feature engineering',
      'Time-series forecasting',
    ],
  },
  {
    group: 'GenAI & agents',
    items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Prompt engineering', 'ChromaDB', 'FAISS', 'sentence-transformers'],
  },
  {
    group: 'Deep learning & vision',
    items: ['PyTorch', 'TensorFlow', 'torchvision (ResNet18)', 'Grad-CAM', 'OCR'],
  },
  {
    group: 'Deployment',
    items: ['Azure', 'FastAPI', 'Flask', 'Docker', 'CI/CD', 'Git/GitHub', 'Streamlit', 'Render', 'Vercel', 'Hugging Face Spaces'],
  },
  {
    group: 'Data',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Vector databases'],
  },
]
