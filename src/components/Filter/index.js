import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

function Filter({
  setFilter,
  pattern
}) {
  const onFilterChange = (event) => setFilter(event.target.value);

  return (
    <div className="filter">
      <input onChange={onFilterChange} value={pattern} placeholder={'Search'} />
    </div>
  );
}

function mapStatsToProps(state) {
  return {
    pattern: state.filter.pattern,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: bindActionCreators(actions.setFilter, dispatch),
  };
}

Filter.propTypes = {
  pattern: React.PropTypes.string,
  setFilter: React.PropTypes.func,
};

const FilterContainer = connect(mapStatsToProps, mapDispatchToProps)(Filter);

export {
  FilterContainer,
  Filter,
};
