import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Auctions from './Auctions'
import Celebrity from './Celebrity'
import About from './About'
import Art1 from './Art1'
import User1 from './User1'
import Dashboard from './Dashboard'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/auctions' component={Auctions}/>
      <Route path='/profile' component={Celebrity}/>
      <Route path='/art1' component={Art1}/>
      <Route path='/about' component={About}/>
      <Route path='/user1' component={User1}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>

  </main>
)

export default Main
