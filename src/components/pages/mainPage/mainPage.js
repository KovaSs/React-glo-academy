import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import GotService from '../../../server/getService';
import BestItem from '../../bestItem';
import ErrorBlock from '../../error';
import SpinnerLoad from '../../spinner';


class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bestData: null,
      loading: true,
      error: false
    }
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.loadJson()
      .then(({coffee}) => {
        this.setState(() => {
          const bestsellers = coffee.filter((item) => item.best === true)
          return {
            bestData: bestsellers,
            loading: false
          }
        })
      })
      .catch((res) => {
        console.log(res);
        this.setState({
          error: true,
          loading: false
        });
      })
  }

  renderItems = (items) => {
    // this.foo.bar = 0;
    return items.map((item) => {
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

  render(){

    const {bestData, error, loading} = this.state;
    const errorMsg = error ? <ErrorBlock/> : null;
    const spinner = loading ? <SpinnerLoad/> : null;
    const content = !(loading || error) ? this.renderItems(bestData) : null;

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
                  {errorMsg}
                  {spinner}
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