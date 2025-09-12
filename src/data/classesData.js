export const classesData = {
  "camper": {
    name: "Camper",
    cost: 10,
    stars: 1,
    image: "🏕️",
    description: "Basic survival class with reduced hunger drain and essential equipment",
    starterItems: ["Flashlight"],
    playstyle: "Survival and Resource Management",
    difficulty: "Easy",
    
    levels: {
      1: {
        perks: ["Reduced hunger drain", "Start with flashlight for visibility"],
        requirements: "Purchase class for 10 diamonds"
      },
      2: {
        perks: ["Increased visibility at night"],
        requirements: "Food Cooked: 0/75 Logs Burned: 0/200"
      },
      3: {
        perks: [" Spawn with a Stew"],
        requirements: "Food Cooked: 0/150 Logs Burned: 0/350"
      }
    },
    
    guide: {
      overview: "The Camper is the perfect starting class for new players. With reduced hunger drain and a reliable flashlight, this class focuses on basic survival mechanics and resource management. It's affordable and forgiving, making it ideal for learning the game.",
      
      strengths: [
        "Very affordable (10 diamonds)",
        "Reduced hunger drain saves resources",
        "Reliable flashlight for visibility",
        "Perfect for beginners",
        "Low maintenance playstyle"
      ],
      
      weaknesses: [
        "No combat bonuses",
        "Limited special abilities",
        "Basic equipment only",
        "No team support capabilities",
        "Lower overall power level"
      ],
      
      tips: [
        "Focus on resource gathering during the day",
        "Use your flashlight strategically to save battery",
        "Stock up on food early since you consume less",
        "Learn the basics of base building",
        "Coordinate with more specialized teammates"
      ],
      
      synergies: [
        "Works well with any team composition",
        "Benefits from Medic healing support",
        "Can support Base Defender with resources",
        "Pairs well with Hunter for food supply"
      ],
      
      counters: [
        "Limited combat effectiveness",
        "Vulnerable without team support",
        "No special defensive abilities",
        "Struggles in high-intensity situations"
      ]
    }
  },

"camper": {
    name: "Scavenger",
    cost: 25,
    stars: 2,
    image: "️🔍",
    description: "Resourceful survivor with increased inventory space and faster chest opening",
    starterItems: ["+2 Bag space"],
    playstyle: "Resource Gathering and Exploration",
    difficulty: "Easy",
    
    levels: {
      1: {
        perks: ["+2 Sack Space"],
        requirements: "Purchase class for 25 diamonds"
      },
      2: {
        perks: ["Chests open 20% faster"],
        requirements: "Scrap Scrapped: 0/450 Studs Travelled: 0/2500"
      },
      3: {
        perks: ["Chance to get scrap as a bonus drop from chests"],
        requirements: "Scrapped: 0/1000 Studs Travelled: 0/10000"
      }
    },
    
    guide: {
      overview: "The Scavenger is an excellent early-game class focused on resource acquisition and exploration. While lacking a starter item, their increased inventory space and faster chest opening abilities make them invaluable for gathering supplies quickly. They are ideal for players who enjoy exploring and building up their base.",
      
      strengths: [
        "Increased inventory space for more loot",
        "Faster chest opening for quick resource gathering",
        "Good for early game resource accumulation",
        "Affordable cost (25 diamonds)"
      ],
      
      weaknesses: [
       "No starter item, making early game slightly harder",
        "Limited combat abilities",
        "Dependent on finding chests and resources",
        "Less effective in direct combat situations",
        "Does not directly contribute to base defense or offense"
      ],
      
      tips: [
        "Prioritize finding chests and loot spawns",
        "Focus on resource gathering during the day",
        "Avoid direct combat when possible",
        "Utilize your increased inventory to carry more essential items",
        "Explore new areas to find hidden caches"
      ],
      
      synergies: [
        "Pairs well with Base Defender for resource contribution",
        "Cook benefits from Scavenger's resource gathering",
        "Can supply other classes with needed materials",
        "Medic can keep Scavenger safe during exploration"
      ],
      
      counters: [
        "Vulnerable to aggressive enemies due to lack of combat perks",
        "Struggles in situations requiring quick combat response",
        "Less useful if resources are scarce or already gathered by others"
      ]
    }
  },

  "pyromaniac": {
    name: "Pyromaniac",
    cost: 600,
    stars: 5,
    image: "🔥",
    description: "Master of fire with exclusive access to the devastating Flamethrower",
    starterItems: ["Flamethrower"],
    playstyle: "Aggressive Close-Range Combat",
    difficulty: "Hard",
    
    levels: {
      1: {
        perks: ["Access to exclusive Flamethrower weapon, Reload your flamethrower with fuel canisters. Food is auto-cooked on drop" ],
        requirements: "Purchase class for 600 diamonds"
      },
      2: {
        perks: ["Fuel canisters restore even more fuel"],
        requirements: "Kill enemies with fire: 0/150"
      },
      3: {
        perks: ["You move faster for every burning enemy"],
        requirements: "Kill enemies with fire: 0/400"
      }
    },
    
    guide: {
      overview: "The Pyromaniac is one of the most powerful and expensive classes in the game. With exclusive access to the Flamethrower, this class excels at dealing massive damage to groups of enemies. However, the high cost and close-range nature make it challenging for new players.",
      
      strengths: [
        "Highest damage output in close range",
        "Exclusive Flamethrower weapon",
        "Excellent for clearing groups of enemies",
        "Area of effect damage potential"
      ],
      
      weaknesses: [
        "Very expensive (600 diamonds)",
        "Limited to close-range combat",
        "Fuel dependency for primary weapon",
        "Vulnerable at long range",
        "High skill requirement"
      ],
      
      tips: [
        "Always carry backup fuel canisters",
        "Use terrain to get close to enemies safely",
        "Coordinate with ranged teammates for protection",
        "Focus on chokepoints and narrow areas",
        "Save flamethrower fuel for critical moments",
		"Focus on kills to level to 3 getting the speed boost makes this class OP"
      ],
      
      synergies: [
        "Works well with Support class for healing",
        "Ranger can provide long-range cover",
        "Base Defender can create funneling opportunities",
        "Medic support is crucial for survivability"
      ],
      
      counters: [
        "Weak against long-range attackers",
        "Vulnerable when out of fuel",
        "Limited effectiveness in open areas"
      ]
    }
  },
  
  "assassin": {
    name: "Assassin",
    cost: 500,
    stars: 5,
    image: "🗡️",
    description: "Stealth specialist with unique Katana and high mobility",
    starterItems: ["Katana + Kunai throwing knives"],
    playstyle: "Stealth and Precision",
    difficulty: "Medium-Hard",
    
    levels: {
      1: {
        perks: ["+ 10% sprint speed - 15% HP + 5% chance for Throwing Knives to spawn in chests"],
        requirements: "Purchase class for 500 diamonds"
      },
      2: {
        perks: ["First hit on an enemy has a chance to critically strike"],
        requirements: "Kill with no dmg taken: 0/100 Studs Travelled: 0/2500"
      },
      3: {
        perks: ["+ 10% chance for Throwing Knives to spawn in chests"],
        requirements: "Kill with no dmg taken: 0/250 Studs Travelled: 0/10000"
      }
    },
    
    guide: {
      overview: "The Assassin is a high-skill, high-reward class that excels at eliminating key targets quickly and quietly. With the unique Katana, skilled players can turn the tide of battle through precise strikes and tactical positioning.",
      
      strengths: [
        "Highest single-target damage potential",
        "Unique Katana with special abilities",
        "Enhanced mobility",
        "Excellent for hit-and-run tactics",
        "Can eliminate threats quickly"
      ],
      
      weaknesses: [
        "Fragile in direct combat",
        "Requires high skill to master",
        "Limited group combat effectiveness",
        "Expensive investment (500 diamonds)"
      ],
      
      tips: [
        "Target isolated enemies first",
        "Learn enemy patrol patterns",
        "Always have an escape route planned",
        "Coordinate with team for distractions"
      ],
      
      synergies: [
        "Support class can provide healing between engagements",
        "Ranger can create distractions for stealth approaches",
        "Base Defender can create safe retreat points",
        "Cook can provide stamina-boosting food"
      ],
      
      counters: [
        "Struggles against groups of enemies",
        "Limited range forces close combat"
      ]
    }
  },
  
  "medic": {
    name: "Medic",
    cost: 40,
    stars: 2,
    image: "🏥",
    description: "Essential support class with healing abilities and team buffs",
    starterItems: ["Bandage"],
    playstyle: "Support and Healing",
    difficulty: "Easy-Medium",
    
    levels: {
      1: {
        perks: ["5x faster revival of downed players"],
        requirements: "Purchase class for 40 diamonds"
      },
      2: {
        perks: [ "Improved revive on others, restores more health and hunger"],
        requirements: "Find Medical Supplies: 0/30 Revive Players: 0/25"
      },
      3: {
        perks: ["Healing items affect nearby teammates", "Chance to not consume medical supplies"],
        requirements: "Heal 500 total health points"
      }
    },
    
    guide: {
      overview: "The Medic is one of the most valuable team-oriented classes in the game. While not flashy in combat, a good Medic can keep the entire team alive and fighting effectively. This class is perfect for players who enjoy supporting their teammates.",
      
      strengths: [
        "Essential team support capabilities",
        "Fast revival abilities save lives",
        "Affordable entry cost (40 diamonds)",
        "Healing efficiency bonuses",
        "Area healing at higher levels"
      ],
      
      weaknesses: [
        "Limited combat effectiveness",
        "Dependent on team coordination",
        "Vulnerable when isolated",
        "Requires medical supplies to be effective",
        "Target priority for enemies"
      ],
      
      tips: [
        "Stay behind cover during combat",
        "Always carry extra medical supplies",
        "Prioritize reviving over healing",
        "Communicate with team about health status",
        "Position near escape routes"
      ],
      
      synergies: [
        "Essential with any combat-focused class",
        "Pyromaniac benefits greatly from healing support",
        "Assassin needs quick healing between engagements",
        "Base Defender can protect Medic while healing"
      ],
      
      counters: [
        "Targeted by intelligent enemies",
        "Ineffective without medical supplies",
        "Struggles in solo situations",
        "Limited mobility compared to other classes"
      ]
    }
  },
  
  "chef": {
    name: "Chef",
    cost: 150,
    stars: 4,
    image: "🍳",
    description: "Culinary expert providing powerful food buffs and healing to the team",
    starterItems: ["Chef Station Blueprint", "Recipe Book"],
    playstyle: "Support and Resource Management",
    difficulty: "Medium",
    
    levels: {
      1: {
        perks: ["Can cook unique recipes that give huge bonuses", "All cooked items are seasoned"],
        requirements: "Purchase class for 150 diamonds"
      },
      2: {
        perks: ["Unlocks a new recipe", "Cooking speed increased by 25%"],
        requirements: "Cook 200 food + 50 special dishes"
      },
      3: {
        perks: ["Unlocks an additional new recipe", "Cooked food provides passive health regeneration"],
        requirements: "Cook 400 food + 100 special dishes"
      }
    },
    
    guide: {
      overview: "The Chef class is essential for long-term survival, specializing in preparing powerful food items that provide significant buffs and healing to the team. A skilled Cook can turn the tide of a long run by ensuring the team is well-fed and buffed.",
      
      strengths: [
        "Provides powerful buffs and healing through food",
        "Essential for long survival runs",
        "Unlocks unique recipes",
        "Supports entire team with food benefits"
      ],
      
      weaknesses: [
        "Limited combat abilities",
        "Dependent on raw food resources",
        "Requires time to cook, making them vulnerable",
        "Less effective in direct combat situations",
        "High cost (150 diamonds)"
      ],
      
      tips: [
        "Prioritize gathering raw food ingredients",
        "Set up cooking station in a safe, defended area",
        "Cook in batches to maximize efficiency",
        "Share food with teammates to maximize buffs",
        "Coordinate with Scavenger for resource supply"
      ],
      
      synergies: [
        "Pairs perfectly with Scavenger or Hunter for resource gathering",
        "Medic can protect Cook while cooking",
        "Provides essential buffs for combat classes like Pyromaniac and Assassin",
        "Base Defender can provide a safe cooking environment"
      ],
      
      counters: [
        "Vulnerable when cooking due to stationary nature",
        "Less useful if raw food resources are scarce"
      ]
    }
  },

  "hunter": {
    name: "Hunter",
    cost: 40,
    stars: 2,
    image: "🏹",
    description: "",
    starterItems: ["2 Bear Traps"],
    playstyle: "Resource Gathering",
    difficulty: "Easy-Medium",
    
    levels: {
      1: {
        perks: ["Increased meat droprate"],
        requirements: "Purchase class for 40 diamonds"
      },
      2: {
        perks: ["Slightly higher pelt droprate"],
        requirements: "Kill bunnies: 0/120 Kill wolves: 0/120"
      },
      3: {
        perks: ["The pelt trader will offer an extra wolf pelt trade"],
        requirements: "Kill Alpha wolves: 0/120 Kill Wolves: 0/250"
      }
    },
    
    guide: {
      overview: "The Hunter class is crucial for sustainable food supply and resource gathering. Specializing in hunting animals, they provide essential meat for cooking and survival. Their ranged combat abilities also make them effective in defending the base.",
      
      strengths: [
        "Efficient meat gathering",
        "Extra pelts for banages and winter gear",
        "Good for solo play and team support",
        "Affordable cost (40 diamonds)"
      ],
      
      weaknesses: [
        "Dependent on finding animals",
        "No direct base building or healing perks"
      ],
      
      tips: [
        "Prioritize hunting during the day",
        "Coordinate with Cook/Chef for food processing",

      ],
      
      synergies: [
        "Pairs perfectly with Cook/Chef for food supply",
        "Medic can heal after hunting dangerous animals",
      ],
      
      counters: [
        "Less effective if animal spawns are low",
      ]
    }
  },

  "big-game-hunter": {
    name: "Big Game Hunter",
    cost: 600,
    stars: 5,
    image: "🦌",
    description: "Elite hunter specializing in taking down large, dangerous creatures",
    starterItems: ["Rifle", "+ Ammo"],
    playstyle: "Hunting and Ranged Combat",
    difficulty: "Hard",
    
    levels: {
      1: {
        perks: ["Can consune animal pelts to gain permanent bonuses"],
        requirements: "Purchase class for 600 diamonds"
      },
      2: {
        perks: ["Higher pelt drop rate"],
        requirements: "Kill wolves: 0/70 Animal pelts used: 0/50"	
      },
      3: {
        perks: ["You can infinitely consume mammoth tusks to permanently gain health"],
        requirements: "Kill wolves: 0/150 Animal pelts used: 0/100"
      }
    },
    
    guide: {
      overview: "The Big Game Hunter is a formidable class designed for players who want to take on the most dangerous creatures in the forest. They excel at single-target elimination.",
      
      strengths: [
		"Consuming as many pelts as they can get to gain buffs",
       
      ],
      
      weaknesses: [
        "Very expensive (600 diamonds)",
        "Dependent on ammunition supply",
        "Requires precise aim and tactical positioning",
        "Limited utility outside of combat"
      ],
      
      tips: [
    
        "Always carry plenty of ammunition",
        "Focus fire on large creatures during team fights",
        "Coordinate with teammates for crowd control"
      ],
      
      synergies: [
        "Pairs well with Medic for sustained combat",
        "Base Defender can provide cover during engagements",
        "Scavenger can help gather rare resources for upgrades",
        "Cook can provide buffs to enhance combat performance"
      ],
      
      counters: [
        "Struggles against fast-moving, numerous enemies",
        "Vulnerable if caught off guard by smaller threats",
        "Less useful in resource-gathering focused runs"
      ]
    }
  },

  "decorator": {
    name: "Decorator",
    cost: 40,
    stars: 1,
    image: "🎨",
    description: "Aesthetic specialist focused on base customization and visual enhancements",
    starterItems: ["Paint Brush"],
    playstyle: "Aesthetic and Base Customization",
    difficulty: "Easy",
    
    levels: {
      1: {
        perks: ["Can place decorative items", "Paint Brush for customizing base colors"],
        requirements: "Purchase class for 40 diamonds"
      },
      2: {
        perks: ["Unlocks new decorative blueprints", "Decorative items provide minor morale boost"],
        requirements: "Place 20 decorative items"
      },
      3: {
        perks: ["Decorative items provide small defensive bonus", "Can change terrain textures within base"],
        requirements: "Fully customize a base section"
      }
    },
    
    guide: {
      overview: "The Decorator class is for players who enjoy personalizing their base and adding a unique touch to their survival experience. While not directly contributing to combat or resource gathering, a well-decorated base can provide morale boosts and minor defensive advantages at higher levels.",
      
      strengths: [
        "Unique base customization options",
        "Can create visually appealing bases",
        "Minor morale and defensive boosts at higher levels",
        "Affordable cost (40 diamonds)",
        "Adds a creative element to gameplay"
      ],
      
      weaknesses: [
        "Considered least useful in direct survival scenarios",
        "No direct combat or resource gathering perks",
        "Abilities are mostly cosmetic",
        "Requires resources for decorative items",
        "Less impactful in early game survival"
      ],
      
      tips: [
        "Focus on essential survival first before decorating",
        "Use decorative items to mark important areas",
        "Coordinate with Base Defender for optimal base layout",
        "Experiment with different color schemes and textures",
        "Utilize morale boosts for team benefits"
      ],
      
      synergies: [
        "Pairs well with Base Defender for a well-fortified and aesthetic base",
        "Scavenger can help gather resources for decorative items",
        "Cook can provide food for morale boosts in a comfortable base"
      ],
      
      counters: [
        "Limited effectiveness against aggressive enemies",
        "Not suitable for players focused solely on combat or efficiency",
        "Vulnerable if base is destroyed"
      ]
    }
  },

  "ranger": {
    name: "Ranger",
    cost: 70,
    stars: 3,
    image: "🌲",
    description: "Versatile ranged specialist with ammo efficiency and survival skills",
    starterItems: ["Flashlight", "Revolver"],
    playstyle: "Ranged Combat and Utility",
    difficulty: "Medium",
    
    levels: {
      1: {
        perks: ["10% chance to refund ammo on shot", "Start with 18 ammo"],
        requirements: "Purchase class for 70 diamonds"
      },
      2: {
        perks: ["Increased ammo refund chance to 20%", "Improved accuracy with ranged weapons"],
        requirements: "Fire 200 shots with ranged weapons"
      },
      3: {
        perks: ["Headshots have higher refund chance", "Can craft special ammunition"],
        requirements: "Achieve 50 headshot kills"
      }
    },
    
    guide: {
      overview: "The Ranger is a well-balanced class that excels at ranged combat while providing utility through ammo efficiency. This class is perfect for players who prefer to engage enemies from a distance and support their team with consistent firepower.",
      
      strengths: [
        "Excellent ammo efficiency",
        "Strong ranged combat capabilities",
        "Good starter equipment",
        "Versatile in different situations",
        "Reliable damage output"
      ],
      
      weaknesses: [
        "Vulnerable in close combat",
        "Dependent on ammunition supply",
        "Limited healing capabilities",
        "Moderate cost (70 diamonds)",
        "Requires good aim to be effective"
      ],
      
      tips: [
        "Aim for headshots to maximize ammo refunds",
        "Position on high ground when possible",
        "Keep backup melee weapon ready",
        "Share ammo with teammates when possible",
        "Use flashlight strategically to spot enemies"
      ],
      
      synergies: [
        "Pairs well with Medic for healing support",
        "Base Defender can create elevated positions",
        "Support class provides mutual benefits",
        "Hunter can share hunting knowledge"
      ],
      
      counters: [
        "Struggles against fast-moving enemies",
        "Weak in confined spaces",
        "Limited effectiveness without ammo",
        "Vulnerable to stealth attacks"
      ]
    }
  },
  
  "base-defender": {
    name: "Base Defender",
    cost: 40,
    stars: 2,
    image: "🛡️",
    description: "Defensive specialist focused on fortification and trap management",
    starterItems: ["Bear Trap"],
    playstyle: "Defensive and Tactical",
    difficulty: "Easy-Medium",
    
    levels: {
      1: {
        perks: ["Defenses can be upgraded/downgraded", "Start with 2 defense blueprints"],
        requirements: "Purchase class for 40 diamonds"
      },
      2: {
        perks: ["Traps deal more damage", "Can place defenses faster"],
        requirements: "Build 20 defensive structures"
      },
      3: {
        perks: ["Defenses have chance to not break", "Can upgrade traps to higher tiers"],
        requirements: "Survive 5 nights with active defenses"
      }
    },
    
    guide: {
      overview: "The Base Defender is the cornerstone of any good defensive strategy. This class specializes in creating and maintaining fortifications that protect the entire team. Perfect for players who enjoy strategic planning and base building.",
      
      strengths: [
        "Unique ability to upgrade defenses",
        "Essential for base security",
        "Affordable cost (40 diamonds)",
        "Trap specialization",
        "Team protection focus"
      ],
      
      weaknesses: [
        "Limited offensive capabilities",
        "Requires resources for defenses",
        "Stationary playstyle",
        "Vulnerable when away from base",
        "Dependent on team coordination"
      ],
      
      tips: [
        "Plan defense layouts carefully",
        "Upgrade key chokepoints first",
        "Always carry repair materials",
        "Coordinate with team on defense priorities",
        "Place traps in unexpected locations"
      ],
      
      synergies: [
        "Works perfectly with any team composition",
        "Medic can heal while protected by defenses",
        "Ranger benefits from elevated defensive positions",
        "Cook can safely prepare food behind defenses"
      ],
      
      counters: [
        "Limited mobility reduces flexibility",
        "Expensive to maintain defenses",
        "Vulnerable to area-of-effect attacks",
        "Struggles in offensive situations"
      ]
    }
  }
}

export const getClassByName = (className) => {
  const key = className.toLowerCase().replace(/\s+/g, '-')
  return classesData[key]
}

export const getAllClasses = () => {
  return Object.values(classesData)
}

