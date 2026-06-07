// Core data structures for podcast landing-page content.

export interface Speaker {
  name: string;
  title: string;
  topic: string;
  avatar: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Sarah Chen",
    title: "VP of AI Research @ Nexus Corp",
    topic: "Neural Ranking for Conversational Search",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1100&fit=crop&q=80",
  },
  {
    name: "David Rodriguez",
    title: "Head of Growth @ Aero Dynamics",
    topic: "Measuring Machine Learning Search Impact",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1100&fit=crop&q=80",
  },
  {
    name: "Kenji Tanaka",
    title: "Principal Architect @ DataOps Global",
    topic: "The Entity-based Discovery Engine",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1100&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    title: "CIO @ FinShift",
    topic: "Trust and Authority in AI Recommendations",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1100&fit=crop&q=80",
  },
  {
    name: "Marcus Lee",
    title: "CTO @ Vantage Labs",
    topic: "Retrieval-Augmented Brand Memory",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1100&fit=crop&q=80",
  },
  {
    name: "Amara Okafor",
    title: "Founder @ Beacon AI",
    topic: "Designing for Zero-Click Discovery",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1100&fit=crop&q=80",
  },
];
