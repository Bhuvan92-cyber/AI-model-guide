export const modelTypes = [
  {
    id: 1,
    icon: "🧠",
    name: "Large Language Models (LLMs)",
    color: "#38BDF8",
    subtitle: "Text generation & understanding",
    architecture: "Transformer (decoder-only autoregressive)",
    trainingData:
      "Trillions of tokens from web crawls (Common Crawl), books, Wikipedia, code repos (GitHub), academic papers, news, forums",
    howBuilt:
      "Trained via next-token prediction on massive text corpora, then fine-tuned with RLHF or Constitutional AI to follow instructions and align with human values",
    constraints:
      "Content moderation layers, RLHF human feedback, system prompts, output classifiers",
    examples: "GPT-4o, Claude 4, Gemini 2, LLaMA 4, Mistral, DeepSeek, Qwen",
    params: "7B – 1T+ parameters",
    keyTrait: "The backbone of almost all modern AI chatbots",
  },
  {
    id: 2,
    icon: "🖼️",
    name: "Diffusion Models",
    color: "#A78BFA",
    subtitle: "Image & video generation",
    architecture: "U-Net / DiT (Diffusion Transformer), score-matching networks",
    trainingData:
      "Billions of image-text pairs (LAION-5B, internal datasets), licensed art, stock photos with caption annotations",
    howBuilt:
      "Learn to reverse a noise-addition process — start from pure noise, iteratively denoise guided by text prompts (CLIP embeddings); trained on image reconstruction objectives",
    constraints:
      "Safety checkers to prevent NSFW/illegal content, watermarking (C2PA standard), copyright filters, face generation restrictions",
    examples: "DALL·E 3, Stable Diffusion 3, Midjourney v7, Adobe Firefly, Imagen 3",
    params: "500M – 10B parameters",
    keyTrait: "Power the AI image generation revolution",
  },
  {
    id: 3,
    icon: "🌐",
    name: "Multimodal Models",
    color: "#34D399",
    subtitle: "Text + image + audio + video together",
    architecture:
      "LLM backbone + vision encoder (ViT) + audio encoder + alignment projector/cross-attention",
    trainingData:
      "Paired text-image datasets, video-caption data, audio transcripts, instructional videos, interleaved web documents mixing images and text",
    howBuilt:
      "Vision/audio encoders map non-text inputs into the LLM's token embedding space; jointly trained or fine-tuned to reason across modalities simultaneously",
    constraints:
      "Inherits LLM safety training + additional filters for visual content, deepfake detection policies, audio impersonation safeguards",
    examples:
      "GPT-4o (text/image/audio/video), Gemini 2.0 Flash, Claude 3.5 Sonnet (vision), LLaMA 3.2 Vision",
    params: "Up to 1T+ for the largest",
    keyTrait: "Can see, hear, and talk simultaneously",
  },
  {
    id: 4,
    icon: "👁️",
    name: "Vision / Computer Vision Models",
    color: "#FB923C",
    subtitle: "Image recognition & object detection",
    architecture:
      "CNN (ResNet, EfficientNet), Vision Transformers (ViT), YOLO for real-time detection",
    trainingData:
      "ImageNet (14M labeled images), COCO, OpenImages, medical imaging datasets (X-rays, MRIs), satellite imagery",
    howBuilt:
      "Supervised learning on labeled image datasets (classification, segmentation, detection); contrastive learning (CLIP) for zero-shot recognition",
    constraints:
      "Bias testing across demographic groups, facial recognition regulations (GDPR, state laws), accuracy thresholds for medical/safety use",
    examples: "CLIP, SAM (Segment Anything), DINO v2, Google Vision API, Azure Computer Vision",
    params: "86M – 650M parameters typically",
    keyTrait: "Foundation of self-driving cars, medical imaging, face unlock",
  },
  {
    id: 5,
    icon: "🎵",
    name: "Speech & Audio Models",
    color: "#F472B6",
    subtitle: "Voice synthesis, recognition & music",
    architecture:
      "Transformer + spectrogram encoders; WaveNet-style; VALL-E (neural codec language model); diffusion for music",
    trainingData:
      "Thousands of hours of transcribed speech (LibriSpeech, Common Voice), music recordings, multilingual audio corpora, podcast transcripts",
    howBuilt:
      "Speech-to-text via encoder-decoder seq2seq; text-to-speech via codec tokens or spectrograms; music via diffusion or masked language modeling over audio tokens",
    constraints:
      "Voice cloning protections (consent requirements), speaker verification, copyright on musical styles, deepfake voice detection",
    examples: "Whisper (OpenAI), ElevenLabs, Suno, Udio, Google WaveNet, Meta SeamlessM4T",
    params: "20M – 3B parameters",
    keyTrait: "Enables real-time voice AI and AI music generation",
  },
  {
    id: 6,
    icon: "💻",
    name: "Code-Specialized Models",
    color: "#38BDF8",
    subtitle: "Software development & code generation",
    architecture:
      "LLM fine-tuned specifically on code; fill-in-the-middle (FIM) training objective",
    trainingData:
      "Public GitHub repos (100+ languages), Stack Overflow Q&A, documentation, code comments, competitive programming datasets",
    howBuilt:
      "Pre-trained on mixed code+text corpora; additional fine-tuning on code completion, bug fixing, and explanation tasks; RLHF from developer feedback",
    constraints:
      "License compliance filtering, PII scrubbing from code, restrictions on reproducing verbatim open-source code",
    examples: "GitHub Copilot, Claude Code, Codestral (Mistral), DeepSeek-Coder, StarCoder2",
    params: "7B – 405B parameters",
    keyTrait: "Can write, debug, and explain code in 100+ languages",
  },
  {
    id: 7,
    icon: "🤔",
    name: "Reasoning / Chain-of-Thought Models",
    color: "#A78BFA",
    subtitle: "Deep thinking & step-by-step problem solving",
    architecture:
      "LLM with extended internal scratchpad / Monte Carlo Tree Search (MCTS); test-time compute scaling",
    trainingData:
      "Math competition problems, logic puzzles, scientific reasoning datasets, process reward modeling (PRM) data with step-level correctness labels",
    howBuilt:
      "Trained to generate intermediate reasoning steps; process reward models score each step; RL maximizes final answer correctness; deliberate 'thinking' tokens used at inference",
    constraints:
      "Time/compute budget limits on reasoning chains, output format constraints to avoid runaway loops",
    examples:
      "OpenAI o3/o4-mini, Claude 3.7 Sonnet (extended thinking), DeepSeek-R1, Gemini 2.5 Pro (thinking)",
    params: "Same base as LLMs + inference-time compute",
    keyTrait:
      "Spends more compute thinking before answering — better for math, logic, and science",
  },
  {
    id: 8,
    icon: "🎮",
    name: "Reinforcement Learning (RL) Models",
    color: "#34D399",
    subtitle: "Decision-making & game-playing agents",
    architecture:
      "Deep Q-Networks (DQN), Policy Gradient (PPO, A3C), AlphaZero-style MCTS + neural networks",
    trainingData:
      "Self-play game states, environment simulation (millions of episodes), human expert demonstrations; reward signals instead of labeled text",
    howBuilt:
      "Agent interacts with environment, receives reward/penalty signals, optimizes policy to maximize cumulative reward via trial-and-error; trained purely from experience",
    constraints:
      "Reward hacking safeguards, safety constraints in real-world deployment (robotics, autonomous vehicles), evaluation on unseen environments",
    examples:
      "AlphaGo / AlphaZero (DeepMind), OpenAI Five (Dota), Waymo driving models, Boston Dynamics locomotion",
    params: "Varies widely",
    keyTrait: "Learns entirely from reward signals — no human labels needed",
  },
  {
    id: 9,
    icon: "🎬",
    name: "Video Generation Models",
    color: "#FB923C",
    subtitle: "Text-to-video & video editing",
    architecture:
      "Spatio-temporal diffusion transformers (DiT), latent video diffusion, 3D attention across frames",
    trainingData:
      "Hundreds of millions of licensed video clips with captions, movie databases, stock footage, internal web video crawls",
    howBuilt:
      "Extend image diffusion to temporal dimension; learn to generate coherent sequences of frames conditioned on text; trained with diffusion loss across space AND time",
    constraints:
      "Strict CSAM prevention, deepfake watermarking (SynthID), licensed-content reproduction blocks, real-person generation policies",
    examples: "OpenAI Sora 2, Google Veo 3, Meta Movie Gen, Kling, Runway ML Gen-4",
    params: "Multi-billion to trillion scale",
    keyTrait: "Can generate cinematic video from a text description",
  },
  {
    id: 10,
    icon: "🔍",
    name: "Embedding / Semantic Search Models",
    color: "#F472B6",
    subtitle: "Semantic understanding & vector search",
    architecture:
      "BERT-style encoder-only transformer; contrastive learning (SimCSE, E5, BGE)",
    trainingData:
      "Sentence pairs with similarity labels, question-answer pairs, multilingual parallel corpora, document-retrieval datasets",
    howBuilt:
      "Encoder maps text into dense vector representations; trained with contrastive loss to pull similar texts together and push dissimilar ones apart in vector space",
    constraints:
      "Bias evaluation across demographic groups, privacy considerations for stored embeddings",
    examples: "OpenAI text-embedding-3, Cohere Embed, Google Gecko, E5-large, BGE-M3",
    params: "110M – 7B parameters",
    keyTrait: "Power semantic search, RAG systems, and similarity matching",
  },
  {
    id: 11,
    icon: "🏥",
    name: "Domain-Specific Models",
    color: "#38BDF8",
    subtitle: "Healthcare, finance, law, science",
    architecture: "LLM base + domain-specific continued pre-training and fine-tuning",
    trainingData:
      "Medical records/literature (PubMed, clinical notes), financial filings (SEC, Bloomberg), legal documents (case law, contracts), scientific papers",
    howBuilt:
      "Start from a general LLM; continue pre-training on domain corpus; fine-tune on domain-specific tasks; evaluate with domain experts",
    constraints:
      "FDA/CE regulation for medical AI, HIPAA compliance, auditability requirements, mandatory human oversight, liability frameworks",
    examples:
      "Med-PaLM 2 (Google), BloombergGPT (finance), LegalBERT (law), GNoME (materials science), AlphaFold 3 (protein structures)",
    params: "Same as base LLM",
    keyTrait: "Outperforms general models in their narrow domain",
  },
  {
    id: 12,
    icon: "📱",
    name: "Small / Edge Models (SLMs)",
    color: "#A78BFA",
    subtitle: "Runs on phones & low-power devices",
    architecture:
      "Compressed LLM — quantization (4-bit, 8-bit), pruning, knowledge distillation, LoRA adapters",
    trainingData:
      "Same as LLMs but with distillation from larger 'teacher' models; specialized instruction datasets",
    howBuilt:
      "Knowledge distillation: large model teaches a smaller one; quantization reduces precision from 32-bit to 4-bit floats; structured pruning removes unnecessary weights",
    constraints:
      "Memory < 4GB RAM, latency < 100ms, battery efficiency; must maintain safety filtering at small scale",
    examples: "Microsoft Phi-4, Apple MLX models, Gemma 3 (1B-9B), LLaMA 3.2 1B/3B, Mistral 7B",
    params: "1B – 13B parameters",
    keyTrait: "Runs entirely on your phone — no cloud needed, fully private",
  },
];

