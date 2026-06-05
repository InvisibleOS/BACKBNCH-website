export interface Episode {
  title: string;
  subtitle: string;
  volume: string;
  url: string;
}

export const EPISODES: Episode[] = [
  {
    title: "Homes for the future",
    subtitle: "John Kunnath (Habitainer)",
    volume: "Vol. 1",
    url: "https://www.youtube.com/watch?v=4"
  },
  {
    title: "The Dark Side of Big Fat Weddings",
    subtitle: "Zubair (Zzeeh Weddings)",
    volume: "Vol. 2",
    url: "https://www.youtube.com/watch?v=5"
  },
  {
    title: "The Brutal Truth About Restaurants",
    subtitle: "Chef Viveq Pawar",
    volume: "Vol. 3",
    url: "https://www.youtube.com/watch?v=6"
  },
  {
    title: "Hyderabadi Currency",
    subtitle: "Rezwan Razack",
    volume: "Vol. 4",
    url: "https://www.youtube.com/watch?v=7"
  },
  {
    title: "How Bangalore’s Nightlife Was Built",
    subtitle: "Ganesh",
    volume: "Vol. 5",
    url: "https://www.youtube.com/watch?v=8"
  }
];

export const ORANGE_GRADIENTS = [
  ["#d4620a", "#ff7b24"],
  ["#c0480a", "#e86214"],
  ["#ab3609", "#d45012"],
  ["#bd420a", "#f06c1d"],
  ["#a32f08", "#cb490f"]
];