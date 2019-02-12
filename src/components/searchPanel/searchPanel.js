import React, {Component} from 'react';

class SearchPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <div className="col-lg-5 offset-1">
        <form action="#" className="shop__search">
          <label className="shop__search-label" htmlFor="filter">Looking for</label>
          <input 
            onChange={this.onUpdateSearch}
            id="filter" 
            type="text" 
            placeholder="start typing here..." 
            className="shop__search-input" 
          />
        </form>
      </div>
    )
  }
}




export default SearchPanel