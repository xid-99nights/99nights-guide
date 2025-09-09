interface LocationData {
  location: string;
  totalItems: string;
  chests: string;
  entities: string;
  biome: string;
  image: string;
}

const areas: LocationData[] = [
  {
    location: "Ranger Camp",
    totalItems: "2-3",
    chests: "0-1",
    entities: "N/A",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/b/b4/RangersCampNew.png/revision/latest?cb=20250817131439"
  },
  {
    location: "Fresh Pond",
    totalItems: "N/A",
    chests: "N/A",
    entities: "Frog",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/3e/BasicLakes.png/revision/latest?cb=20250816050308"
  },
  {
    location: "Fresh Pond",
    totalItems: "N/A",
    chests: "N/A",
    entities: "Frog",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/f/f4/DirtyLakes.png/revision/latest?cb=20250816180413"
  },
  {
    location: "Bone Pond",
    totalItems: "N/A",
    chests: "N/A",
    entities: "Frog",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e9/BoneLakes.png/revision/latest?cb=20250817052051"
  },
  {
    location: "Cold Pond",
    totalItems: "N/A",
    chests: "N/A",
    entities: "N/A",
    biome: "Snow Biome",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/ed/FreezingLakes.png/revision/latest?cb=20250817063812"
  },
  {
    location: "Large Cabin",
    totalItems: "TBA",
    chests: "0-1",
    entities: "Wolf",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/21/Large_Cabin_Render.png/revision/latest?cb=20250707123707"
  },
  {
    location: "Wooden Dock",
    totalItems: "TBA",
    chests: "0-1",
    entities: "N/A",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/d/df/WoodenDockTransparent.png/revision/latest?cb=20250731034331"
  },
  {
    location: "Fishing Hut",
    totalItems: "11",
    chests: "N/A",
    entities: "N/A",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/b/b4/Fishing_Hut.png/revision/latest?cb=20250815165940"
  },
  // Note: Fetched data truncated. Add remaining areas from the wiki.
];

const structures: LocationData[] = [
  {
    location: "Small Shed",
    totalItems: "1",
    chests: "N/A",
    entities: "N/A",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/1e/TinyShackTransparent.png/revision/latest?cb=20250728072036"
  },
  {
    location: "Large Shed",
    totalItems: "2",
    chests: "N/A",
    entities: "N/A",
    biome: "The Forest",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/4a/BigShackTransparent.png/revision/latest?cb=20250728072036"
  },
  // Note: Fetched data truncated. Add remaining structures from the wiki.
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