import { ArrowRight, Users, Map, Cog, Target, Star, Clock, Diamond, BookOpen, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const HomePage = ({ onPageChange }) => {
  const featuredClasses = [
    {
      name: "Pyromaniac",
      cost: 600,
      stars: 5,
      description: "Master of fire with exclusive Flamethrower",
      image: "🔥"
    },
    {
      name: "Assassin",
      cost: 400,
      stars: 4,
      description: "Stealth specialist with unique Katana",
      image: "🗡️"
    },
    {
      name: "Medic",
      cost: 40,
      stars: 2,
      description: "Team support with healing abilities",
      image: "🏥"
    }
  ]

  const quickStats = [
    { label: "Total Classes", value: "23", icon: Users },
    { label: "Game Locations", value: "32+", icon: Map },
    { label: "Survival Days", value: "99", icon: Clock },
    { label: "Max Class Level", value: "3", icon: Star }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Survive the <span className="text-orange-400">99 Nights</span>
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Your comprehensive guide to mastering 99 Nights in the Forest. Learn classes, strategies, 
            and survival techniques to rescue the missing children and escape the forest.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white"
            onClick={() => onPageChange('getting-started')}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-500 text-green-300 hover:bg-green-500 hover:text-white"
            onClick={() => onPageChange('classes')}
          >
            Explore Classes
            <Users className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="bg-black/20 border-green-700/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-green-300">{stat.label}</div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* Featured Classes */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Classes</h2>
          <p className="text-green-200">Discover powerful classes with unique abilities and playstyles</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredClasses.map((classItem, index) => (
            <Card key={index} className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{classItem.image}</div>
                <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                  {classItem.name}
                </CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <Badge variant="outline" className="border-orange-500 text-orange-400">
                    <Diamond className="w-3 h-3 mr-1" />
                    {classItem.cost}
                  </Badge>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < classItem.stars ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-200 text-center">
                  {classItem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-green-500 text-green-300 hover:bg-green-500 hover:text-white"
            onClick={() => onPageChange('classes')}
          >
            View All Classes
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Explore the Guide</h2>
          <p className="text-green-200">Jump to the section you need most</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onPageChange('getting-started')}
          >
            <CardHeader>
              <Target className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                Getting Started
              </CardTitle>
              <CardDescription className="text-green-200">
                Essential survival tips for your first nights in the forest
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onPageChange('mechanics')}
          >
            <CardHeader>
              <Cog className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                Game Mechanics
              </CardTitle>
              <CardDescription className="text-green-200">
                Deep dive into crafting, building, combat, and fishing systems
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onPageChange('world-guide')}
          >
            <CardHeader>
              <Map className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                World Guide
              </CardTitle>
              <CardDescription className="text-green-200">
                Explore locations, entities, items, and hidden secrets
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onPageChange('strategies')}
          >
            <CardHeader>
              <BookOpen className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                Strategies
              </CardTitle>
              <CardDescription className="text-green-200">
                Tips, tricks, and advanced tactics for survival
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="bg-black/20 border-green-700/30 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onPageChange('game-info')}
          >
            <CardHeader>
              <Info className="w-8 h-8 text-orange-400 mb-2" />
              <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
                Game Info
              </CardTitle>
              <CardDescription className="text-green-200">
                Latest updates, patches, and achievements
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Game Overview */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">About 99 Nights in the Forest</h2>
          <p className="text-green-200 text-lg leading-relaxed">
            99 Nights in the Forest is a survival horror game on Roblox where players must work together 
            to build a camp, survive against hostile creatures, and rescue four missing children. 
            Face the terrifying Deer, its Cultists, and other dangerous beasts while managing resources, 
            crafting equipment, and utilizing unique class abilities over 99 challenging nights.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="secondary" className="bg-green-700/50 text-green-200">Survival Horror</Badge>
            <Badge variant="secondary" className="bg-green-700/50 text-green-200">Multiplayer</Badge>
            <Badge variant="secondary" className="bg-green-700/50 text-green-200">Base Building</Badge>
            <Badge variant="secondary" className="bg-green-700/50 text-green-200">Class System</Badge>
            <Badge variant="secondary" className="bg-green-700/50 text-green-200">Roblox</Badge>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

