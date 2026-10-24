import { MUTATION_FACTS, NAMED_MUTATIONS } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Mutations — How the Multiplier Works",
  description: "Grow a Garden 2 mutation mechanics: one mutation per crop, base 1% harvest chance, guaranteed Gold/Rainbow seed mutations, weather-locked tiers like Frozen and Blood Moon lines.",
};
export default function Mutations() { return (<div className="wrap">
  <h1>Mutations</h1>
  <p>Mutations are visual transformations that significantly increase a crop's selling price. Final value = base price × size scale × mutation multiplier.</p>
  <h2>Named mutations in game</h2>
  <p>{NAMED_MUTATIONS.map(m => <code className="k" key={m} style={{marginRight:8}}>{m}</code>)}</p>
  <h2>How to get them</h2>
  {MUTATION_FACTS.map(f => <div className="fact" key={f.q}><b>{f.q}.</b> {f.a}</div>)}
  <h2>Price math, briefly</h2>
  <p>For <b>single-harvest crops</b> the mutation bonus is reduced: <code className="k">effective = 1 + (raw − 1) × 0.15</code>. Multi-harvest crops keep the full multiplier — long-run plots win on mutation value.</p>
  <ul className="links">
    <li>→ Stack odds with <a href="/pets/">Unicorn & Golden Dragonfly</a></li>
    <li>→ Roll during events: <a href="/weather/">Weather & Moons</a></li>
  </ul>
</div>); }
