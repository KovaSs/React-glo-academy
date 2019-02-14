import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import GotService from '../../../server/getService';
import SpinnerLoad from '../../spinner';
import ErrorBlock from '../../error';

class CoffeItemPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      crop: true,
      loading: true,
      error: false
    }
  }

  gotService = new GotService();

  componentDidMount() {
    const curId = this.props.match.params.id;
    this.gotService.loadJson()
      .then(({coffee}) => {
        this.setState(() => {
          const index = coffee.findIndex(({id}) => +curId === +id);
          const item = coffee[index];
          return {
            data: item,
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

  cropText = (text, letters = 200) => {
    return text.substring(0, letters) + '...'
  }

  unCropText = () => {
    this.setState({
      crop: false
    })
  }

  renderBlock = (item) => {
    // this.foo.bar = 0;
    const {country, url, price, description} = item;
    return (
      <>
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
              {this.state.crop ? this.cropText(description) : description}
          </div>
          <div className="shop__point">
            <span>Price: </span>
            <span className="shop__point-price">{price}</span>
          </div>
        </div>
      </>
    )
  }

  render() {
    const {name} = this.state.data;
    const title = name ? name : 'Coffee page';

    const {error, loading} = this.state;
    const errorMsg = error ? <ErrorBlock/> : null;
    const spinner = loading ? <SpinnerLoad /> : null;
    const content = !(loading || error) ? this.renderBlock(this.state.data) : null;

    return (
      <>
        <Header header={title}/>
  
        <section className="shop">
          <div className="container">
            <div className="row">
              {errorMsg}
              {spinner}
              {content}
            </div>
          </div>
        </section>
  
        <Footer/>
      </>
    )
    
  }
}


export default CoffeItemPage