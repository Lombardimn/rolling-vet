import { PublicRoutes, PrivateRoutes, Roles } from "./models"
import { BrowserRouter, Route } from "react-router-dom"
import { RoutesWithNotFounds } from "./utilities"
import { AuthGuard, RoleGuard } from "./guards"
import { LandingPage, Dashboard } from "./pages"
import { lazy, Suspense } from "react"


const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

const App = () => {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <BrowserRouter>
          <RoutesWithNotFounds>
              <Route path={PublicRoutes.LANDING} element={<LandingPage />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN}/>}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
          </RoutesWithNotFounds>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
