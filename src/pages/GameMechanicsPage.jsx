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

  const craftingRecipes = [
    { name: "Wooden Wall", materials: ["5 Wood"], description: "Basic defensive structure" },
    { name: "Stone Wall", materials: ["3 Stone", "2 Wood"], description: "Stronger defensive wall" },
    { name: "Bear Trap", materials: ["3 Metal", "2 Wood"], description: "Damages enemies who step on it" },
    { name: "Campfire", materials: ["5 Wood", "2 Stone"], description: "Provides light and warmth" },
    { name: "Wooden Spear", materials: ["3 Wood"], description: "Basic melee weapon" },
    { name: "Bow", materials: ["4 Wood", "2 String"], description: "Ranged weapon for hunting" }
  ]

  const buildingTips = [
    {
      title: "Location Selection",
      description: "Choose elevated areas near resources but away from Deer spawn points",
      tips: ["Near water sources", "Close to trees and rocks", "Avoid dense forest areas", "Consider escape routes"]
    },
    {
      title: "Base Layout",
      description: "Design your base for both defense and functionality",
      tips: ["Central campfire placement", "Multiple exit points", "Storage area protection", "Trap placement at entrances"]
    },
    {
      title: "Upgrade Priority",
      description: "Focus on essential upgrades first",
      tips: ["Walls before decorations", "Campfire fuel efficiency", "Storage capacity", "Defensive structures"]
    }
  ]

  const combatMechanics = [
    {
      category: "Melee Combat",
      mechanics: [
        "Click to attack with melee weapons",
        "Different weapons have different damage and speed",
        "Timing is crucial for effective combat",
        "Some enemies have specific weaknesses"
      ]
    },
    {
      category: "Ranged Combat",
      mechanics: [
        "Aim and click to shoot ranged weapons",
        "Ammo is limited and must be managed",
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
                Craft essential items and equipment to survive in the forest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Essential Recipes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {craftingRecipes.map((recipe, index) => (
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
              </div>
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
                Master combat mechanics to defend against the Deer and other threats
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

