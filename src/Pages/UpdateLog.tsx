
interface UpdateData {
  name: string;
  date: string;
  content: string;
  description: string;
}

const updates: UpdateData[] = 
{ name: "Meteor Shower", 
date: "27/9/2025", 
content:`☆ Locations Meteor craters Meteor Anvil/ Forge/ Tool Workshop
☆ Entities Meteor Crab
☆ Items Meteor Shard Gold Shard Obsidiron Ore Scalding Obsidiron Ingot Obsidiron ingot Morsel? Obsidiron Hammer Obsidiron Body Obsidiron Boots Armor Trim Axe Trim
☆ Badges "Astrogeology" Badge "Exogeology" Badge "Seismology" Badge "Astrophysics" Badge
☆ Chests Obsidiron Chest`,
description: "Meteors are falling from the sky, perhaps they can be interacted with?"},

{ name: "Volcanic Biome Part 2",
date: "20/9/2025",
content: `☆ Entities The Ram Cultist King Lava Mammoth
☆ Items Infernal Crossbow King Cultist's Mace Scorpion Shell Sacrifice Totem Cultist King's Antler Fire Bandit
☆ Badges "Usurpation" Badge`,
description: "In the depths of the volcanic biome, something is stirring. The creature is rumored to have a rage that cannot be controlled. Anyone smart will stay far away from it. Even the Deer and the Owl won't go near it"},

{ name: "Volcanic Biome Part 1",
date: "13/9/2025",
content:` 
- Removed Snow Biome.
☆ Items Infernal Sword Wildfire Potion Infernal Sack Crossbow
☆ Entities Scorpion
☆ Locations Volcanic Biome
☆ Chests Infernal Chest Hot Chest
☆ Badges "Resourcefulness" Badge "Pest Control" Badge "Metaworking" Badge "Volcanology" Badge`,
description: "Introducing the new biome: the Volcanic biome. Find new challenges and the volcano! The biome will replace the snow biome for the next two weeks while we introduce it, and then it will be random."},

{ name: "Decoration Update",
date: "6/9/2025",
content: `
☆ Items Paint Brush
☆ Entities Furniture Trader improvement
☆ Other 60+ furnitures You can now rotate structures on blueprint`,
description: "Time to decorate your base! We're adding a bunch of new stuff to help personalize your base - Loads of new furniture items - The furniture trader now offers more items, and higher stock"},

{ name: "2x Gem Weekend + Classes MK II",
date: "30/8/2025",
content:` 
☆ Classes Support Gambler Chef Big Game Hunter "Talents!" system
☆ Badges "Supporting" Badge "Cooking" Badge "Engineering" Badge "Hunter" Badge`,
description: "During the weekend you will receive 2x gems from chests and for reaching day 50 and 100. 2x Gems WON'T apply to purchases or badges. We also are releasing a few new classes to buy with your gems and the new 'Talents' system that allows you to upgrade your favorite class even further using Gems."},

{ name: "Frog Invasion",
date: "22/8/2025",
content: `☆ Entities Frogs Green Frog Blue Frog Purple Frog Frog King
☆ Items Frog Key Frog boots Poison Spear Blow Dart Poison Armour
☆ Classes Poison Master
☆ Chests Frog Chest
☆ Badges "Beastmaster" Badge`,
description: "Frogs have invaded the forest, rumour is they're gathering near a whirlpool? A bunch of different species of frogs to fight off, new poisonous frog armour, Poisoned Spears, Poison Darts, Frog boots, and a new class—the Poison Master."},

{ name: "The Fishing Update",
date: "15/8/2025",
content: `☆ Items Fishing Rod Boot Types of Fish Trident
☆ Classes Fisherman Pyromaniac
☆ Badges "Baiting" Badge "Fishing" Badge "Trophy Fishing" Badge "Deep Sea Fishing" Badge`,
description: "Grab some fishing rods, it's time to catch food for your team."},

{name: "New Creature",
date: "8/8/2025",
content: `☆ Entities Owl Bird Watcher
☆ Classes Base Defender Berserker`,
description: "Feathers have been spotted all around the snow biome. I don't know what is out there, but it's something even the Deer won't go near. (Part 2 of Snow Biome event)"},

{ name: "Snow Biome Update",
date: "1/8/2025",
content: `☆ Locations Snow Biome
☆ Entities Mammoth Polar Bear Arctic Fox
☆ Items Arctic Fox Pelt Polar Bear Pelt Ribs Cooked Ribs Mammoth Tusk Ice Axe Ice Sword Earmuffs Snowball Frozen Shuriken Beanie Polar Bear Hat Arctic Fox Hat
☆ Chests Ice Chest Cold Chest
☆ Badges "Knitting" Badge "Ice Sculpting" Badge "Wilderness Hunting" Badge "Reconstruction" Badge`,
description: "A new frozen land has arrived… the Snow Biome! With it comes brand new structures, dangerous enemies, fresh weapons, armor, and items, plus new hats to help fight the cold. 4 Limited-time badges—unlock exclusive items before they vanish. (Part 1 of Snow Biome event)"},

