import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import Contact from './components/Contact';
import Services from './components/Services';
import Error from './components/Error';
import Menu from './components/Menu';
import Bmi from './components/Bmi';

import Card from './components/Card';


const App = () => {
  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/table' component={Table} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/bmi' component={Bmi} />
        <Route path='/card' component={Card} />
        <Route component={Error} />
      </Switch>

      {/* <Card 
            imgsrc = ''
            title = 'Shimla'
            sname = 'Explore Shimla'
            link = 'https://en.wikipedia.org/wiki/Shimla'
        />
        <Card
            imgsrc = ''
            title = 'Goa'
            sname = 'Explore Goa'
            link = 'https://en.wikipedia.org/wiki/Goa'
        />
        <Card 
            imgsrc = ''
            title = 'Udaipur'
            sname = 'Explore Udiapur'
            link = 'https://en.wikipedia.org/wiki/Udaipur'
        /> */}
      
    </>
  )

};

export default App;
