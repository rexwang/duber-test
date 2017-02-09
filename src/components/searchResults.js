import React from 'react';

class SearchResults extends React.Component {
  render() {
    return (
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
    );
  }
}

export default SearchResults;
