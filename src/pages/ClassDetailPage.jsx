import { useState } from 'react'
import { ArrowLeft, Star, Diamond, Target, Shield, Zap, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { getClassByName } from '../data/classesData'

const ClassDetailPage = ({ className, onPageChange }) => {
  const classData = getClassByName(className)
  
  if (!classData) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Class Not Found</h1>
        <p className="text-green-200 text-lg mb-6">The requested class could not be found.</p>
        <Button onClick={() => onPageChange('classes')} className="bg-orange-600 hover:bg-orange-700">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Classes
        </Button>
      </div>
    )
  }

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

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes('Easy')) return 'bg-green-600'
    if (difficulty.includes('Medium')) return 'bg-yellow-600'
    if (difficulty.includes('Hard')) return 'bg-red-600'
    return 'bg-gray-600'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-4">
        <Button 
          variant="ghost" 
          onClick={() => onPageChange('classes')}
          className="text-green-300 hover:text-white hover:bg-green-700/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Classes
        </Button>
        
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">{classData.image}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {classData.name}
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            {classData.description}
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-orange-500 text-orange-400 text-lg px-3 py-1">
                <Diamond className="w-4 h-4 mr-1" />
                {classData.cost}
              </Badge>
            </div>
            
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < classData.stars ? `${getStarColor(classData.stars)} fill-current` : 'text-gray-600'}`} 
                />
              ))}
            </div>
            
            <Badge className={`${getDifficultyColor(classData.difficulty)} text-white`}>
              {classData.difficulty}
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-4">
        <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-sm text-green-300">Playstyle</div>
            <div className="font-semibold text-white">{classData.playstyle}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-sm text-green-300">Difficulty</div>
            <div className="font-semibold text-white">{classData.difficulty}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-sm text-green-300">Starter Items</div>
            <div className="font-semibold text-white">{classData.starterItems.join(', ')}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-sm text-green-300">Star Rating</div>
            <div className="font-semibold text-white">{classData.stars}/5 Stars</div>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/20 border-green-700/30">
          <TabsTrigger value="overview" className="data-[state=active]:bg-green-600">Overview</TabsTrigger>
          <TabsTrigger value="progression" className="data-[state=active]:bg-green-600">Progression</TabsTrigger>
          <TabsTrigger value="strategy" className="data-[state=active]:bg-green-600">Strategy</TabsTrigger>
          <TabsTrigger value="synergies" className="data-[state=active]:bg-green-600">Team Play</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Class Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-200 leading-relaxed">{classData.guide.overview}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {classData.guide.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-green-200">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {classData.guide.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-green-200">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progression" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Level Progression</CardTitle>
              <CardDescription className="text-green-200">
                Unlock new abilities and perks as you level up your class
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(classData.levels).map(([level, data]) => (
                <div key={level} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{level}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Level {level}</h3>
                  </div>
                  
                  <div className="ml-11 space-y-2">
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-1">Perks:</h4>
                      <ul className="space-y-1">
                        {data.perks.map((perk, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-green-200">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-1">Requirements:</h4>
                      <p className="text-green-200">{data.requirements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategy" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Strategy Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Pro Tips</h3>
                <ul className="space-y-2">
                  {classData.guide.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-green-200">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Counters & Weaknesses</h3>
                <ul className="space-y-2">
                  {classData.guide.counters.map((counter, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-green-200">{counter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="synergies" className="space-y-6">
          <Card className="bg-black/20 border-green-700/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Team Synergies
              </CardTitle>
              <CardDescription className="text-green-200">
                Learn which classes work best together with {classData.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {classData.guide.synergies.map((synergy, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-200">{synergy}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Classes */}
      <section className="bg-black/20 backdrop-blur-sm rounded-lg border border-green-700/30 p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Explore More Classes</h2>
        <p className="text-green-200 mb-6">
          Discover other classes that complement {classData.name} or explore different playstyles.
        </p>
        <Button 
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white"
          onClick={() => onPageChange('classes')}
        >
          View All Classes
        </Button>
      </section>
    </div>
  )
}

export default ClassDetailPage

