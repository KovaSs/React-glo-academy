import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import GotService from '../../../server/getService';
import BestItem from '../../bestItem';


class MainPage extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      bestData: null
    }
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.loadJson().then(({coffee}) => {
      this.setState(() => {
        const bestsellers = coffee.filter((item) => item.best === true)
        return {
          bestData: bestsellers
        }
      })
    })
  }

  render(){
    const {bestData} = this.state;

    let content = [];
    if (bestData) {
      content = bestData.map((item) => {
        return (
          <BestItem
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            price={item.price}
          />
        )
      })
    }

    return (
      <>
        <Header pageType='MAIN_PAGE' header=''/>

        <section id='about' className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                  <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                  <div className="about__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.<br /><br/>

                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="best">
          <div className="container">
            <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
}


export default MainPage