import { paths } from "./models"
import { LandingPage } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={paths.LANDING_PAGE} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
