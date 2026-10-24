import { WEATHER } from "../../data/content";
export const metadata = {
  title: "Grow a Garden 2 Weather & Moons — Gold, Rainbow, Blood Moon Odds",
  description: "Grow a Garden 2 time & weather cycle: Normal 77%, Gold Moon 13%, Rainbow Moon 6%, Blood Moon 2%, Mega Moon 2%, Harvest Moon 3.85%. What to harvest during each event.",
};
export default function Weather() { return (<div className="wrap">
  <h1>Weather &amp; Moons</h1>
  <p>The game runs a global time & weather cycle. Night moons are your window for rare seeds and high-tier <a href="/mutations/">mutations</a>.</p>
  <table><thead><tr><th>Moon / Phase</th><th>Chance</th></tr></thead><tbody>
    {WEATHER.moons.map(m => (<tr key={m.name}><td><b>{m.name}</b></td><td>{m.chance}</td></tr>))}
  </tbody></table>
  <h2>Notes from the wiki</h2>
  {WEATHER.notes.map(n => <div className="fact" key={n}>{n}</div>)}
  <p className="note">Fall Harvest event adds the Harvest Moon (~3.85%) alongside the standard moon table.</p>
  <ul className="links"><li>→ Pair events with <a href="/mutations/">weather-locked mutations</a></li></ul>
</div>); }
