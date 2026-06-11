import { useState } from "react";
import {
  modelTypes,
  trainingSteps,
  chatbots,
  comparisons,
  useCaseGuide,
} from "./data.js";

const palette = {
  bg: "#070B14",
  surface: "#0D1425",
  card: "#111827",
  border: "#1E293B",
  accent1: "#38BDF8",
  accent2: "#A78BFA",
  text: "#F1F5F9",
  muted: "#64748B",
};

function Badge({ children, color }) {
  return (
    <span
      style={{ backgroundColor: color + "22", color, border: `1px solid ${color}44` }}
      className="text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap"
    >
      {children}
    </span>
  );
}

function InfoRow({ label, value, color }) {
  return (
    <div>
      <span style={{ color }} className="font-semibold text-xs uppercase tracking-wide">{label}: </span>
      <span style={{ color: palette.text }} className="text-xs">{value}</span>
    </div>
  );
}

function ModelTypeCard({ model }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{ backgroundColor: palette.card, borderColor: expanded ? model.color + "66" : palette.border }}
      className="border rounded-xl p-4 cursor-pointer transition-all select-none"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{model.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 style={{ color: model.color }} className="font-bold text-base leading-tight">{model.name}</h3>
          <p style={{ color: palette.muted }} className="text-xs mt-0.5">{model.subtitle}</p>
          <div className="flex gap-1.5 mt-2 flex-wrap">
            <Badge color={model.color}>{model.params}</Badge>
            <Badge color={model.color}>{model.examples.split(",")[0].trim()}</Badge>
          </div>
        </div>
        <span style={{ color: palette.muted }} className="text-lg mt-1">{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div className="mt-4 space-y-3 text-sm border-t pt-4" style={{ borderColor: palette.border }}>
          <InfoRow label="Architecture" value={model.architecture} color={model.color} />
          <InfoRow label="Training Data" value={model.trainingData} color={model.color} />
          <InfoRow label="How It's Built" value={model.howBuilt} color={model.color} />
          <InfoRow label="Constraints" value={model.constraints} color={model.color} />
          <InfoRow label="Examples" value={model.examples} color={model.color} />
          <div style={{ backgroundColor: model.color + "15", borderLeft: `3px solid ${model.color}` }} className="px-3 py-2 rounded-r-lg">
            <span style={{ color: model.color }} className="font-semibold text-xs">KEY TRAIT: </span>
            <span style={{ color: palette.text }} className="text-xs">{model.keyTrait}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function TrainingStep({ step, index, total }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="relative">
      {index < total - 1 && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5" style={{ backgroundColor: palette.border }} />
      )}
      <div className="relative z-10">
        <div onClick={() => setOpen(!open)} className="flex items-start gap-4 cursor-pointer group">
          <div
            style={{ backgroundColor: step.color + "22", border: `2px solid ${step.color}`, color: step.color }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-105"
          >
            {step.icon}
          </div>
          <div className="flex-1 pt-1">
            <div className="flex items-center gap-2">
              <span style={{ color: step.color }} className="text-xs font-bold tracking-widest">{step.step}</span>
              <h3 style={{ color: palette.text }} className="font-bold text-base">{step.title}</h3>
              <span style={{ color: palette.muted }} className="ml-auto">{open ? "▲" : "▼"}</span>
            </div>
            <p style={{ color: palette.muted }} className="text-sm mt-1">{step.description}</p>
          </div>
        </div>
        {open && (
          <div className="ml-16 mt-3 mb-6">
            <div style={{ backgroundColor: palette.card, borderLeft: `3px solid ${step.color}` }} className="rounded-r-xl p-4">
              <p style={{ color: palette.text }} className="text-sm mb-3">{step.detail}</p>
              <div className="flex flex-wrap gap-1.5">
                {step.dataTypes.map((d, i) => (
                  <span key={i} style={{ backgroundColor: step.color + "15", color: step.color, border: `1px solid ${step.color}33` }}
                    className="text-xs px-2 py-1 rounded-full">{d}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatbotCard({ bot }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ backgroundColor: palette.card, borderColor: open ? bot.color + "88" : palette.border }}
      className="border rounded-2xl p-5 cursor-pointer transition-all select-none"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div style={{ backgroundColor: bot.color + "22", border: `2px solid ${bot.color}55` }}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">{bot.flag}</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 style={{ color: bot.color }} className="font-extrabold text-lg">{bot.name}</h3>
              {bot.openSource && <Badge color="#34D399">Open Source</Badge>}
            </div>
            <p style={{ color: palette.muted }} className="text-xs">{bot.maker} · {bot.latestModel}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="flex gap-1 flex-wrap justify-end">
            {bot.realTimeSearch && <Badge color="#38BDF8">🔍 Search</Badge>}
            {bot.multimodal && <Badge color="#A78BFA">👁️ Vision</Badge>}
            {bot.reasoning && <Badge color="#FB923C">🤔 Reasoning</Badge>}
          </div>
          <span style={{ color: palette.muted }} className="text-lg">{open ? "▲" : "▼"}</span>
        </div>
      </div>
      <div style={{ backgroundColor: bot.color + "10", borderColor: bot.color + "33" }} className="border rounded-lg px-3 py-2 mt-3">
        <p style={{ color: palette.text }} className="text-xs">{bot.uniqueTrait}</p>
      </div>
      {open && (
        <div className="mt-4 space-y-3 border-t pt-4 text-sm" style={{ borderColor: palette.border }}>
          <InfoRow label="Architecture" value={bot.architecture} color={bot.color} />
          <InfoRow label="Training Data" value={bot.trainingData} color={bot.color} />
          <InfoRow label="Safety Approach" value={bot.safetyApproach} color={bot.color} />
          <InfoRow label="Context Window" value={bot.contextWindow} color={bot.color} />
          <InfoRow label="Access / Pricing" value={bot.accessModel} color={bot.color} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <p style={{ color: "#34D399" }} className="text-xs font-bold uppercase tracking-wide mb-2">✅ Strengths</p>
              {bot.strengths.map((s, i) => <p key={i} style={{ color: palette.text }} className="text-xs mb-1">• {s}</p>)}
            </div>
            <div>
              <p style={{ color: "#F87171" }} className="text-xs font-bold uppercase tracking-wide mb-2">⚠️ Weaknesses</p>
              {bot.weaknesses.map((w, i) => <p key={i} style={{ color: palette.text }} className="text-xs mb-1">• {w}</p>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ComparisonTable() {
  const models = ["chatgpt","claude","gemini","grok","perplexity","deepseek","meta","copilot","mistral","qwen"];
  const labels = { chatgpt:"ChatGPT",claude:"Claude",gemini:"Gemini",grok:"Grok",perplexity:"Perplexity",deepseek:"DeepSeek",meta:"Meta AI",copilot:"Copilot",mistral:"Mistral",qwen:"Qwen" };
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: palette.border }}>
      <table className="min-w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: palette.surface }}>
            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest sticky left-0"
              style={{ color: palette.muted, minWidth: 140, backgroundColor: palette.surface }}>Feature</th>
            {models.map(m => (
              <th key={m} className="px-3 py-3 text-center text-xs font-bold" style={{ color: palette.accent1, minWidth: 90 }}>{labels[m]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisons.map((row, ri) => (
            <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? palette.card : palette.surface + "88", borderTop: `1px solid ${palette.border}` }}>
              <td className="px-4 py-3 font-semibold text-xs sticky left-0"
                style={{ color: palette.text, backgroundColor: ri % 2 === 0 ? palette.card : palette.surface }}>{row.feature}</td>
              {models.map(m => <td key={m} className="px-3 py-3 text-center text-sm">{row[m]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "12 AI Model Types", icon: "🗂️" },
    { label: "How They're Built", icon: "⚙️" },
    { label: "10 Major Chatbots", icon: "💬" },
    { label: "Side-by-Side", icon: "📊" },
  ];

  return (
    <div style={{ backgroundColor: palette.bg, color: palette.text, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #070B14 0%, #0D1425 40%, #130D22 100%)" }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #38BDF8 0%, transparent 40%), radial-gradient(circle at 80% 70%, #A78BFA 0%, transparent 40%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ backgroundColor: "#38BDF822", border: "1px solid #38BDF844", color: "#38BDF8" }}>
            🌍 Complete AI Landscape · June 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ background: "linear-gradient(90deg, #38BDF8, #A78BFA, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            The Complete Picture of AI Models
          </h1>
          <p style={{ color: palette.muted }} className="text-base max-w-2xl mx-auto">
            Every major type of AI model, how they're built, what data they eat, how they're constrained — and a deep dive into every major AI chatbot in existence.
          </p>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[["12","Model Types"],["10","Major Chatbots"],["6","Training Stages"],["4+","Trillion Tokens"]].map(([n,l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black" style={{ color: "#38BDF8" }}>{n}</div>
                <div className="text-xs" style={{ color: palette.muted }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="sticky top-0 z-20 border-b" style={{ backgroundColor: palette.bg + "EE", backdropFilter: "blur(12px)", borderColor: palette.border }}>
        <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{ color: activeTab === i ? palette.accent1 : palette.muted, borderBottom: activeTab === i ? `2px solid ${palette.accent1}` : "2px solid transparent" }}
              className="flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap transition-colors hover:text-white">
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">

        {activeTab === 0 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black mb-1" style={{ color: palette.text }}>12 Types of AI Models</h2>
              <p style={{ color: palette.muted }} className="text-sm">AI isn't one thing — it's a family of very different architectures. Click any card to expand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {modelTypes.map(m => <ModelTypeCard key={m.id} model={m} />)}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black mb-1" style={{ color: palette.text }}>How LLM Chatbots Are Built</h2>
              <p style={{ color: palette.muted }} className="text-sm">The 6-stage pipeline from raw internet data to a helpful, safe assistant.</p>
            </div>
            <div style={{ backgroundColor: palette.card, borderColor: palette.border }} className="border rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🏗️</span>
                <h3 className="font-bold" style={{ color: palette.accent1 }}>The Three Core Phases</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {[
                  { phase: "Pre-Training", desc: "Learn everything about language & the world from raw text", color: "#38BDF8", icon: "📚" },
                  { phase: "Fine-Tuning", desc: "Learn to behave helpfully & follow instructions", color: "#A78BFA", icon: "🎯" },
                  { phase: "Alignment", desc: "Learn human values, safety, and ethical behavior", color: "#34D399", icon: "🛡️" },
                ].map(p => (
                  <div key={p.phase} style={{ backgroundColor: p.color + "10", borderColor: p.color + "33" }} className="border rounded-xl p-3">
                    <div className="text-2xl mb-1">{p.icon}</div>
                    <div className="font-bold text-sm" style={{ color: p.color }}>{p.phase}</div>
                    <div className="text-xs mt-1" style={{ color: palette.muted }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {trainingSteps.map((step, i) => <TrainingStep key={i} step={step} index={i} total={trainingSteps.length} />)}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ backgroundColor: "#FB923C15", borderColor: "#FB923C44" }} className="border rounded-2xl p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: "#FB923C" }}>🏆 RLHF</h3>
                <p style={{ color: palette.muted }} className="text-xs mb-2 font-medium">Used by: OpenAI, Meta, Mistral, Google</p>
                <p style={{ color: palette.text }} className="text-sm">Human raters compare model outputs and pick the better one. A reward model learns these preferences, then PPO RL optimizes the LLM to score highly.</p>
                <div className="mt-3 space-y-1">
                  <p style={{ color: "#34D399" }} className="text-xs">✅ Flexible, captures nuanced preferences</p>
                  <p style={{ color: "#F87171" }} className="text-xs">⚠️ Expensive, slow, can encode rater biases</p>
                </div>
              </div>
              <div style={{ backgroundColor: "#F472B615", borderColor: "#F472B644" }} className="border rounded-2xl p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: "#F472B6" }}>⚖️ Constitutional AI</h3>
                <p style={{ color: palette.muted }} className="text-xs mb-2 font-medium">Used by: Anthropic / Claude</p>
                <p style={{ color: palette.text }} className="text-sm">A written "constitution" of ethical principles guides the model. The AI critiques its OWN outputs against these principles (RLAIF), reducing reliance on human labelers.</p>
                <div className="mt-3 space-y-1">
                  <p style={{ color: "#34D399" }} className="text-xs">✅ Scalable, transparent, auditable principles</p>
                  <p style={{ color: "#F87171" }} className="text-xs">⚠️ Constitution design requires careful human judgment</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black mb-1" style={{ color: palette.text }}>10 Major AI Chatbots — Deep Dive</h2>
              <p style={{ color: palette.muted }} className="text-sm">Every significant AI chatbot, how it's made, what makes it unique. Click any card to expand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chatbots.map(bot => <ChatbotCard key={bot.id} bot={bot} />)}
            </div>
            <div className="mt-6 border rounded-2xl p-5" style={{ borderColor: palette.border, backgroundColor: palette.card }}>
              <h3 className="font-bold text-base mb-3" style={{ color: palette.accent2 }}>🌟 Other Notable Models Worth Knowing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {[
                  { name: "Cohere Command R+", desc: "Enterprise-focused RAG model; best-in-class for enterprise search and document retrieval", flag: "🇨🇦" },
                  { name: "Phi-4 (Microsoft)", desc: "Tiny but mighty — 14B parameter model that punches above its weight. Great for edge/local deployment", flag: "🇺🇸" },
                  { name: "NVIDIA Nemotron", desc: "Enterprise-grade model optimized for NVIDIA hardware; strong in scientific domains", flag: "🇺🇸" },
                  { name: "Falcon (TII)", desc: "UAE's open-source LLM from Technology Innovation Institute; strong multilingual Arab-world focus", flag: "🇦🇪" },
                  { name: "HuggingChat", desc: "Open-source hub — run any open model (LLaMA, Mistral, Qwen) in a ChatGPT-like interface", flag: "🌍" },
                  { name: "Yi (01.AI)", desc: "Chinese open-source model by Kai-Fu Lee's company; strong bilingual Chinese-English capabilities", flag: "🇨🇳" },
                ].map(item => (
                  <div key={item.name} style={{ backgroundColor: palette.surface, borderColor: palette.border }} className="border rounded-lg p-3">
                    <span className="font-bold text-xs" style={{ color: palette.accent1 }}>{item.flag} {item.name}</span>
                    <p style={{ color: palette.muted }} className="text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black mb-1" style={{ color: palette.text }}>Side-by-Side Comparison</h2>
              <p style={{ color: palette.muted }} className="text-sm">Key feature comparison across all 10 major chatbot models. Scroll horizontally.</p>
            </div>
            <ComparisonTable />
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4" style={{ color: palette.text }}>🎯 Which AI to Use for What</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {useCaseGuide.map(item => (
                  <div key={item.use} style={{ backgroundColor: palette.card, borderLeft: `3px solid ${item.color}` }} className="rounded-r-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: palette.muted }}>{item.use}</p>
                    <p className="font-bold text-sm" style={{ color: item.color }}>→ {item.winner}</p>
                    <p className="text-xs mt-0.5" style={{ color: palette.muted }}>{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6 mt-4 border-t" style={{ borderColor: palette.border }}>
        <p className="text-xs text-center" style={{ color: palette.muted }}>
          Data current as of June 2026 · AI models evolve rapidly — capabilities, pricing, and availability may change
        </p>
      </div>
    </div>
  );
}