{ name: "Crafting Update",
date: "25/7/2025",
content: `☆ Locations Snow Biomes (Before the Snow Biome Update) Mineshaft
☆ Entities Polar Bear
☆ Classes Farmer Blacksmith
☆ Items Watering Can (Farmer class) Gem of the Forest New Vegetables: Corn Pumpkin
☆ Crafting Bunny Trap (Workbench level 1) Freezer (workbench level 2) Log Wall (workbench level 2) Radar (workbench level 3) Crafting Table level 5 Gem of the forest fragment`,
description: "Some new things for you to craft. Gem of the Forest, combine 4 pieces to craft top-tier structures. New Crafting Tier, build powerful new end-game structures. (new craftable mid and early-game structures too!) New Crops, grow a fresh assortment of produce in your allotments."},

{ name: "Alien Invasion 2025",date: "18/7/2025",content:` ☆ Locations Alien Mothership Broken UFO
☆ Entities Aliens Elite Aliens
☆ Classes Alien Cyborg
☆ Items Raygun Laser Cannon Laser Sword UFO Junk UFO Component UFO Scrap Alien Armor Meat? Sandwich
☆ Chests Alien Chest
☆ Badges "Xenology" Badge`,
description: "Aliens have invaded the forest, however they're surprisingly bad pilots. Find the crash sites, fight the invaders and loot their technology. Some of the UFOs' teleporters seem to still be operational? Beam up to the mothership and fight the invasion at the source."},

{ name: "Furniture Update",date: "11/7/2025",content: `☆ Locations Workshop
☆ Entities Furniture Trader ⚬ Furnitures Furniture Shop Signposts Tables Chairs Pillows Flowers Benches Rugs Lights See more…
☆ Classes Decorator
☆ Items Mossy Coins (currency),description: "Find the furniture trader to find cosmetic items to decorate your base with. Find the workshop to construct rare items."},{name: "Cultist Stronghold Update",date: "4/7/2025",content: ☆ Locations Cultist Stronghold
☆ Entities Juggernaut Cultist
☆ Classes Hunter Brawler
☆ Chests Diamond Chest
☆ Badges "Infiltration" Badge`,
description: "Clear to earn diamonds."},

{ name: "Classes Update",date: "27/6/2025",content: `☆ Classes Camper Scavenger Medic Cook Ranger Lumberjack Assassin More..`,
description: "Buy classes with diamonds."},

{ name: "Balance Update",date: "22/8/2025",content:` 
☆ Items Poison Spear Blow Dart Poison Armour
☆ Classes Poison Master
☆ Badges "Beastmaster" Badge`,
description: "Poison damage has been rebalanced. Spears and darts now scale with class level. Frog armor now offers better resistance against splash damage."},

{ name: "Bug Fixes & QoL",date: "5/8/2025",content: `
- Fixed blueprint rotation bug
- Improved furniture trader UI
- Reduced lag in snow biome
- Adjusted spawn rates for Polar Bear and Mammoth`,
description: "A round of bug fixes and quality-of-life improvements to smooth out gameplay and improve performance in biome-heavy areas."},

{ name: "Gem Shop Expansion",date: "29/7/2025",content: `
☆ Items Gem of the Forest Gem Fragment Gem Pack (x10)
☆ Classes Gem Collector
☆ Badges "Greed" Badge "Gemology" Badge`,
description: "The gem shop now includes new packs and fragments. A new class, Gem Collector, has been added for those who love shiny things."},

{ name: "Mini Update",date: "19/7/2025",content: `
☆ Items Campfire Kit Portable Chest
☆ Entities Wandering Trader
☆ Badges "Nomad" Badge, 
description: "A small update focused on mobility and survival. Great for players who prefer roaming over base-building." },
t: "Classes, Camper, Scavenger, Medic, Cook, Ranger, Lumberjack, Assassin"`, description: "Buy classes with diamonds." },

];
//notes
const UpdateLog: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Update Log</h1>
      <p>Track game changes. Pro Tip: Check for balance tweaks affecting strategies.</p>
      <table className="crafting-table">
        <thead>
          <tr>
            <th>Name</th>
			<th>date</th>
            <th>Content</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
			   <td>{update.date}</td>
              <td>{update.content}</td>
              <td>{update.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateLog;
