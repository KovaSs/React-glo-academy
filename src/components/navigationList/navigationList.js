import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavigationList extends Component {

  render() {

    const {logo, position} = this.props;
    const ulClass = (position === true) ? 'header' : 'footer';
    const liClass = (position === true) ? 'header__item' : 'footer__item';


    return (
      <ul className={ulClass}>
        <li className={liClass}>
          <Link to='/'><img src={logo} alt="logo" /></Link>
        </li>
        <li className={liClass}>
          <Link to='/our-coffe/'>Our coffee</Link>
        </li>
        <li className={liClass}>
          <Link to='/for-your-pleasure/'>For your pleasure</Link>
        </li>
        <li className={liClass}>
          <Link to='/contact-us/'>Contact us</Link>
        </li>
      </ul>
    )
  }
}


export default NavigationList