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
}

export const projects: Project[] = [
  {
    index: '01',
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
  },
  {
    index: '02',
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
  },
  {
    index: '03',
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
