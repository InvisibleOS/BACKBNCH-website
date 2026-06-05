// Core data structures for podcast landing-page content.

export interface Speaker {
  name: string;
  title: string;
  topic: string;
  avatar: string;
}

export interface Metric {
  title: string;
  desc: string;
  metric: string;
  change: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Sarah Chen",
    title: "VP of AI Research @ Nexus Corp",
    topic: "Neural Ranking for Conversational Search",
    avatar: "/speakers/sarah.jpg",
  },
  {
    name: "David Rodriguez",
    title: "Head of Growth @ Aero Dynamics",
    topic: "Measuring Machine Learning Search Impact",
    avatar: "/speakers/david.jpg",
  },
  {
    name: "Kenji Tanaka",
    title: "Principal Architect @ DataOps Global",
    topic: "The Entity-based Discovery Engine",
    avatar: "/speakers/kenji.jpg",
  },
  {
    name: "Priya Sharma",
    title: "CIO @ FinShift",
    topic: "Trust and Authority in AI Recommendations",
    avatar: "/speakers/priya.jpg",
  },
  {
    name: "Marcus Lee",
    title: "CTO @ Vantage Labs",
    topic: "Retrieval-Augmented Brand Memory",
    avatar: "/speakers/marcus.jpg",
  },
  {
    name: "Amara Okafor",
    title: "Founder @ Beacon AI",
    topic: "Designing for Zero-Click Discovery",
    avatar: "/speakers/amara.jpg",
  },
];

export const METRICS: Metric[] = [
  { title: "GEO Index score", desc: "Visibility metric across major AI models.", metric: "4.9★", change: "+140%" },
  { title: "Engine Citations", desc: "Frequency cited in generated answers.", metric: "50K+", change: "+25%" },
  { title: "Conversation Volume", desc: "Customer queries referencing guests.", metric: "21M", change: "+12%" },
  { title: "Recommendation Rate", desc: "Probability AI chose customer over competitor.", metric: "92%", change: "+5%" },
];

export const PLAYBOOK: string[] = [
  "Synthesize brand context into machine-readable knowledge graphs.",
  "Engineering conversational data points for natural dialogue referencing.",
  "Capturing long-form operator expertise to feed neural embeddings.",
  "Mapping technical incompetence signals and fixing visibility gaps.",
];
