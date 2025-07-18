import { useState } from "react"
import { Header, Navigation } from "./components"
import type { Project } from "./types";

function App() {

  const [tabActiveIndex, setActiveIndex] = useState<number>(1)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (    
    <div className='bg-slate-50 min-h-screen'>
      <main className="container py-10">
        <Header />      
        <Navigation 
          tabActiveIndex={tabActiveIndex}
          setTabActiveIndex={setActiveIndex}
        />
      </main>
    </div>    
  )
}

export default App
