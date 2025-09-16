import { Map, TreeDeciduous, Snowflake, Flame, Skull, Rabbit, Wolf, Bear, Eye, Users, Gem, Mountain, Tent } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const WorldGuidePage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          World Guide: Exploring 99 Nights in the Forest
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          99 Nights in the Forest is a survival horror game set in a mysterious forest environment. Players must navigate this dangerous world, gather resources, build defenses, and rescue missing children while fending off hostile creatures and cultists. The forest itself is a character, with various biomes, hidden locations, and dynamic elements that change with the progression of nights.
        </p>
      </section>

      {/* Biomes Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Biomes</h2>
        <p className="text-green-200 text-center max-w-3xl mx-auto">
          The world of 99 Nights in the Forest is comprised of several distinct biomes, each with its own unique characteristics, resources, and challenges. Recent updates have introduced new biomes, expanding the world and providing new areas to explore.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <TreeDeciduous className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Forest</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                The starting biome, characterized by a dense forest, a variety of wildlife, and the primary location for building your base.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Snowflake className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Snow Biome</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A frozen wasteland with unique creatures like Mammoths and Polar Bears, as well as valuable resources like Ice and Arctic Fox Pelts. This biome was introduced in the Snow Biome Update on August 1, 2025 [4].
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Flame className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Volcanic Biome</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A new and dangerous biome introduced on September 13, 2025, featuring a volcano, new enemies like the Mega Cultist and Scorpion, and unique items such as the Inferno Sword and Wildfire Potion [4].
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Landmarks Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Landmarks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Tent className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">The Campfire</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                The heart of your base and the key to survival. Upgrading the campfire expands the map, provides warmth, and allows you to cook food.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Skull className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Cultist Stronghold</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A high-risk, high-reward location where players can battle powerful cultists to earn diamonds and other valuable loot.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Mountain className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Caves</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                Found throughout the world, caves are where the missing children are held captive. Rescuing them is a key objective in the game.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Map className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">The Alien Mothership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A mysterious and technologically advanced location that can be accessed through teleporters found at UFO crash sites. This landmark was introduced in the Alien Invasion 2025 update on July 18, 2025 [4].
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entities and Wildlife Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Entities and Wildlife</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Rabbit className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Wildlife</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-200">
                <li><span className="font-semibold text-orange-400">Rabbits:</span> Primary source of food (raw meat) and Rabbit's Foot, crucial for trading with the Pelt Trader [2, 3].</li>
                <li><span className="font-semibold text-orange-400">Wolves/Alpha Wolves:</span> Hostile creatures encountered in the forest. Alpha Wolves are tougher and guard some missing children's locations [1].</li>
                <li><span className="font-semibold text-orange-400">Bears:</span> Highly dangerous creatures, especially guarding later missing children locations. Require powerful weapons or strategic use of traps to defeat [1].</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Eye className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Hostile Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-200">
                <li><span className="font-semibold text-orange-400">The Deer:</span> The main antagonist, a terrifying entity active at night. Stay near camp when it's lurking [2].</li>
                <li><span className="font-semibold text-orange-400">Cultists:</span> Followers of The Deer, they attack the player's base. Crossbow cultists are particularly dangerous [3].</li>
                <li><span className="font-semibold text-orange-400">The Owl:</span> A flying monstrosity appearing after the fifth night. Cannot be killed but can be stunned with a flashlight. Gets faster as it chases you [2].</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <TreeDeciduous className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Wood</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                The most basic and essential resource, used for building structures, crafting tools, and fueling the campfire [1].
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Cog className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Scrap</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A versatile resource used for crafting a wide range of items, including beds, storage, and base defenses [1].
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Rabbit className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Pelts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                Obtained by hunting animals, pelts are used for crafting clothing, armor, and other specialized items [1].
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Flame className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Flammable Items</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                Coal, fuel canisters, and biofuel are essential for upgrading the campfire to higher levels [1].
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <Gem className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white">Gems</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-200">
                A premium currency used to purchase classes and other special items. Gems can be earned by completing badges and clearing the Cultist Stronghold [5].
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hidden Secrets and Lore */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Hidden Secrets and Lore</h2>
        <p className="text-green-200 leading-relaxed">
          The game's lore is expanded weekly with new content, suggesting a deeper narrative around the terrifying Deer and its cultists [3]. The game is said to be based on a true story and myths, with some details altered or omitted [1]. Players are tasked with uncovering the mystery while surviving the 99 nights and rescuing the four missing children. Further exploration and engagement with game updates are key to uncovering these secrets.
        </p>
      </section>

      {/* References */}
      <section className="space-y-4 text-sm text-green-300">
        <h2 className="text-2xl font-bold text-white">References</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><a href="https://99-nights-in-the-forest.fandom.com/wiki/Tips_And_Tricks" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Tips And Tricks | 99 Nights in the Forest Wiki - Fandom</a></li>
          <li><a href="https://www.pcgamer.com/games/roblox/99-nights-in-the-forest-tips/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">99 Nights in the Forest tips for surviving The Deer, base building, and classes | PC Gamer</a></li>
          <li><a href="https://www.vg247.com/99-nights-in-the-forest-survive" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">How to survive for 99 nights in 99 Nights in the Forest | VG247</a></li>
          <li><a href="https://99-nights-in-the-forest.fandom.com/wiki/Update_Log" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Update Log | 99 Nights in the Forest Wiki - Fandom</a></li>
          <li><a href="https://99-nights-in-the-forest.fandom.com/wiki/Badges" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Badges | 99 Nights in the Forest Wiki - Fandom</a></li>
        </ol>
      </section>
    </div>
  )
}

export default WorldGuidePage

