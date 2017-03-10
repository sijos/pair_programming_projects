import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
  // return Object.keys(state.pokemon).map((id) => state.pokemon[id]);
};

export const selectPokemonItem = (state, itemId) => {
  let itemArray = state.pokemonDetail.items ? state.pokemonDetail.items : [];
  for (let i = 0; i < itemArray.length; i++) {
    if (itemArray[i].id === itemId) {
      return itemArray[i];
    }
  }
  return {};
};
//

// {
//   pokemon: {
//     1: {
//       id: 1,
//       name: /*...*/,
//       image_url: /*...*/
//     },
//     2: {
//       id: 2,
//       name: /*...*/,
//       image_url: /*...*/
//     },
//   }
// }
