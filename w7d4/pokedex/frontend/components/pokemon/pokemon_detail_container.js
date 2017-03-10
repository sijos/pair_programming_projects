import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = (dispatch) => ({
  requestOnePokemon: id => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
