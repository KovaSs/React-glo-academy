import React, {Component} from 'react';
import NavigationList from '../navigationList';
import logo from '../../images/Logo.svg';
import beansLogo from '../../images/Beans_logo.svg';
import { Link } from 'react-scroll';


const MainPageContent = () => {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h1 className="title-big">Everything You Love About Coffee</h1>
        <img className="beanslogo" src={beansLogo} alt="Beans logo" />
        <div className="preview__subtitle">We makes every day full of energy and taste</div>
        <div className="preview__subtitle">Want to try our beans?</div>
        <Link to='about' className="preview__btn" smooth={true} duration= {500}>More</Link>
      </div>
    </div>
  )
}


class Header extends Component {

  render() {
    const {pageType, header} = this.props;

    const HeaderContent = () => {
      return(
        <h1 className="title-big">{header}</h1>
      )
    }

    const content = (pageType === 'MAIN_PAGE') ? <MainPageContent/> : <HeaderContent/>;
    const wrapperClass = (pageType === 'MAIN_PAGE') ? 'preview' : 'banner';

    return (
      <div className={wrapperClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <header>
                <NavigationList position={true} logo={logo}/>
              </header>
            </div>
          </div>
          {content}
        </div>
      </div>
    )
  }
}

export default Header