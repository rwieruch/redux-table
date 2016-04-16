import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import classNames from 'classnames';
import map from 'lodash/map';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';

const NAME_PROP = 'NAME';
const COMPLETED_PROP = 'COMPLETED';

function nameSort(items, sortProps) {
  return sortBy(items, NAME_PROP);
}

function completedSort(items, sortProps) {
  return sortBy(items, COMPLETED_PROP);
}

function patternFilter(pattern) {
  return (items) => {
    return filter(items, (item) => item.name.toLowerCase().indexOf(pattern) !== -1);
  }
}

function SortHeader({ text, property, setSort, sortProps }) {

  const isActiveSort = sortProps.property === property;

  const cellClass = classNames(
    'cell cell-header',
    {
      'is-active': isActiveSort,
    }
  );

  const iconClass = classNames(
    'fa',
    {
      'fa-chevron-up': isActiveSort && sortProps.reverse,
      'fa-chevron-down': isActiveSort && !sortProps.reverse,
    }
  );

  return (
    <div className={cellClass} onClick={setSort}>
      {text} <i className={iconClass} />
    </div>
  );
}

function NameCell({ name }) {
  return (
    <div className="cell">
      {name}
    </div>
  );
}

function CompletedCell({ completed }) {

  const iconClass = classNames({
    'fa fa-check': completed,
  });

  return (
    <div className="cell">
      <i className={iconClass} />
    </div>
  );
}

function Row({
  item,
  isSelected,
  selectItem
}) {

  const { name, completed } = item;

  const rowClass = classNames(
    'row',
    {
      'is-selected': isSelected
    }
  );

  const onSelect = () => selectItem(item.id);

  return (
    <div onClick={onSelect} className={rowClass}>
      <NameCell name={name} />
      <CompletedCell completed={completed} />
    </div>
  );
}

function HeaderRow({
  setSort,
  sortProps
}) {
  const onNameSort = (items) => { setSort(NAME_PROP, nameSort) };
  const onCompletedSort = (items) => { setSort(COMPLETED_PROP, completedSort) };

  return (
    <div className="row-header">
      <SortHeader text={"Name"} setSort={onNameSort} property={NAME_PROP} sortProps={sortProps} />
      <SortHeader text={"Completed"} setSort={onCompletedSort} property={COMPLETED_PROP} sortProps={sortProps} />
    </div>
  );
}

function Table({
  items,
  selectedItems,
  selectItem,
  sortProps,
  setSort,
}) {
  return (
    <div className="table">
      <HeaderRow setSort={setSort} sortProps={sortProps} />
      {map(items, (item, key) => {
        const isSelected = selectedItems && selectedItems.indexOf(item.id) !== -1;
        const rowProps = { key, item, selectItem, isSelected };
        return <Row { ...rowProps } />;
      })}
    </div>
  );
}

function mapStatsToProps(state) {
  const { pattern } = state.filter;
  const filterFn = pattern ? patternFilter(pattern) : (items) => items;

  const sortProps = state.sort;
  const { sortFn } = sortProps;

  const items = sortFn(filterFn(state.items));

  return {
    items,
    selectedItems: state.select.selectedItems,
    sortProps: state.sort
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectItem: bindActionCreators(actions.selectItem, dispatch),
    setSort: bindActionCreators(actions.setSort, dispatch),
  };
}

Table.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    completed: React.PropTypes.bool,
  })),
  selectedItems: React.PropTypes.arrayOf(React.PropTypes.string),
  selectItem: React.PropTypes.func,
  sortProps: React.PropTypes.shape({
    reverse: React.PropTypes.bool,
    sortFn: React.PropTypes.func,
    property: React.PropTypes.string,
  }),
  setSort: React.PropTypes.func,
};

const TableContainer = connect(mapStatsToProps, mapDispatchToProps)(Table);

export {
  TableContainer,
  Table,
};
