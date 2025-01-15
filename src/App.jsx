import './App.css'
import PirateSpeakConverter from './Components/PirateSpeakConverter'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
      <div className="main">
      <PirateSpeakConverter/>
      </div>
    </>
  )
}

export default App
