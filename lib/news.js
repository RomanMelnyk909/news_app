export const mockNews = [
  {
    id: "news-1",
    title: "The Rise of AI Robots in Everyday Life",
    excerpt:
      "Artificial intelligence is no longer confined to research labs. Robots powered by advanced AI are entering homes, hospitals, and public spaces at an unprecedented pace.",
    body: "From robotic assistants in hospitals to autonomous delivery bots on city streets, AI-powered machines are becoming a fixture of modern life. Researchers at leading universities are reporting breakthroughs in natural language understanding and physical dexterity that were considered decades away just five years ago. The implications for the workforce, privacy, and human connection are profound — and the debate is only beginning.",
    category: "Technology",
    date: "Apr 30, 2026",
    image: "/images/news/ai-robot.jpg",
  },
  {
    id: "news-2",
    title: "Beavers Are Reshaping Wetland Ecosystems",
    excerpt:
      "Scientists find that beaver activity is restoring waterways and boosting biodiversity across North America and Europe in ways conservationists never expected.",
    body: "Once hunted nearly to extinction for their pelts, beavers are now being celebrated as nature's own engineers. Their dams slow water flow, raise the water table, and create rich wetland habitats that support hundreds of species. New research published in the journal Nature Ecology shows that regions with reintroduced beaver populations have seen a 40% increase in aquatic biodiversity within just a decade.",
    category: "Science",
    date: "Apr 28, 2026",
    image: "/images/news/beaver.jpg",
  },
  {
    id: "news-3",
    title: "Cooking Together: The New Couples' Therapy",
    excerpt:
      "Relationship counselors are recommending shared cooking as a powerful tool for communication, trust-building, and deepening emotional connection between partners.",
    body: "Therapists have long known that shared rituals strengthen relationships, but a growing body of research now points specifically to cooking as one of the most effective. Couples who prepare meals together report higher levels of satisfaction and lower rates of conflict. The process — negotiating tasks, tolerating mess, and celebrating a shared result — mirrors the very skills that make relationships last.",
    category: "Lifestyle",
    date: "Apr 27, 2026",
    image: "/images/news/couple-cooking.jpg",
  },
  {
    id: "news-4",
    title: "Trail Hiking Sees Record Growth Post-Pandemic",
    excerpt:
      "National parks report a sustained surge in hiking enthusiasts, with younger generations leading the movement back to nature and off-grid adventure.",
    body: "The pandemic pushed millions outdoors, and they never fully came back inside. National park visitor numbers have held at record highs for three consecutive years, with the 18–34 age group accounting for the largest share of new hikers. Gear sales are booming, trail apps are logging millions of users, and small towns near popular trailheads are experiencing unexpected economic revivals.",
    category: "Travel",
    date: "Apr 25, 2026",
    image: "/images/news/hiking.jpg",
  },
  {
    id: "news-5",
    title: "Stunning Landscapes Endangered by Climate Shift",
    excerpt:
      "Photographers and geologists are documenting dramatic changes to iconic natural landscapes as rising temperatures and shifting rainfall patterns alter terrain.",
    body: "Glaciers that have defined mountain skylines for thousands of years are retreating at rates that shock even veteran glaciologists. Coral reefs that took centuries to build are bleaching in a single summer. Documentary photographers and earth scientists are now collaborating on urgent archival projects — racing to capture what exists today before it is gone, and to make the scale of change visible to the public.",
    category: "Environment",
    date: "Apr 23, 2026",
    image: "/images/news/landscape.jpg",
  },
];

export function getNewsById(id) {
  return mockNews.find((item) => item.id === id) ?? null;
}