export const trainingSteps = [
  {
    step: "01",
    title: "Data Collection & Curation",
    icon: "📦",
    color: "#38BDF8",
    description:
      "Gather trillions of tokens from the internet — web pages (Common Crawl), books, Wikipedia, GitHub code repos, scientific papers (ArXiv), news sites, and licensed proprietary datasets.",
    detail:
      "Raw web data is heavily filtered: language detection, deduplication (MinHash/exact match), quality scoring (perplexity filtering), PII removal, toxic content filtering, and copyright compliance. The ratio of sources is carefully tuned — too much low-quality web data degrades performance.",
    dataTypes: [
      "Web crawl (Common Crawl ~50TB)",
      "Books & literature",
      "Code (GitHub, Stack Overflow)",
      "Academic papers (ArXiv, PubMed)",
      "Wikipedia & encyclopedias",
      "Multilingual corpora",
    ],
  },
  {
    step: "02",
    title: "Pre-Training",
    icon: "⚡",
    color: "#A78BFA",
    description:
      "Train the model on billions of examples with a simple objective: predict the next token. This gives the model its foundational knowledge of language, facts, reasoning, and world knowledge.",
    detail:
      "Uses thousands of GPUs/TPUs running for weeks to months. The model learns via backpropagation and gradient descent. Modern models use Mixture-of-Experts (MoE) architecture — only a fraction of parameters activate per token, enabling trillion-parameter models to run efficiently. Training costs can exceed $100M.",
    dataTypes: [
      "Objective: Next-token prediction (autoregressive)",
      "Architecture: Transformer (multi-head attention)",
      "Hardware: 1,000–16,000 A100/H100 GPUs",
      "Duration: Weeks to months",
      "Cost: $10M–$100M+",
    ],
  },
  {
    step: "03",
    title: "Supervised Fine-Tuning (SFT)",
    icon: "🎯",
    color: "#34D399",
    description:
      "Take the pre-trained model and fine-tune it on human-written demonstrations of good behavior: helpful Q&A, code assistance, creative writing, and following instructions properly.",
    detail:
      "Human contractors write or rate thousands of high-quality (prompt, ideal response) pairs. The model is trained to mimic these examples. This stage teaches the model HOW to respond as a helpful assistant — the pre-training phase only gave it knowledge, not behavior.",
    dataTypes: [
      "Human-written Q&A pairs",
      "Instruction-following demonstrations",
      "Multi-turn conversation examples",
      "Task-specific samples (coding, math, writing)",
      "Annotated by domain experts",
    ],
  },
  {
    step: "04",
    title: "Reinforcement Learning from Human Feedback (RLHF)",
    icon: "🏆",
    color: "#FB923C",
    description:
      "Human raters compare pairs of model outputs and mark which is better. A 'reward model' is trained on these preferences, then used to further train the LLM to maximize that reward score.",
    detail:
      "Three sub-stages: (1) Collect human preference data — show raters two responses, ask which is better. (2) Train a reward model (RM) to score outputs like a human would. (3) Run PPO RL to update the LLM to generate outputs the RM scores highly. Anthropic's Claude uses Constitutional AI (CAI) — an AI itself critiques outputs against a set of principles, reducing the need for human labelers.",
    dataTypes: [
      "Human preference rankings (A vs B)",
      "Helpfulness, harmlessness, honesty criteria",
      "Constitutional principles (Anthropic/Claude)",
      "AI-generated feedback (RLAIF)",
      "Red-teaming adversarial examples",
    ],
  },
  {
    step: "05",
    title: "Safety & Alignment Testing",
    icon: "🛡️",
    color: "#F472B6",
    description:
      "Before deployment, models undergo extensive red-teaming: teams of humans actively try to make the model produce harmful, biased, or dangerous outputs to find and fix weaknesses.",
    detail:
      "Automated evaluations (thousands of test prompts covering safety categories), human red teams, external security audits, bias benchmarks across demographic groups, and ongoing monitoring post-deployment. Models get updated system prompts, output classifiers, and behavior guardrails based on findings.",
    dataTypes: [
      "Red-team adversarial prompts",
      "Bias & fairness benchmarks",
      "Capability evaluations (MMLU, HumanEval)",
      "Safety benchmarks (TruthfulQA)",
      "External third-party audits",
    ],
  },
  {
    step: "06",
    title: "Deployment & Continuous Learning",
    icon: "🚀",
    color: "#38BDF8",
    description:
      "The model is served via APIs at massive scale. User feedback and flagged outputs are fed back into future training cycles, and models are periodically retrained with newer data.",
    detail:
      "Modern inference uses quantization (reduced precision), tensor parallelism across GPU clusters, KV-cache optimization, and speculative decoding to serve millions of users at low latency. Models are typically version-controlled, with older versions kept accessible for API stability.",
    dataTypes: [
      "User feedback signals (thumbs up/down)",
      "Flagged content reports",
      "A/B testing new model versions",
      "Monitoring for drift and degradation",
      "Periodic retraining with newer data",
    ],
  },
];

