interface ClassData {
  image: string;
  name: string;
  price: number;
  starterTools: string;
  level1Perk: string;
  level2Perk: string;
  level3Perk: string;
}

const classesData: ClassData[] = [
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a3/Camperclass.png/revision/latest?cb=20250726043432",
    name: "Camper",
    price: 10,
    starterTools: "https://99-nights-in-the-forest.fandom.com/wiki/Flashlights#Old_Flashlight",
    level1Perk: "+10% reduced hunger drain",
    level2Perk: "+ Increased visibility at nightRequirements Food Cooked: 0/75 Logs Burned: 0/200",
    level3Perk: "+ Spawn with a [Stew](/wiki/Stew)Requirements Food Cooked: 0/150 Logs Burned: 0/350"
  },
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a1/Scavengerclass.png/revision/latest?cb=20250726043517",
    name: "Scavenger",
    price: 25,
    starterTools: "",
    level1Perk: "+ 2 sack space",
    level2Perk: "+ Open chests 20% fasterRequirements Scrap Scrapped: 0/450 Studs Travelled: 0/2500",
    level3Perk: "+ Chance to get scrap as a bonus drop from chestsRequirements Scrap Scrapped: 0/1000 Studs Travelled: 0/10000"
  },
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a5/Basedefenderclass.png/revision/latest?cb=20250905003959",
    name: "Base Defender",
    price: 40,
    starterTools: "https://99-nights-in-the-forest.fandom.com/wiki/Barbed_Wire_Blueprint",
    level1Perk: "+ Starts with 2 defense blueprints",
    level2Perk: "+ Defenses can be upgraded/upgraded durabilityRequirements Build defenses: 0/60 Get kills with defenses: 0/80",
    level3Perk: "+ Defenses you place deal higher damageRequirements Build defenses: 0/150 Get kills with defenses: 0/200"
  },
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/e/e8/Medicclass.png/revision/latest?cb=20250726045426",
    name: "Medic",
    price: 40,
    starterTools: "https://99-nights-in-the-forest.fandom.com/wiki/Bandage",
    level1Perk: "+ 5x faster revives",
    level2Perk: "+ Improved revive on others, restores more health and hungerRequirements Find Medical Supplies: 0/30 Revive Players: 0/25",
    level3Perk: "+ One of your bandages upgrade to a MedkitRequirements Find Medical Supplies: 0/50 Revive Players: 0/40"
  },
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/c/c7/Cookclass.png/revision/latest?cb=20250726045514",
    name: "Cook",
    price: 40,
    starterTools: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/59/ChefStarterItem.png/revision/latest?cb=20250708151726",
    level1Perk: "+ Seasoned food restores more hunger",
    level2Perk: "+ The Crockpot cooks 20% faster Requirements Meat Cooked: 0/200 Stews Cooked: 0/50",
    level3Perk: "+ 25% chance to make a [Hearty Stew](/wiki/Hearty_stew) Requirements Meat Cooked: 0/400 Stews Cooked: 0/200"
  },
  {
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/9c/Hunterclass.png/revision/latest?cb=20250726045624",
    name: "Hunter",
    price: 40,
    starterTools: "",
    level1Perk: "+ Increased damage to animals",
    level2Perk: "+ Chance to get double pelt drops from animalsRequirements Animals Killed: 0/50 Pelts Traded: 0/30",
    level3Perk: "+ Chance to get triple pelt drops from animalsRequirements Animals Killed: 0/150 Pelts Traded: 0/100"
  },
  // Note: The fetched data was truncated at "Hunter". Add the remaining 17 classes from the wiki manually if needed, following the same structure.
];

const Classes: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Classes</h1>
      <p>Classes are a gameplay system in 99 Nights in the Forest that give players unique perks, starter items, and progression paths. As of July 25th, 2025, there are 23 available Classes.</p>
      <table className="class-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price (Diamonds)</th>
            <th>Starter Tools</th>
            <th>Level 1 Perk</th>
            <th>Level 2 Perk</th>
            <th>Level 3 Perk</th>
          </tr>
        </thead>
        <tbody>
          {classesData.map((cls, index) => (
            <tr key={index}>
              <td><img src={cls.image} alt={cls.name} width="50" /></td>
              <td>{cls.name}</td>
              <td>{cls.price}</td>
              <td>{cls.starterTools}</td>
              <td>{cls.level1Perk}</td>
              <td>{cls.level2Perk}</td>
              <td>{cls.level3Perk}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <h2>Talents</h2>
        <p>Talents are random perks. Cost: 60 Diamonds to unlock, 30 to reroll.</p>
      </section>
    </div>
  );
};

export default Classes;
