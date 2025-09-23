interface ItemData {
  item: string;
  uses: string;
  sources: string;
  image: string;
}

const sacks: ItemData[] = [
  {
    item: "Old Sack",
    uses: "Store up to 5 items (7 with Scavenger).",
    sources: "Spawn in game.",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/ [placeholder—add from wiki]"
  },
  // ... (add all from tool , e.g., Good Sack, Infernal Sack, Giant Sack)
];

const axes: ItemData[] = [
  {
    item: "Old Axe",
    uses: "13 hits to destroy tree.",
    sources: "Spawn in game.",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/ [placeholder]"
  },
  // ... (full list: Good Axe, Ice Axe, Strong Axe, Chainsaw, Admin Axe)
];

// Add arrays for rods, lightSources, weapons, ranged, armor, food, seeds, fuel, misc similarly from wiki.

const Items: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Items</h1>
      <p>Core to survival—consume, craft, or fight with them. Pro Tip: Upgrade sacks early for more inventory.</p>
      <section>
        <h2>Sacks</h2>
        <table>
          <thead><tr><th>Item</th><th>Use(s)</th><th>Source(s)</th><th>Image</th></tr></thead>
          <tbody>
            {sacks.map((item, i) => (
              <tr key={i}><td>{item.item}</td><td>{item.uses}</td><td>{item.sources}</td><td><img src={item.image} alt={item.item} width="50" loading="lazy" /></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      // ... (add sections for Axes, Rods, etc.)
    </div>
  );
};

export default Items;