export const chatbots = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    maker: "OpenAI",
    flag: "🇺🇸",
    color: "#10B981",
    latestModel: "GPT-4.5 / o3 / GPT-5",
    launched: "Nov 2022",
    architecture:
      "Dense Transformer + MoE (GPT-4 family); Reasoning chain (o-series)",
    trainingData:
      "Vast web crawl, books, code, conversations; cutoff Dec 2025. Also Microsoft-licensed data.",
    safetyApproach:
      "RLHF (human feedback), usage policies, content classifiers, output filters, red-teaming, moderation API",
    strengths: [
      "All-around performer",
      "Creative writing",
      "Multimodal (text, image, voice)",
      "Plugin/tool ecosystem",
      "DALL·E image generation",
    ],
    weaknesses: [
      "Expensive at Pro tier",
      "Occasional hallucinations",
      "Can be verbose",
    ],
    uniqueTrait:
      "Most widely used AI chatbot in the world (hundreds of millions of users); first to make conversational AI mainstream",
    accessModel: "Free tier + ChatGPT Plus $20/mo + Pro $200/mo",
    openSource: false,
    contextWindow: "128K tokens (GPT-4o) / 1M (GPT-4.5)",
    realTimeSearch: true,
    multimodal: true,
    reasoning: true,
  },
  {
    id: "claude",
    name: "Claude",
    maker: "Anthropic",
    flag: "🇺🇸",
    color: "#F59E0B",
    latestModel: "Claude Sonnet 4.6 / Opus 4",
    launched: "Mar 2023",
    architecture: "Transformer (dense), Constitutional AI trained",
    trainingData:
      "Web, books, academic papers, code; heavy emphasis on high-quality curated sources. Cutoff ~Aug 2025",
    safetyApproach:
      "Constitutional AI (CAI) — model critiques its own outputs against a written constitution of ethical principles; also RLHF, RLAIF, extensive red-teaming",
    strengths: [
      "Long document analysis (200K context)",
      "Complex reasoning & coding",
      "Following nuanced instructions",
      "Honest & calibrated",
      "Safety-first design",
    ],
    weaknesses: [
      "No image generation",
      "Smaller plugin ecosystem than ChatGPT",
      "Web access limited",
    ],
    uniqueTrait:
      "Only major model built with Constitutional AI — a written set of principles guides its ethics. Built by former OpenAI safety researchers.",
    accessModel: "Free tier + Claude Pro $20/mo + Claude Max $100/mo",
    openSource: false,
    contextWindow: "200K tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    maker: "Google DeepMind",
    flag: "🇺🇸",
    color: "#4285F4",
    latestModel: "Gemini 2.5 Pro / Flash",
    launched: "Dec 2023",
    architecture: "Natively multimodal Transformer; MoE; 1M+ token context",
    trainingData:
      "Google's entire web index, YouTube transcripts, Google Books, Google Scholar, internal Google data — uniquely comprehensive breadth",
    safetyApproach:
      "RLHF, Google's responsible AI principles, safety classifiers, Perspective API integration, adversarial testing; EU AI Act compliance",
    strengths: [
      "Massive context window (1M+ tokens)",
      "Deep Google ecosystem integration",
      "Natively handles text/image/video/audio/code",
      "Free access to strong model",
      "Real-time Google Search",
    ],
    weaknesses: [
      "Initial quality inconsistency",
      "Privacy concerns (Google data)",
      "Less community ecosystem",
    ],
    uniqueTrait:
      "Born multimodal from day one — designed to process all modalities natively, not as an add-on. Deeply integrated with Google Workspace, Search, and Android.",
    accessModel: "Free + Gemini Advanced $20/mo; included with Google One",
    openSource: false,
    contextWindow: "1M tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: true,
  },
  {
    id: "grok",
    name: "Grok",
    maker: "xAI (Elon Musk)",
    flag: "🇺🇸",
    color: "#94A3B8",
    latestModel: "Grok 3 / Grok 3 Mini",
    launched: "Nov 2023",
    architecture:
      "Transformer with real-time X/Twitter data pipeline integration",
    trainingData:
      "Web data + uniquely has real-time access to the full X (Twitter) firehose — every tweet, trend, and public post as it happens. Grok 3 trained on Colossus supercomputer (100K H100s).",
    safetyApproach:
      "Less restrictive than competitors by design — xAI positions Grok as 'maximally truth-seeking'; safety guidelines exist but fewer guardrails; focuses on accuracy over caution",
    strengths: [
      "Real-time X/Twitter data",
      "Less censored/more direct",
      "Strong reasoning (Grok 3)",
      "DeepSearch for live web data",
      "Image generation (Aurora)",
    ],
    weaknesses: [
      "Requires X Premium subscription",
      "Fewer integrations",
      "Smaller third-party ecosystem",
    ],
    uniqueTrait:
      "The only major AI with live access to Twitter/X's entire data stream — knows what's trending RIGHT NOW. Trained on the world's largest GPU cluster (Colossus, Memphis TN).",
    accessModel: "Requires X Premium ($8/mo) or X Premium+ ($16/mo)",
    openSource: true,
    contextWindow: "128K tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: true,
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    maker: "Perplexity AI Inc.",
    flag: "🇺🇸",
    color: "#1BE7FF",
    latestModel: "Sonar (Llama + proprietary retrieval)",
    launched: "Aug 2022",
    architecture:
      "RAG (Retrieval-Augmented Generation) — real-time web search + LLM synthesis. Uses external LLMs for generation",
    trainingData:
      "No independent pre-training — ALWAYS retrieves fresh web pages, academic sources, Reddit, news, and YouTube at query time. Acts as an intelligent search engine.",
    safetyApproach:
      "Inherits safety from underlying models (Claude, GPT); adds citation verification, source quality ranking; biased toward authoritative sources",
    strengths: [
      "Always up-to-date (no knowledge cutoff)",
      "Every answer is cited with sources",
      "Great for research & fact-checking",
      "Free pro-search",
      "Multiple model choice",
    ],
    weaknesses: [
      "Weaker at creative/generative tasks",
      "Not designed for long conversations",
      "Dependent on other companies' models",
    ],
    uniqueTrait:
      "Fundamentally different architecture — it's not a chatbot, it's an AI search engine. It retrieves first, then generates. Every claim is backed by a clickable source.",
    accessModel: "Free + Perplexity Pro $20/mo",
    openSource: false,
    contextWindow: "127K tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: false,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    maker: "DeepSeek AI",
    flag: "🇨🇳",
    color: "#7DD3FC",
    latestModel: "DeepSeek-V3 / R1",
    launched: "Nov 2023",
    architecture:
      "MoE (Mixture of Experts) — 671B total params, only 37B active per token. Multi-Head Latent Attention (MLA) for efficiency",
    trainingData:
      "Chinese + English web crawl, academic papers, code, math competitions — trained on H800 chips",
    safetyApproach:
      "Content moderation for harmful/illegal content; Chinese regulatory compliance; RLHF applied; fewer restrictions than US models on some topics",
    strengths: [
      "Frontier performance at fraction of cost",
      "Exceptional math & coding (R1)",
      "Open-source weights available",
      "Cost-effective API",
      "Strong reasoning",
    ],
    weaknesses: [
      "Chinese govt. content filtering",
      "Data privacy concerns (servers in China)",
      "Limited multimodal features",
    ],
    uniqueTrait:
      "Shocked the AI world in Jan 2025 — matched GPT-4 class performance while training cost was 95% cheaper ($6M vs. OpenAI's $100M+). First time a Chinese model topped global benchmarks.",
    accessModel:
      "Free at deepseek.com; API very cheap ($0.14/M tokens); open-source on Hugging Face",
    openSource: true,
    contextWindow: "128K tokens",
    realTimeSearch: false,
    multimodal: false,
    reasoning: true,
  },
  {
    id: "meta-ai",
    name: "Meta AI (Llama)",
    maker: "Meta (Facebook)",
    flag: "🇺🇸",
    color: "#818CF8",
    latestModel: "LLaMA 4 Scout / Maverick",
    launched: "Feb 2023 (LLaMA 1)",
    architecture:
      "MoE for Maverick (17B×128 experts ~400B total); dense for Scout; natively multimodal",
    trainingData:
      "Publicly available internet text, Meta social media data, books, code, multilingual datasets across 200 languages, image-text pairs",
    safetyApproach:
      "Llama Guard (safety classifier built separately), Responsible Use Guide, Meta's AI policies; open weights means Meta can't fully control downstream use",
    strengths: [
      "Fully open-source weights (run locally)",
      "Integrated in WhatsApp, Instagram, Facebook",
      "Hugely diverse community ecosystem",
      "Free to use and modify commercially",
      "Multilingual (200 languages)",
    ],
    weaknesses: [
      "Open weights = harder to prevent misuse",
      "Consumer app integration can feel intrusive",
      "Smaller than closed competitors in raw capability",
    ],
    uniqueTrait:
      "The most influential open-source AI model in history — LLaMA weights downloaded millions of times. Enabled hundreds of specialized models built on top by researchers worldwide.",
    accessModel:
      "Free in Meta apps; weights on Hugging Face (open license); Meta AI app",
    openSource: true,
    contextWindow: "10M tokens (Scout) / 1M (Maverick)",
    realTimeSearch: true,
    multimodal: true,
    reasoning: true,
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    maker: "Microsoft + OpenAI",
    flag: "🇺🇸",
    color: "#00BCF2",
    latestModel: "GPT-4o + Azure-tuned models",
    launched: "Feb 2023",
    architecture:
      "OpenAI GPT-4o as core engine, enhanced with Bing Search, enterprise security layers, and deep Office 365 integration",
    trainingData:
      "OpenAI's training data + Microsoft's commercial and enterprise document data; real-time Bing web search index",
    safetyApproach:
      "Inherits OpenAI's RLHF safety; Microsoft adds enterprise-grade content filtering, Responsible AI framework, compliance with GDPR/HIPAA/SOC2, Azure AI Content Safety API",
    strengths: [
      "Seamless Office 365 integration (Word, Excel, PowerPoint)",
      "Enterprise security & compliance",
      "Bing real-time web search",
      "Image generation (DALL·E 3)",
      "Windows 11 OS-level integration",
    ],
    weaknesses: [
      "Requires Microsoft 365 subscription for best features",
      "Less flexible than standalone ChatGPT",
      "Pricing complex for enterprise",
    ],
    uniqueTrait:
      "The first AI deeply embedded into a major productivity suite — rewrites your Word docs, analyzes your Excel sheets, builds your PowerPoint slides.",
    accessModel:
      "Free (Bing/web); Copilot Pro $20/mo; Microsoft 365 Copilot $30/user/mo",
    openSource: false,
    contextWindow: "128K tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: false,
  },
  {
    id: "mistral",
    name: "Mistral AI",
    maker: "Mistral AI",
    flag: "🇫🇷",
    color: "#FF6B35",
    latestModel: "Mistral Large 2 / Mistral Nemo",
    launched: "Sep 2023",
    architecture:
      "Grouped Query Attention (GQA) + Sliding Window Attention for efficiency; smaller MoE (Mixtral 8x7B, 8x22B)",
    trainingData:
      "Multilingual web data (strong European language coverage), code, mathematics, instruction data; emphasis on English, French, German, Spanish, Italian",
    safetyApproach:
      "Less restrictive safety guardrails by design; basic harmful content filtering; French/EU regulatory compliance; developer-friendly fewer refusals",
    strengths: [
      "Highly efficient (great performance per parameter)",
      "Open-source (Apache 2.0 license)",
      "Strong European language support",
      "Lower cost API",
      "Good for on-device/edge deployment",
    ],
    weaknesses: [
      "Smaller than GPT-4o/Claude Opus",
      "Less multimodal capability",
      "Smaller community than Meta LLaMA",
    ],
    uniqueTrait:
      "Europe's answer to American AI dominance — France's fastest-ever €105M seed round. Pioneered sliding window attention, making Mistral 7B outperform models 5x its size.",
    accessModel:
      "Free tier + Le Chat (free/paid); API from $0.40/M tokens; open weights on HuggingFace",
    openSource: true,
    contextWindow: "128K tokens",
    realTimeSearch: true,
    multimodal: true,
    reasoning: false,
  },
  {
    id: "qwen",
    name: "Qwen (Alibaba)",
    maker: "Alibaba Cloud (Tongyi)",
    flag: "🇨🇳",
    color: "#FF9500",
    latestModel: "Qwen 3 (235B MoE)",
    launched: "Sep 2023",
    architecture:
      "Dense + MoE variants; Qwen3 235B uses MoE with 22B active params; strong long-context support",
    trainingData:
      "7 trillion tokens — Chinese + English web, academic papers, code, books, Alibaba e-commerce data, multilingual text across 100+ languages",
    safetyApproach:
      "Chinese content regulations (strict on political content); RLHF; Chinese government AI guidelines compliance; built-in content safety for Chinese market",
    strengths: [
      "Exceptional Chinese language ability",
      "Strong multilingual (100+ languages)",
      "Open weights for most models",
      "Hybrid thinking/non-thinking modes",
      "Strong math & coding",
    ],
    weaknesses: [
      "Chinese censorship on political topics",
      "Less adoption in Western markets",
      "Data privacy concerns (Alibaba)",
    ],
    uniqueTrait:
      "The most capable multilingual open model — dominant for Chinese-language tasks. Qwen3's hybrid 'thinking/non-thinking' mode lets it choose when to reason deeply vs. answer fast.",
    accessModel:
      "Free on Tongyi Qianwen app; API on Alibaba Cloud; open weights on HuggingFace & ModelScope",
    openSource: true,
    contextWindow: "128K tokens",
    realTimeSearch: false,
    multimodal: true,
    reasoning: true,
  },
];

