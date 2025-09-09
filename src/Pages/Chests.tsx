interface ChestData {
  name: string;
  description: string;
  drops: { name: string; use: string; image: string | null }[];
}

const chestsData: ChestData[] = [
  {
    name: "Common Chest",
    description: "The most common chest, the first most will find. Visually, it is a small, cubic, wooden box with metal corner bumps and a tiny lock, it is also outlined by a black outline to help players find it. It can be found around the map near the Campfire.",
    drops: [
      {
        name: "Bandage",
        use: "Can be used to revive players and heals 50 health.",
        image: null
      },
      {
        name: "Good Sack",
        use: "Can store up to 15 items (17 with the Scavenger Class).",
        image: null
      },
      {
        name: "Good Axe",
        use: "Takes 5 hits to chop a tree.",
        image: null
      },
      {
        name: "Old Flashlight",
        use: "The Old Flashlight creates light and stuns The Deer, but must be recharged by standing near the Campfire or contacting Fireflies. It has 50% max capacity.",
        image: null
      },
      {
        name: "Spear",
        use: "Deal more damage and has more range than other melee weapons.",
        image: null
      },
      {
        name: "Revolver + Revolver Ammo",
        use: "Ranged weapon. Can be used to kill Entities from a distance.",
        image: null
      },
      {
        name: "Fuel Canister",
        use: "The Fuel Canister can be used to fuel the Campfire or to refuel the Flamethrower.",
        image: null
      },
      {
        name: "Flower Seeds",
        use: "Flower Seeds grow Flowers throughout the map a day after they are planted.",
        image: null
      }
    ]
  },
  {
    name: "Good Chest",
    description: "Second most common chest. Visually, the Good Chest has a cylindrical lid instead of the flat one the Common Chest has. It can be found in the Campfire.",
    drops: [
      {
        name: "Leather Body",
        use: "The Leather Body reduces damage players receive.",
        image: null
      },
      {
        name: "Fuel Canister",
        use: "The Fuel Canister can be used to fuel the Campfire or to refuel the Flamethrower.",
        image: null
      },
      {
        name: "Spear",
        use: "Deal more damage and has more range than other melee weapons.",
        image: null
      },
      {
        name: "Revolver + Revolver Ammo",
        use: "Ranged weapon. Can be used to kill Entities from a distance.",
        image: null
      },
      {
        name: "Bandage",
        use: "The Bandage heals the player for 50 health. It can also be used to revive players.",
        image: null
      },
      {
        name: "Good Sack",
        use: "Can store up to 15 items (17 with the Scavenger Class).",
        image: null
      },
      {
        name: "Good Axe",
        use: "Takes 5 hits to chop a tree.",
        image: null
      },
      {
        name: "Berry Seeds",
        use: "Berry Seeds grow Berries throughout the map a day after they are planted.",
        image: null
      },
      {
        name: "(1) Diamond",
        use: "An item that is used as currency in the lobby. Diamonds can be used to buy different Classes to help you through your run.",
        image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/f/f2/Diamond_InGame.png/revision/latest?cb=20250901093040"
      }
    ]
  },
  // Note: Fetched data truncated at "Good Chest". Add remaining chest types (e.g., Great Chest) from the wiki.
];

const Chests: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Chests</h1>
      <p>Chests are small storage containers that are located around the map and have items that the player can use...</p>
      {chestsData.map((chest, index) => (
        <section key={index}>
          <h2>{chest.name}</h2>
          <p>{chest.description}</p>
          <table>
            <thead><tr><th>Name</th><th>Use</th><th>Image</th></tr></thead>
            <tbody>
              {chest.drops.map((drop, i) => (
                <tr key={i}><td>{drop.name}</td><td>{drop.use}</td><td>{drop.image ? <img src={drop.image} alt={drop.name} width="50" /> : 'N/A'}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export default Chests;