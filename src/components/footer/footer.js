import React, {Component} from 'react';
import NavigationList from '../navigationList';
import logo from '../../images/Logo_black.svg';
import beansLogo from '../../images/Beans_logo_dark.svg';


class Footer extends Component {


  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <NavigationList position={false} logo={logo}/>
            </div>
          </div>
          <img className="beanslogo" src={beansLogo} alt="Beans logo" />
        </div>
      </footer>
    )
  }
}


export default Footer