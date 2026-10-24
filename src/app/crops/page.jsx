export const metadata = {
  title: "Grow a Garden 2 Crops & Seed Packs — What to Plant",
  description: "Grow a Garden 2 seed packs and crops: Common/Uncommon/Rare packs from website voting, Legendary from the Carrot Contest, Mythic unobtainable. How crop value is calculated.",
};
export default function Crops() { return (<div className="wrap">
  <h1>Crops &amp; Seeds</h1>
  <p><b>Seed Packs</b> are bundles of randomized seeds, from common crops to exclusive event varieties. Press <b>Skip</b> when opening to stop the rolling instantly — and per an in-game tip, sprinklers boost your luck when opening packs.</p>
  <h2>Seed pack list (Garden Valley)</h2>
  <table><thead><tr><th>Pack</th><th>How to get</th></tr></thead><tbody>
    <tr><td><b>Common Seed Pack</b></td><td>Voting on the Grow a Garden 2 website</td></tr>
    <tr><td><b>Uncommon Seed Pack</b></td><td>Voting on the website</td></tr>
    <tr><td><b>Rare Seed Pack</b></td><td>Voting on the website</td></tr>
    <tr><td><b>Legendary Seed Pack</b></td><td>Carrot Contest on the website</td></tr>
    <tr><td><b>Mythic Seed Pack</b></td><td>Currently unobtainable</td></tr>
    <tr><td><b>FREESEED code</b></td><td>3x Uncommon packs — see <a href="/codes/">Codes</a></td></tr>
  </tbody></table>
  <h2>How crop sell price works</h2>
  <div className="fact"><b>Formula:</b> base price × size scale × <a href="/mutations/">mutation</a> multiplier. Single-harvest crops get a reduced mutation bonus (1 + (raw − 1) × 0.15); multi-harvest plots keep the full value.</div>
  <div className="fact"><b>Infinite growth:</b> certain plants keep growing with a growth curve — and become watering/mutation immune at the top tier, locking in their state.</div>
  <ul className="links"><li>→ Multiply value: <a href="/mutations/">Mutations</a> · <a href="/weather/">event timing</a></li></ul>
</div>); }
