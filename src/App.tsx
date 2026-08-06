import { useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Capabilities from './pages/Capabilities'
import Products from './pages/Products'
import Industries from './pages/Industries'
import Quality from './pages/Quality'
import Facilities from './pages/Facilities'
import Resources from './pages/Resources'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import RequestQuote from './pages/RequestQuote'

export type Page =
  | 'home'
  | 'about'
  | 'capabilities'
  | 'products'
  | 'industries'
  | 'quality'
  | 'facilities'
  | 'resources'
  | 'careers'
  | 'contact'
  | 'quote'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':        return <Home navigate={navigate} />
      case 'about':       return <About navigate={navigate} />
      case 'capabilities':return <Capabilities navigate={navigate} />
      case 'products':    return <Products navigate={navigate} />
      case 'industries':  return <Industries navigate={navigate} />
      case 'quality':     return <Quality navigate={navigate} />
      case 'facilities':  return <Facilities navigate={navigate} />
      case 'resources':   return <Resources navigate={navigate} />
      case 'careers':     return <Careers navigate={navigate} />
      case 'contact':     return <Contact navigate={navigate} />
      case 'quote':       return <RequestQuote navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-navy">
      <Navigation currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
