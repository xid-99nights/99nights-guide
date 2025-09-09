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
    materials: "+ 3 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713"
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
    materials: "* 1 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954<br>* 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/69/Wood_PNG.png/revision/latest?cb=20250625212713"
  },
  {
    label: "Sun Dial",
    icon: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/2c/Sun_Dial_PNG.png/revision/latest?cb=20250626152723",
    showcase: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5a/Sun_Dial_In-game.png/revision/latest?cb=20250627133046",
    description: "Shows how much time is left until day/night. Can be viewed at any time in the top right corner of the screen.",
    materials: "- 5 https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e1/Scrap_PNG.png/revision/latest?cb=20250625212954"
  },
  {
    label: "Regular Bed",
    icon: "",
    showcase: "",
    description: "",
    materials: ""
  },
  // Note: Fetched data truncated at "Regular Bed". Add the remaining crafting items from the wiki manually.
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
              <td>{item.materials}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <h2>Badges Related to Crafting</h2>
        <p> [Add badges text from wiki]</p>
      </section>
      <section>
        <h2>Tips and Notes</h2>
        <ul>
          <li>Place Bunny Traps near burrows.</li>
      //Add more tips here
        </ul>
      </section>
    </div>
  );
};

export default Crafting;