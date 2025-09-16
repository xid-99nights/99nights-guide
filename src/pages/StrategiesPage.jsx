import { ArrowRight, Lightbulb, Users, Home, Target, Flame, Gem, Shield, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const StrategiesPage = () => {
  const beginnerTips = [
    {
      title: "Starting Your Journey",
      tips: [
        "The game features multiplayer, minimal horror, and survival elements. Players start a run by entering a matchmaking box and selecting a team size (1/5). Upon joining, they are in a small forest and should follow the in-game tutorial.",
        "To manage hunger, kill nearby animals for raw meat and cook it on the campfire. Carrots, berries, and chilis (if planted) can also be eaten early on."
      ]
    },
    {
      title: "Head-Start",
      tips: [
        "A good head start is crucial for quickly accumulating multipliers and reaching 99 days faster.",
        "Rescue Dino Kid between Day 1 and 3 for multipliers. Craft the Old and Regular bed before Day 5."
      ]
    },
    {
      title: "As You Spawn In",
      tips: [
        "Start gathering wood immediately upon spawning. There is always one Coal at the start, use it to quickly upgrade the campfire to level 2 or 3.",
        "Aim to upgrade the campfire to level 3 or 4 on the first day."
      ]
    },
    {
      title: "Pelts",
      tips: [
        "Bunny Foot is very important for obtaining good tools from the Pelt Trader. Consider getting one early, especially if you have a weapon-equipped class like the Assassin, or wait until Day 2.",
        "Try to acquire the Bunny Foot on Night 1 or Day 2, as The Deer does not attack on Night 1 and remains mostly docile during the first few nights. Wolves and Alpha Wolves also do not spawn on the first night."
      ]
    },
    {
      title: "Scavenging",
      tips: [
        "Squeeze in time to get at least 1 scrap to upgrade the crafting bench. It's advisable to acquire more scrap for later use.",
        "Get the regular bed on the first day; it only costs 5 scrap but requires a level 2 crafting bench.",
        "Accumulate scrap to build a base. More in-depth base building information is provided below."
      ]
    },
    {
      title: "Missing Children (Early Game)",
      tips: [
        "If confident, save the Dino Kid on Day 1. A Spear or ranged weapon can help.",
        "Use a Revolver paired with a Spear to rescue the Squid Kid."
      ]
    }
  ]

  const multiplayerGuide = {
    title: "Solo or Multiplayer?",
    description: "Understanding how game difficulty scales with player count is crucial for a successful run.",
    points: [
      "The game's difficulty scales with the number of players who *initially* join a game. A solo run is balanced for one player, while a five-person server will have events balanced for five players, making it significantly harder.",
      "If players leave a server, the difficulty does *not* adjust. This means if you start with five players and four leave, you will be stuck with events balanced for five people, making survival extremely challenging, especially during Cultist raids, the Cultist Stronghold, and food management.",
      "For the most reliable experience, play either solo or with trusted friends."
    ]
  }

  const resourceManagement = [
    {
      title: "Farming",
      tips: [
        "Stack saplings together to cut multiple trees at once. This is especially effective with a strong axe or chainsaw.",
        "Prioritize farm plots if a Farmer class is on the team, or stack them for fences."
      ]
    },
    {
      title: "Storing",
      tips: [
        "The rain wood storage is the best way to protect wood from getting wet. If you have a Biofuel Processor, you can turn wet wood into biofuel, eliminating the need for a shelf.",
        "If you have a reliable source of fuel, the crafting table is the safest and easiest place to store wood."
      ]
    }
  ]

  const baseBuilding = {
    title: "Building a Base",
    description: "Protecting your camp from cultist attacks is vital. A Hammer is essential for managing your base.",
    archetypes: [
      {
        name: "Shelves and Wood Rain Storages",
        pros: ["Easy and simple to build.", "Resources (scrap) are common in deeper parts of the forest.", "Wood rain storages can block jumping."],
        cons: ["Can be flawed and often results in a narrow base lacking room."]
      }
    ]
  }

  const advancedTips = [
    {
      title: "Upgrading Campfire",
      tips: [
        "Early Levels (1-3): Use an axe to cut trees and burn logs to upgrade the campfire. If at level 2, burn logs. If at level 3, loot for fuel or continue burning logs (optional).",
        "Mid Levels (4-5): At level 4, logs provide less than 1% fuel, so search for flammable items like coal or fuel canisters, or build a Biofuel Processor. At level 5, build an oil drill facing the campfire to continuously fuel it; otherwise, loot flammable items as backup.",
        "Max Level (6): At level 6, you have more freedom. If the campfire starts to die, use flammable items. The Lumberjack class provides extra wood (bonus logs at level 1, 1-2 bonus logs at level 3).",
        "Solo Fuel Strategy: In solo runs, if fuel sources are depleted, build a Biofuel Processor, kill entities, and convert meat into biofuel, which is a superior fuel source for the campfire."
      ]
    },
    {
      title: "Rescuing Missing Children",
      tips: [
        "First Two Children: Use a Spear or Katana (Assassin class) to circle and kill Wolves or Alpha Wolves, then unlock the cave. If no spear, seek teammate help or use ranged weapons. Bear traps can also damage wolves and alpha wolves significantly.",
        "Ranged Strategy: Use first-person mode to lure wolves one by one and hit them while running. With ranged weapons (Raygun, Laser Cannon, Rifle), go to the top of a locked cave to shoot enemies below who are locked onto you. Zooming out helps with headshots. Avoid burning chairs from cabins, as one chair equals 5 logs.",
        "Third and Fourth Children: Highly recommended to use a Rifle or Shotgun for the third child due to high damage from Bears. For the fourth child, use a Shotgun or other good weapons, as you will have ample resources by then."
      ]
    },
    {
      title: "Looting",
      tips: [
        "Weapons and Tools: Find and open all chests for better weapons and tools.",
        "Alien Crash Sites: These sites provide powerful alien weapons like the Laser Sword and Raygun."
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Strategies: Tips, Tricks, and Advanced Tactics
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          Master the art of survival in 99 Nights in the Forest with these essential strategies, 
          from beginner tips to advanced tactics.
        </p>
      </section>

      {/* Detailed Strategies */}
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/20 border-green-700/30">
          <TabsTrigger value="beginner" className="data-[state=active]:bg-green-600">Beginner Tips</TabsTrigger>
          <TabsTrigger value="multiplayer" className="data-[state=active]:bg-green-600">Solo/Multiplayer</TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-green-600">Resources & Base</TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-green-600">Advanced Tactics</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lightbulb className="w-6 h-6 text-orange-400 mr-2" />
                Beginner Tips and Tricks
              </CardTitle>
              <CardDescription className="text-green-200">
                Essential advice for new players to get a strong start in the forest.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {beginnerTips.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="list-disc list-inside text-green-200 space-y-1">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="multiplayer" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-6 h-6 text-orange-400 mr-2" />
                {multiplayerGuide.title}
              </CardTitle>
              <CardDescription className="text-green-200">
                {multiplayerGuide.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-green-200 space-y-2">
                {multiplayerGuide.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Gem className="w-6 h-6 text-orange-400 mr-2" />
                Managing Resources
              </CardTitle>
              <CardDescription className="text-green-200">
                Efficiently gather and store resources to ensure your survival.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {resourceManagement.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="list-disc list-inside text-green-200 space-y-1">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Home className="w-6 h-6 text-orange-400 mr-2" />
                {baseBuilding.title}
              </CardTitle>
              <CardDescription className="text-green-200">
                {baseBuilding.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {baseBuilding.archetypes.map((archetype, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-orange-400">{archetype.name}</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div>
                      <p className="text-green-300 font-medium">Pros:</p>
                      <ul className="list-disc list-inside text-green-200 text-sm">
                        {archetype.pros.map((pro, proIndex) => (
                          <li key={proIndex}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-300 font-medium">Cons:</p>
                      <ul className="list-disc list-inside text-green-200 text-sm">
                        {archetype.cons.map((con, conIndex) => (
                          <li key={conIndex}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-6 h-6 text-orange-400 mr-2" />
                Advanced Tips and Tricks
              </CardTitle>
              <CardDescription className="text-green-200">
                Refine your gameplay with these expert strategies for late-game survival.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {advancedTips.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="list-disc list-inside text-green-200 space-y-1">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StrategiesPage

