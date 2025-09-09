import { useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ClassesPage from './pages/ClassesPage'
import GettingStartedPage from './pages/GettingStartedPage'
import GameMechanicsPage from './pages/GameMechanicsPage'
import ClassDetailPage from './pages/ClassDetailPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    // Handle class detail pages
    if (currentPage.startsWith('class-')) {
      const className = currentPage.replace('class-', '').replace(/-/g, ' ')
      return <ClassDetailPage className={className} onPageChange={setCurrentPage} />
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />
      case 'classes':
        return <ClassesPage onPageChange={setCurrentPage} />
      case 'getting-started':
        return <GettingStartedPage />
      case 'mechanics':
        return <GameMechanicsPage />
      case 'world':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-white mb-4">World Guide</h1>
            <p className="text-green-200 text-lg">Coming soon! Explore locations, entities, items, and hidden secrets.</p>
          </div>
        )
      case 'strategies':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-white mb-4">Strategies</h1>
            <p className="text-green-200 text-lg">Coming soon! Advanced tactics and survival strategies.</p>
          </div>
        )
      case 'info':
        return (
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-white mb-4">Game Info</h1>
            <p className="text-green-200 text-lg">Coming soon! Updates, patches, badges, achievements, and lore.</p>
          </div>
        )
      default:
        return <HomePage onPageChange={setCurrentPage} />
    }
  }

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}

export default App

