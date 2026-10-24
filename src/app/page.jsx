import Link from "next/link";
import { CODES } from "../data/content";

const SECTIONS = [
  ["/codes/", "Active Codes", "Every working code with Garden Valley & Fall Harvest rewards, plus how to redeem."],
  ["/pets/", "Pets", "Hatch odds, Big / Mega / Rainbow variants, and which passives are worth running."],
  ["/mutations/", "Mutations", "The 1% rule, Gold & Rainbow seeds, and weather-locked high tiers."],
  ["/weather/", "Weather & Moons", "Gold / Rainbow / Blood / Mega moon odds and what to do during each."],
  ["/eggs/", "Eggs", "Every egg's pet table — from Common Egg's 22% Frog to 0.22% Unicorn."],
  ["/crops/", "Crops & Seeds", "Seed packs, crop values and what to plant for profit."],
  ["/gear/", "Gear Shop", "Watering cans, sprayers and tools that actually pay off."],
  ["/guide/", "Beginner Guide", "First-hour roadmap and how to make money fast in Grow a Garden 2."],
];

export default function Home() {
  return (<div className="wrap">
    <section className="hero">
      <h1>Grow a Garden 2 <em>Guide</em></h1>
      <p>Codes, pets, mutations, weather and money-making — a fast, no-fluff reference for Roblox's Grow a Garden 2. Built for players, updated for the Fall Harvest event.</p>
    </section>

    <h2 className="sec">🔥 Active Codes right now</h2>
    <div className="grid">
      {CODES.slice(0, 4).map(c => (
        <div className="card" key={c.code}>
          <h3><code className="k">{c.code}</code></h3>
          <p>{c.rewardGV}</p>
          <p className="note">Fall Harvest: {c.rewardFH}{c.req !== "None" ? ` · ${c.req}` : ""}</p>
        </div>
      ))}
    </div>
    <p style={{ marginTop: 12 }}><Link href="/codes/">See all codes & how to redeem →</Link></p>

    <h2 className="sec">📚 Explore the guide</h2>
    <div className="grid">
      {SECTIONS.map(([href, t, d]) => (
        <Link href={href} key={href} style={{ textDecoration: "none" }}>
          <div className="card" style={{ height: "100%" }}>
            <h3 style={{ color: "var(--green)" }}>{t}</h3>
            <p>{d}</p>
          </div>
        </Link>
      ))}
    </div>

    <h2 className="sec">⚡ Quick answers</h2>
    <div className="fact"><b>How do I redeem codes?</b> Settings menu (top left) → type the code exactly → press "Claim".</div>
    <div className="fact"><b>Best early pets?</b> <Link href="/eggs/">Common Egg</Link> pulls: Frog & Bunny (~22% each) are reliable; Unicorn and Golden Dragonfly (0.22% each) boost mutation odds.</div>
    <div className="fact"><b>How do crops get valuable?</b> <Link href="/mutations/">Mutations</Link> multiply sell price — base 1% on harvest, guaranteed from Gold / Rainbow seeds.</div>
  </div>);
}
