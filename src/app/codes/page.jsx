import { CODES } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Codes (Fall Harvest 2026) — All Active Codes",
  description: "All active Grow a Garden 2 codes with Garden Valley and Fall Harvest rewards: TEAMGREENBEAN, WATERYOPLANTS, REMEMBERTODRINKWATER and FREESEED. How to redeem codes in-game.",
};
export default function Codes() { return (<div className="wrap">
  <h1>Grow a Garden 2 Codes</h1>
  <p>Codes are special inputs that grant exclusive rewards. Open the <b>settings menu (top left)</b>, type the code into the textbox — it must match exactly — and press <b>"Claim"</b>.</p>
  <table><thead><tr><th>Code</th><th>Garden Valley reward</th><th>Fall Harvest reward</th><th>Requirements</th></tr></thead>
  <tbody>{CODES.map(c => (<tr key={c.code}>
    <td><code className="k">{c.code}</code></td><td>{c.rewardGV}</td><td>{c.rewardFH}</td><td>{c.req}</td>
  </tr>))}</tbody></table>
  <div className="fact"><b>Tip:</b> codes are case-sensitive. If a code fails, double-check spelling and that the event column matches your current server.</div>
  <p className="note">Source: community wiki, Sep 2026. Codes rotate with events — bookmark this page.</p>
  <ul className="links">
    <li>→ What seeds are inside packs? <a href="/crops/">Crops &amp; Seeds</a></li>
    <li>→ Spend rewards wisely: <a href="/gear/">Gear Shop guide</a></li>
  </ul>
</div>); }
