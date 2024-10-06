import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
    </ThemeProvider>
  )
}

export default App
