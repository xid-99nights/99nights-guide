interface LocationData {
  location: string;
  totalItems: string;
  chests: string;
  entities: string;
  biome: string;
  image: string;
}

const areas: LocationData[] = [
  { location: "Ranger Camp", totalItems: "2-3", chests: "0-1", entities: "N/A", biome: "The Forest", image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/b/b4/RangersCampNew.png/revision/latest?cb=20250817131439" },
  // ... all
];
const structures: LocationData[] = [
  { location: "Small Shed", totalItems: "1", chests: "N/A", entities: "N/A", biome: "The Forest", image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/1e/TinyShackTransparent.png/revision/latest?cb=20250728072036" },
  // ... all
];

const Locations: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Locations</h1>
      <p>Locations, also known as Structures, are the main source of Items in 99 Nights in the Forest...</p>
      <section>
        <h2>Areas</h2>
        <table>
          <thead><tr><th>Location</th><th>Total Items</th><th>Chests</th><th>Entities</th><th>Biome</th><th>Image</th></tr></thead>
          <tbody>
            {areas.map((loc, i) => (
              <tr key={i}><td>{loc.location}</td><td>{loc.totalItems}</td><td>{loc.chests}</td><td>{loc.entities}</td><td>{loc.biome}</td><td><img src={loc.image} alt={loc.location} width="50" /></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Structures</h2>
        <table>
          <thead><tr><th>Location</th><th>Total Items</th><th>Chests</th><th>Entities</th><th>Biome</th><th>Image</th></tr></thead>
          <tbody>
            {structures.map((loc, i) => (
              <tr key={i}><td>{loc.location}</td><td>{loc.totalItems}</td><td>{loc.chests}</td><td>{loc.entities}</td><td>{loc.biome}</td><td><img src={loc.image} alt={loc.location} width="50" /></td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Locations;