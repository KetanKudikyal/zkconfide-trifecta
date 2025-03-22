// Market data configuration
const markets = [
  {
    id: "1",
    title: "Bitcoin Up or Down on March 22?",
    slug: "bitcoin-up-or-down-on-march-22",
    imageUrl:
      "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fbitcoin-up-or-down-on-march-13-ppoEj3rBtGBr.jpg&w=256&q=100",
    yesPercentage: 19,
    percentageAsAngle: 70,
    volume: "428k",
  },
  {
    id: "2",
    title: "Ethereum to exceed $5,000 in 2024?",
    slug: "ethereum-to-exceed-5000-in-2024",
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    yesPercentage: 42,
    percentageAsAngle: 150,
    volume: "356k",
  },
  {
    id: "3",
    title: "Trump to win the 2024 Election?",
    slug: "trump-to-win-2024-election",
    imageUrl:
      "https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Ftrump-47.png&w=600&q=75",
    yesPercentage: 61,
    percentageAsAngle: 220,
    volume: "1.2M",
  },
  {
    id: "4",
    title: "Federal Reserve rate cut in July 2024?",
    slug: "federal-reserve-rate-cut-july-2024",
    imageUrl: "https://placehold.co/100x100/002868/FFFFFF?text=FED",
    yesPercentage: 74,
    percentageAsAngle: 265,
    volume: "892k",
  },
  {
    id: "5",
    title: "Will AI cause mass unemployment by 2026?",
    slug: "ai-cause-mass-unemployment-by-2026",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
    yesPercentage: 27,
    percentageAsAngle: 97,
    volume: "512k",
  },
  {
    id: "6",
    title: "Tesla to reach $1,000 stock price in 2024?",
    slug: "tesla-stock-1000-in-2024",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    yesPercentage: 35,
    percentageAsAngle: 126,
    volume: "723k",
  },
  {
    id: "7",
    title: "SpaceX Starship to reach orbit in June 2024?",
    slug: "spacex-starship-orbit-june-2024",
    imageUrl: "https://placehold.co/100x100/002868/FFFFFF?text=Spacex",
    yesPercentage: 81,
    percentageAsAngle: 292,
    volume: "675k",
  },
  {
    id: "8",
    title: "China to invade Taiwan by 2025?",
    slug: "china-invade-taiwan-by-2025",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197375.png",
    yesPercentage: 12,
    percentageAsAngle: 43,
    volume: "954k",
  },
  {
    id: "9",
    title: "Russia-Ukraine war to end in 2024?",
    slug: "russia-ukraine-war-end-2024",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/630/630691.png",
    yesPercentage: 29,
    percentageAsAngle: 104,
    volume: "632k",
  },
  {
    id: "10",
    title: "Apple to release AR glasses in 2024?",
    slug: "apple-ar-glasses-2024",
    imageUrl: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    yesPercentage: 47,
    percentageAsAngle: 169,
    volume: "421k",
  },
];

export const getMarketBySlug = (slug: string) => {
  return markets.find((market) => market.slug === slug);
};

export default markets;
