import { PET_VARIANTS, PET_ODDS_TIP } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Pets — Variants, Spawns & Best Passives",
  description: "Grow a Garden 2 pets explained: Big (x2) and Mega (x3) size variants, Rainbow (x1.25) ability boost, map spawn timers and how to get pets from eggs or Robux.",
};
export default function Pets() { return (<div className="wrap">
  <h1>Pets</h1>
  <p>Pets are companions that provide passive abilities and bonuses to your garden. Get them by hatching <a href="/eggs/">eggs</a>, buying with Robux, receiving gifts, or grabbing map spawns.</p>
  <div className="fact">{PET_ODDS_TIP}</div>
  <h2>Variant system</h2>
  <p>Every hatch rolls two independent axes: <b>size</b> (Big / Mega) and <b>Rainbow</b>. A pet can be both at once — e.g. a Rainbow Mega.</p>
  <table><thead><tr><th>Variant</th><th>Effect</th></tr></thead><tbody>
    {PET_VARIANTS.map(v => (<tr key={v.name}><td><b>{v.name}</b></td><td>{v.effect}</td></tr>))}
  </tbody></table>
  <h2>Which pets matter</h2>
  <ul>
    <li><b>Unicorn</b> & <b>Golden Dragonfly</b> — passively multiply your crops' base <a href="/mutations/">mutation</a> chances. The economy pets.</li>
    <li><b>Frog</b> / <b>Bunny</b> / <b>Owl</b> — the workhorses from a <a href="/eggs/">Common Egg</a> (~22% / 22% / 19% each).</li>
  </ul>
  <p>See full hatch tables on the <a href="/eggs/">Eggs page</a>.</p>
</div>); }
