const Items: React.FC = () => {
  const itemsData = {
    sacks: [
      {
        name: "Old Sack",
        use: "Can store up to 5 items (7 with the Scavenger Class).",
        source: "Spawning into the game",
        image: "https://99-nights-in-the-forest.fandom.com/wiki/Sacks"
      },
      {
        name: "Good Sack",
        use: "Can store up to 15 items (17 with the Scavenger Class).",
        source: "• Good Chests\n• Pelt Trader (first trade)",
        image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/94/Giant_sack.png/revision/latest?cb=20250710054629"
      },
      {
        name: "Giant Sack",
        use: "Can store up to 25 items (27 with the Scavenger Class).",
        source: "• Legendary Chests\n• Gold Chests\n• Pelt Trader (third trade)",
        image: "https://99-nights-in-the-forest.fandom.com/wiki/Sacks"
      }
    ],
    axes: [
      {
        name: "Old Axe",
        use: "Takes 13 hits to destroy a tree.",
        source: "Spawning into the game",
        image: "https://99-nights-in-the-forest.fandom.com/wiki/Axes#Old"
      },
      // ... Add all axes from the fetched data
    ],
    rods: [
      {
        name: "Old Rod",
        use: "Used to fish for food and other items.",
        source: "Found either at the Fishing Hut, through the Pelt Trader (second trade), or as the Fisherman Class.",
        image: "https://99-nights-in-the-forest.fandom.com/wiki/Fishing_Rod#Old"
      },
      // ... Add all rods
    ]
    // ... Add other categories: lightSources, weapons, ranged, armor, food, seeds, fuel, misc
  };

  return (
    <div className="page-container">
      <h1>Items</h1>
      <p>Items are a core part of 99 Nights in the Forest. These are usable items that players can consume as food, use as crafting materials, or burn as fuel for the Campfire.</p>
      {Object.keys(itemsData).map(category => (
        <section key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <table>
            <thead><tr><th>Name</th><th>Use(s)</th><th>Source(s)</th><th>Image</th></tr></thead>
            <tbody>
              {itemsData[category].map((item, i) => (
                <tr key={i}><td>{item.name}</td><td>{item.use}</td><td>{item.source}</td><td><img src={item.image} alt={item.name} width="50" /></td></tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export default Items;