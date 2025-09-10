import { useState } from 'react'
import { Star, Diamond, Filter, Search, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ClassesPage = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [starFilter, setStarFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')

  const classes = [
    { name: "Camper", cost: 10, stars: 1, description: "Basic survival class with reduced hunger drain", starter: "Flashlight", image: "🏕️" },
    { name: "Scavenger", cost: 25, stars: 1, description: "extra bag space", starter: "None", image: "🔍" },
    { name: "Base Defender", cost: 40, stars: 2, description: "Can upgrade traps and defenses", starter: "Bear Trap", image: "🛡️" },
    { name: "Medic", cost: 40, stars: 2, description: "Faster revival and improved recovery", starter: "Bandage", image: "🏥" },
    { name: "Cook", cost: 40, stars: 2, description: "Seasoned food restores more hunger", starter: "Seasoning", image: "👨‍🍳" },
    { name: "Hunter", cost: 40, stars: 2, description: "Increased meat drops from animals", starter: "Bear Trap", image: "🏹" },
    { name: "Decorator", cost: 40, stars: 2, description: "Furniture trader with decorative items", starter: "Hammer", image: "🔨" },
    { name: "Support", cost: 45, stars: 2, description: "Bonds with players for mutual benefits", starter: "Bandage", image: "🤝" },
    { name: "Fisherman", cost: 50, stars: 2, description: "Fishing rod casts faster", starter: "Fishing Rod", image: "🎣" },
	{ name: "Gambler", cost: 55, stars: 3, description: "50/50 chance of upgrading/downgrading standard chests on opening it: "Random Item", image: "🎲" },
    { name: "Ranger", cost: 70, stars: 3, description: "Start with 18 ammo", starter: "Flashlight & Revolver", image: "🌲" },
    { name: "Lumberjack", cost: 70, stars: 3, description: "Bonus saplings from trees", starter: "Good Axe", image: "🪓" },
    { name: "Farmer", cost: 80, stars: 3, description: "Use watering can for faster crop growth", starter: "Watering Can", image: "🌱" },
	{ name: "Brawler", cost: 100, stars: 3, description: "Can't use ranged weapons but deals more damage", starter: "Apple Body", image: "👊" },
    { name: "Alien", cost: 100, stars: 3, description: "Night Sight and Alien Tech ", starter: "RayGun", image: "🔫" },
    { name: "Berserker", cost: 100, stars: 3, description: "auto-revive with low HP and hunger", starter: "Medkitd", image: "👊" },
    { name: "Chef", cost: 150, stars: 4, description: "Chef station and recipe book for advanced cooking", starter: "Chef Station Blueprint & Recipe Book", image: "👨‍🍳" },
	{ name: "Blacksmith", cost: 200, stars: 4, description: "You can craft items in the next crafting bench tier", starter: "Hammer", image: "🔨" },
	{ name: "Poison Master", cost: 200, stars: 4, description: "Your poison effects are stronger", starter: "Blow gun and Armor", image: "☠️" },
    { name: "Assassin", cost: 500, stars: 5, description: "Stealth specialist with unique Katana", starter: "Katana", image: "🗡️" },
    { name: "Cyborg", cost: 600, stars: 5, description: "Block incoming damage with advanced tech", starter: "Alien Armor + Laser", image: "🤖" },
    { name: "Pyromaniac", cost: 600, stars: 5, description: "Master of fire with exclusive Flamethrower", starter: "Flamethrower", image: "🔥" },
    { name: "Big Game Hunter", cost: 600, stars: 5, description: "Increased pet droprate from entities", starter: "Rifle", image: "🦌" }
  ]

  const filteredClasses = classes.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStars = starFilter === 'all' || classItem.stars.toString() === starFilter
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'cheap' && classItem.cost <= 50) ||
                        (priceFilter === 'medium' && classItem.cost > 50 && classItem.cost <= 200) ||
                        (priceFilter === 'expensive' && classItem.cost > 200)
    
    return matchesSearch && matchesStars && matchesPrice
  })

  const getStarColor = (stars) => {
    switch(stars) {
      case 1: return 'text-gray-400'
      case 2: return 'text-blue-400'
      case 3: return 'text-purple-400'
      case 4: return 'text-yellow-400'
      case 5: return 'text-orange-400'
      default: return 'text-gray-400'
    }
  }

  const getFrameColor = (stars) => {
    switch(stars) {
      case 1: return 'border-gray-500/50'
      case 2: return 'border-blue-500/50'
      case 3: return 'border-purple-500/50'
      case 4: return 'border-yellow-500/50'
      case 5: return 'border-orange-500/50 shadow-orange-500/20 shadow-lg'
      default: return 'border-gray-500/50'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Classes Guide
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          Master all 23 classes in 99 Nights in the Forest. Each class offers unique perks, 
          starter items, and progression paths to enhance your survival experience.
        </p>
      </section>

      {/* Class System Overview */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">How Classes Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Stock System</h3>
            <p className="text-green-200">Random selection available every 24 hours</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Currency</h3>
            <p className="text-green-200">Purchase with Diamonds when in stock</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Leveling</h3>
            <p className="text-green-200">3 levels max, unlock new perks each level</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Talents</h3>
            <p className="text-green-200">Add random perks from other classes</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-4 h-4" />
            <Input
              placeholder="Search classes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-black/20 border-green-700/50 text-white placeholder-green-400 focus:border-green-500"
            />
          </div>
          
          <div className="flex gap-4">
            <Select value={starFilter} onValueChange={setStarFilter}>
              <SelectTrigger className="w-32 bg-black/20 border-green-700/50 text-white">
                <SelectValue placeholder="Stars" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-32 bg-black/20 border-green-700/50 text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="cheap">≤ 50 💎</SelectItem>
                <SelectItem value="medium">51-200 💎</SelectItem>
                <SelectItem value="expensive">&gt; 200 💎</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredClasses.map((classItem, index) => (
          <Card 
            key={index} 
            className={`bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group ${getFrameColor(classItem.stars)}`}
          >
            <CardHeader className="text-center pb-3">
              <div className="text-4xl mb-2">{classItem.image}</div>
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors text-lg">
                {classItem.name}
              </CardTitle>
              
              <div className="flex items-center justify-center space-x-3">
                <Badge variant="outline" className="border-orange-500 text-orange-400">
                  <Diamond className="w-3 h-3 mr-1" />
                  {classItem.cost}
                </Badge>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < classItem.stars ? `${getStarColor(classItem.stars)} fill-current` : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <CardDescription className="text-green-200 text-center text-sm mb-3">
                {classItem.description}
              </CardDescription>
              
              <div className="text-center">
                <Badge variant="secondary" className="bg-green-700/30 text-green-300 text-xs">
                  Starter: {classItem.starter}
                </Badge>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-3 text-orange-400 hover:text-white hover:bg-orange-600/20"
                onClick={() => onPageChange(`class-${classItem.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                View Details
                <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* No Results */}
      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-green-200 text-lg">No classes found matching your filters.</p>
          <Button 
            variant="outline" 
            className="mt-4 border-green-500 text-green-300 hover:bg-green-500 hover:text-white"
            onClick={() => {
              setSearchTerm('')
              setStarFilter('all')
              setPriceFilter('all')
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Class Comparison Tool */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h2>
        <p className="text-green-200 mb-6">
          Use our interactive class comparison tool to find the perfect class for your playstyle.
        </p>
        <Button 
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white"
          onClick={() => onPageChange('class-comparison')}
        >
          Compare Classes
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>
    </div>
  )
}

export default ClassesPage

