import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import LandingPage from './common/LandingPage'
import Register from './auth/Register'
import Navbar from './common/Navbar'
import Login from './auth/Login'
import Footer from './common/FooterFiles/Footer'
import Stories from './common/FooterFiles/Stories'
import About from './common/FooterFiles/About'
import Keto from './common/FooterFiles/Keto'
import RecipesPage from './common/recipes/Recipes'
import ShowRecipes from './common/recipes/ShowRecipe'


function App() {
  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/recipes')
  //     console.log(res.data)
  //   }
  //   getData()
  // })

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/recipes/:recipeId">
          <ShowRecipes />
        </Route>
        <Route exact path="/recipes">
          <RecipesPage />
        </Route>        
      </Switch>
      <Footer />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/whatisketo" component={Keto}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App