// 站点内容数据 — 全部来自 03-关卡3-素材/wiki/ 的 Fandom 抓取（2026-09-22），不编造
export const SITE = "https://outhsics.github.io/gag2guide";

export const CODES = [
  { code: "TEAMGREENBEAN", rewardGV: "3x Green Bean Seed", rewardFH: "3x Maple Green Bean Seed", req: "None" },
  { code: "WATERYOPLANTS", rewardGV: "10x Common Watering Can", rewardFH: "10x Syrup Watering Can", req: "None" },
  { code: "REMEMBERTODRINKWATER", rewardGV: "1x Common Watering Can", rewardFH: "1x Syrup Watering Can", req: "None" },
  { code: "FREESEED", rewardGV: "3x Uncommon Seed Pack", rewardFH: "3x Uncommon Fall Seed Pack", req: "Invite 3 friends to the server" },
];

export const MUTATION_FACTS = [
  { q: "How do mutations work?", a: "Each crop carries exactly one mutation at a time. Final sell value = base price × size scale × mutation multiplier. Standard crops have a base 1% chance to mutate on harvest." },
  { q: "Guaranteed mutations", a: "Planting Gold Seeds or Rainbow Seeds guarantees a mutation on the grown crop — the reliable way to farm high-value produce." },
  { q: "Weather-locked mutations", a: "High-tier mutations only occur during global weather cycles such as Snowfall, Lightning storms or Blood Moons. Harvest during the event to roll the mutation." },
  { q: "Pets that boost mutation odds", a: "Pets like the Unicorn and Golden Dragonfly passively multiply the base mutation chances of crops in your garden." },
];

export const NAMED_MUTATIONS = ["Gold","Rainbow","Aurora","Frozen","Amber","Veil","Electric","Starstruck","Chakra","Ignited"];

export const PET_VARIANTS = [
  { name: "Big", effect: "Doubles the pet's size and boosts its passive by 2x. Rolls per hatch." },
  { name: "Mega", effect: "Quadruples the size and boosts the passive by 3x. Very rare. Can combine with Rainbow." },
  { name: "Rainbow", effect: "Flat x1.25 multiplier on the pet's base ability, rolled independently from size (0.5% on standard eggs, 5% on exclusive event eggs)." },
];

export const COMMON_EGG_PETS = [
  { pet: "Frog", chance: "22.47%" }, { pet: "Bunny", chance: "22.47%" }, { pet: "Owl", chance: "18.73%" },
  { pet: "Deer", chance: "14.98%" }, { pet: "Turtle", chance: "13.11%" }, { pet: "Robin", chance: "3.37%" },
  { pet: "Bee", chance: "3.37%" }, { pet: "Unicorn", chance: "0.22%" }, { pet: "Golden Dragonfly", chance: "0.22%" },
  { pet: "Monkey", chance: "0.22%" }, { pet: "Bear", chance: "0.22%" },
];

export const WEATHER = {
  moons: [
    { name: "Normal", chance: "77%" }, { name: "Gold Moon", chance: "13%" },
    { name: "Rainbow Moon", chance: "6%" }, { name: "Blood Moon", chance: "2%" },
    { name: "Mega Moon", chance: "2%" }, { name: "Harvest Moon (Fall event)", chance: "3.85%" },
  ],
  notes: [
    "The fewer people in the server, the lower the chance a gold/rainbow seed will spawn.",
    "Certain high-tier mutations (Snowfall, Lightning, Blood Moon lines) can only be rolled during their weather event.",
  ],
};

export const PET_ODDS_TIP = "Pets also spawn randomly around the map with a countdown timer — buy them with Sheckles before the timer runs out.";
