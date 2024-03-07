import './App.css'

import {AppRoutes} from './app.routes/app.routes'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
    </div>
  )
}

export default App
