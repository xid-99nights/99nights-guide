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
        "Save flamethrower fuel for critical moments"
		"focus on kills to level to 3 getting the speed boost makes this class OP"
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

