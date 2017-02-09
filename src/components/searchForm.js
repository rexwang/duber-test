import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 50
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <div>
        <form ref="searchForm">
          <input type="text" name="zipCode" placeholder="Enter your zip code" onChange={this.handleUserInput}/>
          <input type="number" name="money" placeholder="How much?" value={this.state.money} onChange={this.handleUserInput}/>
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <div>
          {this.props.retailers ? (
            <ul>
              {this.props.retailers.map(retailer => {
                return (
                  <li key={retailer.id}>{retailer.name} {retailer.distance}</li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchForm;
