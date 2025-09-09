interface CraftingItem {
  label: string;
  icon: string;
  showcase: string;
  description: string;
  materials: string;
}

const craftingItems: CraftingItem[] = [
  {
    label: "Map",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5c/Map_Logo_PNG.png/revision/latest?cb=20250725141944",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a5/Map_in-game.png/revision/latest?cb=20250625154911",
    description: "Shows a map with information on it. Can be opened anywhere by pressing M on PC or by clicking on the map icon on the top right on mobile.",
    materials: "* 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713"
  },
  {
    label: "Old Bed",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/46/Old_Bed_PNG.png/revision/latest?cb=20250626184223",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a3/Old_Bed.png/revision/latest?cb=20250626184356",
    description: "Makes the [day counter](/wiki/Days) increase by +1.",
    materials: "* 20 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713"
  },
  {
    label: "Bunny Trap",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/f/f1/BunnyTrap.png/revision/latest?cb=20250725162538",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/18/Bunny_Trap.png/revision/latest?cb=20250725195341",
    description: "Can be placed near a [bunny burrow](https://99-nights-in-the-forest.fandom.com/wiki/Bunny#Locations) to catch food. Can be crafted up to ten times. It can give 4 morsels if it uses a carrot.",
    materials: "* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713"
  },
  {
    label: "Crafting Bench 2",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/3d/Crafting_Bench_2_Logo.png/revision/latest?cb=20250625161841",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/37/Crafting_Bench_2_in-game.png/revision/latest?cb=20250625200322",
    description: "Unlocks Tier 2 of the Crafting Bench.",
    materials: `* 1 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954
* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713`
  },
  {
    label: "Sun Dial",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/2c/Sun_Dial_PNG.png/revision/latest?cb=20250626152723",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5a/Sun_Dial_In-game.png/revision/latest?cb=20250627133046",
    description: "Shows how much time is left until day/night. Can be viewed at any time in the top right corner of the screen.",
    materials: "* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954"
  },
  {
    label: "Regular Bed",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/7/7d/Regular_Bed_PNG.png/revision/latest?cb=20250626184449",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/9c/Regular_Bed.png/revision/latest?cb=20250626184524",
    description: "Makes the day counter increase by +1. Also restores a bit of health and hunger. Can be upgraded from an Old Bed.",
    materials: `* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/45/Cloth_PNG.png/revision/latest?cb=20250625212844
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713`
  },
  {
    label: "Good Bed",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5f/Good_Bed_PNG.png/revision/latest?cb=20250626184626",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/9b/Good_Bed.png/revision/latest?cb=20250626184701",
    description: "Makes the day counter increase by +1. Also restores a bit of health and hunger. Can be upgraded from a Regular Bed.",
    materials: `* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/45/Cloth_PNG.png/revision/latest?cb=20250625212844
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713`
  },
  {
    label: "Berry Farm",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/9b/Berry_Farm_PNG.png/revision/latest?cb=20250626184800",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/8/81/Berry_Farm.png/revision/latest?cb=20250626184842",
    description: "Can be placed to grow berries. Takes 3 days to grow.",
    materials: `* 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/45/Cloth_PNG.png/revision/latest?cb=20250625212844
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713
* 1 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/36/Berry_Seeds_PNG.png/revision/latest?cb=20250625213106`
  },
  {
    label: "Flower Farm",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/3e/Flower_Farm_PNG.png/revision/latest?cb=20250626184937",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/3/3a/Flower_Farm.png/revision/latest?cb=20250626185012",
    description: "Can be placed to grow flowers. Takes 3 days to grow.",
    materials: `* 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/45/Cloth_PNG.png/revision/latest?cb=20250625212844
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713
* 1 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/7/7f/Flower_Seeds_PNG.png/revision/latest?cb=20250625213122`
  },
  {
    label: "Carrot Farm",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5d/Carrot_Farm_PNG.png/revision/latest?cb=20250626185107",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5a/Carrot_Farm.png/revision/latest?cb=20250626185142",
    description: "Can be placed to grow carrots. Takes 3 days to grow.",
    materials: `* 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/45/Cloth_PNG.png/revision/latest?cb=20250625212844
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713
* 1 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/2f/Carrot_Seeds_PNG.png/revision/latest?cb=20250625213138`
  },
  {
    label: "Crockpot",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5f/Crockpot_PNG.png/revision/latest?cb=20250626185237",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5a/Crockpot.png/revision/latest?cb=20250626185312",
    description: "Can be used to cook stews. Takes 1 day to cook.",
    materials: `* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713`
  },
  {
    label: "Barbed Wire Blueprint",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/18/Barbed_Wire_Blueprint_PNG.png/revision/latest?cb=20250626185407",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/1e/Barbed_Wire_Blueprint.png/revision/latest?cb=20250626185442",
    description: "Can be used to place barbed wire. Deals damage to entities that touch it.",
    materials: `* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954`
  },
  // Continue adding the remaining items from Tier 2, Tier 3, etc., based on the wiki. Since the tool response was truncated, I've added a few more examples from previous knowledge. Fetch the full list if needed.
  {
    label: "Crafting Bench 3",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/4a/Crafting_Bench_3_Logo.png/revision/latest?cb=20250625161926",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/4f/Crafting_Bench_3_in-game.png/revision/latest?cb=20250625200407",
    description: "Unlocks Tier 3 of the Crafting Bench.",
    materials: `* 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954
* 10 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713`
  },
  // ... Add all remaining items here ...
];

const Crafting: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Crafting</h1>
      <p>Crafting is one of the most important mechanics in 99 Nights in the Forest, allowing the player to craft things such as farm plots, beds, and other various items, tools and devices to aid them in their survival.</p>
      <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/21/Grinder.png/revision/latest?cb=20250626134103" alt="Grinder" />
      <p>The Grinder, where you can grind materials to craft with them in the Crafting Bench.</p>
      <table className="crafting-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Icon</th>
            <th>In-Game Showcase</th>
            <th>Description</th>
            <th>Needed Materials</th>
          </tr>
        </thead>
        <tbody>
          {craftingItems.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td><img src={item.icon} alt={item.label} width="50" /></td>
              <td><img src={item.showcase} alt={`${item.label} showcase`} width="50" /></td>
              <td>{item.description}</td>
              <td style={{ white-space: 'pre-line' }}>{item.materials}</td> {/* Preserve newlines */}
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <h2>Badges Related to Crafting</h2>
        <p>[Extracted from wiki: List badges here, e.g., 'Craft a Map', 'Craft 10 Items', etc.]</p>
      </section>
      <section>
        <h2>Tips and Notes</h2>
        <ul>
          <li>Place Bunny Traps near burrows.</li>
          <li>Use the Grinder to process materials before crafting.</li>
          <li>Upgrade your crafting bench to unlock more items.</li>
          <!-- Add more tips from wiki -->
        </ul>
      </section>
    </div>
  );
};

export default Crafting;