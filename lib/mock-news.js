export const mockNews = [
  {
    id: "news-1",
    slug: "ai-robots-everyday-life",
    title: "The Rise of AI Robots in Everyday Life",
    excerpt:
      "Artificial intelligence is no longer confined to research labs. Robots powered by advanced AI are entering homes, hospitals, and public spaces at an unprecedented pace.",
    body: "From robotic assistants in hospitals to autonomous delivery bots on city streets, AI-powered machines are becoming a fixture of modern life. Researchers at leading universities are reporting breakthroughs in natural language understanding and physical dexterity that were considered decades away just five years ago. The implications for the workforce, privacy, and human connection are profound — and the debate is only beginning.",
    category: "Technology",
    date: "2026-04-30",
    image: "/images/news/ai-robot.jpg",
  },
  {
    id: "news-2",
    slug: "beavers-reshaping-wetland-ecosystems",
    title: "Beavers Are Reshaping Wetland Ecosystems",
    excerpt:
      "Scientists find that beaver activity is restoring waterways and boosting biodiversity across North America and Europe in ways conservationists never expected.",
    body: "Once hunted nearly to extinction for their pelts, beavers are now being celebrated as nature's own engineers. Their dams slow water flow, raise the water table, and create rich wetland habitats that support hundreds of species. New research published in the journal Nature Ecology shows that regions with reintroduced beaver populations have seen a 40% increase in aquatic biodiversity within just a decade.",
    category: "Science",
    date: "2026-04-28",
    image: "/images/news/beaver.jpg",
  },
  {
    id: "news-3",
    slug: "cooking-together-couples-therapy",
    title: "Cooking Together: The New Couples' Therapy",
    excerpt:
      "Relationship counselors are recommending shared cooking as a powerful tool for communication, trust-building, and deepening emotional connection between partners.",
    body: "Therapists have long known that shared rituals strengthen relationships, but a growing body of research now points specifically to cooking as one of the most effective. Couples who prepare meals together report higher levels of satisfaction and lower rates of conflict. The process — negotiating tasks, tolerating mess, and celebrating a shared result — mirrors the very skills that make relationships last.",
    category: "Lifestyle",
    date: "2026-04-27",
    image: "/images/news/couple-cooking.jpg",
  },
  {
    id: "news-4",
    slug: "trail-hiking-record-growth",
    title: "Trail Hiking Sees Record Growth Post-Pandemic",
    excerpt:
      "National parks report a sustained surge in hiking enthusiasts, with younger generations leading the movement back to nature and off-grid adventure.",
    body: "The pandemic pushed millions outdoors, and they never fully came back inside. National park visitor numbers have held at record highs for three consecutive years, with the 18–34 age group accounting for the largest share of new hikers. Gear sales are booming, trail apps are logging millions of users, and small towns near popular trailheads are experiencing unexpected economic revivals.",
    category: "Travel",
    date: "2026-04-25",
    image: "/images/news/hiking.jpg",
  },
  {
    id: "news-5",
    slug: "landscapes-endangered-climate-shift",
    title: "Stunning Landscapes Endangered by Climate Shift",
    excerpt:
      "Photographers and geologists are documenting dramatic changes to iconic natural landscapes as rising temperatures and shifting rainfall patterns alter terrain.",
    body: "Glaciers that have defined mountain skylines for thousands of years are retreating at rates that shock even veteran glaciologists. Coral reefs that took centuries to build are bleaching in a single summer. Documentary photographers and earth scientists are now collaborating on urgent archival projects — racing to capture what exists today before it is gone, and to make the scale of change visible to the public.",
    category: "Environment",
    date: "2026-04-23",
    image: "/images/news/landscape.jpg",
  },
  {
    id: "news-6",
    slug: "deep-sea-species-discovered",
    title: "Scientists Discover Dozens of New Deep-Sea Species",
    excerpt:
      "An international research expedition to the Pacific Ocean floor has returned with footage of creatures never seen before by human eyes.",
    body: "Using next-generation submersibles equipped with high-resolution cameras and robotic sampling arms, a team of marine biologists descended over 6,000 metres into the Pacific. What they found exceeded all expectations: bioluminescent jellyfish with no known relatives, a species of isopod nearly a metre long, and coral formations that challenge existing models of deep-sea ecosystems. The findings are set to reshape our understanding of life at extreme depths.",
    category: "Science",
    date: "2025-11-14",
    image: "/images/news/deep-sea.jpg",
  },
  {
    id: "news-7",
    slug: "solar-energy-milestone-2024",
    title: "Solar Energy Hits Global Milestone",
    excerpt:
      "For the first time in history, solar power accounted for more than 10% of worldwide electricity generation over a full calendar year.",
    body: "Industry analysts confirmed that 2024 marked a turning point for renewable energy: solar panels now cover enough surface area to power over one billion homes. The surge has been driven by dramatic cost reductions, government incentives, and a wave of large-scale installations across India, China, and the European Union. Critics caution that storage infrastructure must keep pace, but proponents call the milestone a clear signal of an irreversible energy transition.",
    category: "Technology",
    date: "2024-03-03",
    image: "/images/news/solar-energy.jpg",
  },
  {
    id: "news-8",
    slug: "ancient-library-uncovered-egypt",
    title: "Ancient Library Uncovered Beneath Egyptian Desert",
    excerpt:
      "Archaeologists working outside Alexandria have unearthed a sealed chamber containing thousands of papyrus scrolls dating back over two millennia.",
    body: "The discovery, made during routine excavation work ahead of a construction project, has sent shockwaves through the archaeological community. Preliminary analysis suggests the scrolls contain texts from the Ptolemaic period — some potentially predating any known surviving copies. Conservationists are working around the clock in a climate-controlled field lab to stabilise the fragile documents before they can be transported for further study. Scholars are already calling it the most significant literary find of the century.",
    category: "History",
    date: "2023-06-22",
    image: "/images/news/ancient-library.jpg",
  },
];

export function getNewsBySlug(slug) {
  return mockNews.find((item) => item.slug === slug) ?? null;
}

export function getLatestNews(count = 3) {
  return mockNews.slice(0, count);
}
