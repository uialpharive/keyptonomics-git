
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <h1 className="text-4xl font-bold">Hello, Tailwind Dark Mode! 🌗</h1>
      <p className="mt-2">Click the button to switch themes.</p>
      <ThemeToggle />
    </div>

    </>
  )
}

export default App
