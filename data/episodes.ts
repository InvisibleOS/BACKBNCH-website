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
  ["#d4620a", "#ff7b24"], // orange
  ["#7a1fa2", "#c057e8"], // purple
  ["#0a6e5c", "#1fd4ac"], // teal
  ["#b21d45", "#ff4d7d"], // pink/red
  ["#1a4fb0", "#4d8cff"]  // blue
];