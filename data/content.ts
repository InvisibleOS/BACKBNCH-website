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
