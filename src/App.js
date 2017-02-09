import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm';
import SearchResults from './components/searchResults';
import { search } from './actions';

const mapStateTopProps = ({ retailers }) => ({ retailers });

const mapDispatchToProps = dispatch => ({
  search: data => dispatch(search(data))
});

const App = ({ retailers, search }) => {
  return (
    <div className="App">
      <SearchForm search={search}/>
      <SearchResults retailers={retailers}/>
    </div>
  )
};


export default connect(mapStateTopProps, mapDispatchToProps)(App);
