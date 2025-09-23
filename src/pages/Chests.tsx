const Chests: React.FC = () => {
  const commonDrops = [
    { picture: "https://99-nights-in-the-forest.fandom.com/wiki/Bandage", name: "Bandage", use: "Can be used to revive players and heals 50 health." },
    // ... all from fetched
  ];
  // Add arrays for goodDrops, legendaryDrops, etc.

  return (
    <div className="page-container">
      <h1>Chests</h1>
      <p>Chests are small storage containers that are located around the map and have items that the player can use...</p>
      <section>
        <h2>Common Chest</h2>
        <p>The most common chest...</p>
        <table>
          <thead><tr><th>Picture</th><th>Name</th><th>Use</th></tr></thead>
          <tbody>
            {commonDrops.map((drop, i) => (
              <tr key={i}><td><a href={drop.picture}>Link</a></td><td>{drop.name}</td><td>{drop.use}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* Add sections for Good, Legendary, Gold, Ruby, Cold, Ice, Frog */}
    </div>
  );
};

export default Chests;