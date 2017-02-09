import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './components/searchForm';
import { search } from './actions';

const mapStateTopProps = ({ retailers }) => ({ retailers });

const mapDispatchToProps = dispatch => ({
  search: data => dispatch(search(data))
});

const App = ({ retailers, search }) => {
  return (
    <div className="App">
      <SearchForm retailers={retailers} search={search}/>
    </div>
  )
};


export default connect(mapStateTopProps, mapDispatchToProps)(App);
