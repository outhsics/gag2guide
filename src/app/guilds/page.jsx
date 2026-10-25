import { SITE } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Guilds — Creation, Roles, Slots & Weekly Contests",
  description: "Grow a Garden 2 guilds explained: create via Gilbert's Guild Stand (99 Robux), join free by invite, 50-member cap, slot upgrade costs, Owner/Elder/Member roles, and the weekly competition rotation (Highest Kg, Cash Crop, Pet Safari and more).",
};
export default function Guilds() { return (<div className="wrap">
  <h1>Guilds</h1>
  <p>Guilds are a core feature in Grow a Garden 2 — team up, progress together, climb the leaderboards and earn exclusive rewards. Guilds are managed through the NPC <b>Gilbert</b> at the <b>Guild Stand</b>, right next to the Sell Stand and Props Shop in the center of the map.</p>

  <h2>Create or join</h2>
  <div className="fact"><b>Creating</b> a guild costs <b>99 Robux</b>. Joining one is <b>free</b> — you just need an invite. Invites are accepted or declined through your <b>Mailbox</b>.</div>
  <table><thead><tr><th>Field</th><th>Rules</th></tr></thead><tbody>
    <tr><td><b>Name</b></td><td>3–24 characters: letters, numbers, spaces, underscores, dashes, apostrophes</td></tr>
    <tr><td><b>Tag</b></td><td>2–5 characters, letters and numbers only</td></tr>
    <tr><td><b>Description</b></td><td>1–200 characters</td></tr>
  </tbody></table>

  <h2>Member slots (max 50)</h2>
  <p>A new guild starts with 20 slots. Extra slots are purchased one tier at a time:</p>
  <table><thead><tr><th>Upgrade to</th><th>Price</th><th>Cumulative</th></tr></thead><tbody>
    <tr><td>25</td><td>37 Robux</td><td>37 Robux</td></tr>
    <tr><td>30</td><td>79 Robux</td><td>116 Robux</td></tr>
    <tr><td>35</td><td>189 Robux</td><td>305 Robux</td></tr>
    <tr><td>40</td><td>279 Robux</td><td>584 Robux</td></tr>
    <tr><td>45</td><td>399 Robux</td><td>973 Robux</td></tr>
    <tr><td>50</td><td>499 Robux</td><td>1,472 Robux</td></tr>
  </tbody></table>

  <h2>Roles</h2>
  <table><thead><tr><th>Role</th><th>Limit</th><th>Permissions</th></tr></thead><tbody>
    <tr><td><b>Owner</b></td><td>1</td><td>Full management: edit settings, promote/demote Elders, kick members, disband</td></tr>
    <tr><td><b>Elder</b></td><td>5</td><td>Invite new players to the guild</td></tr>
    <tr><td><b>Member</b></td><td>Slot cap</td><td>Standard participant</td></tr>
  </tbody></table>
  <p>Guilds also have a <b>Chat Tag</b> shown next to member names and a shared <b>Guild Feed</b>.</p>

  <h2>Weekly competitions</h2>
  <p>Each week features a rotating guild contest:</p>
  <ul>
    <li><b>Week 1 · Highest Kg</b> — harvest the highest-kg fruit.</li>
    <li><b>Week 2 · Cash Crop</b> — sell your inventory for the most Sheckles.</li>
    <li><b>Week 3 · Biggest Carrot</b> — heaviest carrot wins; gold mutations count ×2, rainbow ×2.5.</li>
    <li><b>Week 4 · Big Spender</b> — every Sheckle you spend = 1 point.</li>
    <li><b>Week 5 · Tallest Plant</b> — grow the tallest plant!</li>
    <li><b>Week 6 · Pet Safari</b> — tame wild pets: Common 5 pts, Uncommon 15, Legendary 25, Mythic 40, Super 500. Big ×3, Mega ×9, Rainbow ×3 — bonuses stack.</li>
    <li><b>Week 7 · Leaf Rush</b> — sell Fall Harvest inventory for the most Leaves.</li>
  </ul>
  <div className="fact"><b>Tip:</b> mutation bonuses stack with pet-variant bonuses — time your harvests with <a href="/mutations/">mutations</a> and <a href="/weather/">moon events</a> before the contest week ends.</div>
  <ul className="links">
    <li>→ Team up first: <a href="/pets/">best starter pets</a> · <a href="/eggs/">egg odds</a></li>
    <li>→ Earn more Sheckles: <a href="/guide/">beginner money guide</a></li>
  </ul>
</div>); }
