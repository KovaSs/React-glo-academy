import React, {Component} from 'react';
import MainPage from '../pages/mainPage';
import OurCoffePage from '../pages/ourCoffePage';
import ForYourPleasurePage from '../pages/forYourPleasurePage';
import ContactUsPage from '../pages/contactUsPage';
import CoffeItemPage from '../pages/coffeItemPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/our-coffe' exact component={OurCoffePage}/>
          <Route path='/for-your-pleasure' exact component={ForYourPleasurePage}/>
          <Route path='/contact-us' exact component={ContactUsPage}/>
          <Route path='/our-coffe/:id' exact component={CoffeItemPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App