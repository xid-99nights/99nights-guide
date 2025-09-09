import { Clock, Shield, Hammer, Users, Target, AlertTriangle, Lightbulb, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const GettingStartedPage = () => {
  const essentialTips = [
    {
      icon: Clock,
      title: "First Night Priority",
      description: "Explore the small map. Kill rabbits to try and get rabbit foot find food and wood bring it back to came you have all night to explore the first day. The Deer wont attack the first night.",
      priority: "Critical"
    },
    {
      icon: Hammer,
      title: "Resource Gathering",
      description: "Collect wood, and food during the day. Resources are scarce to find at night.",
      priority: "High"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Work with other players. Survival is nearly impossible alone.",
      priority: "High"
    },
    {
      icon: Shield,
      title: "Defense Setup",
      description: "Build and plant trees to make walls and trap around your camp.  The Cultists will attack your base.",
      priority: "Medium"
    }
  ]

  const survivalSteps = [
    {
      step: 1,
      title: "Choose Your Class",
      description: "Select a class that matches your playstyle. Camper is great for beginners.",
      details: ["Visit the General Store in the lobby", "Check which classes are in stock", "Start with cheaper classes (10-50 diamonds)"]
    },
    {
      step: 2,
      title: "Gather Basic Resources",
      description: "Collect essential materials for your first night.",
      details: ["Chop trees for wood - Used for Fire and Bulding", "Look for food sources - Carrots, Berries, Rabit, Wolf", "Search chests for items", "Search for Scrap Metal - for Building" ]
    },
    {
      step: 3,
      title: "Build Your Camp",
      description: "Keep your fire Burning Strong",
      details: ["Dont let your fire burn low", "Build walls around your area", "Hot Big Fire is what will keep you alive" "Build your Camp your way"]
    },
    {
      step: 4,
      title: "Prepare for Night",
      description: "Get ready before the Deer becomes active.",
      details: ["Stock up on food", "Find weapons", "Set up defensive structures", "Stay near your campfire"]
    }
  ]

  const commonMistakes = [
    "Wandering alone at night",
    "Not building defenses early",
    "Ignoring the campfire",
    "Fighting without preparation",
    "Not coordinating with teammates"
  ]

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'bg-red-600'
      case 'High': return 'bg-orange-600'
      case 'Medium': return 'bg-yellow-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Getting Started
        </h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          Essential survival tips for your first nights in the forest. Learn the basics 
          to stay alive and work towards rescuing the missing children.
        </p>
      </section>

      {/* Critical Alert */}
      <Alert className="bg-red-900/20 border-red-500/50">
        <AlertTriangle className="h-4 w-4 text-red-400" />
        <AlertTitle className="text-red-300">Important Warning</AlertTitle>
        <AlertDescription className="text-red-200">
          The Deer is extremely dangerous and becomes active at night. Never venture out alone 
          after dark without proper preparation and teammates.
        </AlertDescription>
      </Alert>

      {/* Essential Tips */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Essential Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {essentialTips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <Card key={index} className="bg-black/20 border-green-700/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="w-8 h-8 text-orange-400" />
                    <Badge className={`${getPriorityColor(tip.priority)} text-white`}>
                      {tip.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-200">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Your First Night</h2>
        <div className="space-y-6">
          {survivalSteps.map((step, index) => (
            <Card key={index} className="bg-black/20 border-green-700/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                    <CardDescription className="text-green-200">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-green-200">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-red-700/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
          Common Mistakes to Avoid
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
              <span className="text-red-200">{mistake}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Game Objective */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your Mission</h2>
        <p className="text-green-200 text-lg mb-4">
          Your ultimate goal is to survive 99 nights while searching for and rescuing 
          four missing children scattered throughout the forest.
        </p>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">4</div>
            <div className="text-sm text-green-300">Missing Children</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">99+</div>
            <div className="text-sm text-green-300">Nights to Survive</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">1</div>
            <div className="text-sm text-green-300">Terrifying Deer & Giant Owl</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">∞</div>
            <div className="text-sm text-green-300">Cultists & Beasts</div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 text-yellow-400 mr-2" />
          Quick Survival Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Day Activities</h3>
            <ul className="space-y-1 text-green-200">
              <li>• Gather resources actively</li>
              <li>• Explore safely with teammates</li>
              <li>• Build and upgrade defenses</li>
              <li>• Search for children clues</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Night Survival</h3>
            <ul className="space-y-1 text-green-200">
              <li>• Stay near campfire</li>
              <li>• Keep weapons ready</li>
              <li>• Watch for Deer attacks</li>
              <li>• Coordinate with team</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-orange-400">Resource Management</h3>
            <ul className="space-y-1 text-green-200">
              <li>• Prioritize food and wood</li>
              <li>• Share resources with team</li>
              <li>• Store items at Camp</li>
              <li>• Plan for long-term survival</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GettingStartedPage

