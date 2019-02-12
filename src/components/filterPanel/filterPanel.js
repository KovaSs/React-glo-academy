import React, {Component} from 'react';



class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'brazil', label: 'Brazil'},
      {name: 'kenya', label: 'Kenya'},
      {name: 'columbia', label: 'Columbia'}
    ]
  }


  render() {

    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const clazz = active ? 'active' : '';
      return (
        <button
          key={name}
          type='button'
          className={`shop__filter-btn ${clazz}`}
          onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      )
    })

    return (
      <div className="col-lg-5">
        <div className="shop__filter">
          <div className="shop__filter-label">Or filter</div>
          <div className="shop__filter-group">
            {buttons}
          </div>
        </div>
      </div>
    )
  }
}

export default FilterPanel