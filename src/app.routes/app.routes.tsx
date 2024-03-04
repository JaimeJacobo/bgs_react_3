// React
import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

// Pages
const HomePage = lazy(() => import('../pages/home'))
const RandomBeerPage = lazy(() => import('../pages/random-beers-page'))
const AllBeersPage = lazy(() => import('../pages/all-beers-page'))

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/random-users"
            element={<RandomBeerPage></RandomBeerPage>}
          ></Route>
          <Route
            path="/all-users"
            element={<AllBeersPage></AllBeersPage>}
          ></Route>
          <Route
            path="/all-users/:page"
            element={<AllBeersPage></AllBeersPage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  )
}