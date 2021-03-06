import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestOnePokemon } from './actions/pokemon_actions';
import { selectPokemonItem } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
});

window.requestOnePokemon = requestOnePokemon;
window.selectPokemonItem = selectPokemonItem;