export const comparisons = [
  {
    feature: "Open Source",
    chatgpt: "❌",
    claude: "❌",
    gemini: "❌",
    grok: "Partial",
    perplexity: "❌",
    deepseek: "✅",
    meta: "✅",
    copilot: "❌",
    mistral: "✅",
    qwen: "✅",
  },
  {
    feature: "Real-time Search",
    chatgpt: "✅",
    claude: "✅",
    gemini: "✅",
    grok: "✅",
    perplexity: "✅",
    deepseek: "❌",
    meta: "✅",
    copilot: "✅",
    mistral: "✅",
    qwen: "❌",
  },
  {
    feature: "Image Generation",
    chatgpt: "✅",
    claude: "❌",
    gemini: "✅",
    grok: "✅",
    perplexity: "❌",
    deepseek: "❌",
    meta: "✅",
    copilot: "✅",
    mistral: "❌",
    qwen: "✅",
  },
  {
    feature: "Voice Mode",
    chatgpt: "✅",
    claude: "✅",
    gemini: "✅",
    grok: "✅",
    perplexity: "✅",
    deepseek: "❌",
    meta: "✅",
    copilot: "✅",
    mistral: "❌",
    qwen: "❌",
  },
  {
    feature: "Free Tier",
    chatgpt: "✅",
    claude: "✅",
    gemini: "✅",
    grok: "❌",
    perplexity: "✅",
    deepseek: "✅",
    meta: "✅",
    copilot: "✅",
    mistral: "✅",
    qwen: "✅",
  },
  {
    feature: "API Available",
    chatgpt: "✅",
    claude: "✅",
    gemini: "✅",
    grok: "✅",
    perplexity: "✅",
    deepseek: "✅",
    meta: "✅",
    copilot: "✅",
    mistral: "✅",
    qwen: "✅",
  },
  {
    feature: "Code Execution",
    chatgpt: "✅",
    claude: "✅",
    gemini: "✅",
    grok: "✅",
    perplexity: "❌",
    deepseek: "✅",
    meta: "❌",
    copilot: "✅",
    mistral: "❌",
    qwen: "❌",
  },
  {
    feature: "Reasoning Mode",
    chatgpt: "✅ (o-series)",
    claude: "✅ (thinking)",
    gemini: "✅ (thinking)",
    grok: "✅",
    perplexity: "❌",
    deepseek: "✅ (R1)",
    meta: "Limited",
    copilot: "❌",
    mistral: "❌",
    qwen: "✅",
  },
];

