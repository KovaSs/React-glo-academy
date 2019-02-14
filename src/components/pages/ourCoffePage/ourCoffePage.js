import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import coffeGirl from '../../../images/coffee_girl.jpg';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import ShopItem from '../../shopItem';
import GotService from '../../../server/getService';
import SearchPanel from '../../searchPanel';
import FilterPanel from '../../filterPanel';
import SpinnerLoad from '../../spinner';
import ErrorBlock from '../../error';

class OurCoffePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopData: null,
      term: '',
      filter: 'all',
      loading: true,
      error: false
    }
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.loadJson()
      .then(({coffee}) => {
        this.setState(() => {
          return {
            shopData: coffee,
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

  renderItems = (data) => {
    return data.map((item) => {
      return (
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          url={item.url}
          price={item.price}
          country={item.country}
        />
      )
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  searchPost = (items, term) => {
    
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.props.name.toLowerCase().indexOf(term) > -1;
    })
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  filterPosts = (items, filter) => {
    switch (filter) {
      case 'brazil':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      case 'kenya':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      case 'columbia':
        return items.filter((item) => {
          return item.props.country.toLowerCase() === filter;
        });
      default: 
        return items;
    }
  }

  render() {
    const {shopData, term, filter, error, loading} = this.state;
    const errorMsg = error ? <ErrorBlock/> : null;
    const spinner = loading ? <SpinnerLoad /> : null;
    const content = !(loading || error) ? this.filterPosts(this.searchPost((this.renderItems(shopData)), term), filter) : null;

    return (
      <>
        <Header header='Our coffe'/>

        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={coffeGirl} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
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
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <FilterPanel 
                filter={filter}
                onFilterSelect={this.onFilterSelect}
              />
            </div>
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


export default OurCoffePage