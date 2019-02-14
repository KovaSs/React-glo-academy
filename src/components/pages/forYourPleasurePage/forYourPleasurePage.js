import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';

import coffeGirl from '../../../images/coffee-goods.png';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';

import ShopItem from '../../shopItem';
import GotService from '../../../server/getService';
import SpinnerLoad from '../../spinner';
import ErrorBlock from '../../error';


class ForYourPleasurePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopData: null,
      loading: true,
      error: false
    }
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.loadJson()
      .then(({goods}) => {
        this.setState(() => {
          return {
            shopData: goods,
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
    return items.map((item) => {
      return (
        <ShopItem
          isActive={true}
          id={item.id}
          key={item.id}
          name={item.name}
          url={item.url}
          price={item.price}
        />
      )
    })
  }

  render() {

    const {shopData, error, loading} = this.state;
    const errorMsg = error ? <ErrorBlock/> : null;
    const spinner = loading ? <SpinnerLoad /> : null;
    const content = !(loading || error) ? this.renderItems(shopData) : null;

    return (
      <>
        <Header header='For your pleasure'/>
          <section className="shop">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 offset-2">
                  <img className="shop__girl" src={coffeGirl} alt="girl" />
                </div>
                <div className="col-lg-4">
                  <div className="title">About our goods</div>
                  <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                  <div className="shop__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                    is song that held help face.
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="shop__wrapper">
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


export default ForYourPleasurePage