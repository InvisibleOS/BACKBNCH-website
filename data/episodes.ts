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
    url: "https://www.youtube.com/watch?v=0M-BfukxKCo"
  },
  {
    title: "The Dark Side of Big Fat Weddings",
    subtitle: "Zubair (Zzeeh Weddings)",
    volume: "Vol. 2",
    url: "https://www.youtube.com/watch?v=Db6xbzsP_Ro"
  },
  {
    title: "The Brutal Truth About Restaurants",
    subtitle: "Chef Viveq Pawar",
    volume: "Vol. 3",
    url: "https://www.youtube.com/watch?v=_dGCFm9rhYo"
  },
  {
    title: "Hyderabadi Currency",
    subtitle: "Rezwan Razack",
    volume: "Vol. 4",
    url: "https://www.youtube.com/watch?v=k6Elg9f-8No"
  },
  {
    title: "How Bangalore’s Nightlife Was Built",
    subtitle: "Ganesh",
    volume: "Vol. 5",
    url: "https://www.youtube.com/watch?v=OkuI_TNjaNk"
  }
];

export const CARD_GRADIENTS = [
  ["#7a2e05", "#b8500f"], // dark burnt orange
  ["#c0480a", "#ff7b24"], // classic brand orange
  ["#d4620a", "#ff9d4d"], // bright tangerine
  ["#c26a12", "#ffb066"], // warm amber orange
  ["#d98a4a", "#ffcda0"]  // pastel peach orange
];