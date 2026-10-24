export const metadata = {
  title: "Grow a Garden 2 Gear Shop — Sprinklers, Watering Cans & Restocks",
  description: "Grow a Garden 2 Gear Shop guide: Common Sprinkler and Common Watering Can restock odds, what each tool does, and how gear multiplies your garden's output.",
};
export default function Gear() { return (<div className="wrap">
  <h1>Gear Shop</h1>
  <p>Gear provides gardening enhancements — sprinklers, watering cans and more. The shop <b>restocks on a cycle</b> (common items like the Common Sprinkler show a ~50% restock presence, rarer gear much less), so check back between <a href="/weather/">weather events</a>.</p>
  <h2>Known gear</h2>
  <table><thead><tr><th>Gear</th><th>Rarity</th><th>What it does</th></tr></thead><tbody>
    <tr><td><b>Common Sprinkler</b></td><td>Common</td><td>Gardening enhancement — per in-game tips, sprinklers also boost <a href="/crops/">seed pack</a> luck</td></tr>
    <tr><td><b>Common Watering Can</b></td><td>Common</td><td>Waters crops; 10x from the <code className="k">WATERYOPLANTS</code> <a href="/codes/">code</a></td></tr>
    <tr><td><b>Syrup Watering Can</b></td><td>Fall Harvest</td><td>Event variant of the watering can</td></tr>
  </tbody></table>
  <div className="fact"><b>Why gear matters:</b> watering and sprinklers feed the growth curve that drives crop size — and size is a direct multiplier on sell price.</div>
  <ul className="links"><li>→ Value chain: <a href="/crops/">Crops</a> → <a href="/mutations/">Mutations</a> → profit in the <a href="/guide/">guide</a></li></ul>
</div>); }
