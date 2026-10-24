import { COMMON_EGG_PETS } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Eggs — Hatch Odds for Every Pet",
  description: "Grow a Garden 2 Common Egg hatch table: Frog and Bunny 22.47%, Owl 18.73%, down to Unicorn and Golden Dragonfly at 0.22%. Rainbow chances per egg (0.5% standard, 5% event).",
};
export default function Eggs() { return (<div className="wrap">
  <h1>Eggs</h1>
  <p>Eggs hatch into <a href="/pets/">pets</a>. Rarer eggs have better pet tables, and every hatch rolls the <a href="/pets/">Big / Mega / Rainbow</a> variants.</p>
  <h2>Common Egg — full pet table</h2>
  <table><thead><tr><th>Pet</th><th>Chance</th></tr></thead><tbody>
    {COMMON_EGG_PETS.map(r => (<tr key={r.pet}><td><b>{r.pet}</b></td><td>{r.chance}{["Unicorn","Golden Dragonfly","Monkey","Bear"].includes(r.pet) ? <span className="badge">top rare</span> : null}</td></tr>))}
  </tbody></table>
  <div className="fact"><b>Rainbow rolls:</b> 0.5% on standard eggs (Common / Big / Mega / Fall lines), 5% on Exclusive Harvest and Halloween eggs.</div>
  <p className="note">Also available: Fall Common/Big/Mega eggs during the Fall Harvest event, plus Exclusive Harvest / Halloween eggs.</p>
  <ul className="links">
    <li>→ What the passives do: <a href="/pets/">Pets</a></li>
    <li>→ Fund more eggs: <a href="/guide/">money-making guide</a></li>
  </ul>
</div>); }
