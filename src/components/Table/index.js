import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import classNames from 'classnames';
import map from 'lodash/map';

function HeaderCell({ text }) {
  return (
    <div className="cell">
      {text}
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
    'fa fa-check-square-o': completed,
    'fa fa-square-o': !completed,
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

}) {
  return (
    <div className="row-header">
      <HeaderCell text={"Name"} />
      <HeaderCell text={"Completed"} />
    </div>
  );
}

function Table({
  items,
  selectedItems,
  selectItem,
  // setFilter,
  // setSort,
  // setPaginate,
}) {
  return (
    <div className="table">
      <HeaderRow />
      {map(items, (item, key) => {
        const isSelected = selectedItems.indexOf(item.id) !== -1;
        const props = { key, item, selectItem, isSelected };
        return <Row { ...props } />;
      })}
    </div>
  );
}

function mapStatsToProps(state) {
  return {
    items: state.items,
    selectedItems: state.select.selectedItems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectItem: bindActionCreators(actions.selectItem, dispatch),
    // setFilter: bindActionCreators(actions.setFilter, dispatch),
    // setSort: bindActionCreators(actions.setSort, dispatch),
    // setPaginate: bindActionCreators(actions.setPaginate, dispatch),
  };
}

const TableContainer = connect(mapStatsToProps, mapDispatchToProps)(Table);

export {
  TableContainer,
  Table,
};
