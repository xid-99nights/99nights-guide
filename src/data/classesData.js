export const classesData = [
  {
    name: "Camper",
    cost: 10,
    stars: 1,
    description: "Basic survival class with reduced hunger drain",
    image: "🏕️",
    playstyle: "Survivalist",
    difficulty: "Easy",
    starterItems: ["Flashlight"],
    guide: {
      overview: "The Camper is an excellent starting class for new players, focusing on basic survival and resource management. Its primary benefit is reduced hunger drain, allowing players to focus more on exploration and base building without constantly worrying about food. This class is ideal for learning the game's mechanics in a less stressful environment.",
      strengths: [
        "Reduced hunger drain, making food management easier.",
        "Good for learning game mechanics and exploration.",
        "Low cost, accessible for new players."
      ],
      weaknesses: [
        "Lacks combat-focused abilities.",
        "Limited utility in advanced team compositions."
      ],
      tips: [
        "Focus on gathering resources and establishing a strong base early on.",
        "Utilize the reduced hunger drain to explore further without immediate food concerns.",
        "Pair with classes that can provide combat support or advanced crafting."
      ],
      counters: [
        "High-damage enemies can quickly overwhelm a Camper.",
        "Requires strong base defenses as it lacks offensive capabilities."
      ],
      synergies: [
        "Medic: Provides healing support, allowing the Camper to focus on other tasks.",
        "Lumberjack: Ensures a steady supply of wood for base building and campfire."
      ]
    },
    levels: {
      1: { perks: ["Reduced Hunger Drain (10%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Movement Speed (5%)", "Reduced Hunger Drain (20%)"], requirements: "Survive 10 Nights" },
      3: { perks: ["Increased Inventory Space (2 slots)", "Reduced Hunger Drain (30%)"], requirements: "Survive 25 Nights" }
    }
  },
  {
    name: "Scavenger",
    cost: 25,
    stars: 2,
    description: "Extra bag space, ideal for resource gathering",
    image: "🔍",
    playstyle: "Resource Collector",
    difficulty: "Easy",
    starterItems: ["None"],
    guide: {
      overview: "The Scavenger excels at resource gathering with its increased inventory space. This class is perfect for players who enjoy exploring and collecting materials efficiently. It's a cost-effective choice for beginners looking to quickly build up their base and crafting capabilities.",
      strengths: [
        "Increased inventory space for efficient resource collection.",
        "Helps accelerate early-game progression by gathering more materials.",
        "Low cost, making it a good early investment."
      ],
      weaknesses: [
        "No inherent combat bonuses.",
        "Relies on finding good loot, which can be RNG-dependent."
      ],
      tips: [
        "Prioritize exploring areas with high resource density.",
        "Focus on collecting scrap and wood to quickly upgrade your crafting bench.",
        "Always keep an eye out for chests and rare items."
      ],
      counters: [
        "Vulnerable to early-game enemy encounters due to lack of combat perks.",
        "Can be overwhelmed if forced into combat while carrying heavy loot."
      ],
      synergies: [
        "Blacksmith: Can quickly process the Scavenger's collected materials.",
        "Base Defender: Provides protection while the Scavenger is out collecting."
      ]
    },
    levels: {
      1: { perks: ["Increased Inventory Space (2 slots)"], requirements: "Purchase Class" },
      2: { perks: ["Faster Looting Speed (15%)", "Increased Inventory Space (4 slots)"], requirements: "Collect 500 Resources" },
      3: { perks: ["Chance to find rare items (5%)", "Increased Inventory Space (6 slots)"], requirements: "Collect 1500 Resources" }
    }
  },
  {
    name: "Base Defender",
    cost: 40,
    stars: 2,
    description: "Can upgrade traps and defenses",
    image: "🛡️",
    playstyle: "Guardian",
    difficulty: "Medium",
    starterItems: ["2 Defense Blueprints"],
    guide: {
      overview: "The Base Defender is crucial for protecting your camp from the relentless attacks of cultists and other hostile entities. This class specializes in fortifying defenses and upgrading traps, making your base an impenetrable fortress. Essential for team play and long-term survival.",
      strengths: [
        "Enhanced trap and defense upgrade capabilities.",
        "Crucial for protecting the team's base.",
        "Provides a safe haven for other players."
      ],
      weaknesses: [
        "Less effective in offensive roles or away from base.",
        "Requires resources to build and maintain defenses."
      ],
      tips: [
        "Prioritize building walls and placing bear traps around your camp.",
        "Coordinate with resource gatherers to ensure a steady supply of building materials.",
        "Focus on upgrading key defensive structures first."
      ],
      counters: [
        "Can be overwhelmed by large numbers of enemies if defenses are not properly maintained.",
        "Vulnerable when forced to fight outside of prepared defenses."
      ],
      synergies: [
        "Scavenger: Provides the necessary materials for building and upgrading defenses.",
        "Lumberjack: Ensures a constant supply of wood for walls and structures."
      ]
    },
    levels: {
      1: { perks: ["Increased Trap Damage (10%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Wall Health (15%)", "Faster Trap Reload (20%)"], requirements: "Defend Base 5 Times" },
      3: { perks: ["Automatic Trap Reset", "Increased Wall Health (30%)"], requirements: "Defend Base 15 Times" }
    }
  },
  {
    name: "Medic",
    cost: 40,
    stars: 2,
    description: "Faster revival and improved recovery",
    image: "🏥",
    playstyle: "Healer/Support",
    difficulty: "Easy",
    starterItems: ["Bandage"],
    guide: {
      overview: "The Medic is an invaluable support class, especially in multiplayer. With faster revival times and improved recovery, the Medic ensures the team stays healthy and in the fight. A well-played Medic can turn the tide of difficult encounters and minimize downtime.",
      strengths: [
        "Significantly improves team survivability.",
        "Faster revival of downed teammates.",
        "Enhanced healing and recovery."
      ],
      weaknesses: [
        "Limited offensive capabilities.",
        "Can be targeted by enemies due to support role."
      ],
      tips: [
        "Stay close to your teammates, especially combat-focused classes.",
        "Prioritize reviving and healing during intense fights.",
        "Carry extra bandages and medical supplies."
      ],
      counters: [
        "Isolated Medics are vulnerable.",
        "High burst damage can negate healing efforts."
      ],
      synergies: [
        "Brawler: Keeps the Brawler alive during aggressive pushes.",
        "Ranger: Provides healing from a distance while the Ranger engages."
      ]
    },
    levels: {
      1: { perks: ["Faster Revival (15%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Healing Effectiveness (20%)", "Faster Revival (30%)"], requirements: "Heal Teammates 10 Times" },
      3: { perks: ["Area of Effect Healing (small radius)", "Faster Revival (50%)"], requirements: "Revive Teammates 10 Times" }
    }
  },
  {
    name: "Cook",
    cost: 40,
    stars: 2,
    description: "Seasoned food restores more hunger",
    image: "👨‍🍳",
    playstyle: "Provisioner",
    difficulty: "Easy",
    starterItems: ["Seasoning"],
    guide: {
      overview: "The Cook ensures the team is well-fed with seasoned food that restores more hunger. This class is essential for long-term survival, especially in multiplayer games where food consumption is higher. An advanced version, the Chef, offers even more culinary benefits.",
      strengths: [
        "Enhanced food effectiveness, reducing hunger management.",
        "Supports team's overall survivability.",
        "Can contribute to the 'Vegetarian' badge by preparing specific meals [5]."
      ],
      weaknesses: [
        "No direct combat or defensive abilities.",
        "Relies on other classes for raw food materials."
      ],
      tips: [
        "Set up a Crock Pot early to create an endless supply of stew.",
        "Coordinate with Farmers to ensure a steady supply of crops.",
        "Experiment with different food combinations to maximize hunger restoration."
      ],
      counters: [
        "Vulnerable if separated from the base or food sources.",
        "Less impactful in solo play if food is abundant."
      ],
      synergies: [
        "Farmer: Provides raw crops for cooking.",
        "Hunter: Supplies meat for various recipes."
      ]
    },
    levels: {
      1: { perks: ["Seasoned Food (10% more hunger restored)"], requirements: "Purchase Class" },
      2: { perks: ["Faster Cooking Speed (20%)", "Seasoned Food (20% more hunger restored)"], requirements: "Cook 50 Meals" },
      3: { perks: ["Chance to create 'Gourmet' meals (10%)", "Seasoned Food (30% more hunger restored)"], requirements: "Cook 150 Meals" }
    }
  },
  {
    name: "Hunter",
    cost: 40,
    stars: 2,
    description: "Increased meat drops from animals",
    image: "🏹",
    playstyle: "Tracker/Damage",
    difficulty: "Medium",
    starterItems: ["Bear Trap"],
    guide: {
      overview: "The Hunter specializes in tracking and taking down wildlife, providing increased meat drops. This class is vital for maintaining food supplies and gathering pelts for trading. With a focus on combat against creatures, the Hunter can also contribute to early-game defense.",
      strengths: [
        "Increased meat and pelt drops from animals.",
        "Effective against wildlife, contributing to food and resource supply.",
        "Starter Bear Trap aids in early defense."
      ],
      weaknesses: [
        "Less effective against cultists or The Deer.",
        "Can be vulnerable if caught by larger enemies."
      ],
      tips: [
        "Prioritize hunting rabbits and wolves for meat and pelts.",
        "Use the starter Bear Trap strategically around your base or near animal spawns.",
        "Upgrade weapons to efficiently take down tougher wildlife."
      ],
      counters: [
        "Large, aggressive enemies like Bears can be challenging without proper weapon upgrades.",
        "Ranged cultists can pose a threat if not engaged carefully."
      ],
      synergies: [
        "Cook: Benefits from the Hunter's increased meat supply.",
        "Scavenger: Can help carry the increased drops from hunting."
      ]
    },
    levels: {
      1: { perks: ["Increased Meat Drops (15%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Pelt Drops (20%)", "Faster Animal Tracking (10%)"], requirements: "Hunt 50 Animals" },
      3: { perks: ["Chance for Rare Animal Parts (5%)", "Increased Meat Drops (30%)"], requirements: "Hunt 150 Animals" }
    }
  },
  {
    name: "Decorator",
    cost: 40,
    stars: 2,
    description: "Access to furniture trader with decorative items",
    image: "🔨",
    playstyle: "Aesthetic/Base Customization",
    difficulty: "Easy",
    starterItems: ["Hammer"],
    guide: {
      overview: "The Decorator class focuses on base customization and aesthetics, gaining access to a furniture trader with a wide array of decorative items. While not directly contributing to survival in terms of combat or resources, a well-decorated base can improve morale and provide a sense of accomplishment. This class is for players who enjoy personalizing their space.",
      strengths: [
        "Access to unique decorative items for base customization.",
        "Enhances the visual appeal and personal touch of the base.",
        "Starter Hammer is useful for base management."
      ],
      weaknesses: [
        "No direct survival benefits (combat, resource, healing).",
        "Requires resources (Mossy Coins) to purchase decorative items."
      ],
      tips: [
        "Collect Mossy Coins to buy furniture from the Furniture Trader.",
        "Experiment with different layouts and designs to create a unique base.",
        "Can be a relaxing role in a team where core survival needs are met."
      ],
      counters: [
        "Low priority in early game when survival is paramount.",
        "Can be a drain on resources if not managed carefully."
      ],
      synergies: [
        "Scavenger: Can help gather resources needed for crafting or trading for decorative items.",
        "Base Defender: Provides a secure base for the Decorator to customize."
      ]
    },
    levels: {
      1: { perks: ["Access to Furniture Trader (Tier 1)"], requirements: "Purchase Class" },
      2: { perks: ["Access to Furniture Trader (Tier 2)", "Reduced Furniture Cost (10%)"], requirements: "Place 20 Decorative Items" },
      3: { perks: ["Access to Furniture Trader (Tier 3)", "Reduced Furniture Cost (20%)"], requirements: "Place 50 Decorative Items" }
    }
  },
  {
    name: "Support",
    cost: 45,
    stars: 2,
    description: "Bonds with players for mutual benefits",
    image: "🤝",
    playstyle: "Team Enhancer",
    difficulty: "Medium",
    starterItems: ["Bandage"],
    guide: {
      overview: "The Support class focuses on enhancing team performance through mutual benefits and buffs. By bonding with other players, the Support can provide various advantages, making the team more cohesive and effective. This class is ideal for players who enjoy a cooperative playstyle and want to empower their allies.",
      strengths: [
        "Provides buffs and benefits to bonded teammates.",
        "Enhances team cohesion and overall effectiveness.",
        "Starter Bandage offers immediate utility."
      ],
      weaknesses: [
        "Effectiveness is tied to team play.",
        "Limited solo combat potential."
      ],
      tips: [
        "Prioritize bonding with key combat or resource-gathering teammates.",
        "Communicate with your team to maximize the benefits of your buffs.",
        "Stay in proximity to your bonded allies to maintain effects."
      ],
      counters: [
        "Less effective in solo play or with uncoordinated teams.",
        "Can be targeted by enemies to break team synergy."
      ],
      synergies: [
        "Any combat class: Provides buffs to increase their damage or survivability.",
        "Medic: Can combine healing with buffs for a powerful support duo."
      ]
    },
    levels: {
      1: { perks: ["Bonding Aura (small stat boost to nearby allies)"], requirements: "Purchase Class" },
      2: { perks: ["Enhanced Bonding Aura (medium stat boost)", "Faster Cooldowns for Allies (5%)"], requirements: "Bond with 5 Different Players" },
      3: { perks: ["Ultimate Bonding Aura (large stat boost)", "Faster Cooldowns for Allies (10%)"], requirements: "Maintain Bond for 100 Minutes" }
    }
  },
  {
    name: "Fisher",
    cost: 50,
    stars: 2,
    description: "Fishing rod casts faster",
    image: "🎣",
    playstyle: "Food Provider",
    difficulty: "Easy",
    starterItems: ["Fishing Rod"],
    guide: {
      overview: "The Fisher class specializes in aquatic resource gathering, with a faster fishing rod cast rate. This class is excellent for providing a consistent food source and acquiring unique fish for recipes. Introduced with The Fishing Update, the Fisher adds a new dimension to resource management.",
      strengths: [
        "Faster fishing rod cast rate, increasing fish catch efficiency.",
        "Provides a reliable and renewable food source.",
        "Can acquire unique fish for advanced recipes."
      ],
      weaknesses: [
        "Tied to water sources, limiting utility in other biomes.",
        "No direct combat benefits."
      ],
      tips: [
        "Find good fishing spots early on and return to them regularly.",
        "Upgrade your fishing rod for better catches and rare fish.",
        "Coordinate with the Cook class to process your catches into meals."
      ],
      counters: [
        "Vulnerable to land-based enemies while fishing.",
        "Less effective if water sources are scarce or dangerous."
      ],
      synergies: [
        "Cook: Processes fish into meals.",
        "Scavenger: Can help carry large hauls of fish."
      ]
    },
    levels: {
      1: { perks: ["Faster Fishing Cast (15%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Chance for Rare Fish (5%)", "Faster Fishing Cast (30%)"], requirements: "Catch 50 Fish" },
      3: { perks: ["Double Fish Catch (10% chance)", "Faster Fishing Cast (50%)"], requirements: "Catch 150 Fish" }
    }
  },
  {
    name: "Gambler",
    cost: 55,
    stars: 3,
    description: "50/50 chance of upgrading/downgrading standard chests on opening it",
    image: "🎲",
    playstyle: "High Risk/High Reward",
    difficulty: "Hard",
    starterItems: ["Random Item"],
    guide: {
      overview: "The Gambler is a high-risk, high-reward class that introduces an element of chance to looting. With a 50/50 chance of upgrading or downgrading standard chests, this class can lead to incredible gains or significant losses. It's for players who enjoy unpredictability and are willing to take risks.",
      strengths: [
        "Potential for significantly better loot from chests.",
        "Adds an exciting, unpredictable element to gameplay."
      ],
      weaknesses: [
        "Risk of downgrading valuable chests.",
        "Unreliable for consistent resource acquisition."
      ],
      tips: [
        "Only open chests when you are prepared for either outcome.",
        "Consider opening less critical chests first to test your luck.",
        "Best used in conjunction with a Scavenger to maximize chest finding."
      ],
      counters: [
        "Bad luck can severely hinder progression.",
        "Not recommended for players who prefer stable resource gains."
      ],
      synergies: [
        "Scavenger: Helps locate more chests to increase chances of good rolls.",
        "Base Defender: Provides a safe place to store potentially risky loot."
      ]
    },
    levels: {
      1: { perks: ["50/50 Chest Upgrade/Downgrade"], requirements: "Purchase Class" },
      2: { perks: ["Slightly Increased Upgrade Chance (55%)", "Small chance for bonus item (5%)"], requirements: "Open 20 Chests" },
      3: { perks: ["Increased Upgrade Chance (60%)", "Medium chance for bonus item (10%)"], requirements: "Open 50 Chests" }
    }
  },
  {
    name: "Ranger",
    cost: 70,
    stars: 3,
    description: "Starts with 18 ammo, proficient with ranged weapons",
    image: "🌲",
    playstyle: "Marksman",
    difficulty: "Medium",
    starterItems: ["Flashlight", "Revolver"],
    guide: {
      overview: "The Ranger is a ranged combat specialist, starting with a significant amount of ammo and a Revolver. This class excels at engaging enemies from a distance, making it ideal for clearing paths, defending the base, and supporting melee teammates. Ammo management is key to maximizing the Ranger's effectiveness.",
      strengths: [
        "Strong ranged combat capabilities from the start.",
        "Good for clearing dangerous areas and supporting allies.",
        "Starter Revolver and ammo provide immediate offensive power."
      ],
      weaknesses: [
        "Vulnerable in close-quarters combat.",
        "Requires careful ammo management."
      ],
      tips: [
        "Maintain distance from enemies and utilize cover.",
        "Prioritize headshots for maximum damage.",
        "Coordinate with melee classes to create effective combat zones."
      ],
      counters: [
        "Fast-moving enemies that close distance quickly.",
        "Running out of ammo in critical situations."
      ],
      synergies: [
        "Brawler: The Brawler can engage enemies up close while the Ranger provides ranged support.",
        "Scavenger: Can help find additional ammo or crafting materials for bullets."
      ]
    },
    levels: {
      1: { perks: ["Starts with 18 Ammo", "Increased Ranged Damage (10%)"], requirements: "Purchase Class" },
      2: { perks: ["Faster Reload Speed (15%)", "Increased Ranged Damage (20%)"], requirements: "Deal 500 Ranged Damage" },
      3: { perks: ["Chance for Ammo Not Consumed (10%)", "Increased Ranged Damage (30%)"], requirements: "Deal 1500 Ranged Damage" }
    }
  },
  {
    name: "Lumberjack",
    cost: 70,
    stars: 3,
    description: "Bonus 1 extra log from trees",
    image: "🪓",
    playstyle: "Resource Gatherer",
    difficulty: "Easy",
    starterItems: ["Good Axe"],
    guide: {
      overview: "The Lumberjack is the ultimate wood gatherer, providing a bonus log from each tree chopped. This class is indispensable for base building, campfire maintenance, and crafting. The starter Good Axe further enhances efficiency, making the Lumberjack a cornerstone of any successful team.",
      strengths: [
        "Significantly increased wood acquisition.",
        "Essential for base building and campfire fuel.",
        "Starter Good Axe boosts early-game efficiency."
      ],
      weaknesses: [
        "Limited combat utility.",
        "Relies on finding trees, which can be dangerous."
      ],
      tips: [
        "Prioritize clearing dense forest areas for maximum wood.",
        "Replant saplings to ensure a sustainable wood supply.",
        "Coordinate with Base Defenders to secure logging areas."
      ],
      counters: [
        "Vulnerable to enemies while chopping trees.",
        "Less effective if wood is not a primary need."
      ],
      synergies: [
        "Base Defender: Provides protection while the Lumberjack gathers wood.",
        "Cook: Can use excess wood for biofuel production."
      ]
    },
    levels: {
      1: { perks: ["Bonus 1 Extra Log from Trees"], requirements: "Purchase Class" },
      2: { perks: ["Faster Tree Chopping (15%)", "Bonus 2 Extra Logs from Trees"], requirements: "Chop 100 Trees" },
      3: { perks: ["Chance for Double Log Drop (10%)", "Bonus 3 Extra Logs from Trees"], requirements: "Chop 300 Trees" }
    }
  },
  {
    name: "Farmer",
    cost: 80,
    stars: 3,
    description: "Use watering can for faster crop growth",
    image: "🌱",
    playstyle: "Agriculturist",
    difficulty: "Easy",
    starterItems: ["Watering Can"],
    guide: {
      overview: "The Farmer specializes in food production, using a watering can for faster crop growth. This class is vital for establishing a sustainable food source, especially when paired with a Crock Pot for stew production. The Farmer ensures the team's hunger needs are met, allowing others to focus on defense and exploration.",
      strengths: [
        "Accelerated crop growth for consistent food supply.",
        "Essential for long-term food sustainability.",
        "Starter Watering Can boosts early farming efficiency."
      ],
      weaknesses: [
        "No direct combat or defensive abilities.",
        "Requires farm plots and seeds to be effective."
      ],
      tips: [
        "Set up multiple farm plots early on.",
        "Prioritize growing high-yield crops.",
        "Work with the Cook to turn crops into efficient meals."
      ],
      counters: [
        "Vulnerable to base attacks if not protected.",
        "Less impactful if food is abundant from hunting."
      ],
      synergies: [
        "Cook: Processes crops into advanced meals.",
        "Base Defender: Protects farm plots from cultist raids."
      ]
    },
    levels: {
      1: { perks: ["Faster Crop Growth (15%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Crop Yield (10%)", "Faster Crop Growth (30%)"], requirements: "Harvest 100 Crops" },
      3: { perks: ["Chance for Rare Seeds (5%)", "Increased Crop Yield (20%)"], requirements: "Harvest 300 Crops" }
    }
  },
  {
    name: "Brawler",
    cost: 100,
    stars: 3,
    description: "Can't use ranged weapons but deals more damage",
    image: "👊",
    playstyle: "Melee Combatant",
    difficulty: "Hard",
    starterItems: ["Leather Body"],
    guide: {
      overview: "The Brawler is a formidable melee combatant, sacrificing ranged weapon use for significantly increased damage in close quarters. This class is for aggressive players who enjoy getting up close and personal with enemies. Proper positioning and timing are crucial for maximizing the Brawler's potential.",
      strengths: [
        "High melee damage output.",
        "Effective in close-quarters combat.",
        "Starter Leather Body provides early defense."
      ],
      weaknesses: [
        "Cannot use ranged weapons.",
        "Vulnerable to ranged enemies and kiting tactics."
      ],
      tips: [
        "Engage enemies directly, but be mindful of their attack patterns.",
        "Utilize cover and terrain to close the distance to ranged threats.",
        "Pair with a Medic for sustained combat."
      ],
      counters: [
        "Enemies with strong ranged attacks or area-of-effect abilities.",
        "Being outnumbered in open areas."
      ],
      synergies: [
        "Medic: Provides crucial healing to keep the Brawler in the fight.",
        "Ranger: Covers the Brawler from ranged threats while they engage melee."
      ]
    },
    levels: {
      1: { perks: ["Increased Melee Damage (20%)", "Cannot use Ranged Weapons"], requirements: "Purchase Class" },
      2: { perks: ["Increased Melee Damage (30%)", "Reduced Melee Damage Taken (10%)"], requirements: "Deal 750 Melee Damage" },
      3: { perks: ["Lifesteal on Melee Hits (5%)", "Increased Melee Damage (40%)"], requirements: "Deal 2000 Melee Damage" }
    }
  },
  {
    name: "Alien",
    cost: 100,
    stars: 3,
    description: "Night Sight and Alien Tech",
    image: "👽",
    playstyle: "Technological/Explorer",
    difficulty: "Medium",
    starterItems: ["RayGun"],
    guide: {
      overview: "The Alien class, introduced with the Alien Invasion update, offers unique technological advantages like Night Sight and access to Alien Tech. Starting with a RayGun, this class is excellent for exploration in dark areas and engaging enemies with advanced weaponry. It provides a distinct playstyle focused on futuristic tools.",
      strengths: [
        "Night Sight for superior visibility in darkness.",
        "Access to powerful Alien Tech and weapons.",
        "Starter RayGun provides strong early-game offense."
      ],
      weaknesses: [
        "Can be vulnerable if Alien Tech runs out of power/ammo.",
        "May require specific resources to maintain advanced gear."
      ],
      tips: [
        "Utilize Night Sight to explore dangerous areas at night.",
        "Conserve RayGun ammo for critical encounters.",
        "Seek out UFO crash sites for more Alien Tech and resources."
      ],
      counters: [
        "Enemies with EMP-like abilities or those resistant to energy weapons.",
        "Being caught without charged Alien Tech."
      ],
      synergies: [
        "Scavenger: Can help find UFO junk and components for Alien Tech.",
        "Ranger: Combines ranged firepower for overwhelming offense."
      ]
    },
    levels: {
      1: { perks: ["Night Sight", "Starts with RayGun"], requirements: "Purchase Class" },
      2: { perks: ["Increased RayGun Damage (15%)", "Reduced Alien Tech Cooldowns (10%)"], requirements: "Defeat 25 Aliens" },
      3: { perks: ["Alien Shield (small)", "Increased RayGun Damage (30%)"], requirements: "Defeat 50 Elite Aliens" }
    }
  },
  {
    name: "Berserker",
    cost: 100,
    stars: 3,
    description: "Auto-revive with low HP and hunger",
    image: "⚔️",
    playstyle: "Aggressive/Tank",
    difficulty: "Hard",
    starterItems: ["Medkit"],
    guide: {
      overview: "The Berserker is a high-risk, high-reward combat class designed for aggressive players. Its auto-revive ability with low HP and hunger allows for daring plays and sustained combat. This class thrives on the edge of danger, making it a formidable frontline fighter. The starter Medkit provides immediate recovery.",
      strengths: [
        "Auto-revive mechanism for sustained combat.",
        "High damage potential in aggressive engagements.",
        "Starter Medkit provides immediate recovery."
      ],
      weaknesses: [
        "Relies on low HP/hunger for full potential, risky playstyle.",
        "Can be vulnerable if auto-revive is on cooldown."
      ],
      tips: [
        "Embrace aggressive combat, but know your limits.",
        "Utilize the auto-revive to push objectives or protect teammates.",
        "Always carry extra healing items to recover after auto-revive."
      ],
      counters: [
        "Enemies with high burst damage that can one-shot.",
        "Being overwhelmed by multiple enemies before auto-revive can trigger."
      ],
      synergies: [
        "Medic: Provides additional healing to keep the Berserker fighting.",
        "Brawler: Forms a powerful melee frontline."
      ]
    },
    levels: {
      1: { perks: ["Auto-Revive (1 time per night)", "Increased Damage at Low HP (15%)"], requirements: "Purchase Class" },
      2: { perks: ["Auto-Revive (2 times per night)", "Increased Damage at Low HP (30%)"], requirements: "Revive 5 Times" },
      3: { perks: ["Auto-Revive (3 times per night)", "Increased Damage at Low HP (45%)"], requirements: "Revive 15 Times" }
    }
  },
  {
    name: "Chef",
    cost: 150,
    stars: 4,
    description: "Chef station and recipe book for advanced cooking",
    image: "👨‍🍳",
    playstyle: "Master Provisioner",
    difficulty: "Medium",
    starterItems: ["Chef Station Blueprint", "Recipe Book"],
    guide: {
      overview: "The Chef is an advanced version of the Cook, gaining access to a Chef Station and a recipe book for advanced cooking. This class can prepare more complex and beneficial meals, significantly boosting team morale and hunger restoration. Essential for long-term survival and maximizing food utility.",
      strengths: [
        "Access to advanced recipes and cooking stations.",
        "Prepares highly beneficial meals for the team.",
        "Contributes to the 'Vegetarian' badge [5]."
      ],
      weaknesses: [
        "Requires a steady supply of diverse ingredients.",
        "No direct combat utility."
      ],
      tips: [
        "Master advanced recipes to provide powerful buffs to your team.",
        "Coordinate with Farmers and Hunters for a wide range of ingredients.",
        "Set up your Chef Station in a secure location within the base."
      ],
      counters: [
        "Ineffective if ingredients are scarce.",
        "Vulnerable if forced into combat."
      ],
      synergies: [
        "Farmer: Provides high-quality crops.",
        "Hunter: Supplies various meats and rare animal parts."
      ]
    },
    levels: {
      1: { perks: ["Access to Chef Station", "Advanced Recipe Book"], requirements: "Purchase Class" },
      2: { perks: ["Increased Meal Buff Duration (15%)", "Faster Advanced Cooking (20%)"], requirements: "Cook 75 Advanced Meals" },
      3: { perks: ["Chance for 'Perfect' Meals (10%)", "Increased Meal Buff Duration (30%)"], requirements: "Cook 200 Advanced Meals" }
    }
  },
  {
    name: "Blacksmith",
    cost: 200,
    stars: 4,
    description: "Can craft items in the next crafting bench tier",
    image: "🛠️",
    playstyle: "Crafter/Engineer",
    difficulty: "Medium",
    starterItems: ["Hammer"],
    guide: {
      overview: "The Blacksmith is a master crafter, capable of crafting items from the next crafting bench tier. This unique ability allows the team to access advanced tools and structures much earlier than usual, providing a significant technological advantage. The starter Hammer is useful for immediate base improvements.",
      strengths: [
        "Early access to higher-tier crafting recipes.",
        "Accelerates team's technological progression.",
        "Starter Hammer is useful for base building."
      ],
      weaknesses: [
        "Requires a steady supply of advanced materials.",
        "No direct combat bonuses."
      ],
      tips: [
        "Prioritize upgrading your crafting bench to unlock its full potential.",
        "Coordinate with Scavengers to acquire rare materials for advanced crafts.",
        "Focus on crafting essential tools and defensive structures first."
      ],
      counters: [
        "Ineffective if advanced materials are not available.",
        "Can be vulnerable if caught alone without crafted defenses."
      ],
      synergies: [
        "Scavenger: Provides the necessary rare materials.",
        "Lumberjack: Supplies wood for crafting and upgrades."
      ]
    },
    levels: {
      1: { perks: ["Craft items from next tier (Tier 2 items at Tier 1 bench)"], requirements: "Purchase Class" },
      2: { perks: ["Craft items from next tier (Tier 3 items at Tier 2 bench)", "Reduced Crafting Time (15%)"], requirements: "Craft 50 Advanced Items" },
      3: { perks: ["Craft items from next tier (Tier 4 items at Tier 3 bench)", "Reduced Crafting Material Cost (10%)"], requirements: "Craft 150 Advanced Items" }
    }
  },
  {
    name: "Poison Master",
    cost: 200,
    stars: 4,
    description: "Your poison effects are stronger",
    image: "☠️",
    playstyle: "Debuffer/Damage over Time",
    difficulty: "Hard",
    starterItems: ["Blowpipe", "Armor"],
    guide: {
      overview: "The Poison Master, introduced with the Frog Invasion, specializes in applying potent poison effects to enemies. This class excels at dealing damage over time and debuffing foes, making them easier for teammates to take down. The starter Blowpipe and Armor provide immediate utility for this unique playstyle.",
      strengths: [
        "Strong damage over time capabilities.",
        "Effective at debuffing tough enemies.",
        "Starter Blowpipe and Armor provide early offensive and defensive capabilities."
      ],
      weaknesses: [
        "Less effective against poison-immune enemies.",
        "Damage is not instantaneous, requiring patience."
      ],
      tips: [
        "Prioritize applying poison to high-health targets.",
        "Use hit-and-run tactics to keep enemies poisoned while staying safe.",
        "Coordinate with burst damage classes to quickly eliminate debuffed foes."
      ],
      counters: [
        "Enemies with high poison resistance or immunity.",
        "Fast-moving enemies that are hard to keep poisoned."
      ],
      synergies: [
        "Ranger: Can apply poison from a distance while the Ranger deals direct damage.",
        "Brawler: Debuffed enemies are easier for the Brawler to finish off."
      ]
    },
    levels: {
      1: { perks: ["Increased Poison Damage (20%)", "Starts with Blowpipe and Armor"], requirements: "Purchase Class" },
      2: { perks: ["Increased Poison Duration (15%)", "Increased Poison Damage (35%)"], requirements: "Poison 50 Enemies" },
      3: { perks: ["Poison Spreads to Nearby Enemies (small chance)", "Increased Poison Damage (50%)"], requirements: "Poison 150 Enemies" }
    }
  },
  {
    name: "Assassin",
    cost: 500,
    stars: 5,
    description: "Stealth specialist with unique Katana",
    image: "🗡️",
    playstyle: "Stealth/Burst Damage",
    difficulty: "Hard",
    starterItems: ["Katana", "120x Throwing Knives"],
    guide: {
      overview: "The Assassin is a stealth and burst damage specialist, equipped with a unique Katana and throwing knives. This class excels at quickly eliminating high-priority targets and navigating dangerous areas undetected. Mastering stealth and precise strikes is key to the Assassin's effectiveness.",
      strengths: [
        "High burst damage against single targets.",
        "Stealth capabilities for surprise attacks and evasion.",
        "Unique Katana and throwing knives provide versatile combat options."
      ],
      weaknesses: [
        "Vulnerable if caught out of stealth or outnumbered.",
        "Requires precise execution and timing."
      ],
      tips: [
        "Utilize stealth to approach enemies undetected and land critical strikes.",
        "Prioritize high-threat targets like Crossbow Cultists or The Owl.",
        "Use throwing knives for ranged engagements or to finish off fleeing enemies."
      ],
      counters: [
        "Enemies with detection abilities or area-of-effect attacks.",
        "Being forced into prolonged direct combat."
      ],
      synergies: [
        "Ranger: Can eliminate distant threats while the Assassin handles close-range targets.",
        "Medic: Provides healing after risky engagements."
      ]
    },
    levels: {
      1: { perks: ["Stealth Ability", "Increased Critical Hit Chance (10%)"], requirements: "Purchase Class" },
      2: { perks: ["Increased Stealth Duration (20%)", "Increased Critical Hit Damage (20%)"], requirements: "Perform 50 Stealth Kills" },
      3: { perks: ["Instant Kill on Stealth Attack (small chance)", "Increased Critical Hit Chance (20%)"], requirements: "Perform 150 Stealth Kills" }
    }
  },
  {
    name: "Cyborg",
    cost: 600,
    stars: 5,
    description: "Block incoming damage with advanced tech",
    image: "🤖",
    playstyle: "Tank/Technological",
    difficulty: "Hard",
    starterItems: ["Alien Armor", "Laser Cannon"],
    guide: {
      overview: "The Cyborg, another class from the Alien Invasion update, is a formidable tank capable of blocking incoming damage with advanced technology. Starting with Alien Armor and a Laser Cannon, this class excels at soaking up damage and providing heavy firepower. It's ideal for leading the charge and protecting teammates.",
      strengths: [
        "High damage reduction and blocking capabilities.",
        "Heavy firepower with the Laser Cannon.",
        "Excellent for frontline combat and protecting allies."
      ],
      weaknesses: [
        "Can be slow-moving.",
        "Relies on energy for shields/weapons, requiring management."
      ],
      tips: [
        "Lead the charge in combat, drawing enemy fire.",
        "Utilize the Laser Cannon to clear groups of enemies.",
        "Coordinate with support classes to maximize survivability."
      ],
      counters: [
        "Enemies that bypass shields or deal sustained damage.",
        "Being outmaneuvered by fast enemies."
      ],
      synergies: [
        "Medic: Provides healing to complement the Cyborg's tankiness.",
        "Ranger: Adds more ranged damage behind the Cyborg's frontline."
      ]
    },
    levels: {
      1: { perks: ["Damage Block (15%)", "Starts with Alien Armor and Laser Cannon"], requirements: "Purchase Class" },
      2: { perks: ["Damage Block (30%)", "Increased Laser Cannon Damage (15%)"], requirements: "Block 500 Damage" },
      3: { perks: ["Energy Shield (temporary invulnerability)", "Damage Block (45%)"], requirements: "Block 1500 Damage" }
    }
  },
  {
    name: "Pyromaniac",
    cost: 600,
    stars: 5,
    description: "Master of fire with exclusive Flamethrower",
    image: "🔥",
    playstyle: "Area Denial/Damage over Time",
    difficulty: "Medium",
    starterItems: ["Flamethrower"],
    guide: {
      overview: "The Pyromaniac is a master of fire, wielding an exclusive Flamethrower to deal area-of-effect damage and control enemy movement. This class excels at clearing groups of enemies, denying access to areas, and applying damage over time. It's a powerful choice for players who enjoy chaotic combat and controlling the battlefield.",
      strengths: [
        "High area-of-effect damage.",
        "Effective crowd control and area denial.",
        "Exclusive Flamethrower provides unique combat options."
      ],
      weaknesses: [
        "Limited range.",
        "Can accidentally damage teammates or set fire to base elements."
      ],
      tips: [
        "Use the Flamethrower to clear groups of cultists and wildlife.",
        "Be mindful of friendly fire and flammable objects.",
        "Coordinate with other classes to funnel enemies into your flame."
      ],
      counters: [
        "Enemies resistant to fire damage.",
        "Long-range enemies that can attack from outside Flamethrower range."
      ],
      synergies: [
        "Base Defender: Can use fire to protect choke points.",
        "Brawler: Clears smaller enemies, allowing the Brawler to focus on larger threats."
      ]
    },
    levels: {
      1: { perks: ["Increased Fire Damage (20%)", "Starts with Flamethrower"], requirements: "Purchase Class" },
      2: { perks: ["Increased Fire Spread (15%)", "Increased Fire Damage (35%)"], requirements: "Deal 750 Fire Damage" },
      3: { perks: ["Fire Immunity (self)", "Increased Fire Damage (50%)"], requirements: "Deal 2000 Fire Damage" }
    }
  },
  {
    name: "Big Game Hunter",
    cost: 600,
    stars: 5,
    description: "Increased pet droprate from entities",
    image: "🦌",
    playstyle: "Pet Master/Support",
    difficulty: "Medium",
    starterItems: ["Rifle"],
    guide: {
      overview: "The Big Game Hunter specializes in acquiring pets from entities, with an increased pet drop rate. This class is unique in its ability to build a powerful retinue of animal companions, providing both combat support and utility. Starting with a Rifle, the Big Game Hunter is also capable in ranged combat.",
      strengths: [
        "Increased chance to acquire pets from defeated entities.",
        "Pets provide combat assistance and various buffs.",
        "Starter Rifle offers strong ranged offensive capabilities."
      ],
      weaknesses: [
        "Relies on RNG for pet drops.",
        "Pets require management and can be vulnerable."
      ],
      tips: [
        "Prioritize hunting powerful entities for better pet drops.",
        "Protect your pets in combat, as they can be valuable assets.",
        "Utilize the Rifle for safe engagements while your pets distract enemies."
      ],
      counters: [
        "Enemies that can quickly eliminate pets.",
        "Being overwhelmed if pets are not yet acquired or are on cooldown."
      ],
      synergies: [
        "Medic: Can heal both the Big Game Hunter and their pets.",
        "Base Defender: Provides a safe area for pets to rest and recover."
      ]
    },
    levels: {
      1: { perks: ["Increased Pet Drop Rate (10%)", "Starts with Rifle"], requirements: "Purchase Class" },
      2: { perks: ["Increased Pet Health (15%)", "Increased Pet Drop Rate (20%)"], requirements: "Acquire 3 Pets" },
      3: { perks: ["Pet Damage Aura (small)", "Increased Pet Drop Rate (30%)"], requirements: "Acquire 5 Pets" }
    }
  }
];

