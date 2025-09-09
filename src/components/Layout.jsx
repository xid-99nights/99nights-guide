import { useState } from 'react'
import { Menu, X, Home, Users, Cog, Map, Target, Info, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Layout = ({ children, currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'getting-started', label: 'Getting Started', icon: Target },
    { id: 'classes', label: 'Classes Guide', icon: Users },
    { id: 'mechanics', label: 'Game Mechanics', icon: Cog },
    { id: 'world', label: 'World Guide', icon: Map },
    { id: 'strategies', label: 'Strategies', icon: Target },
    { id: 'info', label: 'Game Info', icon: Info },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-700/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">99</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">99 Nights in the Forest</h1>
                <p className="text-green-300 text-sm">Player's Guide</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    className={`text-sm ${
                      currentPage === item.id 
                        ? "bg-green-600 text-white hover:bg-green-700" 
                        : "text-green-100 hover:text-white hover:bg-green-700/50"
                    }`}
                    onClick={() => onPageChange(item.id)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                )
              })}
            </nav>

            {/* Search */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-4 h-4" />
                <Input
                  placeholder="Search guide..."
                  className="pl-10 bg-black/20 border-green-700/50 text-white placeholder-green-400 focus:border-green-500"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-green-700/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-sm border-t border-green-700/30">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start text-sm ${
                      currentPage === item.id 
                        ? "bg-green-600 text-white" 
                        : "text-green-100 hover:text-white hover:bg-green-700/50"
                    }`}
                    onClick={() => {
                      onPageChange(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                )
              })}
              <div className="pt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-4 h-4" />
                  <Input
                    placeholder="Search guide..."
                    className="pl-10 bg-black/20 border-green-700/50 text-white placeholder-green-400 focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-green-700/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-green-300">
            <p className="text-sm">
              Unofficial guide for 99 Nights in the Forest by Grandma's Favorite Games
            </p>
            <p className="text-xs mt-2 text-green-400">
              This guide is community-maintained and not affiliated with the official game developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