export const useCaseGuide = [
  {
    use: "Creative Writing & Content",
    winner: "ChatGPT (GPT-4o / GPT-5)",
    reason: "Most flexible creative voice, iterative canvas mode",
    color: "#10B981",
  },
  {
    use: "Coding & Development",
    winner: "Claude (Sonnet 4) or DeepSeek R1",
    reason: "200K context, follows complex instructions, high SWE-bench scores",
    color: "#F59E0B",
  },
  {
    use: "Research with Sources",
    winner: "Perplexity AI",
    reason: "Real-time web, every claim cited, search-native architecture",
    color: "#1BE7FF",
  },
  {
    use: "Math & Logic Problems",
    winner: "OpenAI o3 or DeepSeek R1",
    reason: "Reasoning models trained specifically on step-by-step problem solving",
    color: "#4285F4",
  },
  {
    use: "Google Workspace Users",
    winner: "Gemini 2.5 Pro",
    reason: "Native Docs/Sheets/Gmail integration, 1M token context",
    color: "#4285F4",
  },
  {
    use: "Microsoft 365 Users",
    winner: "Microsoft Copilot",
    reason: "Baked into Word, Excel, PowerPoint, Teams, Outlook natively",
    color: "#00BCF2",
  },
  {
    use: "Privacy / On-Device Use",
    winner: "Phi-4 or LLaMA 3.2 3B",
    reason: "Small enough to run locally, no data leaves your device",
    color: "#94A3B8",
  },
  {
    use: "Real-time News & Twitter",
    winner: "Grok 3",
    reason: "Only model with live X/Twitter firehose access",
    color: "#94A3B8",
  },
  {
    use: "Open Source / Self-Hosting",
    winner: "LLaMA 4 or DeepSeek V3",
    reason: "Frontier-class performance with fully open weights",
    color: "#818CF8",
  },
  {
    use: "Chinese / Multilingual",
    winner: "Qwen 3",
    reason: "7T token training across 100+ languages, dominant for Chinese",
    color: "#FF9500",
  },
];
