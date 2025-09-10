import { useState } from 'react';
import { Hammer, Sword, Fish, Home, Cog, Zap, Heart, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GameMechanicsPage = () => {
  const mechanicsSections = [
    {
      id: "crafting",
      title: "Crafting System",
      icon: Hammer,
      description: "Learn how to craft essential items and equipment"
    },
    {
      id: "building",
      title: "Building & Base",
      icon: Home,
      description: "Master base construction and campfire management"
    },
    {
      id: "combat",
      title: "Combat & Survival",
      icon: Sword,
      description: "Understand combat mechanics and survival strategies"
    },
    {
      id: "fishing",
      title: "Fishing Guide",
      icon: Fish,
      description: "Complete guide to fishing mechanics and locations"
    }
  ]
// Crafting TAB
  const [selectedCraftingTier, setSelectedCraftingTier] = useState(1)

  const craftingRecipes = [
    // Tier 1
    { name: "Map", materials: ["3 Wood"], description: "Shows a map with information on it. Can be opened anywhere by pressing M on PC or by clicking on the map icon on the top right on mobile.", tier: 1 },
    { name: "Old Bed", materials: ["20 Wood"], description: "Basic melee weapon", tier: 1 },
    { name: "Bunny Trap X10", materials: ["5 Wood"], description: "Makes the day counter increase by +1.", tier: 1 },
    { name: "Small Chest", materials: ["10 Wood"], description: "Can be placed near a bunny burrow to catch food. Can be crafted up to ten times. It can give 4 morsels if it uses a carrot.", tier: 1 },
	{ name: "Crafting Bench 2", materials: ["5 Wood", "1 Scrap"], description: "Unlocks Tier 2 of the Crafting Bench.", tier: 1 },

    // Tier 2
    { name: "Sun Dial", materials: ["5 Scrap"], description: "Shows how much time is left until day/night.", tier: 2 },
    { name: "Regular Bed", materials: ["5 Scrap"], description: "Makes the day counter increase by +1.", tier: 2 },
    { name: "Compass", materials: ["3 Scrap"], description: "Shows the direction of the Fairy and the missing children, as well as showing where you're facing", tier: 2 },
    { name: "Freezer", materials: ["4 Scrap"], description: "Stores food neatly", tier: 2 },
	{ name: "Farm Plot X20", materials: ["10 Wood"], description: "Grows crops automatically every two days. Can be crafted up to 20 times", tier: 2 },
	{ name: "Wood Rain Storage", materials: ["5 Scrap"], description: "Keeps wood dry when stored inside. Can be placed down more than once.", tier: 2 }, 
	{ name: "Shelf", materials: ["2 Scrap"], description: "Stores items neatly. Can be placed down more than once.", tier: 2 }, 
	{ name: "Log Wall", materials: ["12 Wood"], description: "A collection of tall logs that fortifies and protects your base. Can be placed down more than once.", tier: 2 }, 
	{ name: "Bear Trap X8", materials: ["3 Scrap"], description: "Can be set down to trap enemies and deal damage, even being able to damage players. Can be crafted up to eight times.", tier: 2 }, 
	{ name: "Crafting Bench 3", materials: ["15 Wood", "15 Scrap" ], description: "Unlocks Tier 3 of the Crafting Bench.", tier: 2 },
	
    // Tier 3
    { name: "Crock Pot", materials: ["10 Scrap", "15 Wood"], description: "Allows for combining food to make Stew. Chilis and Berries cannot be put inside a Crock Pot.", tier: 3 },
    { name: "Radar", materials: ["15 Wood", "10 Scrap"], description: "Detects key places in the Forest by using Scrap.", tier: 3 },
    { name: "Boost Pad", materials: ["10 Scrap", "15 Wood"], description: "Gives a speed boost Charge then use", tier: 3 },
    { name: "Biofuel Processor", materials: ["12 Wood", "12 Scrap"], description: "Turns Logs, pelts and meat into Biofuel.", tier: 3 },
	{ name: "Torch", materials: ["6 Scrap", "6 Wood"], description: "Expands the safe zone by a small amount. Can be placed up to ten times.", tier: 3 },
    { name: "Good Bed", materials: ["10 Wood", "10 Scrap"], description: "Makes the day counter increase by +1.", tier: 3 },
    { name: "Lightning Rod", materials: ["8 Scrap"], description: "Attracts lightning, making sure it does not strike the player. Can be placed more than once.", tier: 3 },
	{ name: "Crafting Bench 4", materials: ["30 Wood", "30 Scrap", "2 Amulets" ], description: "Unlocks Tier 4 of the Crafting Bench.", tier: 3 },
  
    // Tier 4
    { name: "Ammo Crate", materials: ["20 Wood", "30 Scrap", "1 Amulets" ], description: "Allows players to buy ammo with Scrap.", tier: 4 },
    { name: "Oil Drill", materials: ["25 Wood", "35 Scrap", "1 Amulets" ], description: "Drills for oil barrels periodically.", tier: 4 },
    { name: "Giant Bed", materials: ["20 Wood", "30 Scrap", "1 Amulets" ], description: "Makes the day counter increase by +1.", tier: 4 },
    { name: "Teleporter", materials: ["15 Wood", "25 Scrap", "1 Amulets"], description: "Allows teleporting to anywhere on the map (requires two or more Teleporters to work). Can be place more than once.", tier: 4 },
	{ name: "Crafting Bench 5", materials: ["50 Wood", "50 Scrap", "1 Forest Gem" ], description: "Unlocks Tier 4 of the Crafting Bench.", tier: 4 },
   
   // Tier 5
    { name: "Respawn Capsule", materials: ["40 Wood", "40 Scrap", "1 Forest Gem"], description: "After charging, automatically respawns the most recent dead player inside of it.", tier: 5 },
    { name: "Temporal Accelerometer", materials: ["40 Wood", "40 Scrap", "1 Forest Gem"], description: "Skips the next night once charged.", tier: 5 },
    { name: "Weather Machine", materials: ["40 Wood", "40 Scrap", "1 Forest Gem"], description: "After charging, stops rain and thunderstorms for the next three days.", tier: 5 }
  ]
// Building TAB
  const buildingTips = [
    
    {
      title: "Base Layout",
      description: "Design your base for both defense and functionality",
      tips: [ "Single or Multiple exit points", "Storage area Shared or areas for each person to drop supplies", "Trap placement at entrances"]
    },
    {
      title: "Upgrade Priority",
      description: "Focus on essential upgrades first",
      tips: ["Walls before decorations", "Biofuel Processor for fuel efficiency", "Defensive structures", "Plant trees for Walls" ]
    }
  ]

  const combatMechanics = [
    {
      category: "Melee Combat",
      mechanics: [
        "Click to attack with melee weapons",
        "Different weapons have different damage and speed",
        "Timing is crucial for effective combat",
        "Some enemies have specific weaknesses - Aim for the head"
      ]
    },
    {
      category: "Ranged Combat",
      mechanics: [
        "Aim and click to shoot ranged weapons",
        "Ammo is limited and must be managed",
		"Reload your Gun after a kill",
        "Different ammo types for different weapons",
        "Reload times vary by weapon type"
      ]
    },
    {
      category: "Defense",
      mechanics: [
        "Blocking reduces incoming damage",
        "Some classes have special defensive abilities",
        "Armor provides passive damage reduction",
        "Environmental cover can be used strategically"
      ]
    }
  ]

  const fishingGuide = {
    basics: [
      "Obtain a fishing rod from a Fishing Hut",
      "Find a body of water (lakes, rivers, ponds)",
      "Cast your line and wait for a bite",
      "Click when you see the bobber move"
    ],
    locations: [
      { name: "Main Lake", difficulty: "Easy", fish: ["Bass", "Trout"] },
      { name: "Forest Streams", difficulty: "Medium", fish: ["Salmon", "Pike"] },
      { name: "Hidden Pond", difficulty: "Hard", fish: ["Rare Fish", "Golden Fish"] }
    ],
    tips: [
      "Different fish are active at different times",
      "Weather affects fishing success rates",
      "Upgrade your rod for better catches",
      "Some fish are required for specific recipes"
    ]
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Game Mechanics
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          Master the core systems of 99 Nights in the Forest. Understanding these mechanics 
          is essential for long-term survival and success.
        </p>
      </section>

      {/* Mechanics Overview */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mechanicsSections.map((section, index) => {
          const Icon = section.icon
          return (
            <Card key={index} className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                <CardTitle className="text-white">{section.title}</CardTitle>
                <CardDescription className="text-green-200">
                  {section.description}
                </CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </section>

      {/* Detailed Mechanics */}
      <Tabs defaultValue="crafting" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/20 border-green-700/30">
          <TabsTrigger value="crafting" className="data-[state=active]:bg-green-600">Crafting</TabsTrigger>
          <TabsTrigger value="building" className="data-[state=active]:bg-green-600">Building</TabsTrigger>
          <TabsTrigger value="combat" className="data-[state=active]:bg-green-600">Combat</TabsTrigger>
          <TabsTrigger value="fishing" className="data-[state=active]:bg-green-600">Fishing</TabsTrigger>
        </TabsList>

        <TabsContent value="crafting" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Hammer className="w-6 h-6 text-orange-400 mr-2" />
                Crafting System
              </CardTitle>
              <CardDescription className="text-green-200">
                Craft essential items and equipment to survive in the forest. Select a tier to view recipes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedCraftingTier.toString()} onValueChange={(value) => setSelectedCraftingTier(parseInt(value))}>
                <TabsList className="grid w-full grid-cols-5 bg-black/20 border-green-700/30">
                  {[1, 2, 3, 4, 5].map((tier) => (
                    <TabsTrigger key={tier} value={tier.toString()} className="data-[state=active]:bg-green-600">
                      Tier {tier}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {[1, 2, 3, 4, 5].map((tier) => (
                  <TabsContent key={tier} value={tier.toString()} className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold text-white">Tier {tier} Recipes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {craftingRecipes.filter(recipe => recipe.tier === tier).map((recipe, index) => (
                        <div key={index} className="bg-black/30 rounded-lg p-4 border border-green-700/20">
                          <h4 className="font-semibold text-orange-400">{recipe.name}</h4>
                          <p className="text-green-200 text-sm mb-2">{recipe.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {recipe.materials.map((material, matIndex) => (
                              <Badge key={matIndex} variant="outline" className="border-green-500 text-green-300 text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="building" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Home className="w-6 h-6 text-orange-400 mr-2" />
                Building & Base Management
              </CardTitle>
              <CardDescription className="text-green-200">
                Create and maintain a secure base to survive the nights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {buildingTips.map((tip, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                    <p className="text-green-200">{tip.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <div key={tipIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span className="text-green-200 text-sm">{tipItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="combat" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Sword className="w-6 h-6 text-orange-400 mr-2" />
                Combat & Survival
              </CardTitle>
              <CardDescription className="text-green-200">
                Master combat mechanics to defend against the Wolf, Bear, Cultis and other threats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {combatMechanics.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">{section.category}</h3>
                    <div className="space-y-2">
                      {section.mechanics.map((mechanic, mechIndex) => (
                        <div key={mechIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-green-200">{mechanic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fishing" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Fish className="w-6 h-6 text-orange-400 mr-2" />
                Fishing Guide
              </CardTitle>
              <CardDescription className="text-green-200">
                Complete guide to fishing mechanics and the best fishing spots
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Fishing Basics</h3>
                  <div className="space-y-2">
                    {fishingGuide.basics.map((basic, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-green-200">{basic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Fishing Locations</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {fishingGuide.locations.map((location, index) => (
                      <div key={index} className="bg-black/30 rounded-lg p-4 border border-green-700/20">
                        <h4 className="font-semibold text-orange-400">{location.name}</h4>
                        <Badge variant="outline" className={`mb-2 ${
                          location.difficulty === 'Easy' ? 'border-green-500 text-green-300' :
                          location.difficulty === 'Medium' ? 'border-yellow-500 text-yellow-300' :
                          'border-red-500 text-red-300'
                        }`}>
                          {location.difficulty}
                        </Badge>
                        <div className="space-y-1">
                          {location.fish.map((fish, fishIndex) => (
                            <div key={fishIndex} className="text-green-200 text-sm">• {fish}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Pro Tips</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {fishingGuide.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-green-200">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Advanced Tips */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <Cog className="w-6 h-6 text-orange-400 mr-2" />
          Advanced Mechanics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-orange-400 flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Health System
            </h3>
            <ul className="space-y-1 text-green-200 text-sm">
              <li>• Health regenerates slowly over time</li>
              <li>• Food restores health and hunger</li>
              <li>• Medical items provide instant healing</li>
              <li>• Some classes have healing bonuses</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-orange-400 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Energy System
            </h3>
            <ul className="space-y-1 text-green-200 text-sm">
              <li>• Actions consume energy</li>
              <li>• Rest near campfire to recover</li>
              <li>• Food provides energy restoration</li>
              <li>• Low energy affects performance</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-orange-400 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Damage Types
            </h3>
            <ul className="space-y-1 text-green-200 text-sm">
              <li>• Physical damage from weapons</li>
              <li>• Environmental damage from hazards</li>
              <li>• Deer attacks deal massive damage</li>
              <li>• Armor reduces incoming damage</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GameMechanicsPage

