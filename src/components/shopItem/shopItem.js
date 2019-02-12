import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ShopItem extends Component {

  render() {
    const {id, name, url, country, price, isActive} = this.props;

    const content = (
        <>
          <img src={url} alt={name} />
          <div className="shop__item-title">{name}</div>
          {country ? <div className="shop__item-country">{country}</div> : ''}
          <div className="shop__item-price">{price}</div>
        </>
      )

    if (isActive) {
      return (
        <div className="shop__item">{content}</div>
      )
    }
    return(
      <Link to={`/our-coffe/${id}`} className="shop__item">
        {content}
      </Link>
    )
  }
}


export default ShopItem