import "./globals.css";

const NAV = [
  ["/codes/", "Codes"], ["/pets/", "Pets"], ["/mutations/", "Mutations"],
  ["/weather/", "Weather"], ["/eggs/", "Eggs"], ["/crops/", "Crops & Seeds"],
  ["/gear/", "Gear Shop"], ["/guilds/", "Guilds"], ["/guide/", "Guide"],
];

export const metadata = {
  metadataBase: new URL("https://outhsics.github.io/gag2guide"),
  title: { default: "Grow a Garden 2 Guide — Codes, Pets, Mutations & More | GAG2 Guide", template: "%s | GAG2 Guide" },
  description: "Grow a Garden 2 (Roblox) player guide: active codes, pet hatch odds, mutation mechanics, weather cycles, eggs, crops and money-making tips. Updated for the Fall Harvest event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site"><div className="wrap">
          <nav className="nav">
            <a className="logo" href="/">🌱 GAG2<span>Guide</span></a>
            {NAV.map(([href, label]) => <a className="item" key={href} href={href}>{label}</a>)}
          </nav>
        </div></header>
        <main>{children}</main>
        <footer className="site"><div className="wrap">
          GAG2Guide — an unofficial fan-made Grow a Garden 2 wiki &amp; guide. Not affiliated with Roblox or the Grow a Garden 2 team. Data from the community wiki (Sep 2026).
        </div></footer>
      </body>
    </html>
  );
}
