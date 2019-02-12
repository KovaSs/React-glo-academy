import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import GotService from '../../../server/getService';

class CoffeItemPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      crop: true
    }
  }

  gotService = new GotService();

  componentDidMount() {
    const curId = this.props.match.params.id;
    this.gotService.loadJson().then(({coffee}) => {
      this.setState(() => {
        const index = coffee.findIndex(({id}) => +curId === +id);
        const item = coffee[index];
        return {
          data: item
        }
      })
    })
  }

  cropText = (text, letters = 200) => {
    return text.substring(0, letters) + '...'
  }

  unCropText = () => {
    this.setState({
      crop: false
    })
  }

  render() {
    const {name, country, url, price, description} = this.state.data;
    const desc = description ? description : '';

    return (
      <>
        <Header header={name}/>
  
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-1">
                <img className="shop__girl" src={url} alt="coffee_item" />
              </div>
              <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                <div className="shop__point">
                  <span>Country: </span>
                  {country}
                </div>
                <div className="shop__point" onClick={this.unCropText}>
                  <span>Description: </span>
                    {this.state.crop ? this.cropText(desc) : desc}
                </div>
                <div className="shop__point">
                  <span>Price: </span>
                  <span className="shop__point-price">{price}</span>
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


export default CoffeItemPage