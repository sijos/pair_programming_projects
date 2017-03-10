import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './items/item_detail_container';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <Router history ={hashHistory}>
        <Route path="/" component={PokemonIndexContainer}>
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer}>
            <Route path="items/:itemId" component={ItemDetailContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <IndexRoute component={PokemonIndexContainer} />
