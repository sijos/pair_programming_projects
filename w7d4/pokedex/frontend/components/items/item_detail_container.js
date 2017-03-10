import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
  itemDetail: selectPokemonItem(state, ownProps.params.itemId)
};
};

export default connect(mapStateToProps)(ItemDetail);
