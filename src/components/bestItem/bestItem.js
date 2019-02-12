import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class BestItem extends Component {

  render() {
    const {id, name, url, price} = this.props;

    return(
      <Link to={`/our-coffe/${id}`} 
        className="best__item">
        <img src={url} alt={name} />
        <div className="best__item-title">{name}</div>
        <div className="best__item-price">{price}</div>
      </Link>
    )
  }
}

export default BestItem